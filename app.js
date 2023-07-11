//https://icanhazdadjoke.com/api

const jokeBtn = document.querySelector('.submit');
const joke = document.querySelector('.content');
const soundBtn = document.querySelector('.volume');

jokeBtn.addEventListener('click', getJoke)

async function getJoke(){
    const jokeURL = 'https://icanhazdadjoke.com/'
    const response = await fetch(jokeURL, { 
        headers: {
            Accept: 'application/json'
        }
    });
    //console.log(response);
    const responseData = await response.json();
    //console.log(responseData);
    joke.innerText = responseData.joke;
}

soundBtn.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${joke.innerText}`);
    speechSynthesis.speak(utterance);
});