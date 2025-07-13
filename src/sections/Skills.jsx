export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "Java", "JavaScript", "MySQL"],
    },
    {
      title: "Web and App Development",
      skills: [
        "React.js",
        "React Native",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Node.js",
        "AWS (Beginner)",
      ],
    },
    {
      title: "Core Skills",
      skills: [
        "Software Design",
        "Object-Oriented Programming",
        "Debugging",
        "Scalability",
        "SDLC",
      ],
    },
    {
      title: "Data Science and AI",
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "Matplotlib",
        "Seaborn",
        "Langchain",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Project Management",
        "Leadership",
        "Problem-Solving",
        "Team Player",
        "Communication",
        "Analytical Thinking",
        "Logical Reasoning",
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-xl shadow-md border border-[#FFD700]/40"
            >
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
                {category.title}
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-200 space-y-1">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
