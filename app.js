//https://icanhazdadjoke.com/api

const jokeBtn = document.querySelector('.submit');
const joke = document.querySelector('.content');
const soundBtn = document.querySelector('.volume');
const copyBtn =document.querySelector('.copy');
const body = document.querySelector('body'),
    container = document.querySelector('.container'),
    btnSwitch = document.querySelector('.toggle');

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

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(joke.innerText);
    copyBtn.classList.add("active");
    setTimeout(function(){
        copyBtn.classList.remove("active");
    },1200);
});

let getMode = localStorage.getItem('mode');
if(getMode && getMode === 'dark'){
    body.classList.add('dark');
    btnSwitch.classList.add('active');
}
//console.log(getMode);

btnSwitch.addEventListener('click', () => {
   body.classList.toggle('dark'),
   container.classList.toggle('dark');
   
   if(!body.classList.contains('dark')){
        return localStorage.setItem('mode','light');
   }
   localStorage.setItem('mode','dark');
});

btnSwitch.addEventListener('click', () =>
   btnSwitch.classList.toggle('active'));

