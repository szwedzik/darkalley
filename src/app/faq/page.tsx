import type { Metadata } from "next";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "Jak wejść na serwer?",
    answer:
      "Wystarczy że wyszukasz nasz serwer w launcherze DayZ po danych: DarkAlley [RP][PL] IP: 45.145.40.36:2302",
  },
  {
    id: 2,
    question: "Czy potrzebuję zdać WL?",
    answer:
      "Tak wymagana jest u nas WL, trzeba wysłać podanie z potrzebnymi danymi oraz odbyć krótką rozmowę głosową",
  },
  {
    id: 3,
    question: "Gdzie znajdę lore?",
    answer: "Lore znajdziesz tutaj: https://darkalley.pl/lore",
  },
  {
    id: 4,
    question: "Gdzie znajdę regulamin serwera?",
    answer: "Regulamin znajdziesz tutaj: https://darkalley.pl/rules",
  },
  {
    id: 5,
    question: "Kiedy występują restarty serwera?",
    answer:
      "Restarty serwera odbywają się co 4 godziny: 00:00, 04:00, 08:00, 12:00, 16:00, 20:00.",
  },
  {
    id: 6,
    question: "Jak użyć komend narracyjnych?",
    answer: "Naciśnij klawisz ENTER i wpisz !me {czynność} lub !do {opis}",
  },
  {
    id: 7,
    question: "Co w przypadku znalezienia błędu, buga?",
    answer:
      "Możesz skontaktować się z nami wysyłając ticket z nagraniem lub screenem na naszym discordzie - Dark Alley RP🎟『stwórz-ticket』",
  },
  {
    id: 8,
    question: "Nie mogę wejść na serwer, wyskakuje błędny nick",
    answer:
      "W ustawieniach launchera musisz wpisać Imię i Nazwisko postaci, nie może być nick Survivor W przypadku problemów skontaktuj się z nami.",
  },
  {
    id: 9,
    question: "Jakie przywileje daje wsparcie serwera?",
    answer:
      "Zyskujesz dostęp do grup VIPowskich na discordzie, możesz brać czynny udział w ważnych decyzjach podejmowanych na serwerze.",
  },
  {
    id: 10,
    question: "Nie mogę wyszukać serwera na liście",
    answer:
      "Spróbuj skorzystać z zewnętrznego launchera DZSA launcher i wtedy wyszukać nasz serwer.",
  },
];

export const metadata: Metadata = {
  title: "DarkAlley.pl - FAQ",
};

export default function Faq() {
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
                  FAQ
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania
                  przez naszą społeczność.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/images/faq.webp"
            alt="faq"
            width={500}
            height={500}
            quality={75}
            loading="eager"
            style={{ filter: "grayscale(0.5) brightness(0.6) blur(2px)" }}
          />
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl divide-y divide-gray-300/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-300">
            Najczęściej zadawane pytania
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-300/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-300 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-300">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
