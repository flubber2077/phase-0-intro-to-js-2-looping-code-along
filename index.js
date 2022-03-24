// Code your solutions in this file

function writeCards(names){
    const nameArray = [];
    for (let i = 0; i < names.length; i++){
        nameArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return nameArray;
}

function countDown(posint){
    while (posint >= 0){
        console.log(posint);
        posint--;
    }
}