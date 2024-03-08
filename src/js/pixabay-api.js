import axios from "axios";

const KEY = "42651969-17d73580612059adec8ce0b1d";
const URL = "https://pixabay.com/api/";

export async function fetchImages(query, page, perPage) {
        const response = await axios.get(`${URL}?key=${KEY}&q=${query}&page=${page}&per_page=${perPage}`);
        return await response.data;

}
