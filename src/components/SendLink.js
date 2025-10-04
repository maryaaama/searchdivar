"use client";
import { useState } from "react";

export default function SendLink({ onSuccess }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const WEBHOOK_URL =
    "https://33328-ekmil.s2.irann8n.com/webhook-test/26d7f28c-00fa-4f2a-870f-8ae2a7a6e97f";
  const BASIC_AUTH = "Basic " + btoa("admin:admin");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: BASIC_AUTH,
        },
        body: JSON.stringify({ link: url }),
      });

      if (res.ok) {
        setSuccess(true);
        setUrl("");
        if (onSuccess) onSuccess();
      } else {
        throw new Error("ارسال ناموفق بود");
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 mb-8 px-4 md:px-6 text-center animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#0b1624]/70 border border-cyan-700/40 rounded-2xl p-4 backdrop-blur-md shadow-[0_0_25px_rgba(0,200,255,0.1)]"
      >
        <input
          type="url"
          placeholder="لطفا لینک دیوار را وارد کنید..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full sm:flex-1 bg-transparent border border-cyan-500/40 rounded-xl px-4 py-3 sm:py-2 text-base sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          dir="ltr"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 sm:py-2 rounded-xl font-semibold text-base sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "در حال ارسال..." : "ارسال لینک"}
        </button>
      </form>

      {success && (
        <p className="mt-3 text-sm text-green-400 animate-fade-in">
          ✅ لینک با موفقیت ارسال شد!
        </p>
      )}
      {error && (
        <p className="mt-3 text-sm text-pink-400 animate-fade-in">
          ⚠️ خطا در ارسال لینک. دوباره تلاش کنید.
        </p>
      )}
    </div>
  );
}
