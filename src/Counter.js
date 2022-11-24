import { useState } from 'react';

export function Counter() {
    let [like, setLike] = useState(0);
    const likeColor = {
        color: like >= 10 ? "red" : "green"
    };
    let [dislike, setDislike] = useState(0);
    const dislikeColor = {
        color: dislike >= 5 ? "red" : "green"
    };
    return (

        <div className='like-dislike-button'>
            {like - dislike >= 10 ? <h3>"You are awesome" </h3> : null}

            <button className='like-button' style={likeColor} onClick={() => setLike(like + 1)}>{like}👍</button>
            <button style={dislikeColor} onClick={() => setDislike(dislike + 1)}>{dislike}👎</button>
        </div>

    );
}
