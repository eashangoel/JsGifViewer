const img = document.querySelector("img");
const button = document.querySelector("button");
const search = document.querySelector("#search");
let searchStr = "";
button.addEventListener("click", () => {
  if (searchStr == "") {
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=9ynI9lp8uvWCD3vG0c0BjLQlqBu0MVon&s=random",
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log("random");
        img.src = response.data.images.original.url;
      });
  } else {
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=9ynI9lp8uvWCD3vG0c0BjLQlqBu0MVon&s=" +
        searchStr,
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log("searched");
        img.src = response.data.images.original.url;
      })
      .catch(function (error) {
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
Window.onload(
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=9ynI9lp8uvWCD3vG0c0BjLQlqBu0MVon&s=welcome",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log("initial random");
      img.src = response.data.images.original.url;
    })
);
