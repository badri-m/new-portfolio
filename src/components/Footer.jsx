import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Badri Narayanan. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            badri
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/badri-m" className="hover:text-[#000000]">
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/badri-narayanan-m-22k18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-[#000000]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/lonely_boy_880?igsh=dThzZG5wN2Y5NjE4"
            className="hover:text-[#000000]"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
