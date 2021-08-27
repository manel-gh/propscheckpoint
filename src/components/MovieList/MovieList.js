import React from 'react'
import MovieCards from '../MovieCards/MovieCards'
function MovieList({movieData}) {
    return (
        <div>
            <h1> {movieData.map((movie)=> (<MovieCards movie={movie}/>))
             }</h1>
            
        </div>
    )
}

export default MovieList
