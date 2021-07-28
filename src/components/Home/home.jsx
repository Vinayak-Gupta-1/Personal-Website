import HomeStyles from "./Home.module.scss"
import profile_pic from "../../images/profile_pic.jpg"
import hiking from "../../images/hiking.jpg"
import ml_tesla from "../../images/ML.jpg"
import cs_reason from "../../images/CS_temp.jpg"
import SkillBar from 'react-skillbars';
import Header from '../Header/header.jsx'


function Home() {
    const skills = [
        { type: "Python", level: 90 },
        { type: "C", level: 85 },
        { type: "React", level: 80 },
        { type: "Assembly", level: 80 },
        { type: "Java", level: 70 },
        { type: "ML/NLP", level: 65 },
        { type: "R", level: 30 },
    ];
    const colors = {
        bar: "#c6c3ca",
        title: {
            text: "#faed26",
            background: '#5a5560'
        }
    }

    return (
        <div>
            <Header />
            <div className={HomeStyles.BodyDiv}>
                <div className={HomeStyles.HeaderDiv}>
                    <p className={HomeStyles.HeaderText}>
                        <span className={HomeStyles.PreHeaderText}>
                            Welcome to my <span style={{ color: "#faed26" }}>secret lair!</span>< br /></span>
                        <br />
                        I'm a <span style={{ textDecoration: "underline" }}>problem solver</span> <br />and <span style={{ textDecoration: "underline" }}>lifelong learner</span><br />passionate about <span style={{ color: "#faed26" }}>Computer Science</span>
                    </p>
                    <div className={HomeStyles.ImagesDiv}>
                        <img className={HomeStyles.ProfilePicture} src={profile_pic} />
                    </div>
                </div>

                <h2 id="about-me" className={HomeStyles.SubHeaderText} style={{ paddingTop: "5vh" }}>ABOUT ME:</h2>
                <div className={HomeStyles.AboutMeBody}>
                    <p className={HomeStyles.Question}>Who am I?</p>
                    <div className={HomeStyles.AboutMeSubSection}>
                        <p className={HomeStyles.Answer}>
                            My name is Vinayak Gupta - most people call me Vinny. I am a third year Computer Science
                            Specialist at the University of Toronto, also purusing a Statistics Major and Math Minor.
                            When not on campus, I'm back home in India with my family (and dog!). In my spare time I hike in
                            the Himalayas, watch all kinds of sports and play the guitar.  Check out this picture of me on the summit
                            of one of my treks! </p>
                        <img className={HomeStyles.AboutImages} src={hiking} />
                    </div>
                    <p className={HomeStyles.Question}>Why Computer Science?</p>
                    <div className={HomeStyles.AboutMeSubSection}>
                        <p className={HomeStyles.Answer}>Glad you asked! I was drawn to Computer Science because of what I
                            call the "no rabbits out of the hat policy". In other words, as long as you know the syntax, everything
                            else is just logic, you need no special tricks to achieve the extraordinary. It's this thrill of solving
                            frustrating daily problems using everyday logic and basic syntax that I got addcited to.</p>
                        <img className={HomeStyles.AboutImages} src={cs_reason} />
                    </div>
                    <p className={HomeStyles.Question}>What field(s) in Computer Science am I considering?</p>
                    <div className={HomeStyles.AboutMeSubSection}>
                        <p className={HomeStyles.Answer}>I am especially drawn to ML/AI because of the growing impact these fields have on all
                            aspects of our lives, from healthcare/finance to our cars/homes - it's everywhere! That said, I also love learning
                            and implementing all kinds of new languages/software. In fact, over the past summer, I taught myself ReactJS and
                            built a couple websites, including this one!</p>
                        <img className={HomeStyles.AboutImages} src={ml_tesla} />
                    </div>
                    <p className={HomeStyles.Question}>What languages/software am I proficient in?</p>
                    <div className={HomeStyles.Table}>
                        <SkillBar skills={skills} colors={colors} height="6vh" animationDelay="0" animationDuration="2000" />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Home