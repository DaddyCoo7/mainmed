import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const EHRLogosSection: React.FC = () => {
  const ehrs = [
    {
      name: 'Amazing Charts',
      logo: '/images/ehr-logos/amazcharts.jpg',
    },
    {
      name: 'eClinicalWorks',
      logo: '/images/ehr-logos/ecw.jpg',
    },
    {
      name: 'ICANotes',
      logo: '/images/ehr-logos/icanotes.jpg',
    },
    {
      name: 'Medisoft',
      logo: '/images/ehr-logos/medisoftl.jpg',
    },
    {
      name: 'NextGen Healthcare',
      logo: '/images/ehr-logos/nextgen.jpg',
    },
    {
      name: 'Epic',
      logo: '/images/ehr-logos/epicl.jpg',
    },
    {
      name: 'AdvancedMD',
      logo: '/images/ehr-logos/advancemd.jpg',
    },
    {
      name: 'CareCloud',
      logo: '/images/ehr-logos/carecloud.jpg',
    },
    {
      name: 'OfficeAlly',
      logo: '/images/ehr-logos/officeally.png',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Some EHRs We Work With
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Seamlessly integrated with leading electronic health record systems
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {ehrs.map((ehr, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8 h-40 flex items-center justify-center transition-transform hover:scale-105">
                  <img
                    src={ehr.logo}
                    alt={`${ehr.name} logo`}
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EHRLogosSection;
