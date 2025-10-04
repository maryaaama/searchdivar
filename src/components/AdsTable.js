"use client";
import React from "react";
import { FileText, Info, ExternalLink, MapPin, DollarSign } from "lucide-react";

const AdsTable = ({ ads }) => {
  if (!ads || ads.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      {/* کادر اصلی مشابه SendLink */}
      <div className="bg-[#0b1624]/70 border border-cyan-700/40 rounded-2xl p-5 md:p-8 backdrop-blur-md shadow-[0_0_25px_rgba(0,200,255,0.15)]">
        
        {/* عنوان بالای جدول */}
        <h2 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-2">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            نتایج
          </span>
          <span className="text-cyan-200 text-lg">({ads.length})</span>
        </h2>

        {/* حالت دسکتاپ */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-cyan-700/40">
                <th className="text-left py-3 px-4 text-cyan-200 font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" /> عنوان
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-cyan-200 font-medium">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-400" /> توضیح
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-cyan-200 font-medium">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" /> قیمت
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-cyan-200 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" /> موقعیت
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-cyan-200 font-medium">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-cyan-300" /> لینک
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ads.map((ad, index) => (
                <tr
                  key={ad.id}
                  className="border-b border-cyan-700/30 hover:bg-[#112030]/70 transition-colors"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <td className="py-3 px-4 font-medium text-white">{ad.title}</td>
                  <td className="py-3 px-4 text-cyan-100 text-sm">{ad.info}</td>
                  <td className="py-3 px-4 font-semibold text-green-400">{ad.price}</td>
                  <td className="py-3 px-4 text-cyan-100 text-sm">{ad.location}</td>
                  <td className="py-3 px-4">
                    <a
                      href={ad.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="relative">
                        مشاهده
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      </span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* حالت موبایل: کارت‌ها با استایل شبیه SendLink */}
        <div className="md:hidden space-y-4">
          {ads.map((ad, index) => (
            <div
              key={ad.id}
              className="bg-[#0b1624]/80 border border-cyan-700/40 rounded-xl p-4 backdrop-blur-md shadow-[0_0_15px_rgba(0,200,255,0.15)] transition-all hover:border-cyan-400 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              <p className="font-semibold text-white">{ad.title}</p>
              <p className="text-cyan-100 text-sm mt-1">{ad.info}</p>
              <p className="text-green-400 mt-2 font-bold">{ad.price}</p>
              <p className="text-cyan-200 text-sm">{ad.location}</p>
              <a
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-cyan-300 hover:text-blue-400 transition-colors border-t border-cyan-700/30 pt-2"
              >
                مشاهده آگهی
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsTable;
