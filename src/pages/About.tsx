import { useState, useEffect } from "react";
import { BookOpen, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const tagline = "Discover. Learn. Connect. Belong.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index++;
      if (index === tagline.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col bg-gradient-to-b from-[#fefcf7] to-[#f5ede0] text-gray-900 min-h-screen overflow-hidden">
      
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 flex-grow">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            We bring the right{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7da9ff] to-[#b5ceff]">
              Book
            </span>{" "}
            to you.
          </h1>
          <p className="text-lg text-gray-700">
            Your next favorite story is here. Discover worlds, knowledge, and
            inspiration at BookHaven.
          </p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#7da9ff] to-[#b5ceff] text-white font-semibold shadow-lg hover:scale-105 transition-transform">
            <Link to="/books">Explore Now</Link>
          </button>
        </div>

        {/* Floating Shape */}
        <div className="relative mt-16 md:mt-0 md:ml-16">
          <div className="w-40 h-40 bg-gradient-to-r from-[#7da9ff] to-[#b5ceff] rotate-45 rounded-2xl shadow-2xl" />
          <div className="absolute inset-0 w-40 h-40 rotate-45 rounded-2xl bg-white/30 backdrop-blur-md scale-110 -z-10" />
        </div>
      </section>

      {/* FEATURE STRIP (sticks to bottom) */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="bg-gradient-to-r from-[#a4bbff] to-[#c7d6ff] p-10 text-center">
          <BookOpen className="mx-auto w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Love for Books</h3>
          <p className="text-gray-900">
            Books inspire imagination, creativity, and endless knowledge.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#92b4ff] to-[#b5ceff] p-10 text-center">
          <Heart className="mx-auto w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Readers First</h3>
          <p className="text-gray-900">
            Every reader matters. Your journey is always our priority.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#7da9ff] to-[#a8c2ff] p-10 text-center">
          <Users className="mx-auto w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Community</h3>
          <p className="text-gray-900">
            Connect and share with thousands of book lovers worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}

