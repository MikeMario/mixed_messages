//random number generator to be used throughout code
const genRandomNumber = num => {
    return Math.floor(Math.random() * num)
};
//define dayTypes
const dayType = ['Productive', 'Lazy'];

//select a random type of day
    let getDayTypeIdx = genRandomNumber(dayType.length);
    let getDayType = dayType[getDayTypeIdx];

//establish advice
const allAdvice = {
    prodAdvice: ["Stay hydrated and eat healthy snacks.",
        "Declutter your workspace for better focus.",
        "Spend 30 minutes planning your week ahead.",
        "Tackle a challenging task first thing in the morning.",
        "Break down a big project into smaller, manageable tasks.",
        "Organize your digital files and folders.",
        "Set a timer and work in focused intervals with short breaks.",
        "Reach out to a colleague or client you've been meaning to follow up with."],
    lazyAdvice: ["Read a book you enjoy.", 
        "Take a long, relaxing bath.", 
        "Watch a movie or binge-watch a show.",
        "Listen to your favorite music or podcast.",
        "Have a nap and recharge.",
        "Go for a leisurely walk.",
        "Indulge in a hobby or craft.",
        "Cook a delicious meal or treat.",
        "Meditate or practice mindfulness.",
        "Catch up with friends or family."],
};

const quotes = [
    "Believe you can and you're halfway there.", "Act as if what you do makes a difference. It does.", "Success is not final, failure is not fatal: It is the courage to continue that counts.", "The only limit to our realization of tomorrow is our doubts of today.", "Your present circumstances don't determine where you can go; they merely determine where you start.", "The only way to achieve the impossible is to believe it is possible.", "You are never too old to set another goal or to dream a new dream.", "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "It does not matter how slowly you go as long as you do not stop.", "Happiness is not something ready made. It comes from your own actions.", "Keep your face always toward the sunshine—and shadows will fall behind you.", "The only person you are destined to become is the person you decide to be.", "Don’t watch the clock; do what it does. Keep going.", "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "The future belongs to those who believe in the beauty of their dreams."

]

if (getDayType === "Productive") {
    console.log(`You should have a Productive Day today.`)
    console.log(`Productive Day Advice: ${allAdvice.prodAdvice[genRandomNumber(allAdvice.prodAdvice.length)]}`)
} else {
    console.log(`You should have a Lazy Day today.`)
    console.log(`Lazy Day Advice: ${allAdvice.lazyAdvice[genRandomNumber(allAdvice.lazyAdvice.length)]}`)
};


// for (let obj in allAdvice) {
//     let selectedIdx = genRandomNumber(allAdvice[obj].length)
//     console.log(allAdvice[obj][selectedIdx])
// }

// let todaysMessage = [] // resulting array



let dailyQuote = console.log(`Daily Quote: "${quotes[genRandomNumber(quotes.length)]}"`)


//I can't focus with you bitches talking lol