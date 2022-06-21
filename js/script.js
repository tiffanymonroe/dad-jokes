const dadImage = document.querySelector(".dad-image");

const joke = document.querySelector(".joke");

const button = document.querySelector("button");

const getJoke = async function () {
    const url = "https://icanhazdadjoke.com/";
    const options = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    };

    const request = await fetch(url, options);
    console.log(request);
    const response = await request.json();

    joke.innerText = response.joke;

};

button.addEventListener("click", function(){
  getJoke();
});
