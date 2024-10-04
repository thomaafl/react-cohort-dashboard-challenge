import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../Feed/Post.css"
import Comment from "./Comment";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../App";
export default function Post( { post }) {

    const { users, loggedInUser } = useContext(AppContext)

    const user = users.find(u => u.id === post.contactId)
    if (user === undefined){ //janky, wanna fix this ...
        return
    }
    
    return (
        <>
            <div className="post">
                <div className="post-header">
                    <div className="post-profile-logo" style={{backgroundColor: user.favouriteColour}}>
                        <p className="initial-post" >{user.firstName.charAt(0)}{user.lastName.charAt(0)}</p>
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
                        <div className="your-comment-profile-logo">
                            <p className="initial-your-comment" >{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
                            
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