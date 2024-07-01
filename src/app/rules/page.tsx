import { RulesDisplay } from "@/utils/Rules/Rules";

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
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/images/rules.png"
            alt=""
          />
        </div>
      </div>
      <RulesDisplay />
    </main>
  );
}
