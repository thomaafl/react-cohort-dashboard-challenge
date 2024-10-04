import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../Feed/Post.css"
import Comment from "./Comment";
import { useContext, useState, useEffect } from "react";
import { GetUserById } from "../../APIs/UserAPI";
import { AppContext } from "../../../App";
export default function Post( { post }) {

    const { users } = useContext(AppContext)

    const user = users.find(u => u.id === post.contactId)
    if (user === undefined){ //janky, wanna fix this ...
        return
    }
    
    return (
        <>
            <div className="post">
                <div className="post-header">
                    <div className="post-profile-logo">
                        <ProfileLogo />
                    </div>
                    <div className="post-top-info">
                        <span className="post-username">{user.firstName} {user.lastName}</span>
                        <span className="post-title">{post.title}</span>
                    </div>
                </div>

                <div className="post-content">
                    <p>{post.content}</p>
                </div>
                <hr className="post-divider" /> 

                <div className="post-comment-section">

                    
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