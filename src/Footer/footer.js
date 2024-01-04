
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <hr />
            <div className="text">
                <p>ⓒ 2024 Amanda Fong — a portfolio made with love ⊹˚ʚ 🌱⭒ ˚✧.♡</p>
                <div className="icon-container">

                    <a href="https://www.linkedin.com/in/amanda-fong-217a04260/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/fong-amanda" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:fong.am@northeastern.edu">
                        <IoMail />
                    </a>
                </div>

            </div>
        </div>
    );
}
export default Footer;