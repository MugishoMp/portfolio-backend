// For more info https://blog.logrocket.com/using-next-js-route-handlers/
//
// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // we will use params to access the data passed to the dynamic route
  const version = params.version;
  const fileName = `resume-${version}.pdf`;
  return new NextResponse(fileName);
}
