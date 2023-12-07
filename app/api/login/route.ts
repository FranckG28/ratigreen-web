import { NextResponse } from "next/server";
import 'server-only';

export async function POST(request: Request) {
    const { email, password } = await request.json();

    //   // Make that below if condition as your own backend api call to validate user
    //   if (body.username === "admin" && body.password === "admin") {
    //     const token = await new SignJWT({
    //       username: body.username,
    //       role: "admin", // Set your own roles
    //     })
    //       .setProtectedHeader({ alg: "HS256" })
    //       .setIssuedAt()
    //       .setExpirationTime("30s") // Set your own expiration time
    //       .sign(getJwtSecretKey());

    //     const response = NextResponse.json(
    //       { success: true },
    //       { status: 200, headers: { "content-type": "application/json" } }
    //     );

    //     response.cookies.set({
    //       name: "token",
    //       value: token,
    //       path: "/",
    //     });

    //     return response;
    //   }

    return NextResponse.json({ success: false });
}