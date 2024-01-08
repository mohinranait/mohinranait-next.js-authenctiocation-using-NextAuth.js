import { connectDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "../../../../models/UserModel";


export async function POST(req) {
    try {
        await connectDb();
        const {email} = await req.json();
        console.log('exists User:',email);
        const user = await User.findOne({email});
        return NextResponse.json({user:user},{status: 200})
    } catch (error) {
        console.log(error);
    }
}