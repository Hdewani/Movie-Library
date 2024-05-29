
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../Components/MovieList';
import MovieListHeading from '../Components/MovieListHeading';
import SearchBox from '../Components/SearchBox';
import AddFavourite from '../Components/AddFavourite';
import RemoveFavourites from '../Components/RemoveFavourites';

const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        navigate("/login");
    }

    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('Avengers');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

        try {
            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error('Failed to fetch movies', error);
            setMovies([]);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4 m-2'>
                <MovieListHeading heading='Movies' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                <div className='row user-row'>

                    <h6>
                        <svg
                            width='2em'
                            height='2em'

                            viewBox='0 0 18 18'
                            class='bi bi-person-fill'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z'
                            />
                        </svg>
                        {userName.name}</h6>
                    <button
                        onClick={handleLogout}
                        type='button'
                        className='logout-button'
                    > Logout </button>
                </div>
            </div>
            <div className='row'>
                <MovieList
                    movies={movies}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourite}
                />
            </div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Favourites' />
            </div>
            <div className='row'>
                <MovieList
                    movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites}
                />
            </div>
        </div>
    );
}

export default Home;



