import { RulesDisplay } from '@/utils/Rules/Rules';



export default function Rules() {
  return (
    <main className="bg-zinc-900">
      <div className="w-full shadow-2xl">
        <div
          className="w-full py-20"
          style={{ backdropFilter: "grayscale(.7) brightness(.6)" }}
        >
          <div className="w-full flex justify-center p-3">
            <div className="w-full max-w-screen-xl">
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-center">Regulamin</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RulesDisplay />
    </main>
  );
}
