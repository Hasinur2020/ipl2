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
  //var name = window.prompt("I am Hasinur Rahaman");
  // intial comment
  //abcd
  
  const seriesData = [];
  
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif"
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    legend: {
      enabled: !1
    },
    tooltip: {
      pointFormat: "Economy: <b>{point.y:0.2f} </b>"
    },
    series: [
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: !0,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          format: "{point.y:.2f}",
          y: 25,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif"
          }
        }
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
  let newResult = matchesWonPerYearEachTeam;
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

  Highcharts.chart("matches-won-per-year-each-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Number of matches won by all team over all the years of ipl"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
       categories: years,
    crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches won"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 1
      }
    },
    series:nur
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
      text: "Extra Run In 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Team",
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
      text: "Top Economical Bowlers in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif"
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: "Economy: <b>{point.y:.1f} </b>"
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData,
        dataLabels: {
          enabled: true,
          // rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y:.2f}", //two decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif"
          }
        }
      }
    ]
  });
}


// It's for 5th visualization
function visualizeMatchPlayedInCity(matchPlayedInCity) {
  let years = [];
  //let seriesData = [];

  for (year in matchPlayedInCity) {
    years.push(year);
  }

  let newResult = matchPlayedInCity;
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

  Highcharts.chart("match-played-in-city", {
    chart: {
      type: "column"
    },
    title: {
      text: "2. Number of matches won by all team over all the years of ipl"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
       categories: years,
    crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "City"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 1
      }
    },
    series:nur
  });

}

