// "use client";  // 这是关键的一行
import { Metadata } from "next";
// import { useState } from "react";


export const metadata: Metadata = {
    title: "chat",
};

export default function Chat() {
    // const [count,setCount] = useState(8888)
    return (
        <main className='bg-[#121212] h-screen w-screen flex justify-center items-center text-white'>
            <>chat</>
        </main>
    )
}
