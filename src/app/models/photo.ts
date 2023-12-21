import mongoose, { Schema } from "mongoose";
const photoSchema = new Schema({
    url: String,
    description: String,
},{
    timestamps:true,
}
)
const Photo = mongoose.models.Photo || mongoose.model("Photo",photoSchema);
export default Photo;