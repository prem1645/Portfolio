export default function Certifications() {
  const certificates = [
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      year: "May 2025",
      link: "https://www.hackerrank.com/certificates/0ba3779a7a1f",
    },
    {
      title: "Deloitte: Data Analytics Virtual Experience",
      issuer: "Deloitte",
      year: "April 2025",
      link: "https://drive.google.com/file/d/1VFyoctRLZQt8mpHK-hL8fOSdF0cPGkG3/view?usp=drive_link",
    },
    {
      title: "AWS: Solution Architect Virtual Experience",
      issuer: "AWS",
      year: "April 2025",
      link: "https://drive.google.com/file/d/1mVDwnp3Jj7AhNlKvF910m6mWXc5Q9TA_/view?usp=drive_link",
    },
    {
      title: "Internship Completion: Web Development",
      issuer: "Vividhra",
      year: "Feb 2025",
      link: "https://drive.google.com/file/d/1vtVgS3agoJe-7LXL0rpELbkTcwhlb0Y_/view?usp=drive_link",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      year: "Dec 2024",
      link: "https://coursera.org/share/f1c8b488823374630414f9c7d3ad6d9b",
    },
    {
      title: "Fundamentals of AI Badge",
      issuer: "Microsoft",
      year: "Feb 2024",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/PREMKUMAR-9018/UFPTFM73?sharingId=5CDA88EEDB1FE6A4",
    },
    {
      title: "Introduction to Linear Algebra with Matlab",
      issuer: "Mathworks",
      year: "Feb 2024",
      link: "https://drive.google.com/file/d/1Tr5_bNc2LAfeF6ucXB1gs1j3L0el6MY-/view?usp=drive_link",
    },
    {
      title: "Internship Completion: App Development",
      issuer: "Infomaps",
      year: "July 2024",
      link: "https://drive.google.com/file/d/10fDOOjcK46jmyqYfshmc2DvpuxUHv10L/view?usp=drive_link",
    },
    {
      title: "Coincent Training",
      issuer: "Coincent",
      year: "Jan 2024",
      link: "https://drive.google.com/file/d/1-AX9hQCSGoa0vKuIeF6MYVyf0SpbH9iI/view?usp=drive_link",
    },
    {
      title: "Coincent Participation",
      issuer: "Coincent",
      year: "Jan 2024",
      link: "https://drive.google.com/file/d/1--xTQ_-uzeEwr5N_v-hN-rl95ZHX89bs/view?usp=drive_link",
    },
    {
      title: "Internship Completion: Data Science with Python",
      issuer: "Postulate Info Tech",
      year: "Aug 2023",
      link: "https://drive.google.com/file/d/1z2BXl_z5B_RFVH47vMk1cnYxnrx_I8d1/view?usp=drive_link",
    },
    {
      title: "Data Science Bootcamp: Python for Data Science and ML",
      issuer: "Udemy",
      year: "Aug 2023",
      link: "https://drive.google.com/file/d/1m_5oeyw74avp4Mywv-63h_b1cKHUd_3M/view?usp=drive_link",
    },
    {
      title: "SQL Basic Certificate",
      issuer: "HackerRank",
      year: "Jul 2023",
      link: "https://www.hackerrank.com/certificates/0ba3779a7a1f",
    },
  ];

  return (
    <div
      id="certifications"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#111] p-5 rounded-xl border border-[#FFD700]/40 shadow-md"
            >
              <p className="text-lg font-semibold text-[#FFD700]">
                {cert.title}
              </p>
              <p className="text-gray-300">
                {cert.issuer} — {cert.year}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sky-400 hover:text-sky-200 underline mt-1 inline-block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
