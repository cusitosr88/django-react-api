import React from "react";

function MovieDetail(props) {

    return(
        <div>
            { props.movie ? (
                <div>
                    <h1>{props.movie && props.movie.name}</h1>
                    <p>{props.movie && props.movie.description}</p>
                </div>
            ) : null}
        </div>
    )
}

export default MovieDetail;