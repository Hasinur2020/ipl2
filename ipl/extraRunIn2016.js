function extraRunIn2016(matches,deliveries) {
    const result = {};

    for (match of matches) {
        let id = match.id;
        let year = match.season;

        for (delivery of deliveries) {
            let match_id = delivery.match_id;
            let extra_runs = parseInt(delivery.extra_runs);
            let batting = delivery.bowling_team;
            if ((id === match_id)  && (year === '2016')){
                if (result[batting]) {
                    result[batting] += extra_runs;       
                } else {
                    result[batting] = extra_runs;
                }
            }
        }
    }
    //console.log(result);
    return result;
}

module.exports = extraRunIn2016;
