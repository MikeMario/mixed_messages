//random number generator to be used throughout code
const genRandomNumber = num => {
    return Math.floor(Math.random() * num)
}
//define dayTypes
const dayType = ['Productive', 'Lazy']

//select a random type of day
    let getDayType = genRandomNumber(dayType.length)
    console.log(dayType[getDayType])

//establish advice
const allAdvice = {
    prodAdvice: ['pA1', 'pA2', 'pA3', 'pA4'],
    lazyAdvice: ['lA1', 'lA2', 'lA3', 'lA4', 'lA5'],
}

// for (let obj in allAdvice) {
//     let selectedIdx = genRandomNumber(allAdvice[obj].length)
//     console.log(allAdvice[obj][selectedIdx])
// }

// let todaysMessage = [] // resulting array

console.log(`This will be the message displayed`)