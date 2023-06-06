import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
    return (
        <>
            <h1 className='pagename'>List of Shows</h1>
            <div className='allcards'>
                {shows.map((show) => (
                    <div key={show.id} className='card'>
                        <div className='centeringdiv'>
                            <img src={show.image.medium} alt='showImage' />
                        </div>
                        <h2 className='showName'>{show.name}</h2>
                        <p>Genres: {show.genres.join(', ')}</p>
                        <p>Language: {show.language}</p>
                        <div className='centeringdiv'><Link className='Link' to={`/show/${show.id}`}><button className='detbtn'>Details</button></Link></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShowList;
