import { fetchImages } from "./js/pixabay-api.js";
import { showErrorMessage, showEndPictures, showNoneText, renderImages } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("form");
const images = document.querySelector(".list");


const loader = document.querySelector(".loader");
const loadMore = document.querySelector(".load-more")

const value = document.querySelector("#value");

let page;

let current_query;

const perPage = 15;


function showLoad() {
    loader.style.display = "block";
}

function hideLoad() {
    loader.style.display = "none";
}

function simpleRefresh() {
    new SimpleLightbox('.list li a', {
        captionDelay: 300,
        captions: true,
        captionsData: "alt",
        captionClass: "color-style",
    }).refresh();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    showLoad();

    images.innerHTML = "";
    loadMore.style.display = "none";
    
    const query = value.value.trim();

    if (!query) {
        showNoneText();
        hideLoad();
        return;
    }

    page = 1;

    fetchImages(query, page, perPage)
        .then(arrayImg => {
            if (arrayImg.hits.length === 0) {
                throw new Error("No images found");
            }

           renderImages(images, arrayImg.hits);
           simpleRefresh();
            
        })
        .catch(() => {
            showErrorMessage();
        })
        .finally(() => {
            hideLoad();
            loadMore.style.display = "block";
        });

        current_query = query;
});


loadMore.addEventListener("click", (event) => {
    event.preventDefault();
    showLoad();
    page++;
    fetchImages(current_query, page, perPage)
        .then(arrayImg => {
            const totalHits = arrayImg.totalHits;
            const totalPages = Math.floor(totalHits / perPage);
            if (page > totalPages) {
            showEndPictures();
            loadMore.style.display = "none";
           } else {
            renderImages(images, arrayImg.hits);
            simpleRefresh();
            const cart = document.querySelector('.list li')

            let cartSize = cart.getBoundingClientRect();
            window.scrollBy({
                top: 2.25 * cartSize.height,
                behavior: "smooth",
              });
              
           }
        })
        .catch(() => {
            showErrorMessage();
        })
        .finally(() => {
            hideLoad();
        })
})