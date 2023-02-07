import { useState, useEffect } from "react";
import { getAllReviews } from "../utils/utils";
import { Link } from 'react-router-dom';

const GamesReviews = () => {

    const [gamesReviews, setGamesReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllReviews()
        .then((reviewsFromApi) => {
            setGamesReviews(reviewsFromApi)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p className="loading">Loading...</p>
    return (
        <section>
            <p>A summary of all reviews for the games. For more details on the review, click on the review name! </p>
            <ul>
                {gamesReviews.map(({title, category, review_img_url, votes, review_id}) => {
                    return <li key={review_id} className="allGamesReviews">
                        <Link to={`/reviews/${review_id}`} className="link">"{title}"</Link>, a review for a <span className="bolded">{category}</span> game. &#11014; <span className="bolded">{votes}</span> votes
                    <img src={review_img_url} alt={title}/>
                    </li>
                 })}
            </ul>
        </section>
    )
}

export default GamesReviews;