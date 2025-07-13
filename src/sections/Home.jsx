import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-black text-white"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* 👤 Profile Image Section */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[400px] rounded-2xl border-4 border-[#FFD700] shadow-xl overflow-hidden">
            <img
              src="/profile.png"
              alt="Prem Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 📄 Info Section */}
        <div className="flex items-center">
          <div className="w-full h-[400px] bg-black/60 backdrop-blur-md border-4 border-[#FFD700] rounded-2xl p-6 shadow-xl flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl text-[#FFD700] font-bold mb-4">
              Hi, I’m Prem!
            </h1>

            <p className="text-gray-200 text-lg sm:text-xl mb-4">
              <span className="block font-semibold text-white text-2xl">
                PREM KUMAR P
              </span>
              +91 7904845242 | premppk16022006@gmail.com
            </p>

            {/* 🔗 Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <a
                href="https://www.linkedin.com/in/prem-kumar-p-146873259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-white transition text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/prem1645"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-white transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/PREM1645"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-105"
              >
                <img
                  src="/Leetcode.png" // Make sure this image exists in your public folder
                  alt="LeetCode Profile"
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>

            {/* 📄 Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-[#FFD700] text-black hover:bg-yellow-400 transition"
            >
              <HiDownload className="text-lg" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
