import Header from '../Header/header.jsx'
import ProjectStyles from "./Projects.module.scss";
import react_logo from "../../images/react_logo.png"
import centipede from "../../images/centipede.jpg"
import hypatia_logo from "../../images/hypatia_logo.png"
import sports from "../../images/sports.jpg"
import radio from "../../images/radio.jpg"

function ProjectsBody(props) {
    const outerDivStyle = props["outerDivStyle"];
    const imgSrc = props["imgSrc"];
    const status = props["status"];
    const type = props["type"];
    const projectName = props["projectName"];
    const projectDesc = props["projectDesc"];
    const viewLink = props["viewLink"]
    if (viewLink === "") {
    }
    else {
        var view = <a className={ProjectStyles.ViewProjectText} href={viewLink} target="_blank">View Project</a>
    }
    return (
        < div className={outerDivStyle}>
            <img className={ProjectStyles.Image} src={imgSrc} />
            <p className={ProjectStyles.MiniHeaderText}> <span style={{ textDecoration: "underline" }}> Status:</span> {status} <span style={{ textDecoration: "underline", paddingLeft: "1vh" }}><br />Type:</span> {type}</p>
            <p className={ProjectStyles.SubHeaderText}>{projectName}</p>
            <p className={ProjectStyles.BodyText}>{projectDesc}</p>
            {view}
        </div >
    )
}

function Projects() {
    return (
        <div >
            <Header />
            <div className={ProjectStyles.BodyDiv}>
                <p className={ProjectStyles.HeaderText}>My Projects</p>
                <div className={ProjectStyles.BodyContent}>
                    <ProjectsBody
                        outerDivStyle={ProjectStyles.ImageHeaderDiv}
                        imgSrc={react_logo}
                        status="Finished (Aug 2021)"
                        type="Personal"
                        projectName="This Website!"
                        projectDesc="Yes indeed! I built this very website over the summer of second year.
                        I harnessed the power of Youtube to learn React, SaaS and CSS modules to build this, 
                        if I may say so myself, very elegant website! :)"
                        viewLink="https://github.com/Vinayak-Gupta-1/personal_website"
                    />

                    <ProjectsBody
                        outerDivStyle={ProjectStyles.MiddleBox}
                        imgSrc={centipede}
                        status="Finished (Apr 2021)"
                        type="School"
                        projectName="Centipede Game"
                        projectDesc="That's right, I built the popular arcade game Centipede! As part of a project 
                        for University, I developped a rudimentary version of this game from scratch using just 
                        Assembly. Working with registers and memory was... ummm ... fun!"
                        viewLink=""
                    />

                    <ProjectsBody
                        outerDivStyle={ProjectStyles.ImageHeaderDiv}
                        imgSrc={hypatia_logo}
                        status="Finished (Dec 2020)"
                        type="Personal + School"
                        projectName="Hypatia - FlipMath"
                        projectDesc="Our team worked with HypatiaSys' CheckMath API to build a feature
                        encouraging students to learn from mistakes. Our program gave students incorrect math 
                        solutions and graded their attempts to find and correct the error(s)."
                        viewLink="https://github.com/blckwolf5851/hypatia-peer-eval"
                    />
                </div>
                <div className={ProjectStyles.BodyContent2}>

                    <ProjectsBody
                        outerDivStyle={ProjectStyles.MiddleBox}
                        imgSrc={sports}
                        status="Finished (Mar 2019)"
                        type="Personal + School"
                        projectName="PlayNow"
                        projectDesc="I used HTML, Java and WAMP to solve an everyday problem: occupied 
                        sports facilties in my appartment complex. I built a GUI that let residents register 
                        themselves over WLAN and then prebook sporting facities, find sports buddies, lend/borrow equipment 
                        and even find coaches. Unfortunately, I didn't use GitHub at the time and lost some of my code 
                        base when my laptop crashed. Thankfully, I salvaged most of it, check it out below."
                        viewLink="https://github.com/Vinayak-Gupta-1/PlayNow/"
                    />

                    <ProjectsBody
                        outerDivStyle={ProjectStyles.MiddleBox}
                        imgSrc={radio}
                        status="In progress"
                        type="Personal"
                        projectName="The Revamped RJ"
                        projectDesc="Have you ever been listening to the radio when suddenly there's an advertisement -  you switch 
                        channels to avoid it but this new one has an advertisement on too and then so does the third one!? Well, that's what I'm hoping to
                        solve with this project, a program that automatically switches to channels currently playing music. I haven't had 
                        much luck in executing this and would love to collaborate or hear any ideas, feel free to reach out!"
                        viewLink=""
                    />
                </div>
            </div >
        </div >
    );
}

export default Projects;