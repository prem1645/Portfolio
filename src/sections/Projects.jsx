export default function Projects() {
  const projects = [
    {
      title: "Eye Disease Classification",
      date: "Jul 2025 - Present",
      description:
        "Developing an AI system to classify eye diseases using deep learning techniques with EfficientNetB3. The model enhances diagnostic accuracy from retinal images.",
      stack: "EfficientNetB3, TensorFlow, Deep Learning",
    },
    {
      title: "CodyGrow – DS Automation Platform",
      date: "Jan 2025 - Present",
      description:
        "Launched a full-stack data science automation tool offering modules for data prep, feature engineering, model training, and result visualization.",
      stack: "LangChain, Python, React",
    },
    {
      title: "Medical Chatbot",
      date: "Oct 2024",
      description:
        "Built an intelligent chatbot to guide patients through symptoms and suggest possible conditions with actionable responses.",
      stack: "Python, NLP, Dialogflow",
    },
    {
      title: "Thaimai – Mother Tracking App",
      date: "May 2024 - Jul 2024",
      description:
        "Implemented real-time maternal health tracking with modules for VHN and doctors. Enabled mobile-first monitoring and alerts.",
      stack: "React Native, Tailwind CSS",
    },
    {
      title: "Bitcoin Price Prediction",
      date: "Jul 2023 - Aug 2023",
      description:
        "Built a time-series ML model to predict Bitcoin prices using historical data with gradient boosting techniques.",
      stack: "Python, XGBoost, Pandas",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Projects
        </h2>

        <div className="space-y-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="border-l-4 border-[#FFD700] pl-6">
              <h3 className="text-2xl font-bold text-white">
                {proj.title}
              </h3>
              <p className="text-md sm:text-lg text-gray-400 font-medium mt-1">
                {proj.date}
              </p>
              <p className="text-lg sm:text-xl text-gray-200 mt-3 leading-relaxed">
                {proj.description}
              </p>
              <p className="mt-2 text-sm sm:text-base text-[#FFD700] font-semibold">
                Tech Stack: {proj.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
