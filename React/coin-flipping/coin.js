function coinToss(){
    return Math.random() > .5 ? "heads" : "tails";
}

function fiveHeads(){
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5){
            attempts++;
            let result = coinToss();
            console.log(`${result} was flipped`);
            if (attempts > 100){
                reject("It flipped more than 100 times")
                headsCount = 5;
            }
            if (result === "heads") {
                headsCount++;
            }
            else {
                headsCount = 0;
            }
            if (headsCount == 5){
                resolve("It flipped 5 times. Success!")
            }
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err))