import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetail(props) {

    let mov = props.movie
    const [overstar, setOverstar] = useState(-1)

    const overstarRate = star => evt => {
        setOverstar(star);
    }
    const rateClick =  star => evt => {
        fetch(`http://localhost:8000/api/movies/${mov.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token dcf3c583643e5da4d21e2ef236d75d56116998fc'
            },
            body: JSON.stringify({stars: star + 1})
        })
        .then(resp => resp.json())
        .then(resp => getDetails())
        .catch(e => console.log(e))
    }
    const getDetails = () => {
        fetch(`http://localhost:8000/api/movies/${mov.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token dcf3c583643e5da4d21e2ef236d75d56116998fc'
            }
        })
        .then(resp => resp.json())
        .then(resp => props.updateMovie(resp))
        .catch(e => console.log(e))
    }
    return(
        <React.Fragment>
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
                    <div className="rate-container">
                        <h2>Rate it</h2>
                        {[...Array(5)].map((e, i) => {
                            return <FontAwesomeIcon icon={faStar} className={overstar > i - 1 ? 'orange' : 'no-review'} key={i}
                                        onMouseEnter={overstarRate(i)}
                                        onMouseLeave={overstarRate(-1)}
                                        onClick={rateClick(i)}
                                    />
                        })}
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default MovieDetail;