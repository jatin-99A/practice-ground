import mongoose, { ConnectOptions } from "mongoose";

const MONGODB_URI = "mongoURI";

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

// 1. globalThis ka use kiya taaki Next.js ke baar-baar reload hone par bhi ye variable delete na ho
let cached = (globalThis as any).mongoose;

// 2. Agar pehli baar code chal raha hai, to global memory mein ek khali object set kar do
if (!cached) {
    cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    // 3. Agar pehle se connection active hai (Production/Dev dono ke liye), to turant wahi return kar do
    if (cached.conn) {
        return cached.conn;
    }

    // 4. Agar connection abhi ban raha hai, to naya mat banao, purane chal rahe promise ka hi wait karo (Dev mode reload aur simultaneously requests dono ko ek sath yahi line rokti hai)
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        } as ConnectOptions;

        // 5. YAHAN AWAIT NAHI KIYA: Turant 'Promise' ko cache mein save kiya taaki agli microsecond mein aane wali request naya connection na chalu kare
        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        // 6. Ab hum us bachaye hue promise ka wait karenge taaki connection successfully resolve ho jaye
        cached.conn = await cached.promise;
    } catch (e) {
        // 7. Agar connection fail ho gaya, to promise cache ko khali karo taaki agli request naya try kar sake
        cached.promise = null;
        throw e;
    }

    // 8. Akhir mein connected database ka instance return kar diya
    return cached.conn;
}

export default dbConnect;
