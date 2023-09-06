// For more info https://nextjs.org/docs/app/api-reference/file-conventions/route
// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";

export async function GET(request) {
    // we will use params to access the data passed to the dynamic route
    return new NextResponse('This is an api endpoint to retrieve all resumes');
  }