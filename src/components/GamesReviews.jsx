import { useState, useEffect } from "react";
import { getAllReviews } from "../utils/utils";

const GamesReviews = () => {

    const [gamesReviews, setGamesReviews] = useState([])

    useEffect(() => {
        getAllReviews()
        .then((reviewsFromApi) => {
            setGamesReviews(reviewsFromApi)
        })
    }, [])

    return (
        <section class="mainPageReviews">
            <p>A summary of all reviews for the games. For more details on the review, click on the review name! </p>
            <ul>
                {gamesReviews.map(({title, category, review_img_url, votes}, index) => {
                    return <li key={index}>{title} is a review for a {category} game. It was given {votes} votes. 
                    <img src={review_img_url} alt={title}/>
                    </li>
                    
                 })}
            </ul>
        </section>
    )
}

export default GamesReviews;