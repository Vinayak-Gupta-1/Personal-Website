import MobileStyles from "./Mobile.module.scss";
import profile_pic from "../../images/profile_pic.jpg"

function Mobile() {
    return (
        <div className={MobileStyles.mobileOuter}>
            <div>
                <img className={MobileStyles.pictureStyle} src={profile_pic} />
                <h2 className={MobileStyles.BodyHeader}>
                    Hi there! <br />
                    I believe you're looking for me...
                </h2>
            </div>
            <div className={MobileStyles.BodyText}>
                <text>
                    Well, the mobile version is still under construction. Until it's ready, I'll be waiting for
                    you on the awesome desktop version instead!< br /><br />
                    Cheers!<br />
                    Vinayak Gupta
                </text>
            </div>
        </div>
    );
}

export default Mobile;
