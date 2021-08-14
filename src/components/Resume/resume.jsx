import Header from '../Header/header.jsx'
import ResumeStyles from "./Resume.module.scss"
import oise from "../../images/oise_logo.jpg"
import badminton from "../../images/badminton.jpg"
import plastic from "../../images/plastic.jpg"
import blanche from "../../images/Blanche.png"
import jio from "../../images/Jio.png"
import RIL from "../../images/Reliance.png"

function ResearchBody(props) {
    const outerDivStyle = props["outerDivStyle"];
    const imgSrc = props["imgSrc"];
    const status = props["status"];
    const type = props["type"];
    const projectName = props["projectName"];
    const projectDesc = props["projectDesc"];
    const viewLink = props["viewLink"]
    if (viewLink === "") {
    }
    else if (viewLink === "https://www.oise.utoronto.ca/ejanglab/research/balanceai/") {
        var view = <a className={ResumeStyles.ViewProjectText} href={viewLink} target="_blank">Know More</a>
    }
    else {
        var view = <a className={ResumeStyles.ViewProjectText} href={viewLink} target="_blank">Read Paper</a>
    }
    return (
        < div className={outerDivStyle}>
            <img className={ResumeStyles.Image} src={imgSrc} />
            <p className={ResumeStyles.MiniHeaderText}> <span style={{ textDecoration: "underline" }}> Status:</span> {status} <span style={{ textDecoration: "underline", paddingLeft: "1vh" }}> <br />Type:</span> {type}</p>
            <p className={ResumeStyles.SubHeaderText}>{projectName}</p>
            <p className={ResumeStyles.BodyText}>{projectDesc}</p><br />
            {view}
        </div >
    )
}

function ExperienceBody(props) {
    const outerDivStyle = props["outerDivStyle"];
    const imgSrc = props["imgSrc"];
    const duration = props["duration"];
    const location = props["location"];
    const company = props["company"];
    const role = props["role"]
    const roleDesc = props["roleDesc"];
    const viewLink = props["viewLink"]
    if (viewLink === "") {
    }
    else {
        var view = <a className={ResumeStyles.ViewProjectText} href={viewLink} target="_blank">View Work</a>
    }
    return (
        < div className={outerDivStyle}>
            <img className={ResumeStyles.Image} src={imgSrc} />
            <p className={ResumeStyles.MiniHeaderText}> <span style={{ textDecoration: "underline" }}> Duration:</span> {duration} <span style={{ textDecoration: "underline", paddingLeft: "1vh" }}> <br />Location:</span> {location}</p>
            <p className={ResumeStyles.SubHeaderText}>{company}</p>
            <p className={ResumeStyles.SubHeaderText2}>{role}</p>
            <p className={ResumeStyles.BodyText}>{roleDesc}</p><br />
            {view}
        </div >
    )
}


function Resume() {
    return (
        <div >
            <Header />
            <div className={ResumeStyles.BodyDiv}>
                <p className={ResumeStyles.IntroText}>
                    Everyone has a story... a series of events and choices that lead them down a path.
                    Here I list a couple of my experiences, what I learnt from them and where they took me.
                    I hope you enjoy reading about them as much as I did experiencing them...
                </p>
                <p className={ResumeStyles.HeaderText}>Research</p>
                <div className={ResumeStyles.BodyContent}>
                    <ResearchBody
                        outerDivStyle={ResumeStyles.ImageHeaderDiv}
                        imgSrc={oise}
                        status="In Progress (Sept 2020 - )"
                        type="Professional"
                        projectName="Automated Language Scoring"
                        projectDesc="I have been working as a Machine Learning Research Assistant at the Ontario Institute for Studies 
                        in Education under Professor Eunice Jang. I train models to score language and cognitive activities
                        for middle schoolers. Examples of some of these activities include oral reading fluency, picture description 
                        and task fullfilment. I've worked extensively with NLP libraries such as spacy, LSA, PyDictionary and
                        even myprosody. To know more about the research and how the generated scores are used, follow the link below."
                        viewLink="https://www.oise.utoronto.ca/ejanglab/research/balanceai/"
                    />

                    <ResearchBody
                        outerDivStyle={ResumeStyles.MiddleBox}
                        imgSrc={badminton}
                        status="Finished (Mar 2019)"
                        type="Personal + School"
                        projectName="Badminton Analysis - Angle of Shot"
                        projectDesc="I have been playing badminton for 8 years now. In badminton
                        the choice of shot is fundamental in deciding whether you win or lose the point. For me personally, 
                        the toughest time to choose the right shot is when I have been “beaten” and I'm made to stretch to reach 
                        the shuttle behind me. To end my dilemma once and for all, I used calculus, formulae of motion 
                        and a little inititiative to determine the best shot and angle to use in exactly this situation. Feel free 
                        to check out the paper below."
                        viewLink="https://drive.google.com/file/d/1gRJExkSF5ZTl3-WBv5teSmhQHCa8ydCw/view?usp=sharing"
                    />

                    <ResearchBody
                        outerDivStyle={ResumeStyles.ImageHeaderDiv}
                        imgSrc={plastic}
                        status="Finished (Mar 2019)"
                        type="Personal + School"
                        projectName="Plastic Bag Ban - Economic Analysis"
                        projectDesc="With plastic bags becoming an increasing menace to society, several governments have 
                        resorted to legislation to curb its negative effects. In June 2018, my home state of Maharashtra
                        imposed a complete ban on the manufacturing, use, sale, distribution and storage of plastic bags. 
                        Knowing the massive dependance on plastic in India, I was prompted to investigate the impact this ban 
                        could have on local economy. I wrote a 3996 word research paper looking into the effectiveness and 
                        impact of the ban on various stakeholders."
                        viewLink="https://drive.google.com/file/d/1B29Hs2jT5EPD8pEgxPhu8mvqvrbEq3Oz/view?usp=sharing"
                    />
                </div>
                <p className={ResumeStyles.HeaderText}>Experience</p>
                {<div className={ResumeStyles.BodyContent}>
                    <ExperienceBody
                        outerDivStyle={ResumeStyles.ImageHeaderDiv}
                        imgSrc={blanche}
                        duration="May - Aug 2021"
                        location="Toronto, ON"
                        company="Blanche Media"
                        role="Front End Lead"
                        roleDesc=""
                        viewLink="https://octane.blanchelabs.com/"
                    />

                    <ExperienceBody
                        outerDivStyle={ResumeStyles.ImageHeaderDiv}
                        imgSrc={jio}
                        duration="May - Aug 2020"
                        location="Mumbai, MH"
                        company="Reliance Jio"
                        role="Machine Learning Intern"
                        roleDesc=""
                        viewLink=""
                    />

                    <ExperienceBody
                        outerDivStyle={ResumeStyles.ImageHeaderDiv}
                        imgSrc={RIL}
                        duration="Jul 2018"
                        location="Mumbai, MH"
                        company="Reliance Industries Limited"
                        role="Student Trainee"
                        roleDesc=""
                        viewLink="https://github.com/Vinayak-Gupta-1/ML-Projects-2018"
                    />
                </div>}
                {/* <p className={ResumeStyles.HeaderText}>Hobbies & Activities</p> */}
            </div>
        </div >
    );
}

export default Resume;