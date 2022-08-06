let quote = [];


quote = [
    {quote:"There is always light. If only we're brave enough to see it. If only we're brave enough to be it.", author: "Amanda Gorman"},
    {quote:"If you want to lift yourself up, lift up someone else.", author:"Booker T. Washington"},
    {quote:"I have learned not to allow rejection to move me.", author:"Cicely Tyson"},
    {quote:"You are braver than you believe, stronger than you seem, and smarter than you think.", author:" A.A. Milne"},
    {quote:"Attitude is the 'little' thing that makes a big difference.", author:" Winston Churchill"},
    {quote:"All our dreams can come true — if we have the courage to pursue them.", author:" Walt Disney"},
    {quote:"Opportunity is missed by most people because it is dressed in overalls and looks like work.", author:" Thomas Edison"},
    {quote:"Don't sit down and wait for the opportunities to come. Get up and make them.", author:" Madam C.J Walker"},
    {quote:"The people who are crazy enough to think they can change the world are the ones who do.", author:" Steve Jobs"},
    {quote:"I never dreamed about success. I worked for it.", author:" Esteé Lauder"},
    {quote:"Champions keep playing until they get it right.", author:" Billie Jean King"},
    {quote:"We can't help everyone, but everyone can help someone.", author:" Ronald Reagan"},
    {quote:"People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily", author:"Zig Ziglar"},
    {quote:"Someday is not a day of the week.", author:"Denise Brennan-Nelson"},
    {quote:"If you cannot do great things, do small things in a great way.", author:"Napoleon Hill"},
    {quote:"The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are. They are frank in admitting this and are willing to pay for such talents.", author:"Antos Parrish"},
    {quote:"", author:""},
    {quote:"", author:""},
    {quote:"", author:""},
    {quote:"", author:""},
    {quote:"", author:""},
    {quote:"", author:""},
    

]

let weekQuote = document.getElementById('weekQuote');
let weekAuthor = document.getElementById('weekAuthor')




document.getElementById('newQuote').addEventListener('click', displayQuote);

function displayQuote() {
    let script= quote[Math.floor(Math.random() *quote.length)];
    console.log(script);
    
    weekQuote.innerHTML = script["quote"];
    weekAuthor.innerHTML = script["author"];
    
}


let soundBtn = document.querySelector('#sound');
let copyBtn = document.querySelector('#copy');
let twitterBtn = document.querySelector('#twitter');


soundBtn.addEventListener('click', ()=>{
    let utterance = new SpeechSynthesisUtterance(`${weekQuote.innerHTML} by ${weekAuthor.innerHTML}`);
    speechSynthesis.speak(utterance)
});

copyBtn.addEventListener('click', ()=>{
   navigator.clipboard.writeText(weekQuote.innerHTML);
   alert("Copied to clipboard");
});

twitterBtn.addEventListener('click', ()=>{
     let tweetUrl = `https://twitter.com/intent/tweet/?url=${weekQuote.innerHTML}`;
     window.open(tweetUrl, "_blank");
 });










// function copyText() {
//     let copy = document.getElementById("weekQuote").value;
//     navigator.clipboard.writeText(copy).then(() => {
//         // Alert the user that the action took place.
//         // Nobody likes hidden stuff being done under the hood!
//         alert("Copied to clipboard");
//     });
//   }



