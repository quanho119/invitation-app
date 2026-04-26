'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [noButtonPos, setNoButtonPos] = useState({ top: '60%', left: '50%' });
  const [isAccepted, setIsAccepted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80 + 10) + '%';
    const randomLeft = Math.floor(Math.random() * 80 + 10) + '%';
    setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  const handleAccept = () => {
    setIsAccepted(true);
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#06b6d4', '#3b82f6'] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#a855f7', '#ec4899'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  if (!mounted) return null;

  return (
    <main className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Background Neon Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150"></div>
      </div>

      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, blur: '10px' }}
            className="relative z-10 w-full max-w-md px-6"
          >
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] shadow-2xl overflow-hidden relative group">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-20 w-full -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none"></div>

              <div className="relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mb-8 mx-auto"
                />

                <h1 className="text-5xl font-black italic tracking-tighter mb-4 text-white leading-none">
                  SYSTEM <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">NOTICE.</span>
                </h1>

                <p className="text-zinc-400 text-sm uppercase tracking-[0.2em] mb-10 font-bold">
                  Bắt giữ đối tượng: <span className="text-white">QUÁ XINH ĐẸP</span> <br />
                  Trạng thái: <span className="text-cyan-500 animate-pulse underline decoration-cyan-500/50">CHƯA XÁC NHẬN</span>
                </p>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleAccept}
                    className="group relative px-8 py-5 bg-white text-black font-black text-xl rounded-2xl transition-all hover:scale-[1.02] active:scale-95 overflow-hidden"
                  >
                    <span className="relative z-10">CHẤP HÀNH LỆNH ✅</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>

                  <button
                    onMouseEnter={moveButton}
                    onClick={moveButton}
                    style={{
                      position: 'fixed',
                      top: noButtonPos.top,
                      left: noButtonPos.left,
                      transition: 'all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                      zIndex: 100
                    }}
                    className="px-6 py-3 bg-zinc-800 text-zinc-500 border border-white/5 rounded-xl font-bold text-sm uppercase tracking-widest hover:text-red-500 hover:border-red-500/50 transition-colors"
                  >
                    Kháng lệnh
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center z-10 px-4"
          >
            <h2 className="text-7xl font-black text-white mb-2 tracking-tighter">MISSION</h2>
            <h2 className="text-7xl font-black text-cyan-500 mb-8 tracking-tighter animate-pulse">ACCEPTED.</h2>

            <div className="relative group inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-50"></div>
              <div className="relative bg-zinc-900 border border-white/10 p-2 rounded-[2rem]">
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZhcXk5bm8xdThzeHVnN3Q3bm9pYmNxejF4bXF4eXJ5eXJ5eXJ5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjPqcKGRZaO4w/giphy.gif"
                  alt="Meme"
                  className="rounded-[1.5rem] w-72 md:w-96"
                />
              </div>
            </div>
            <p className="mt-8 text-zinc-500 font-mono text-sm tracking-widest uppercase italic">
              See you at the photoshoot, agent.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(400%); }
        }
      `}</style>
    </main>
  );
}
