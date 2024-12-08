import axios from "axios";

export const apiClient = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    headers: {
        'x-rapidapi-key': '9324837c5fmsha0085ed90034ac9p1b4088jsndf51e170cb0b',
        'x-rapidapi-host': 'trivia-questions-api.p.rapidapi.com'
      }
})