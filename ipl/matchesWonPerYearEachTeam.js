function matchWonPerYearEachTeam(matches) {
  let years = [];
  let newResult = {};
  // It's for getting all season
  for (let match of matches) {
    const season = match['season'];
    if (!years.includes(season)) {
      years.push(season);
    }
  }
  // It's for getting season wise matches won by each team
  for (year of years) {
    let won = {};
    for (match of matches) {
      const season = match.season;
      const winner = match.winner;
      if (season === year) {
        if (won[winner]) {
          won[winner] += 1;
        } else {
          won[winner] = 1
        }
      }
    }
    newResult[year] = won;
  }
  
  return newResult;
}

module.exports = matchWonPerYearEachTeam;
