import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/resident-db';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
};

const closeDB = async () => {
    try {
        await mongoose.connection.close();
    } catch (error) {
        console.error("Error closing MongoDB connection", error);
        process.exit(1);
    }
};

export { connectDB, closeDB };
