import axios, { AxiosResponse } from "axios";

interface AuthResponse {
  token: string;
  valid_for: number;
}

interface ServerStatus {
  players: number;
  queue: {
    active: boolean;
    size: number;
  };
  slots: number;
}


interface ServerInfo {
  name: string;
  online: boolean;
  time: string;
  status: ServerStatus;
}

class API {
  private static instance: API;
  private url: string;
  private applicationId: string;
  private secret: string;
  private token: string | null;
  private tokenExpiry: number | null;

  private constructor() {
    this.url = process.env.CFTOOL_URL!;
    this.applicationId = process.env.CFTOOL_APPID!;
    this.secret = process.env.CFTOOL_SECRET!;
    this.token = null;
    this.tokenExpiry = null;
  }

  public static getInstance(): API {
    if (!API.instance) {
      API.instance = new API();
    }
    return API.instance;
  }

  public async auth(): Promise<string | null> {
    if (this.token && this.tokenExpiry && this.tokenExpiry > Date.now()) {
      return this.token;
    }

    const payload = {
      application_id: this.applicationId,
      secret: this.secret,
    };

    try {
      const response: AxiosResponse<AuthResponse> = await axios.post(
        `${this.url}/v1/auth/register`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status !== 200) {
        throw new Error(`Failed to authenticate: ${response.status}`);
      }

      const data = response.data;

      this.token = data.token;
      this.tokenExpiry = Date.now() + data.valid_for * 1000;

      return this.token;
    } catch (error: any) {
      console.error(
        "Error during authentication:",
        error.response ? error.response.data : error.message,
      );
      return null;
    }
  }

  public async getServerInfo(serverId: string): Promise<ServerInfo | null> {
    try {
      const token = await this.auth();
      if (!token) {
         new Error("Unable to authenticate");
      }

      const response: AxiosResponse<{ [key: string]: ServerInfo }> =
        await axios.get(`${this.url}/v1/gameserver/${serverId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

      if (response.status !== 200) {
        console.error(
          `Failed to get server info: ${response.status} - ${response.statusText} - ${response.data}`,
        );
        return null;
      }

      return this.extractServerData(response.data[serverId]);
    } catch (error: any) {
      console.error(
        "Error during getServerInfo:",
        error.response ? error.response.data : error.message,
      );
      return null;
    }
  }

  private extractServerData(data: ServerInfo): ServerInfo {
    return {
      name: data.name,
      online: data.online,
      time: new Date().toISOString(),
      status: {
        players: data.status.players,
        slots: data.status.slots,
        queue: {
          active: data.status.queue.active,
          size: data.status.queue.size,
        },
      },
    };
  }
}

const instance = API.getInstance();

export default instance;
