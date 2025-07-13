export default function Experience() {
  const experiences = [
    {
      company: "Engin",
      role: "Frontend Engineer",
      date: "Jul 2025 - Present",
      location: "Remote",
      description:
        "Built and optimized responsive web interfaces using React and Tailwind. Collaborated with backend teams to integrate APIs and deliver seamless user experiences.",
    },
    {
      company: "Vividhra",
      role: "Full Stack Dev Intern",
      date: "Nov 2024 - Dec 2024",
      location: "On-site",
      description:
        "Deployed company website; handled core Laravel operations and backend services.",
    },
    {
      company: "Infomaps",
      role: "App Dev Intern",
      date: "May 2024 - Jul 2024",
      location: "On-site",
      description:
        "Developed health monitoring and VHN modules for Thaimai app, focused on maternal care tracking.",
    },
    {
      company: "Postulate Info Tech",
      role: "Data Science Intern",
      date: "Jul 2023 - Aug 2023",
      location: "Virtual",
      description:
        "Built a Bitcoin price predictor using machine learning models trained on historical market data.",
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-[#FFD700] pl-6">
              <h3 className="text-2xl font-bold text-white">
                {exp.role} @{" "}
                <span className="text-[#FFD700] font-extrabold">
                  {exp.company}
                </span>
              </h3>
              <p className="text-md sm:text-lg text-gray-400 font-medium mt-1">
                {exp.date} • {exp.location}
              </p>
              <p className="text-lg sm:text-xl text-gray-200 mt-3 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
