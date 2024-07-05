"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import StatusServer from "@/components/serverStatus/serverStatus";
import axios from "axios";
import Image from "next/image";

interface Queue {
  active: boolean;
  size: number;
}

interface Status {
  players: number;
  queue: Queue;
  slots: number;
}

interface ServerInfo {
  name: string;
  online: boolean;
  offline: boolean;
  status: Status;
}

const Countdown = dynamic(() => import("@/components/countdown/coutndown"), {
  ssr: false,
});

const fetchServerInfo = async (): Promise<ServerInfo> => {
  const response = await axios.get("/api/v1/status");
  return response.data;
};

const targetDate = new Date("2024-07-12T18:00:00Z");

const checkIfCountdownFinished = (targetDate: Date): boolean => {
    const currentDate = new Date();
    return currentDate >= targetDate;

}

const Home = () => {
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
  const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null);

  useEffect(() => {
    const getServerInfo = async () => {
      try {
        const data = await fetchServerInfo();
        setServerInfo(data);
      } catch (error) {
        console.error("Error fetching server info:", error);
      }
    };

    getServerInfo();
  }, []);

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
            {checkIfCountdownFinished(targetDate) ? (
              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="text-center mt-10">
                    <StatusServer serverInfo={serverInfo} />
                  </div>
                </div>
              </div>
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
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={
              checkIfCountdownFinished(targetDate) ? "/images/home.webp" : "/images/countdown.webp"
            }
            alt="countdown image"
            width={500}
            height={500}
            quality={75}
            loading="eager"
            style={{ filter: "grayscale(0.5) brightness(0.6) blur(2px)" }}
          />
        </div>
      </div>
      {checkIfCountdownFinished(targetDate) ? (
        <></>
      ) : (
        <>
          <div className="w-full flex justify-center p-3">
            <div className="w-full max-w-screen-xl">
              <div className="flex flex-col w-full rounded-lg p-2">
                <div className="flex flex-col lg:flex-row backdrop-blur-lg shadow-2xl p-2 mt-2 rounded-lg justify-center">
                  <div className="flex flex-col gap-2 items-center">
                    <span className="text-2xl max-md:text-1xl font-bold text-center text-gray-100">
                      DRUGI SEZON DARKALLEY
                    </span>
                    <span className="pr-2 text-gray-300">
                      Lloyd Holloway, pochodzący z Cassandry miasta na północy
                      jednej z wysp Oceanu Północnego - Alterii, przekazuje
                      swoją historię dla młodych ludzi, którzy nie rozumieją,
                      dlaczego życie jest takie mroczne. W roku 2022 wybuchła
                      wojna, nuklearne bomby zniszczyły świat, a ludzie musieli
                      szukać schronienia. Bunkry stały się ostatnią nadzieją na
                      przetrwanie. W nowym świecie powstały różne społeczności,
                      każda z innym podejściem do przetrwania. W 2039 roku Henry
                      i jego grupa opuścili bunkier, odkrywając tajemnicze
                      istoty. W 2058 roku plotki o bezpiecznej Osadzie Eden
                      potwierdziły się. Lloyd, wiedząc, że kończy mu się czas,
                      przekazuje informację o Edenie jako ostatni akt swojego
                      życia.
                      <p className="mt-2 text-sm text-gray-400 text-center">
                        “Jeśli to czytasz, kieruj się tam – to bezpieczne
                        miejsce, które pomoże Ci przetrwać w tym nowym, surowym
                        świecie…”
                      </p>
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
                    <div className="rounded-lg" style={{ aspectRatio: "16/9" }}>
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
