import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getReviewById } from "../utils/utils";
import Comments from "./Comments";
import Votes from "./Votes";

const SingleGameReview = () => {

    const [singleGameReview, setSingleGameReview] = useState({});
    const { review_id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviewById(review_id)
        .then((singleReviewFromApi) => {
            setSingleGameReview(singleReviewFromApi)
            setIsLoading(false)
        })
    }, [review_id])
    
    const dateString = singleGameReview.created_at
    const newDate = new Date(dateString)
    const date = newDate.toString().slice(0, -30)

    if (isLoading) return <p className="loading">Loading...</p>
    return (
        <section>
            <p className="reviewTitle">"{singleGameReview.title}"</p>
            <p>{singleGameReview.owner} &#128172;</p> 
            <p className="reviewBody">{singleGameReview.review_body}</p>
            <img src={singleGameReview.review_img_url} alt={singleGameReview.title}/>
            <p>Designer: {singleGameReview.designer}</p>
            <p>{singleGameReview.category}</p>
            <Votes votes={singleGameReview.votes} review_id={review_id}/>
            <p>{date}</p>
            <Comments />
        </section>
    )
}

export default SingleGameReview