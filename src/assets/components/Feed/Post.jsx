import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../Feed/Post.css"
import Comment from "./Comment";
export default function Post() {


    return (
        <>
            <div className="post">
                <div className="post-header">
                    <div className="post-profile-logo">
                        <ProfileLogo />
                    </div>
                    <div className="post-top-info">
                        <span className="post-username">Thomas Flier</span>
                        <span className="post-title">post x</span>
                    </div>
                </div>

                <div className="post-content">
                    <text>bla bla bla bla bla bla bla bla</text>
                </div>
                <hr className="post-divider" /> 

                <div className="post-comment-section">

                    <Comment />
                    <Comment />
                    
                    <div className="your-comment">
                        <div className="comment-profile-logo">
                            <ProfileLogo />
                        </div>
                        <input
                            type = "text"
                            placeholder="Write a comment..."
                            className="comment-input">    
                        </input>

                        <button className="comment-button">Comment</button>
                    </div>


                </div>
                

            </div>
        </>
    )
    
}