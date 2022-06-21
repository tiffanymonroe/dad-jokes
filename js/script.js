const dadImage = document.querySelector(".dad-image");

const card = document.querySelector(".card");
const joke = document.querySelector(".joke");

const button = document.querySelector("button");

const getJoke = async function () {

  // make api request
    const url = "https://icanhazdadjoke.com/";
  // change accept and content-type in headers
    const options = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    };

    const request = await fetch(url, options);
    console.log(request);
    const response = await request.json();
    console.log(response);
  // display joke
    joke.innerText = response.joke;


};

const getRandomImage = function () {
  // put dad images in array
  const dadImages = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
    "img/10.png",
    "img/11.png",
    "img/12.png",
    "img/13.png",
    "img/14.png",
    "img/15.png",
    "img/16.png",
    "img/17.png",
    "img/18.png",
    "img/19.png",
    "img/20.png",
    "img/21.png"
  ]

  const randomIndex = Math.floor( Math.random() * dadImages.length);

  // display random image
  dadImage.innerHTML = `<img src="${dadImages[randomIndex]}" alt="Black and white cartoon Hipster Dad" class="img-fluid">`;
};

button.addEventListener("click", function(){
  getJoke();
  getRandomImage();
});

// getRandomImage();
