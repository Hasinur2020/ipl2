function matchWonPerYearEachTeam(matches) {
  let years = [];
  let newResult = {};
  for (let match of matches) {
    const season = match['season'];
    if (!years.includes(season)) {
      years.push(season);
    }
  }

  let teamName = [];
  for (year of years) {
    let won = {};
    for (match of matches) {
      const season = match.season;
      const winner = match.winner;
      //console.log(season);
      //console.log(winner);
      if (season === year) {
        if (won[winner]) {
          won[winner] += 1;
        } else {
          won[winner] = 1
        }
      }
      if (teamName.includes(winner)) {
      
      } else {
        teamName.push(winner);
      }
    }
    newResult[year] = won;
  }
  //console.log(newResult);
  // let teamName = [];
  // for (let match of  matches) {
  //   const winner = match.winner;
  //   if (teamName.includes(winner)) {
      
  //   } else {
  //     teamName.push(winner);
  //   }
  // }
  // console.log(teamName);
  // console.log(teamName.length);
  // console.log(years);
  let yearName = [];
  let bbb = {};
  for (let j = 0; j < newResult.length; j++) {
    let name;
    let Data = [];
    let teamDetals = {};
    for (let i in newResult) {
      yearName.push(i);
    }
  }
  let hasi = [];//names of team
  for (let i of years) {
    for (let j in newResult[i]) {
      if (hasi.includes(j)) {

      } else {
        hasi.push(j);
      }
    }
  }
  //console.log(hasi);

  let nur = [];
  for (let i of hasi) {
    let xxx = {};
    let data = [];
    xxx["name"] = i;
    for (let j of years) {
      if (i in newResult[j]) {
        data.push(parseInt(newResult[j][i]))
      } else {
        data.push(0);
      }
    }
    xxx["data"] = data;
    nur.push(xxx);
  }
  //console.log(nur);
      //console.log(newResult[i]);
      //console.log(i);
    
  
  //console.log(newResult);
  //console.log(yearName);
  return newResult;
}

module.exports = matchWonPerYearEachTeam;
