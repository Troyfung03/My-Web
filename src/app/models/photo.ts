import mongoose, { Schema } from "mongoose";
const photoSchema = new Schema({
    url: String,
    thumbnailUrl:String || null,
    description: String,
},{
    timestamps:true,
}
)
const Photo = mongoose.models.Photo || mongoose.model("Photo",photoSchema);
export default Photo;