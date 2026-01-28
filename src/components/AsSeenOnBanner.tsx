import React from 'react';

const AsSeenOnBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 py-1 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <img
            src="/usanewssmall.png"
            alt="As Seen On USA News - Medtransic Featured Medical Billing Provider"
            className="h-20 md:h-28 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AsSeenOnBanner;
