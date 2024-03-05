const KEY = "42651969-17d73580612059adec8ce0b1d";
const URL = "https://pixabay.com/api/";

export function fetchImages(query) {
    return fetch(`${URL}?key=${KEY}&q=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => data.hits);
}
