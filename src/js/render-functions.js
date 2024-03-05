import iziToast from "izitoast";
import Error from "../img/error.svg";

export function showErrorMessage() {
    iziToast.show({
        message: "Sorry, there are no images matching your search query. Please, try again!",
        maxWidth: "340px",
        iconUrl: Error,
        backgroundColor: "#ef4040",
        theme: "dark",
        color: "#fafafb",
        timeout: 3000,
        position: "topRight"
    });
}

export function renderImages(images, arrayImg) {
    images.innerHTML = arrayImg.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `<li class="li-im">
            <a href="${largeImageURL}">
                <img class="image" src="${webformatURL}" alt="${tags}">
            </a>
            <ul class="info">
                <li class="descr">
                    <h2 class="descr-h">Likes</h2>
                    <p class="descr-p">${likes}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Views</h2>
                    <p class="descr-p">${views}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Comments</h2>
                    <p class="descr-p">${comments}</p>
                </li>
                <li class="descr">
                    <h2 class="descr-h">Downloads</h2>
                    <p class="descr-p">${downloads}</p>
                </li>
            </ul>
        </li>`;
    }).join("");
}
