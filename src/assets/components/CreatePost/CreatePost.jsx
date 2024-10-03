import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../CreatePost/CreatePost.css"

export default function CreatePost () {

    return(
        <>
            <div className="create-post">
                <div className="profile-logo-create-post">
                    <ProfileLogo />
                </div>
                <textarea className="post-input" placeholder="What's on your mind?"></textarea>
                <button className="create-post-button">Post</button>

            </div>
        
        </>



    )
}