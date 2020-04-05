function matchPlayedInCity(matches) {
    const result = {};
    const years =[];
    const mom ={};
    const total = [];

    for (match of matches) {
        let year = match.season;
        let winner = match.winner;
        let city = match.city;
        if (years.includes(year)) {

        } else {
            years.push(year);
        }
    }

    //console.log(years);
    // console.log(mom);
    // console.log(total.length);
    for (year of years) {
        let playerDetails = {};
        let temp = {};
        for (match of matches) {
            let city = match.city;
            let season = match.season;

            if (year == season) {    
                if (temp[city]) {
                    temp[city] += 1;
                } else {
                    temp[city] = 1;
                }
            }
        }
        mom[year] = temp;
    }
    //console.log(mom);
    //console.log(result);
    return mom;
}

module.exports = matchPlayedInCity;