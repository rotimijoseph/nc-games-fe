import axios from 'axios';

const gamesAPI = axios.create({
    baseURL: "https://dizzy-whizzy-nc-games.onrender.com/api"
})

export const getAllReviews = () => {
    return gamesAPI
    .get("/reviews")
    .then((response) => {
        return response.data
    })
}

export const getReviewById = (review_id) => {
    return gamesAPI
    .get(`/reviews/${review_id}`)
    .then((response) => {
        return response.data
    })
}