import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface CreateThreadRequest {
  action: 'create_thread';
}

interface SendMessageRequest {
  action: 'send_message';
  threadId: string;
  message: string;
}

interface GetMessagesRequest {
  action: 'get_messages';
  threadId: string;
}

type RequestBody = CreateThreadRequest | SendMessageRequest | GetMessagesRequest;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const apiKey = Deno.env.get('OPENAI_API_KEY');
    const assistantId = Deno.env.get('OPENAI_ASSISTANT_ID');

    if (!apiKey || !assistantId) {
      throw new Error('OpenAI credentials not configured');
    }

    const body: RequestBody = await req.json();

    if (body.action === 'create_thread') {
      const threadResponse = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
        },
      });

      if (!threadResponse.ok) {
        throw new Error('Failed to create thread');
      }

      const threadData = await threadResponse.json();
      
      return new Response(
        JSON.stringify({ threadId: threadData.id }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (body.action === 'send_message') {
      await fetch(`https://api.openai.com/v1/threads/${body.threadId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
        },
        body: JSON.stringify({
          role: 'user',
          content: body.message,
        }),
      });

      const runResponse = await fetch(
        `https://api.openai.com/v1/threads/${body.threadId}/runs`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v2',
          },
          body: JSON.stringify({
            assistant_id: assistantId,
          }),
        }
      );

      if (!runResponse.ok) {
        throw new Error('Failed to run assistant');
      }

      const runData = await runResponse.json();
      const runId = runData.id;

      let runStatus = 'queued';
      let attempts = 0;
      const maxAttempts = 30;

      while ((runStatus === 'queued' || runStatus === 'in_progress') && attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const statusResponse = await fetch(
          `https://api.openai.com/v1/threads/${body.threadId}/runs/${runId}`,
          {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'OpenAI-Beta': 'assistants=v2',
            },
          }
        );

        const statusData = await statusResponse.json();
        runStatus = statusData.status;
        attempts++;
      }

      const messagesResponse = await fetch(
        `https://api.openai.com/v1/threads/${body.threadId}/messages`,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v2',
          },
        }
      );

      if (!messagesResponse.ok) {
        throw new Error('Failed to fetch messages');
      }

      const messagesData = await messagesResponse.json();
      const lastMessage = messagesData.data[0];

      if (lastMessage && lastMessage.role === 'assistant') {
        return new Response(
          JSON.stringify({
            id: lastMessage.id,
            content: lastMessage.content[0].text.value,
          }),
          {
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          }
        );
      }

      throw new Error('No assistant response found');
    }

    if (body.action === 'get_messages') {
      const messagesResponse = await fetch(
        `https://api.openai.com/v1/threads/${body.threadId}/messages`,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v2',
          },
        }
      );

      if (!messagesResponse.ok) {
        throw new Error('Failed to fetch messages');
      }

      const messagesData = await messagesResponse.json();
      
      return new Response(
        JSON.stringify(messagesData),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    throw new Error('Invalid action');

  } catch (error) {
    console.error('Error:', error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'An error occurred',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});