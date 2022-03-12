import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetail(props) {

    const mov = props.movie

    return(
        <div>
            { mov ? (
                <div>
                    <h1>{mov && mov.name}</h1>
                    <p>{mov && mov.description}</p>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'orange' : 'no-review'}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'orange' : 'no-review'}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'orange' : 'no-review'}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'orange' : 'no-review'}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'orange' : 'no-review'}/>
                    ({mov.avg_rating})
                </div>
            ) : null}
        </div>
    )
}

export default MovieDetail;