import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DarkAlley.pl - Regulamin",
};

const rules = [
  {
    title: "§1. Postanowienia ogólne",
    content: [
      [
        "1. Głos musi być zrozumiały dla innych graczy, dlatego wymagany jest sprawny mikrofon oraz odpowiednio działające oprogramowanie i sprzęt. Problemy techniczne podczas gry są odpowiedzialnością gracza.",
      ],
      [
        "2. W zależności od postaci, grający musi dobrać odpowiedni ton głosu. Dziecko nie może mówić głosem dorosłego i vice versa.",
      ],
      [
        "3. Sytuacje w grze są różnorodne, dlatego nie wszystkie zasady da się zawrzeć w regulaminie. Administracja zastrzega sobie prawo do indywidualnego podejścia do każdego przypadku.",
      ],
      [
        "4. Grający zobowiązany jest do przestrzegania podstawowych zasad RolePlay oraz zasad społeczności.",
      ],
      [
        "5. Bezwarunkowy zakaz używania obraźliwych, rasistowskich, faszystowskich zwrotów oraz zakaz używania słów, które mogą być uznane za obraźliwe lub nieodpowiednie. (N-wordy, p-wordy, c-wordy)! Skutkuje automatycznym permem.",
      ],
      [
        "6. Naruszenie regulaminu może skutkować tymczasowym lub permanentnym odebraniem dostępu do serwera. Administracja ma prawo zablokować użytkownika bez podania przyczyny. Decyzja administracji jest ostateczna i nie podlega dyskusji.",
      ],
      [
        "7. Zabrania się korzystania z jakichkolwiek skryptów, cheatów, exploitów, loot-cyclingu, bugów dających przewagę w grze.",
      ],
      [
        "8. Każdy, kto zauważy łamanie regulaminu, ma obowiązek zgłosić to administracji.",
      ],
      [
        "9. Komunikacja poza grą, używanie zewnętrznych komunikatorów (Discord) oraz oglądanie streamów innych graczy w czasie gry jest zabronione.",
      ],
      [
        "10. Utracone przedmioty należy zgłaszać na discordzie wraz ze zdjęciem/nagraniem i opisem zdarzenia. Brak materiałów dowodowych skutkuje automatycznym zamknięciem ticketa.",
      ],
      [
        "11. Zakazane jest wykonywanie agresywnych akcji 10 minut przed zaplanowanym restartem oraz przez 5 minut po restarcie/crashu.",
      ],
      ["12. Czat w grze służy tylko do komunikacji OOC."],
    ],
  },
  {
    title: "§2. Gra",
    content: [
      ["1. Poszanowanie życia jest podstawową zasadą na naszym serwerze."],
      ["2. Zabijanie innych graczy powinno być ostatecznością."],
      ["3. Zakaz noszenia czerwonych opasek, oraz opasek innych grup."],
      [
        "4. Nawet w przypadku łamania regulaminu, nie wychodź z roli postaci. Zgłaszaj nieprawidłowości w tickecie lub na czacie in-game po zakończeniu akcji RP.",
      ],
      ["5. Zakaz napastowania, gwałtu i napaści seksualnych na innych graczy."],
      [
        "6. Gracz, który rozłączy się podczas prowadzenia akcji RP z powodów niezależnych od niego, powinien udokumentować powód na kanale #crash na Discordzie. Brak dowodów na opuszczenie akcji RP jest traktowany jako postawa CL.",
      ],
      [
        "7. Po powrocie na serwer, gracz jest zobowiązany jak najszybciej wrócić do poprzedniej akcji RP.",
      ],
      [
        "8. Osoby podejmujące agresywne akcje RP muszą posiadać nagranie sytuacji ze swojej perspektywy.",
      ],
      [
        "9. Zakaz KOS. W przypadku akcji z bandytami (czerwone opaski) w ich kierunku nie obowiązuje zakaz KOS ani żadne zasady poszanowania życia.",
      ],
      [
        "10. Zakaz porywania graczy bez odpowiedniego uzasadnienia fabularnego.",
      ],
      [
        "11. Gracz może uśmiercić postać innego gracza (FCK) po napisaniu odpowiedniego ticketa, gdzie przedstawi dowody i administracja wyda decyzję.",
      ],
      [
        "12. Gracz nie może przetrzymywać innych graczy bez uzasadnionego podłoża fabularnego.",
      ],
      ["13. Ograniczenie wulgaryzmów na czacie OOC."],
      [
        "14. Zakaz używania zwrotów niezgodnych z lore gry, mogących zakłócić immersję innych graczy.",
      ],
      [
        "15. Rozpoznawanie gracza jest możliwe tylko na podstawie cech zewnętrznych postaci oraz głosie (tzn: po twarzy, wyglądzie, ubiorze (w tym pojedyncze części garderoby), opasce).",
      ],
      [
        "16. Gracze mogą korzystać z modulatorów na zasadzie stałej zmiany głosu przez całe życie postaci. Zakazuje się komputerowego modyfikowania głosu na potrzeby pojedynczych interakcji.",
      ],
      ["17. Zakaz rozkładania dużych obiektów we wnętrzach budynków."],
      ["18. Zakaz rozkładania mebli poza własną bazą."],
      ["19. Gracz odpowiada za zabezpieczenie swojej bazy i mienia."],
      [
        "20. Zakaz podawania jedzenia, picia i leków bez zgody innej osoby, chyba że wątek RP do tego prowadzi.",
      ],
      ["21. Pozostawienie postaci AFK na serwerze jest na własne ryzyko."],
      ["22. NPC traktowane są jak inni gracze."],
      [
        '23. Status "NIE ŻYJESZ" kończy aktualną akcję RP. Gracz zapomina o tej akcji.',
      ],
      ['24. Po statusie "NIE ŻYJESZ" gracz nie może wrócić do swojego ciała.'],
      ["25. Gracz po CK nie może dołączyć do tej samej grupy przez 14 dni."],
      ["26. Administracja usuwa bazy nieaktywne przez ponad 14 dni."],
      [
        "27. Problemy z pojazdami rozpatrywane są tylko przez ticketa z nagraniem.",
      ],
      ["28. Zakaz VDM i rozjeżdżania większych grup zarażonych."],
      ["29. Administracja nie odpowiada za niezabezpieczone pojazdy."],
      ["30. Zakaz nieimmersyjnego okradania samochodów."],
      ["31. Zakaz nieimmersyjnego poruszania się pojazdami."],
      [
        "32. Taranowanie/spychanie/blokowanie pojazdów możliwe jest tylko w ruchu.",
      ],
      [
        "33. Zabronione jest budowanie bazy w odległości mniejszej niż 500 metrów od obiektów militarnych.",
      ],
      [
        "34. Zabronione budowanie bazy na terenach szpitalnych, policyjnych i straży pożarnej.",
      ],
      [
        "35. Zabronione jest stawianie szałasów w zamkniętych budynkach mieszkalnych.",
      ],
      [
        "36. Zabronione jest stawianie bazy w miejscach respu - Smallville, Oceanville, Fishers Camp.",
      ],
      [
        "37. Maksymalna ilość pojazdów i łodzi na bazę (wliczając w to bazy wypadowe) to 2 pojazdy + 1 łódź.",
      ],
      ["38. Zakaz celowego niszczenia pojazdów."],
    ],
  },
  {
    title: "§3. Akcje",
    content: [
      [
        "1. Wszelkie akcje agresywne gracz rozpoczyna na własną odpowiedzialność i musi być świadomy ich konsekwencji oraz możliwości ich niepowodzenia. Wszelkie akcje agresywne muszą być nagrywane.",
      ],
      [
        "2. Od graczy wymagamy zaangażowania się w rozgrywkę w trybie Role-Play.",
      ],
      [
        "3. Wszelkie decyzje i działania podejmowane przez postać muszą mieć fabularne uzasadnienie.",
      ],
      [
        "4. Nie jest dozwolone obrabowanie innego gracza tylko dlatego, że posiada pewne przedmioty, czyli rabunek, który polega jedynie na szybkim zabieraniu przedmiotów bez dodawania do sytuacji ciekawych elementów roleplay. Przedmioty, które możesz zabrać mogą być jedynie o niewielkim znaczeniu! Proste zagadki, turlanie się i śpiewanie piosenek nie są uważane za atrakcyjne elementy roleplay.",
      ],
      [
        "5. Na serwerze nie jest dozwolone ograbianie graczy z całego ich ekwipunku. Patrz pkt 4. Graczom musi zostać pozostawiona wystarczająca ilość przedmiotów niezbędnych do przetrwania, takich jak jedzenie, picie, bandaże i buty.",
      ],
      [
        "6. W trakcie dokonywania rabunku, osoby atakujące muszą zapewnić, że ofiara zachowa przynajmniej jedną z jej głównych broni palnych oraz wystarczającą ilość amunicji.",
      ],
      [
        "7. Wszelkie wrogie działania, polecenia i żądania muszą być jasno komunikowane wszystkim zaangażowanym w akcję.",
      ],
      ["8. Strona atakująca musi wziąć pod uwagę, że ofiara może się bronić."],
      [
        "9. Agresorzy muszą dać ofiarom odpowiednią ilość czasu na odpowiedź przed wymierzeniem kary i upewnić się, że ofiara słyszy żądania. Ofiara musi się niezwłocznie poddać, chyba że akcja daje jej przewagę - w takim przypadku konieczne jest nagranie ze strony atakującej.",
      ],
      ["10. Zakaz wymagania od ofiary otwarcia drzwi do bazy lub obozowiska."],
      [
        "11. Zabrania się wymuszania na poddanej osobie wypłaty środków z bankomatów.",
      ],
    ],
  },
  {
    title: "§4. Grupy",
    content: [
      [
        "1. Zakazuje się tworzenia grup których głównym celem są kradzieże, rozboje i zabójstwa.",
      ],
      [
        "2. Ubieranie opasek innych grup bez uprzedniego uzgodnienia z administracją jest zabronione.",
      ],
      [
        "3. Zatwierdzona grupa ma zakaz zdejmowania opaski dla niej przypisanej.",
      ],
      [
        "4. Lider grupy lub osoba decyzyjna jest odpowiedzialna za zachowanie graczy należących do swojej grupy.",
      ],
      [
        "5. Lider grupy ma prawo do FCK postaci z grupy bez informowania administracji, ale musi wysłać nagranie z egzekucji oraz notkę z opisem całej sytuacji.",
      ],
      [
        "6. W wyjątkowych przypadkach administracja może zmienić liderów grupy.",
      ],
      [
        "7. Grupy nieaktywne przez ponad 14 dni mogą zostać administracyjnie rozwiązane.",
      ],
      [
        "8. Wszelkie kwestie dotyczące grupy należy przedyskutować tylko i wyłącznie z liderem lub osobą decyzyjną na kanale.",
      ],
    ],
  },
  {
    title: "§5. Słownik",
    content: [
      [
        "1. In Character (IC) - Odnosi się do wszystkiego związanego z postacią gracza oraz wydarzeniami w świecie gry, wyłącznie w kontekście rozgrywki.",
      ],
      [
        "2. Out of Character (OOC) - Odnosi się do wszystkiego, co dotyczy rzeczywistego świata, poza samą grą.",
      ],
      [
        "3. Power Gaming (PG) - Wymuszanie na innych graczach akcji, które uniemożliwiają im realistyczną reakcję w grze.",
      ],
      [
        "4. Metagaming (MG) - Wykorzystywanie informacji zdobytych out-of-character (OOC) w celu uzyskania przewagi w grze in-character (IC).",
      ],
      [
        "5. Fail RP - Nierozważne lub nierealistyczne odgrywanie postaci lub sytuacji.",
      ],
      [
        "6. Character Kill (CK) - Uśmiercenie postaci gracza za zgodą administracji.",
      ],
      ["7. Vehicle Deathmatch (VDM) - Celowe przejeżdżanie graczy pojazdami."],
      [
        "8. KOS - Kill On Sight - Próba lub zabójstwo gracza bez uprzedniej inicjacji w grze fabularnej.",
      ],
      [
        "9. Raid - Włamanie się do bazy innego gracza w celu kradzieży lub ataku.",
      ],
      [
        "10. Baza - Miejsce zabezpieczone za pomocą codelocka/szyfru, służące jako przestrzeń prywatna gracza.",
      ],
      [
        "11. Fabuła - Narracja wydarzeń na serwerze, niekoniecznie tożsama z historią postaci gracza.",
      ],
      [
        "12. Poszanowanie życia - Obowiązek szanowania życia innych postaci w grze w każdej sytuacji.",
      ],
      [
        "13. Szybki Rabunek - Obrabowanie graczy bez zaangażowania w interesującą interakcję role-play.",
      ],
      [
        "14. CL - Combat Log - Opuszczenie serwera podczas akcji RP w celu uniknięcia konsekwencji, zarówno w przypadku interakcji z graczami, jak i AI (takimi jak boty, zarażeni czy zwierzęta).",
      ],
      [
        "15. FCK- Force Character Kill - Trwałe uśmiercenie postaci przez Administrację lub innych graczy za zgodą administracji podczas akcji RP.",
      ],
    ],
  },
];

const RulesDisplay = () => {
  return (
    <div className="w-full flex justify-center p-3">
      <div className="w-full max-w-screen-xl">
        {rules.map((rule, index) => (
          <div key={index} className="flex flex-col w-full rounded-lg p-2">
            <div className="flex flex-col lg:flex-row backdrop:blur-lg shadow-2xl p-2 mt-2 rounded-lg">
              <div className="flex flex-col gap-2">
                <span className="text-2xl max-md:text-1xl font-bold text-gray-100">
                  {rule.title}
                </span>
                {rule.content.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-sm max-md:text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Rules() {
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
                  Regulamin
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Przed wejściem na serwer, zapoznaj się z regulaminem.
                  Nieznajomość regulaminu nie zwalnia z jego przestrzegania.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/images/rules.webp"
            alt="regulamin"
            width={500}
            height={500}
            quality={75}
            loading="eager"
            style={{ filter: "grayscale(0.5) brightness(0.6) blur(2px)" }}
          />
        </div>
      </div>
      <RulesDisplay />
    </main>
  );
}
