export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import apiService from "@/lib/cfTools/apiServices";

export const fetchCache = 'force-no-store';

export async function GET(request: NextRequest) {
  const serverId = "2a5e43d5b99f4fac2dcb03b54fe2a98711658ad4";

  try {
    const serverInfo = await apiService.getServerInfo(serverId);
    console.log("Fetching server info");

    if (!serverInfo) {
      return NextResponse.json(
          { error: "Failed to fetch server info" },
          { status: 500 }
      );
    }

    return NextResponse.json(serverInfo);
  } catch (error) {
    console.error("Error fetching server info:", error);
    return NextResponse.json(
        { error: "Failed to fetch server info due to an unexpected error" },
        { status: 500 }
    );
  }
}
