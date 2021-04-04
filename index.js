// Code your solutions in this file

// const namesArray = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(namesArray, surprise ) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!` )
    }
    return thankYouCards
}

function countDown(startingNum = 10) {
    while (startingNum > 0) {
        console.log( startingNum )
        startingNum -= 1
    }
    console.log(startingNum)
}