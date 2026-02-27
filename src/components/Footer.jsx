import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-8">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto flex flex-col items-center gap-6">
        {/* --- All Icon Buttons Section (Above the text lines) --- */}
        <div className="flex items-center gap-6">
          {/* Phone Icon */}
          <a
            href="tel:6384662481"
            className="hover:scale-110 transition-transform"
            aria-label="Call Me"
          >
            <FaPhoneAlt size={24} />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:badrinarayananm22@gmail.com"
            className="hover:scale-110 transition-transform"
            aria-label="Email Me"
          >
            <FaEnvelope size={24} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/badri-m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/badri-narayanan-m-22k18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* --- Text Lines --- */}
        <div className="text-center space-y-1">
          <p className="text-sm md:text-base font-medium">
            © {new Date().getFullYear()} Badri Narayanan. All rights reserved.
          </p>
          <p className="text-sm md:text-base font-medium">
            Made with ❤️ by{" "}
            <a href="#" className="underline hover:text-white/80">
              badri
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
