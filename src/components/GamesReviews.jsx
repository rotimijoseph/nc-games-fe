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
            <p>Welcome! Find below reviews for all different types of games. For more details on the review, click on the name of the review! </p>
            <ul className="allGamesReviews">
                {gamesReviews.map(({title, category, review_img_url, votes, review_id}) => {
                    return <li key={review_id}>
                        <Link to={`/reviews/${review_id}`} className="link"><span className="bolded">{title}</span>. 
                    <p><img src={review_img_url} alt={title}/></p></Link>
                    <span className="bolded"> {votes}</span> votes for this <span className="bolded">{category}</span> game
                    </li>
                 })}
            </ul>
        </section>
    )
}

export default GamesReviews;