const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYearEachTeam = require("./ipl/matchesWonPerYearEachTeam");
const extraRunIn2016 = require("./ipl/extraRunIn2016");
const economicalBowlersIn2015 = require("./ipl/economicalBowlersIn2015");
const matchPlayedInCity = require("./ipl/matchPlayedInCity");


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let result = matchesPlayedPerYear(matches);
        let ans = matchesWonPerYearEachTeam(matches);
        let ans2 = extraRunIn2016(matches,deliveries);
        let ans3 = economicalBowlersIn2015(matches,deliveries);
        let ans4 = matchPlayedInCity(matches);
        saveMatchesPlayedPerYear(result,ans,ans2,ans3,ans4);
      });
    });
}

function saveMatchesPlayedPerYear(result,ans,ans2,ans3,ans4) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchesWonPerYearEachTeam: ans,
    extraRunIn2016: ans2,
    economicalBowlersIn2015: ans3,
    matchPlayedInCity: ans4
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
