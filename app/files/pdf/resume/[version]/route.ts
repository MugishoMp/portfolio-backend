// For more info https://blog.logrocket.com/using-next-js-route-handlers/
//
// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request:NextRequest, { params }: { params: { version: string } }) {
  // we will use params to access the data passed to the dynamic route
  const { version } = params;
  const fileName = `resume-${version}.pdf`;

  // Path to the PDF file
  const filePath = path.join(process.cwd(), `public/files/pdf/resume/${fileName}`);

  try {
    // Read the file
    const fileContent = fs.readFileSync(filePath);

    // Set the headers to force download
    const headers = {
      'Content-Disposition': `attachment; filename=${fileName}`,
      'Content-Type': 'application/pdf',
    };

    return new NextResponse(fileContent, {
      status: 200,
      headers,
    });
  } catch (error) {
    // Handle error (e.g., file not found)
    // console.error(error);
    return new NextResponse('File not found', { status: 404 });
  }
}
