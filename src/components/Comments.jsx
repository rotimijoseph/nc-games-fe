import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getCommentsByReviewId } from "../utils/utils";
import AddComment from "./AddComment";

const Comments = () => {

    const [comments, setComments] = useState([]);
    const { review_id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByReviewId(review_id)
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
    }, [review_id])

    if (isLoading) return <p className="loading">Loading...</p>
    return (
        <section>
            <p className="comments">Comments</p>
            <AddComment review_id={review_id} setComments={setComments} />
            <ul>
                {comments.map(({body, author, votes, created_at, comment_id}) => {
                    return <li key={comment_id} className="commentsLi">
                        <p>&#128100; <span className="bolded">{author}</span>: {body}</p>
                        <p> <span className="commentDates">{new Date(created_at).toString().slice(0, -30)}</span></p>
                        <p>&#11014; <span className="bolded">{votes}</span></p>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Comments; 