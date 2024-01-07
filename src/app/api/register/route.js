import { connectDb } from "@/lib/mongodb";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "../../../../models/UserModel";

export async function POST(req){
    try {
        await connectDb();
        const {name,email,password} = await req.json();

        const isExists = await User.findOne({email});
        if(isExists){
            return NextResponse.json({isExists}, {status:200})
        }
        const hasPas = await  bcrypt.hash(password, 10);
        await User.create({name,email, password: hasPas})

        return NextResponse.json({success : true}, {status: 201})
    } catch (error) {
        
        return NextResponse.json({message : "Invalid"}, {status: 500})
    }
}