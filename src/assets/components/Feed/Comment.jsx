import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../Feed/Comment.css"

export default function Comment() {
    return(
        <>
            <div className="comment">
                <div className="comment-profile-logo">
                    <ProfileLogo />
                </div>
                <div className="comment-content">
                    <span className="comment-username">Dennis Osmani</span>
                    <div className="comment-text">hei fin post!!</div>
                </div>

            </div>
        </>
    )
}