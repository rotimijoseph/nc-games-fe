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