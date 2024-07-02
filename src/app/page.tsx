"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Countdown = dynamic(() => import("@/components/Countdown/Coutndown"), {
  ssr: false,
});

const targetDate = new Date("2024-07-12T20:00:00Z");

const Home = () => {
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  const handleCountdownFinish = () => {
    setIsCountdownFinished(true);
  };

  return (
      <main className="bg-zinc-900">
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-zinc-900 lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>
              {isCountdownFinished ? (
                  <></>
              ) : (
                  <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                      <div className="text-center mt-10">
                        <h1 className="text-2xl font-bold text-center pb-2">
                          Wrota zostaną otwarte za
                        </h1>
                        <Countdown
                            date={targetDate}
                            onFinish={handleCountdownFinish}
                        />
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                src="/images/countdown.png"
                alt="countdown image"
                style={{ filter: 'grayscale(0.5) brightness(0.6) blur(2px)' }}
            />
          </div>
        </div>
        {isCountdownFinished ? (
            <></>
        ) : (
            <>
              <div className="w-full flex justify-center p-3">
                <div className="w-full max-w-screen-xl">
                  <div className="flex flex-col w-full rounded-lg p-2">
                    <div className="flex flex-col lg:flex-row backdrop-blur-lg shadow-2xl p-2 mt-2 rounded-lg justify-center">
                      <div className="flex flex-col gap-2 items-center">
                    <span className="text-2xl max-md:text-1xl font-bold text-center">
                      DARKALLEY 2.0
                    </span>
                        <span className="pr-2">
                      Dnia 12.07.2024 o godzinie 20:00 odbędzie się start
                      drugiego sezonu!
                    </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-lg shadow-2xl">
                <div className="w-full flex justify-center p-3">
                  <div className="w-full max-w-screen-xl">
                    <div className="flex flex-col w-full rounded-lg p-2">
                      <div className="flex flex-col backdrop-blur-lg shadow-2xl mt-2 rounded-lg justify-center">
                        <div className="rounded-lg" style={{ aspectRatio: '16/9' }}>
                          <iframe
                              className="rounded-lg"
                              width="100%"
                              height="100%"
                              src="https://www.youtube.com/embed/Cuvnml6iOvc?si=IuoJR0_O58KLcRua"
                              title="DarkAlley Sezon 2"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
        )}
      </main>
  );
};

export default Home;