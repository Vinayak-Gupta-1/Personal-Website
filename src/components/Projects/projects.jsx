import Header from '../Header/header.jsx'
import ProjectStyles from "./Projects.module.scss";

function Projects() {
    return (
        <div >
            <Header />
            <div className={ProjectStyles.BodyDiv}>
                <p className={ProjectStyles.HeaderText}>My Projects</p>
                <div className={ProjectStyles.BodyContent}>
                    <div><p className={ProjectStyles.SubHeaderText}>This Website!</p>
                        <p className={ProjectStyles.BodyText} > Hello my name is vinayak, I like to eat food, I play sports. What do you like to do?</p>
                    </div>
                    <div className={ProjectStyles.MiddleBox}><p className={ProjectStyles.SubHeaderText}>Hypatia - CheckMath</p>
                        <p className={ProjectStyles.BodyText}>Hello my name is vinayak, I like to eat food, I play sports. What do you like to do?</p></div>
                    <div><p className={ProjectStyles.SubHeaderText}>PlayNow</p>
                        <p className={ProjectStyles.BodyText}> Hello my name is vinayak, I like to eat food, I play sports. What do you like to do?</p>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Projects;