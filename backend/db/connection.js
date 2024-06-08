import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yashsutar777:MO9Di7gbw9IY8KwI@cluster0.uknsybm.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to DB");
    } catch (err) {
        console.error(err);
    }
}

export default connectToDB;