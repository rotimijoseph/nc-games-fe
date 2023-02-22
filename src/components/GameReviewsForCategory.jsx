import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";
import { Link } from "react-router-dom";

const GameReviewsForCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategories()
        .then((categoryFromAPI) => {
            setCategory(categoryFromAPI)
        })
    }, [])

    return (
        <section >
            <p>For reviews by category, see below!</p>
            {category.map((cat, index) => {
            return <ul ><Link className="individualCategory" key={index} to={`/${cat.slug}`}>{cat.slug}</Link></ul>;
        })}
        </section>
    )
}

export default GameReviewsForCategory