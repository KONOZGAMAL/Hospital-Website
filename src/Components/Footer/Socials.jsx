import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a href="https://www.facebook.com/" target="_blank" className="cursor-pointer hover:text-[#d5f5ff] transition-all duration-1000">
        <FaFacebookSquare />
      </a>
      <a href="https://linkedin.com/" target="_blank" className="cursor-pointer hover:text-[#d5f5ff] transition-all duration-1000">
        <FaLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" className="cursor-pointer hover:text-[#d5f5ff] transition-all duration-1000">
        <FaGithubSquare />
      </a>
      <a href="https://www.instagram.com/" target="_blank" className="cursor-pointer hover:text-[#d5f5ff] transition-all duration-1000">
        <FaInstagramSquare />
      </a>
      <a href="https://twitter.com/" target="_blank" className="cursor-pointer hover:text-[#d5f5ff] transition-colors duration-1000">
        <FaTwitterSquare />
      </a>
    </div>
  );
}
