/**
 * Base HTML layout template
 * Provides the fundamental HTML structure with SEO meta tags
 */

export function baseLayout({
  title,
  description,
  canonical,
  keywords = '',
  ogImage = '/assets/images/og-default.jpg',
  structuredData = [],
  content,
  additionalHead = ''
}) {
  const fullTitle = title.includes('Medtransic') ? title : `${title} | Medtransic`;
  const ogTitle = title.includes('Medtransic') ? title : `${title} - Medtransic Medical Billing Services`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Primary Meta Tags -->
  <title>${fullTitle}</title>
  <meta name="title" content="${fullTitle}">
  <meta name="description" content="${description}">
  ${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
  <link rel="canonical" href="${canonical}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${ogTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${ogImage}">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${canonical}">
  <meta name="twitter:title" content="${ogTitle}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${ogImage}">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/medtransic-logomark1.svg">

  <!-- Styles -->
  <link rel="stylesheet" href="/assets/css/styles.css">

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  ${structuredData.length > 0 ? structuredData.map(data => `
  <script type="application/ld+json">
${JSON.stringify(data, null, 2)}
  </script>`).join('') : ''}

  ${additionalHead}
</head>
<body class="antialiased">
  ${content}
</body>
</html>`;
}
