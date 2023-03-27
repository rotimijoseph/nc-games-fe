import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://dizzy-whizzy-nc-games.onrender.com/api",
});

export const getAllReviews = () => {
  return gamesAPI.get("/reviews").then((response) => {
    return response.data;
  });
};

export const getReviewById = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}`).then((response) => {
    return response.data;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}/comments`).then((response) => {
    return response.data;
  });
};

export const patchByReviewId = (review_id, votesChange) => {
  const patchBody = {
    inc_votes: votesChange,
  };
  return gamesAPI.patch(`/reviews/${review_id}`, patchBody);
};

export const postCommentByReviewId = (review_id, newComment) => {
  const postBody = {
    username: newComment.username,
    body: newComment.body,
  };

  return gamesAPI.post(`/reviews/${review_id}/comments`, postBody);
};

export const getCategories = () => {
  return gamesAPI.get("/categories").then((response) => {
    return response.data;
  });
};

export const getAllReviewsByCategory = (cat) => {
  return gamesAPI.get(`/reviews?category=${cat}`).then((response) => {
    console.log(response.data, "this is my data");
    return response.data;
  });
};
