"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Note: Since we don't have actual images, we'll use placeholders or colors

export default function LetterInterface({ onClaim }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-burgundy flex flex-col md:flex-row p-4 md:p-8 gap-6"
    >
     

      {/* Main Letter Content */}
      <div className="flex-1 bg-cream rounded-lg shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[85vh] relative text-burgundy">
       
        
        <div className="max-w-prose mx-auto">
            <h1 className="font-cursive text-5xl mb-8">Dearest Naraa,</h1>
            
            <div className="space-y-6 text-lg leading-relaxed font-sans text-stone-800">
                <p>
                    I've spent a long time putting my feelings into words, but every time I try, 
                    they seem to fall short of what my heart truly holds for you.
                </p>
                <p>
                    From the moment we met, you became my favorite thought, my safest place, 
                    and my greatest adventure. You listen to my dreams and hold my fears 
                    with such gentleness.
                </p>
                <p>
                    Thank you for being my peace, my joy, and my greatest supporter. 
                    I promise to cherish you, today and alway.
                </p>
                <p>
                  "In all the world, there is no heart for me like yours. 
                  In all the world, there is no love for you like mine."
                </p>
            </div>

            <div className="mt-12 text-right">
                <p className="font-cursive text-3xl">Forever Yours,</p>
                <p className="mt-2 font-bold">[Crown Tulgaa]</p>
            </div>
            
            <div className="mt-16 flex justify-center">
                 <button 
                    onClick={onClaim}
                    className="bg-red-accent hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    Claim Your Gift 
                </button>
            </div>
        </div>
      </div>

      {/* Memory Lane Gallery */}
      <div className="w-full md:w-80 flex flex-col gap-6 overflow-y-auto max-h-[85vh] pr-2">
        <h3 className="text-cream font-cursive text-2xl text-center md:text-left">Memory Lane</h3>
        
        {/* Mock Polaroids */}
        {[
            { id: 1, caption: "Crown Tulgaa", color: "bg-blue-200", image: '/tulgaa.png' }, 
            { id: 2, caption: "Crown Naraa", color: "bg-orange-200", image: '/naraa.png' },
            { id: 3, caption: "Our Wedding", color: "bg-indigo-200", image: '/wedding.png' }
        ].map((item) => (
            <div key={item.id} className="bg-white p-3 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className={`w-full h-48 ${item.color} mb-3 flex items-center justify-center text-gray-500`}>
                  <Image src={item.image} alt={item.caption} width={200} height={170} />
                </div>
                <p className="text-center font-cursive text-xl text-stone-700">{item.caption}</p>
            </div>
        ))}
      </div>
    </motion.div>
  );
}
