import ProfileLogo from "../SharedIcons/ProfileLogo";
import "../CreatePost/CreatePost.css"
import { AppContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateNewPost } from "../../APIs/PostAPI";
export default function CreatePost () {

    //const { id } = useParams()
    const id = 1
    const { posts, setPosts, users, loggedInUser } = useContext(AppContext)
    const [newPostContent, setNewPostContent] = useState("")
    
    


    const handleInputChange = (e) => {
        setNewPostContent(e.target.value)
    }

 

    const handleSubmit = async () => {
        const [title, ...contentArray] = newPostContent.split("\n")
        const content = contentArray.join("\n").trim()
        const newPost = {
            title: title.trim(),
            content: content,
            contactId: loggedInUser.id
        }

        try {
            const result = await CreateNewPost("thomaafl", newPost)
            if (result) {
                setNewPostContent(" ")
                setPosts([...posts, newPost])
                console.log(newPost)
                
                
            }
        } catch (error) {
            console.error("Error creating post: ", error);
        }
    }

    return(
        <>
            <div className="create-post">
                <div className="profile-logo-create-post">
                    <ProfileLogo />
                </div>
                <textarea 
                    className="post-input" 
                    placeholder="What's on your mind?" 
                    value={newPostContent} 
                    onChange={handleInputChange}>
                </textarea>
                <button className="create-post-button" onClick={handleSubmit}>Post</button>

            </div>
        
        </>



    )
}