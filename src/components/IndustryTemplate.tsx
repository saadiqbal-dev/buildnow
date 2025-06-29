import React from "react";

interface BulletPoint {
  title: string;
  description: string;
}

interface Testimonial {
  imageSrc: string;
  description: string;
}

interface IndustryData {
  industry: string;
  title: string;
  subtitle: string;
  videoSrc: string;
  mainSection: {
    title: string;
    subtitle: string;
    imageSrc: string;
    bulletPoints: BulletPoint[];
    sideImage: string;
  };
  ctaSection: {
    title: string;
    description: string;
    buttonText: string;
  };
  secondarySection: {
    title: string;
    subtitle: string;
    imageSrc: string;
    bulletPoints: BulletPoint[];
    sideImage: string;
  };
  testimonialsSection: {
    title: string;
    subtitle: string;
    buttonText: string;
    testimonials: Testimonial[];
  };
  finalCta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

interface IndustryTemplateProps {
  data: IndustryData;
}

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
  const renderBulletPoint = (bullet: BulletPoint, index: number) => (
    <div key={index} className="flex-1 min-w-[250px] max-w-full">
      <h5 className="text-lg font-semibold text-gray-900 my-2">
        {bullet.title}
      </h5>
      <p className="text-gray-600 font-normal text-sm leading-relaxed">
        {bullet.description}
      </p>
    </div>
  );

  return (
    <div className="container max-w-6xl mx-auto px-5 py-10">
      <p className="text-xl font-semibold font-inter text-gray-900 uppercase mb-4">
        Industry
      </p>
      <div className="main-head-continaer mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h3>
        <p className="text-gray-600 font-normal text-base leading-relaxed max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      {data.videoSrc && (
        <div className="video-container mb-12">
          <div className="text-center">
            <video
              src={data.videoSrc}
              className="rounded-lg w-full max-w-4xl h-auto shadow-lg"
            />
          </div>
        </div>
      )}

      <div className="picture-section mb-12">
        <div className="flex flex-col gap-2 pb-[48px]">
          <h3 className="text-4xl text-center font-light text-gray-900 mb-4">
            {data.mainSection.title}
          </h3>
          <p className="text-gray-600 text-center font-normal mx-auto text-sm leading-relaxed max-w-2xl">
            {data.mainSection.subtitle}
          </p>
        </div>

        {data.mainSection.imageSrc && (
          <div className="picture my-6">
            <div className="text-center">
              <img
                src={data.mainSection.imageSrc}
                alt=""
                className="w-full max-w-4xl rounded-lg h-auto shadow-lg"
              />
            </div>
          </div>
        )}

        <div className="points flex flex-wrap gap-6 py-12 justify-between">
          <div className="flex-1 max-w-2xl flex flex-col gap-6">
            {data.mainSection.bulletPoints.map((bullet, index) =>
              renderBulletPoint(bullet, index)
            )}
          </div>
          {data.mainSection.sideImage && (
            <div className="flex-1 max-w-md">
              <img
                src={data.mainSection.sideImage}
                alt="Bullet Image"
                className="w-full max-w-md rounded-lg h-auto shadow-lg"
              />
            </div>
          )}
        </div>

        <div className="colored-background bg-[#F4F2EC] text-black py-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-6xl mx-auto px-5">
            <h3 className="text-5xl font-bold text-black mb-4">
              {data.ctaSection.title}
            </h3>
            <p className="text-base font-normal leading-relaxed mb-6 max-w-2xl">
              {data.ctaSection.description}
            </p>
            <button className="rounded-lg border-none text-green-900 bg-white px-6 py-3 cursor-pointer text-base font-semibold hover:bg-green-50 transition-colors">
              {data.ctaSection.buttonText}
            </button>
          </div>
        </div>

        <div className="picture2 bg-gray-50 py-10 mb-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-6xl mx-auto px-5">
            <div className="content2 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {data.secondarySection.title}
              </h2>
              <p className="text-gray-600 font-normal text-base leading-relaxed max-w-2xl">
                {data.secondarySection.subtitle}
              </p>
            </div>

            {data.secondarySection.imageSrc && (
              <div className="image2 mb-6">
                <img
                  src={data.secondarySection.imageSrc}
                  alt=""
                  className="w-full max-w-4xl rounded-lg h-auto shadow-lg"
                />
              </div>
            )}

            <div className="points2 flex flex-wrap gap-6 justify-between">
              <div className="flex-1 max-w-2xl flex flex-col gap-6">
                {data.secondarySection.bulletPoints.map((bullet, index) =>
                  renderBulletPoint(bullet, index)
                )}
              </div>
              {data.secondarySection.sideImage && (
                <div className="flex-1 max-w-md">
                  <img
                    src={data.secondarySection.sideImage}
                    alt="Bullet Image"
                    className="w-full max-w-md rounded-lg h-auto shadow-lg"
                  />
                </div>
              )}
            </div>

            <div className="final mt-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {data.finalCta.title}
                </h1>
                <p className="text-gray-600 font-normal text-sm leading-relaxed mb-6">
                  {data.finalCta.description}
                </p>
                <button className="rounded-lg border-none text-green-900 bg-white px-6 py-3 cursor-pointer text-base font-semibold shadow-md hover:bg-green-50 transition-colors">
                  {data.finalCta.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
