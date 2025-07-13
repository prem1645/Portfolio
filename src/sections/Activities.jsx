export default function Activities() {
  const activities = [
    {
      title: "LeetCode Challenge",
      description:
        "Solved 100+ problems in 20 days to improve coding speed and problem-solving under constraints.",
    },
    {
      title: "Class Representative, CSE-DS Dept.",
      description:
        "Liaison between students and faculty for 2 semesters, ensuring communication and coordination.",
    },
    {
      title: "Technical Member, The Robotic Society",
      description:
        "Core Contributor in Embedded Systems & Robotics Innovations.",
    },
    {
      title: "Secretary, Dance Team (Banger Feets)",
      description:
        "Managed logistics and coordinated multiple events and performances.",
    },
  ];

  return (
    <div
      id="activities"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Extracurricular Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-xl border border-[#FFD700]/40 shadow-lg"
            >
              <p className="text-xl font-semibold text-[#FFD700]">
                {activity.title}
              </p>
              <p className="text-gray-300 text-md mt-2 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
