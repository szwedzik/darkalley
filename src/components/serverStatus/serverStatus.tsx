import React from "react";

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

interface Props {
  serverInfo: ServerInfo | null;
}

const StatusServer: React.FC<Props> = ({ serverInfo }) => {
  if (!serverInfo || !serverInfo.status) {
    return (
      <div className="bg-zinc-900 text-white p-6 rounded-lg shadow-md animate-pulse">
        Pobieranie danych...
      </div>
    );
  }

  const { players, slots, queue } = serverInfo.status;

  const joinServer = () => {
    window.location.href = "steam://connect/45.145.40.36:2302";
  };

  return (
    <div
      className={`bg-zinc-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center border-l-4 ${serverInfo.online ? "border-green-500" : "border-red-500"}`}
    >
      <h2 className="text-lg font-bold mb-2 text-center">{serverInfo.name}</h2>
      <div className="text-center mb-4">
        <p className="text-sm text-gray-400 uppercase tracking-wide">
          {serverInfo.online ? "Gracze online" : "Offline"}
        </p>
        {serverInfo.online && (
          <p className="text-4xl font-bold">
            {players}/{slots}{" "}
            {queue.active && (
              <span className="text-sm text-gray-400">(+{queue.size})</span>
            )}
          </p>
        )}
      </div>
      <button
        onClick={joinServer}
        className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-2 rounded-lg hover:from-green-600 hover:to-green-800 transition-colors shadow-md text-center"
      >
        Dołącz
      </button>
    </div>
  );
};

export default StatusServer;
