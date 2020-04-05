function economicalBowlersIn2015(matches,deliveries) {
    const result = [];
    const finalResult = [];
    let bowlerRun = {};
    let bowlerBall = {};
    // It's for calculate the economy rates
    for (match of matches) {
        let year = match.season;
        let id = match.id;
        
        for (delivery of deliveries) {
            let match_id = delivery.match_id;
            let total_runs = (parseInt(delivery.total_runs) - (parseInt(delivery.bye_runs) + parseInt(delivery.legbye_runs) + parseInt(delivery.penalty_runs)));
            let bowler = delivery.bowler;
            let wide_runs = parseInt(delivery.wide_runs);
            let noball_runs = parseInt(delivery.noball_runs);
            if ((id === match_id) && (year === '2015')) {
                if (bowlerRun[bowler]) {
                    bowlerRun[bowler] += total_runs;
                } else {
                    bowlerRun[bowler] = total_runs;
                }
                let count = wide_runs + noball_runs;
                if (count === 0) {
                    if (bowlerBall[bowler]) {
                        bowlerBall[bowler] += 1;
                    } else {
                        bowlerBall[bowler] = 1;
                    }
                }
            }
        }
    }
    //next loop for insert bowler name and bowler economy rate in result array
    for (let i in bowlerRun) {
        let temp = {};
        temp.bowler = i;
        temp.economy = ((bowlerRun[i] / bowlerBall[i]) * 6).toFixed(2);
        result.push(temp);
    }
    //next function for sorting
    result.sort(function(a,b) {
        return a.economy - b.economy;
    })
    //It's for get first 10 number of economy bowler name and rate
    for (let i = 0; i < 10; i++) {
        finalResult[i] = result[i];
    }


    // Some modifications of finalResult for easily visualize
    let myData ={};
    for (final of finalResult) {
        //let newp = {};
        myData[final.bowler] = parseFloat(final.economy);
       // myData.push(newp);
    }

    // const seriesData = [];
    // for (let year in myData) {
    //     seriesData.push([year, myData[year]]);
    // }
    // console.log(seriesData);
    //console.log(myData);
    //console.log(finalResult);
    //console.log(bowlerRun);
    //console.log(bowlerBall);
    return myData;
}

module.exports = economicalBowlersIn2015;
