const generateQuoteBtn=document.getElementById("quoteBtn");
const qouteOutput=document.getElementById("qouteOutput");
const authorOutput=document.getElementById("authorOutput");




generateQuoteBtn.addEventListener("click", generateQuote);


const arrayOfQuotes=[
    {
        author:"Nelson Mandela",
        quote:'Education is the most powerful weapon which you can use to change the world.'
    },
    {
        author:'Nelson Mandela',
        quote:'When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw'
    },
    {
        author:'Nelson Mandela',
        quote:'A good head and good heart are always a formidable combination. But when you add to that a literate tongue or pen, then you have something very special'
    },
    {
        author:'Nelson Mandela',
        quote:'It always seems impossible until it done.'
    },
    {
        author:'Nelson Mandela',
        quote:'Resentment is like drinking poison and then hoping it will kill your enemies.'
    },
    {
        author:'Nelson Mandela',
        quote:'I am not a saint, unless you think of a saint as a sinner who keeps on trying.'
    },
    {
        author:'Nelson Mandela',
        quote:'Education is the most powerful weapon which you can use to change the world.'
    },
    {
        author:'Nelson Mandela',
        quote:'Education is the most powerful weapon which you can use to change the world.'
    },
   

];

function generateQuote(){
    let random=Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    qouteOutput.innerHTML=`<span>${arrayOfQuotes[random].qoute}</span>`;
    authorOutput.innerHTML=`<small>${arrayOfQuotes[random].author}</small>`;
}
