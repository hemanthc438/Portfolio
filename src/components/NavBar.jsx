import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <navigator className="flex items-center justify-between mb-20 py-6">
        <div className="flex items-center flex-shrink-0">
          <img className="mx-2 w-8" src={logo}/>
          </div> 
          <div className="flex justify-center items-center gap-4 m-8 text-2xl">
          <a href="https://www.linkedin.com/in/hemanth-bolla" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          <a href="https://github.com/hemanthc438" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://x.com/hemanth_bolla" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter/></a>
          <a href="https://www.instagram.com/hemanthbolla/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        </div>
    </navigator>
  )
}

export default NavBar