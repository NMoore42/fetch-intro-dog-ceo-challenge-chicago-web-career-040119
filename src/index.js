console.log('%c HI', 'color: firebrick')

let ul = document.querySelector("ul");
let dropdown = document.querySelector("#breed-dropdown");

function filterBreeds() {
  let liCollection = document.querySelectorAll("li");
  console.log(event.target.value)
  for (li of liCollection) {
    li.innerHTML[0].toLowerCase() === event.target.value ? li.style.display = "list-item" : li.style.display = "none"
  }
}

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then( resp => resp.json())
  .then( dogs => {
    dogArr = dogs.message;
    for (let dog of dogArr) {
      let img = document.createElement("img");
      img.src = dog;
      document.body.appendChild(img);
    };
  });

  fetch("https://dog.ceo/api/breeds/list/all")
    .then( resp => resp.json())
    .then( dogs => {
      dogArr = dogs.message;
      document.body.appendChild(ul);
      for (let dog in dogArr) {
        let li = document.createElement("li")
        li.innerHTML = dog
        ul.appendChild(li)
      }
    });

ul.addEventListener("click", (e) => e.target.style.color = "tomato")
dropdown.addEventListener("change", filterBreeds)
