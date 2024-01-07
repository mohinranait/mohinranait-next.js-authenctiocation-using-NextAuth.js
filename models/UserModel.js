
import {model, models, Schema} from "mongoose";

const userSchema = new Schema({
    name : {
        type: String,
    },
    email : {
        type: String,
    },
    password : {
        type: String,
    },
},{
    timestamps:true,
})

const User = models.User || model("User", userSchema);

export default User