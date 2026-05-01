"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [noButtonScale, setNoButtonScale] = useState(1);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleNoClick = () => {
    // Nhỏ dần cho đến khi gần như biến mất
    setNoButtonScale((prev) => Math.max(prev - 0.2, 0.05));
  };

  const handleAccept = () => {
    setIsAccepted(true);
    const end = Date.now() + 3 * 1000;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#8b4513", "#ff0000"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#8b4513", "#ff0000"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <main className="relative min-h-screen w-full bg-[#ebebeb] flex items-center justify-center p-4 overflow-hidden font-serif">
      <AnimatePresence>
        {!isAccepted ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative bg-[#fffdf5] w-full max-w-2xl border border-gray-400 shadow-2xl p-8 md:p-12 text-[#2c1810]"
          >
            {/* Header hành chính trang trọng */}
            <div className="flex justify-between items-start mb-12 border-b-2 border-gray-800 pb-4">
              <div className="text-right text-[10px] italic text-gray-500">
                Số: 2026/QĐ-TRIEU-TAP
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-center mb-10 uppercase tracking-[0.2em] text-red-800">
              LỆNH TRIỆU TẬP
            </h1>

            <div className="space-y-6 text-base md:text-lg leading-relaxed relative z-10 text-justify italic">
              <p>
                Xét thấy đương sự có hành vi{" "}
                <strong className="not-italic">"trốn chụp ảnh kỷ yếu"</strong> trong suốt thời gian qua,
              </p>

              <p>
                Nay, Hội đồng quyết định triệu tập đương sự có mặt tại
                buổi <strong>Chụp ảnh Kỷ yếu</strong> của đồng chí <strong>Hồ Minh Quân</strong>.
              </p>

              <p className="not-italic">
                <strong>Địa điểm:</strong> Trường THPT Chuyên Lê Quý Đôn, Đà Nẵng. <br />
                <strong>Thời gian:</strong> 9:30 - 11:30 sáng ngày 10 tháng 05 năm 2026. <br />
                <strong>Hình thức:</strong> Chụp ảnh kỷ yếu tập thể với trang phục tự chọn, ưu tiên những bộ cánh lộng lẫy nhất.
              </p>
            </div>

            {/* Khu vực ký tên với Chữ ký thật */}
            <div className="mt-12 flex justify-end pr-4 md:pr-10">
              <div className="text-center relative">
                <p className="text-sm mb-1 text-gray-600">
                  Đà Nẵng, ngày 27 tháng 04 năm 2026
                </p>
                <p className="font-bold text-red-800 uppercase tracking-tighter text-xs">
                  THẨM PHÁN TỐI CAO
                </p>

                {/* Khung chứa chữ ký và con dấu */}
                {/* Chữ ký từ file của bạn */}
                <div className="h-20 w-full flex items-center justify-center my-2">
                  <img
                    src="/signature.png"
                    alt="Chữ ký"
                    className="h-full object-contain"
                  />
                </div>
                <p className="font-bold text-lg mt-2">Hồ Minh Quân</p>
                <p className="text-xs italic">(Đã ký)</p>
              </div>
            </div>

            {/* Nút điều hướng */}
            <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
              <button
                onClick={handleAccept}
                className="px-16 py-4 bg-red-900 text-white font-bold text-xl hover:bg-black transition-all active:scale-95 z-20 shadow-lg"
              >
                CHẤP HÀNH LỆNH
              </button>

              <motion.button
                onClick={handleNoClick}
                animate={{ scale: noButtonScale }}
                transition={{ type: "spring", stiffness: 400 }}
                className="px-8 py-2 bg-transparent text-gray-400 border border-dashed border-gray-400 font-medium text-sm hover:text-red-600 hover:border-red-600 transition-colors"
              >
                Kháng lệnh (Vô hiệu)
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center bg-white p-12 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] border border-gray-200"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6 tracking-tighter">
              ÁP GIẢI THÀNH CÔNG! ⚖️
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-medium">
              Hệ thống đã ghi nhận sự hợp tác của bạn. <br /> Đừng để "tòa" phải
              thất vọng về trang phục nhé!
            </p>
            <div className="w-full h-[2px] bg-gray-200 mb-8"></div>
            <img
              src="https://media.tenor.com/CC1VPnwBVMMAAAAi/gianbortion-cat.gif"
              alt="Judgement"
              className="rounded-lg mx-auto w-64 shadow-md border-4 border-[#fffdf5]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
