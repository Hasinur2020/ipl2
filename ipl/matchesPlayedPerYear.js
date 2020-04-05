function matchesPlayedPerYear(matches) {
  const result = {};
  //console.log(matches)
  for (let match of matches) {
    const season = match.season;
    if (result[season]) {
      result[season] += 1;
    } else {
      result[season] = 1;
    }
  }
  //console.log(result);


  seriesData = [];
  for (let year in result) {
    seriesData.push([year, result[year]]);
  }
  //console.log(seriesData);
  return result;
}

module.exports = matchesPlayedPerYear;
