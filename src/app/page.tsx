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
      <div
        className="w-full shadow-2xl"
        style={{
          backgroundImage: "url('/images/countdown.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-full py-20"
          style={{ backdropFilter: "grayscale(.5) blur(5px) brightness(.6)" }}
        >
          <div className="w-full flex justify-center p-3">
            <div className="w-full max-w-screen-xl">
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-center">
                    Wrota zostaną otwarte za
                  </h1>
                </div>
              </div>
              <div className="pt-3">
                <Countdown date={targetDate} onFinish={handleCountdownFinish} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-3">
        <div className="w-full max-w-screen-xl">
          <div className="flex flex-col w-full rounded-lg p-2">
            <div className="flex flex-col lg:flex-row backdrop:blur-lg shadow-2xl p-2 mt-2 rounded-lg justify-center">
              <div className="flex flex-col gap-2 items-center">
                <span className="text-2xl max-md:text-1xl font-bold text-center">
                  DARKALLEY 2.0
                </span>
                <span className="pr-2">
                  Dnia 12.07.2024 o godzinie 20:00 odbędzie się start drugiego
                  sezonu!
                </span>
                <a target="_blank" href="#">
                  Podsumowanie Community Meetingu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg shadow-2xl">
        <div className="w-full flex justify-center p-3">
          <div className="w-full max-w-screen-xl">
            <div className="flex flex-col w-full rounded-lg p-2">
              <div className="flex flex-col backdrop:blur-lg shadow-2xl mt-2 rounded-lg justify-center">
                <div className="rounded-lg" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    className="rounded-lg"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Cuvnml6iOvc?si=IuoJR0_O58KLcRua"
                    title="DarkAlley Sezon 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
