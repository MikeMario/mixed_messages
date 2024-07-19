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

let dailyQuote = console.log(`This will be a daily quote to be displayed`)


//I can't focus with you bitches talking lol