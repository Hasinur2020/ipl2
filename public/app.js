function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonPerYearEachTeam(data.matchesWonPerYearEachTeam);
  visualizeExtraRunIn2016(data.extraRunIn2016);  
  visualizeEconomicalBowlersIn2015(data.economicalBowlersIn2015);
  visualizeMatchPlayedInCity(data.matchPlayedInCity);
  return;
}


// It's for 1st visulazition
function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "years"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:15px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    series: [
      {
        name: "Matches",
        data: seriesData,
      }
    ]
  });
}

// It's for 2nd visualization
function visualizeMatchesWonPerYearEachTeam(matchesWonPerYearEachTeam) {

  const years = [];
  for (let yeardata in matchesWonPerYearEachTeam) {
    years.push(yeardata);
  }
  
  let teamName = [];
  for (let i of years) {
    for (let j in matchesWonPerYearEachTeam[i]) {
      if (!teamName.includes(j)) {
        teamName.push(j);
      }
    }
  }
  
  //modify data accordingly highchartdata    
  let seriesData = [];
  for (let i of teamName) {
    let sortedData = {};
    let data = [];
    sortedData["name"] = i;
    for (let j of years) {
      if (i in matchesWonPerYearEachTeam[j]) {
        data.push(parseInt(matchesWonPerYearEachTeam[j][i]))
      } else {
        data.push(0);
      }
    }
    sortedData["data"] = data;
    seriesData.push(sortedData);
  }

  Highcharts.chart("matches-won-per-year-each-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "2. Number Of Matches Won By All Team Over All The Years Of ipl"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      categories: years,
      title: {
        text: "Years"
      },
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches won"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:15px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.0,
        borderWidth: 1
      }
    },
    series:seriesData
  });
}


// It's for 3rd visualization
function visualizeExtraRunIn2016(extraRunIn2016) {

  let seriesData = [];
  for (let runs in extraRunIn2016) {
    seriesData.push([runs, extraRunIn2016[runs]]);
  }

  Highcharts.chart("extra-run-in-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs By Each Team In 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      title: {
        text: "Teams"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:13px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    series: [
      {
        name: "Extra Run",
        data: seriesData
      }
    ]
  });
}

// It's for 4th visualization
function visualizeEconomicalBowlersIn2015(economicalBowlersIn2015) {
  
  let seriesData = [];
  for (let economy in economicalBowlersIn2015) {
    seriesData.push([economy, economicalBowlersIn2015[economy]]);
  }
  
  Highcharts.chart("economical-bowlers-in-2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top Economical Bowlers In 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      title: {
        text: "Bowlers"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:13px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    series: [
      {
        name: "Economy",
        data: seriesData,
      }
    ]
  });
}


// It's for 5th visualization
function visualizeMatchPlayedInCity(matchPlayedInCity) {
  
  let years = [];
  for (year in matchPlayedInCity) {
    years.push(year);
  }

  let cityNames = [];
  for (let i of years) {
    for (let j in matchPlayedInCity[i]) {
      if (!cityNames.includes(j)) {
        cityNames.push(j);
      }
    }
  }
  //modify data accordingly highchartdata   
  let seriesData = [];
  for (let i of cityNames) {
    let sortedData = {};
    let data = [];
    sortedData["name"] = i;
    for (let j of years) {
      if (i in matchPlayedInCity[j]) {
        data.push(parseInt(matchPlayedInCity[j][i]))
      } else {
        data.push(0);
      }
    }
    sortedData["data"] = data;
    seriesData.push(sortedData);
  }

  Highcharts.chart("match-played-in-city", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Number Of Matches Played In City Over All The Years Of ipl"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
       categories: years,
       title: {
         text: "Year"
       },
    crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "City"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:15px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.0,
        borderWidth: 0
      }
    },
    series:seriesData
  });
}
