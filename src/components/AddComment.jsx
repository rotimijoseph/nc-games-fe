import { useState } from "react";
import { postCommentByReviewId } from "../utils/utils";

const AddComment = ({review_id, setComments}) => {

    const [newComment, setNewComment] = useState({});
    const [isPosting, setIsPosting] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        postCommentByReviewId(review_id, newComment).then((commentFromApi) => {
            setComments((currComments) => {
                setIsPosting(true)
                return [commentFromApi, ...currComments]
            })
            setNewComment('')
        });
    };

    if (isPosting) return <p className="posting">Posting... this may take some time, please refresh the page to see your comment</p>
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                id="user" 
                type="text" 
                placeholder="Username (required)" 
                onChange={(event) => setNewComment({...newComment, username: event.target.value})}/>
                <textarea 
                id="body" 
                type="text" 
                rows="2" 
                placeholder="Comment (required)" 
                onChange={(event) => setNewComment({...newComment, body: event.target.value})}/>
                <button className="commentButton" type="submit">Post Comment</button>
            </form>
        </section>
    )
}

export default AddComment;