import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getReviewById } from "../utils/utils";

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

    if (isLoading) return <p className="loading">Loading...</p>
    return (
        <section>
            <p className="reviewTitle">"{singleGameReview.title}"</p>
            <p>{singleGameReview.owner} &#128172;</p> 
            <p className="reviewBody">{singleGameReview.review_body}</p>
            <img src={singleGameReview.review_img_url}/>
            <p>{singleGameReview.category}</p>
            <p>&#11014; <span className="bolded">{singleGameReview.votes}</span></p>
            <p>{singleGameReview.desginer}</p>
            <p>{(singleGameReview.created_at)}</p>
        </section>
    )
}

export default SingleGameReview