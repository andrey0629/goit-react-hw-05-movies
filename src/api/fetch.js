import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export async function fetchGetTrending() {
    try {
        const response = await axios.get('trending/all/day', {
            params: {
                api_key: '5cb6e9282a2abb684a6582f02c841cfd',
                language: 'en-US',

            }
        });
        const { results } = response.data;

        return results;
    } catch (error) {
        console.log('fetchGetTrending:', error.message)
    }
};

export async function fetchSearchMovies(request) {
    try {
        const response = await axios.get(`search/movie?${request}`, {
            params: {
                api_key: '5cb6e9282a2abb684a6582f02c841cfd',
                language: 'en-US',

            }
        })

        return response.data;
    } catch (error) {
        console.log('fetchSearchMovies:', error.message)

    }
};

export async function fetchGetMovieDetails(id) {
    try {
        const response = await axios.get(`movie/${id}`, {
            params: {
                api_key: '5cb6e9282a2abb684a6582f02c841cfd',
                language: 'en-US',
            }
        })
        return response.data;
    } catch (error) {
        console.log('fetchGetMovieDetails:', error.message)

    }
};

export async function fetchGetMovieDetailsCredits(id) {
    try {
        const response = await axios.get(`movie/${id}/credits`, {
            params: {
                api_key: '5cb6e9282a2abb684a6582f02c841cfd',
                language: 'en - US',

            }
        })

        return response.data.cast;
    } catch (error) {
        console.log('fetchGetMovieDetails:', error.message)

    }
};

export async function fetchGetMovieDetailsReviews(id) {
    try {
        const response = await axios.get(`movie/${id}/reviews`, {
            params: {
                api_key: '5cb6e9282a2abb684a6582f02c841cfd',
                language: 'en - US',

            }
        })
        return response.data.results;

    } catch (error) {
        console.log('fetchGetMovieDetails:', error.message)

    }
};
