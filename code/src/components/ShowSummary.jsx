import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowSummary = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setShow(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);

    if (!show) {
        return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
    }

    const handleBookTicket = () => {
        // We can store the movie name in local/session storage or use this in database
    };
    return (
        <div className='summarypage'>
            <div className='summary'>
                <h1>Show Summary</h1>
                <img src={show.image.medium} alt='showImage' />
                <h2>{show.name}</h2>
                <p>{show.summary}</p>
                <h3>Genres: {show.genres.join(', ')}</h3>
                <h3>Language: {show.language}</h3>
                <h3>Status: {show.status}</h3>
                <h3>Average Rating: {show.rating.average}</h3>
                <h3>Schedule: {show.schedule.time} ({show.schedule.days.join(', ')})</h3>
                <h3>Network: {show.network.name}</h3>
                <h3>Official Site: <a href={show.officialSite}>{show.officialSite}</a></h3>
                <button style={{border : "2px solid white"}} className="book-ticket-btn" onClick={handleBookTicket}>
                    Book Ticket
                </button>

                <Link to="/" className='Link'>
                    <button className='detbtn'>
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ShowSummary;
