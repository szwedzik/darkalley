import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DarkAlley.pl - Dotacje",
};

export default function Donate() {
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

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                  Wsparcie serwera
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Dziękujemy za zainteresowanie oraz wsparcie naszego serwera.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/images/donate.png"
            alt="Wsparcie"
            style={{ filter: "grayscale(0.5) brightness(0.6) blur(2px)" }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center p-3">
        <div className="w-full max-w-screen-xl">
          <div className="flex flex-col w-full rounded-lg p-2">
            <div className="flex flex-col lg:flex-row backdrop:blur-lg shadow-2xl p-2 mt-2 rounded-lgr">
              <div className="flex flex-col gap-2 text-gray-100">
                <span className="pr-2 text-sm">
                  Wspieranie naszego projektu jest całkowicie dobrowolne.
                  Wszelkie darowizny są wykorzystywane wyłącznie na opłacenie
                  wynajmu serwera, nowych modów, niezbędnej konserwacji i zmian.
                  Darowizny nie są wykorzystywane przez nikogo z zespołu do
                  celów osobistych.
                </span>
                <span className="pr-2 mt-2 text-sm">
                  Darowizna w żaden sposób nie wpływa na rozgrywkę na serwerze.
                  Wszyscy gracze są traktowani w ten sam sposób
                </span>
                <span className="pr-2 text-sm">
                  Każda osoba, która przekaże darowniznę, otrzyma rangę &quot;VIP&quot; na
                  serwerze Discord na okres 2-miesięcy, dostęp do specjalnej
                  grupy, oraz ma czynny wpływ na rozwiązania wprowadzane na
                  serwerze.
                </span>

                <p className="text-sm mb-4">
                  Możesz nas wesprzeć za pomocą PayPal lub skorzystać z innych
                  metod płatności, takich jak Blik, Przelew czy Paysafecard.
                </p>
                <div className="flex justify-center gap-4 mb-6">
                  <a
                    href="https://www.paypal.com/paypalme/AdrixMED"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PayPal
                  </a>
                  <a
                    href="https://tipply.pl/@DarkAlley"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tipply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-3 -z-0">
        <iframe
          id="myIframe"
          src="https://widgets.tipply.pl/TIPS_GOAL/fc810a83-a4d3-47be-b199-03ae0c564e13/GOAL/b560f34d-aefb-4e2a-b975-748be79d2fed"
          width="40%"
          height="350px"
          frameBorder="0"
          allowFullScreen
          title="Support Widget"
          className="mx-auto"
          style={{ top: "-175px" }}
        />
      </div>
    </main>
  );
}
