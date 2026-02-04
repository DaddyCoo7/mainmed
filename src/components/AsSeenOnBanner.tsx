import React from 'react';

const AsSeenOnBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 py-1 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-8 md:gap-12">
          <img
            src="/usanewssmall.png"
            alt="As Seen On USA News - Medtransic Featured Medical Billing Provider"
            className="h-26 md:h-36 w-auto object-contain"
            loading="lazy"
          />
          <img
            src="/digitaljournal.png"
            alt="As Seen On Digital Journal - Medtransic Featured Medical Billing Provider"
            className="h-26 md:h-36 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AsSeenOnBanner;
