import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

async function fetchMoviesByGenre(genreID) {
  try {
    if (!API_KEY) {
      throw new Error(
        "API key is missing. Please ensure the environment variable is set correctly."
      );
    }

    const { data } = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        with_genres: genreID,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
      },
    });

    return data;
  } catch (error) {
    console.error("Error Message:", error.message);
  }
}

export default fetchMoviesByGenre;
