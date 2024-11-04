// export const runtime = 'edge';
//
// import { NextRequest, NextResponse } from "next/server";
// import apiService from "@/lib/cfTools/apiServices";
//
// export const fetchCache = 'force-no-store';
//
// export async function GET(request: NextRequest) {
//   const serverId = "9932ff9a812ed8d0faa5cf25a019ed264590bb33";
//
//   try {
//     const serverInfo = await apiService.getServerInfo(serverId);
//     console.log("fetching server info")
//     if (!serverInfo) {
//       return NextResponse.json(
//         { error: "Failed to fetch server info 1" },
//         { status: 500 },
//       );
//     }
//     return NextResponse.json(serverInfo);
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: "Failed to fetch server info 2" },
//       { status: 500 },
//     );
//   }
// }

export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import apiService from "@/lib/cfTools/apiServices";

export const fetchCache = 'force-no-store';

export async function GET(request: NextRequest) {
  const serverId = "9932ff9a812ed8d0faa5cf25a019ed264590bb33";

  try {
    // Fetch server information from the API
    const serverInfo = await apiService.getServerInfo(serverId);
    console.log("Fetching server info");

    if (!serverInfo) {
      return NextResponse.json(
          { error: "Failed to fetch server info" },
          { status: 500 }
      );
    }

    // Return the fetched server information as JSON
    return NextResponse.json(serverInfo);
  } catch (error) {
    console.error("Error fetching server info:", error);
    return NextResponse.json(
        { error: "Failed to fetch server info due to an unexpected error" },
        { status: 500 }
    );
  }
}
