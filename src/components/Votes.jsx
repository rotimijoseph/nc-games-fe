import { useState } from "react"
import { patchByReviewId } from "../utils/utils";

const Votes = ({votes, review_id}) => {
    const [voteOnReview, setVoteOnReview] = useState(0)

    const changeVotes = (change) => {
        setVoteOnReview((currVotes) => currVotes + change);
        patchByReviewId(review_id, change)
    }

    if (voteOnReview === -1) return (
    <div>
    <p>Your dislike of this review has been noted!</p>
    <p><span className="bolded">{votes + voteOnReview} votes</span></p>
    </div>
    )

    if (voteOnReview === 1) return (
    <div>
    <p>Your like of this review has been noted!</p>
    <p><span className="bolded">{votes + voteOnReview} votes</span></p>
    </div>
    )

    return (
    <div className="votes">
        <button disabled={voteOnReview === -1} onClick={() => changeVotes(-1)}> &#11015; -1 </button>
        <p><span className="bolded">{votes + voteOnReview} votes</span></p>
        <button disabled={voteOnReview === +1}onClick={() => changeVotes(1)}> &#11014; +1 </button>
    </div>
    )
}

export default Votes 