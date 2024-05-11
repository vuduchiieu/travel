import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    await axios.post(`https://be-travel.vercel.app/v1/auth/register`, {
      email,
      password,
    });
  } catch (error: any) {
    console.log(error.response.data.error);
  }
  return NextResponse.json({ message: "Thành công" });
}
