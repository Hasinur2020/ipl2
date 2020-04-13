function economicalBowler(matches,deliveries) {
    years = [];
    finalData = {};
    
    // It's for store all years in a array 
    for (match of matches) {
        let season = match.season;
        if (!years.includes(season)) {
            years.push(season);
        }
    }

    // It's for year wise economy rates
    for (let season of years){  

        let result = [];
        let top10Economy = [];
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
                if ((id === match_id) && (year === season)) {
                    if (bowlerRun[bowler]) {
                        bowlerRun[bowler] += total_runs;
                    } else {
                        bowlerRun[bowler] = total_runs;
                    }
                    let count = parseInt(delivery.wide_runs) + parseInt(delivery.noball_runs);
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
            top10Economy[i] = result[i];
        }
        // Some modifications of top10Economy for easily visualize
        let modifiedData ={};
        for (final of top10Economy) {
            modifiedData[final.bowler] = parseFloat(final.economy);
        }
        finalData[season] = modifiedData;
    }
    return finalData;
}

module.exports = economicalBowler;
