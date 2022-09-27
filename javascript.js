const img = document.querySelector("img");
const button = document.querySelector("button");
const search = document.querySelector("#search");
let searchStr = "";
async function getGif(term) {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=9ynI9lp8uvWCD3vG0c0BjLQlqBu0MVon&s=" +
      term,
    {
      mode: "cors",
    }
  );
  const responseData = await response.json();
  img.src = responseData.data.images.original.url;
}

button.addEventListener("click", () => {
  if (searchStr == "") {
    getGif("random");
  } else {
    getGif(searchStr).catch(function (error) {
      alert("no gif found");
    });
  }
});
search.addEventListener("input", () => {
  if (search.value.length === 0) {
    search.placeholder = "Empty search";
  } else {
    searchStr = search.value;
  }
});
Window.onload(getGif("welcome"));
