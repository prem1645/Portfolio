export default function Education() {
  const educationData = [
    {
      degree: "B.E. CSE (Data Science)",
      institution: "Sathyabama Institute of Science and Technology",
      performance: "CGPA: 8.36",
      duration: "Aug 2023 – 2027",
    },
    {
      degree: "Senior Secondary (CBSE)",
      institution: "Sri Krish International School",
      performance: "82.8%",
      duration: "2021-2023",
    },
    {
      degree: "Secondary (CBSE)",
      institution: "Sri Ramkumar Devi Fomra Vivekanandha Vidhyala",
      performance: "78.2%",
      duration: "2009-2021",
    },
  ];

  return (
    <div
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-xl border border-[#FFD700]/40 shadow-md"
            >
              <h3 className="text-2xl font-semibold text-[#FFD700]">
                {edu.degree}
              </h3>
              {edu.institution !== "—" && (
                <p className="text-lg text-white mt-1">{edu.institution}</p>
              )}
              <p className="text-md text-gray-300 mt-1">{edu.performance}</p>
              {edu.duration && (
                <p className="text-sm text-gray-400 mt-1">{edu.duration}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
