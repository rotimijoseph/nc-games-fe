import { useState, useEffect } from "react";
import { getAllReviewsByCategory } from "../utils/utils";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const ReviewByCategory = () => {

    const [gamesReviews, setGamesReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { category } = useParams();

    console.log(category)
    console.log("are we here?")

    useEffect(() => {
            getAllReviewsByCategory(category)
            .then((reviewsFromApi) => {
                setGamesReviews(reviewsFromApi)
                setIsLoading(false)
                console.log(reviewsFromApi)
            })
    }, [category])

    if (isLoading) return <p className="loading">Loading...</p>
    if (category) return (
        <section>
            <p>All the reviews for {category} games! For more details on the review, click on the name! </p>
            <ul className="allGamesReviews">
                {
                    gamesReviews.filter((game) => {
                        return game.category === category
                    }).map((review) => {
                    return <li key={review.review_id}>
                    <Link to={`/reviews/${review.review_id}`} className="link"><span className="bolded">{review.title}</span>. 
                    <p><img src={review.review_img_url} alt={review.title}/></p></Link>
                    <span className="bolded"> {review.votes}</span> votes for this game
                    </li>
                 })}
            </ul>
        </section>
    )
}

export default ReviewByCategory