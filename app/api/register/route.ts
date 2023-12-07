import { NextResponse } from 'next/server';
import 'server-only';

export default async function POST(request: Request) {

    const { name, email, password } = await request.json();


    return NextResponse.redirect('/');

}