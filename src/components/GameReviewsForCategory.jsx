import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";
import { Link } from "react-router-dom";

const GameReviewsForCategory = () => {
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCategories()
        .then((categoryFromAPI) => {
            setIsLoading(false)
            setCategory(categoryFromAPI)
        })
    }, [])

    if (isLoading) return <p className="loading">Loading...</p>
    return (
        <section className="categoryTypes">
            <p>For reviews by category, see below!</p>
            {category.map((cat, index) => {
            return <ul ><Link className="individualCategory" key={index} to={`/${cat.slug}`}>{cat.slug}</Link></ul>;
        })}
        </section>
    )
}

export default GameReviewsForCategory