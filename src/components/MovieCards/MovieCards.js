 
import React from 'react';
import './MovieCard.css';
import Rating from './Rating';

function MovieCards({movie}) {
      return (
        <div>
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_datails">
                <h1>{movie.name}</h1>
                <div className="card_cat">
                  <p className="year">{movie.date}</p>
                  <p className="genre">{movie.type} </p>
                </div>
                <p className="disc">{movie.description}</p>
                <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
                <Rating rating={movie.rating}/>
                <div className="social-btn">
                  {/* WATCH TRAILER*/}
                  <button>
                    <i className="fas fa-play" /> SEE TRAILER
                  </button>
                 
                 
                </div>	
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={movie.image} alt="" />
              </div>
              <div className="play_btn">
                <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                  <i className="fas fa-play-circle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FOLLOW */}
        <a className="Follow" href="https://codepen.io/ZaynAlaoudi/" target="blank_" />
      </div>
      );
    }
  ;
  export default MovieCards;