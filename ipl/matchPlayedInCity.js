function matchPlayedInCity(matches) {
    const result = {};
    const years =[];
    
    for (match of matches) {
        let season = match.season;
        if (!years.includes(season)) {
            years.push(season);
        }
    }

    for (year of years) {
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
        result[year] = temp;
    }
    return result;
}

module.exports = matchPlayedInCity;