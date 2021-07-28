import HeaderStyles from "./Header.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import email_logo from "../../images/email_logo.png"
import resume_logo from "../../images/resume_logo.png"
import linkedIn_logo from "../../images/linkedIn_logo.png"
import github_logo from "../../images/github_logo.png"

function Header() {
    const rightMenu = (
        <div className={HeaderStyles.RightMenu}>
            <a href="/#about-me" className={HeaderStyles.RightMenuText} ><p >About me</p></a>
            <NavLink to="/resume" className={HeaderStyles.RightMenuText} ><p>My Story</p></NavLink>
            <NavLink to="/projects" className={HeaderStyles.RightMenuText}><p>Projects</p></NavLink>
            <a href="https://drive.google.com/file/d/1-UpakWdnNvwwZ1LfrSrafyo77kpgN6P_/view?usp=sharing" target="_blank"><img className={HeaderStyles.CompanyLogo} src={resume_logo} /></a>
            <a href="mailto:vinayak.gupta@mail.utoronto.ca" target="_blank"><img className={HeaderStyles.CompanyLogo} src={email_logo} /></a>
            <a href="https://www.linkedin.com/in/vinayak-gupta-0164a41b6/" target="_blank"><img className={HeaderStyles.CompanyLogo} src={linkedIn_logo} /></a>
            <a href="https://github.com/Vinayak-Gupta-1" target="_blank"><img className={HeaderStyles.CompanyLogo} src={github_logo} /></a>
        </div >
    );

    return (
        <div className={HeaderStyles.Title}>
            <NavLink to='/' className={HeaderStyles.Name}>
                <p> VINAYAK GUPTA</p>
            </NavLink>
            {rightMenu}
        </div>
    );
}

export default Header;