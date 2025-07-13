import { useEffect, useRef, useState } from "react";

export default function About() {
  const text = `Versatile Software Engineer with hands-on experience in building full-stack platforms, real-time applications, and data-driven systems. Proficient in C++, JavaScript, and Python, with strong problem-solving and system design capabilities. Proven ability to lead cross-functional teams and ship scalable solutions with engineering excellence. Demonstrated commitment to continuous improvement by solving 100+ LeetCode problems in just 20 days, sharpening algorithmic thinking and coding speed under pressure.`;

  const keywords = [
    "Software Engineer", "full-stack", "real-time", "data-driven", "C++", "JavaScript", "Python",
    "problem-solving", "system design", "cross-functional", "scalable", "engineering excellence",
    "LeetCode", "algorithmic", "coding speed",
  ];

  const [displayedWords, setDisplayedWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const sectionRef = useRef(null);

  const words = text.split(" ");

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (startTyping && index < words.length) {
      const interval = setInterval(() => {
        setDisplayedWords((prev) => [...prev, words[index]]);
        setIndex((prev) => prev + 1);
      }, 60); // smooth typing speed
      return () => clearInterval(interval);
    }
  }, [startTyping, index]);

  const highlightWord = (word) => {
    const cleaned = word.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase();
    const match = keywords.some((kw) => kw.toLowerCase().includes(cleaned));
    return match ? (
      <span className="text-[#D4AF37] font-semibold">{word} </span>
    ) : (
      <span className="text-white">{word} </span>
    );
  };

  return (
    <div
      id="about"
      ref={sectionRef}
      className="min-h-[90vh] flex justify-center items-center px-6 py-16 bg-black text-white"
    >
      <div className="max-w-4xl text-center md:text-left">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-6 border-b-2 border-[#D4AF37] inline-block pb-2">
          Professional Summary
        </h2>

        <p className="text-2xl leading-relaxed text-white">
          {displayedWords.map((word, i) => (
            <span key={i}>{highlightWord(word)}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
