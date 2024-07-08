import { NextRequest, NextResponse } from "next/server";
import apiService from "@/lib/cfTools/apiServices";

export async function GET(request: NextRequest) {
  const serverId = "9932ff9a812ed8d0faa5cf25a019ed264590bb33";

  try {
    const serverInfo = await apiService.getServerInfo(serverId);
    if (!serverInfo) {
      return NextResponse.json(
        { error: "Failed to fetch server info" },
        { status: 500 },
      );
    }
    return NextResponse.json(serverInfo);
  } catch (error: any) {
    console.error("Error fetching server info:", error);
    return NextResponse.json(
      { error: "Failed to fetch server info" },
      { status: 500 },
    );
  }
}
