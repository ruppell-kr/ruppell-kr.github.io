const quotes = [
    {
        quote: "You cannot change what you are, only what you do.",
        author: "Philip Pullman"
    },
    {
        quote: "Change the way you look at things and the things you look at change.",
        author: "Wayne Dyer"
    },
    {
        quote: "If you run you stand a chance of losing, but if you don’t run you’ve already lost.",
        author: "Barack Obama"
    },
    {
        quote: "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
        author: "Socrates"
    },
    {
        quote: "To improve is to change; to be perfect is to change often.",
        author: "Winston Churchill"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "<"+todaysQuote.author+">";
