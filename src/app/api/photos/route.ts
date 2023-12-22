import Photo from "../../models/photo";
import { NextResponse } from "../../../../node_modules/next/server";
import { connectMongoDB, closeMongoDBConnection } from "../../lib/mongodb" 

export async function POST(request: Request) {
    const { url, description } = await request.json();
    await connectMongoDB();
  
    try {
      await Photo.create({ url, description });
      return NextResponse.json({ message: "Photo Posted" }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error posting photo" }, { status: 500 });
    }
  }
  
export async function GET() {
    await connectMongoDB();
    try {
      const photos = await Photo.find();
      return NextResponse.json({ photos });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error getting photos" }, { status: 500 });
    } 
  }