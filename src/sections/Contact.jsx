import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Contact() {
  const contacts = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/prem-kumar-p-146873259",
      href: "https://www.linkedin.com/in/prem-kumar-p-146873259/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/prem1645",
      href: "https://github.com/prem1645",
    },
    {
      icon: <HiOutlineMail />,
      label: "Email",
      value: "premppk16022006@gmail.com",
      href: "mailto:premppk16022006@gmail.com",
    },
    {
      icon: <HiOutlinePhone />,
      label: "Phone",
      value: "+91 7904845242",
      href: "tel:+917904845242",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "@premkumar.x29_",
      href: "https://www.instagram.com/premkumar.x29_",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-12 border-b-4 border-[#FFD700] inline-block pb-2">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#111] hover:bg-[#1a1a1a] transition p-5 rounded-xl border border-[#FFD700]/40 shadow-lg"
            >
              <div className="text-[#FFD700] text-2xl">{item.icon}</div>
              <div>
                <p className="text-[#FFD700] font-semibold text-lg">
                  {item.label}
                </p>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
