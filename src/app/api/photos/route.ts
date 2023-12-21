import Photo from "../../models/photo";
import { NextResponse } from "../../../../node_modules/next/server";
import connectMongoDB from "../../lib/mongodb" 

export async function POST(request){
    const {url, description} = await request.json();
    await connectMongoDB();
    await Photo.create({url,description});
    return NextResponse.json({message:"Photo Posted"}, {status:201})
}