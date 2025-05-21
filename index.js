import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//1. GET a random joke
app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * rcbFails.length);
  res.json(rcbFails[randomIndex]);
})

app.get("/:team", (req, res) => {
  const team = req.params.team;
  const filteredJoke = rcbFails.filter((rcb) => rcb.team === team);
  res.json(filteredJoke);
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});


const rcbFails = [
  { id: 1, joke: "In IPL 2019, Match 6, RCB scored only 58 against Lucknow Super Giants — the scoreboard operator barely worked!", team: "Lucknow Super Giants" },
  { id: 2, joke: "In IPL 2021, Match 58, RCB managed just 87 vs Mumbai Indians — even their extras had more impact!", team: "Mumbai Indians" },
  { id: 3, joke: "In IPL 2023, Match 38, RCB scored only 82 against Chennai Super Kings — the scoreboard operator barely worked!", team: "Chennai Super Kings" },
  { id: 4, joke: "In IPL 2019, Match 33, RCB got bundled for 63 by Kolkata Knight Riders — looked like they were chasing air!", team: "Kolkata Knight Riders" },
  { id: 5, joke: "In IPL 2013, Match 52, RCB got bundled for 92 by Mumbai Indians — looked like they were chasing air!", team: "Mumbai Indians" },
  { id: 6, joke: "In IPL 2021, Match 55, RCB collapsed for 63 against Chennai Super Kings — their batsmen thought it was a warm-up!", team: "Chennai Super Kings" },
  { id: 7, joke: "In IPL 2020, Match 41, RCB got bundled for 54 by Punjab Kings — looked like they were chasing air!", team: "Punjab Kings" },
  { id: 8, joke: "In IPL 2011, Match 19, RCB managed just 49 vs Gujarat Titans — even their extras had more impact!", team: "Gujarat Titans" },
  { id: 9, joke: "In IPL 2010, Match 28, RCB were all out for 49 against Kolkata Knight Riders — fans started cheering for the opponent!", team: "Kolkata Knight Riders" },
  { id: 10, joke: "In IPL 2015, Match 22, RCB scored only 58 against Sunrisers Hyderabad — the scoreboard operator barely worked!", team: "Sunrisers Hyderabad" },
  { id: 11, joke: "In IPL 2022, Match 5, RCB got bundled for 68 by Delhi Capitals — looked like they were chasing air!", team: "Delhi Capitals" },
  { id: 12, joke: "In IPL 2024, Match 17, RCB scored only 63 against Mumbai Indians — the scoreboard operator barely worked!", team: "Mumbai Indians" },
  { id: 13, joke: "In IPL 2014, Match 32, RCB got bundled for 49 by Punjab Kings — looked like they were chasing air!", team: "Punjab Kings" },
  { id: 14, joke: "In IPL 2009, Match 43, RCB managed just 68 vs Gujarat Titans — even their extras had more impact!", team: "Gujarat Titans" },
  { id: 15, joke: "In IPL 2016, Match 16, RCB were all out for 70 against Kolkata Knight Riders — fans started cheering for the opponent!", team: "Kolkata Knight Riders" },
  { id: 16, joke: "In IPL 2022, Match 44, RCB managed just 54 vs Rajasthan Royals — even their extras had more impact!", team: "Rajasthan Royals" },
  { id: 17, joke: "In IPL 2020, Match 36, RCB got bundled for 58 by Sunrisers Hyderabad — looked like they were chasing air!", team: "Sunrisers Hyderabad" },
  { id: 18, joke: "In IPL 2017, Match 27, RCB scored only 49 against Kolkata Knight Riders — the scoreboard operator barely worked!", team: "Kolkata Knight Riders" },
  { id: 19, joke: "In IPL 2024, Match 12, RCB got bundled for 68 by Gujarat Titans — looked like they were chasing air!", team: "Gujarat Titans" },
  { id: 20, joke: "In IPL 2018, Match 50, RCB scored only 63 against Rajasthan Royals — the scoreboard operator barely worked!", team: "Rajasthan Royals" },
  { id: 21, joke: "In IPL 2021, Match 13, RCB got bundled for 68 by Sunrisers Hyderabad — looked like they were chasing air!", team: "Sunrisers Hyderabad" },
  { id: 22, joke: "In IPL 2015, Match 20, RCB collapsed for 63 against Chennai Super Kings — their batsmen thought it was a warm-up!", team: "Chennai Super Kings" },
  { id: 23, joke: "In IPL 2008, Match 31, RCB got bundled for 70 by Punjab Kings — looked like they were chasing air!", team: "Punjab Kings" },
  { id: 24, joke: "In IPL 2020, Match 49, RCB managed just 58 vs Lucknow Super Giants — even their extras had more impact!", team: "Lucknow Super Giants" },
  { id: 25, joke: "In IPL 2017, Match 15, RCB were all out for 49 against Kolkata Knight Riders — fans started cheering for the opponent!", team: "Kolkata Knight Riders" },
  { id: 26, joke: "In IPL 2022, Match 26, RCB scored only 82 against Mumbai Indians — the scoreboard operator barely worked!", team: "Mumbai Indians" },
  { id: 27, joke: "In IPL 2018, Match 54, RCB collapsed for 68 against Rajasthan Royals — their batsmen thought it was a warm-up!", team: "Rajasthan Royals" },
  { id: 28, joke: "In IPL 2019, Match 14, RCB got bundled for 54 by Sunrisers Hyderabad — looked like they were chasing air!", team: "Sunrisers Hyderabad" },
  { id: 29, joke: "In IPL 2010, Match 39, RCB scored only 63 against Delhi Capitals — the scoreboard operator barely worked!", team: "Delhi Capitals" },
  { id: 30, joke: "In IPL 2012, Match 42, RCB got bundled for 58 by Chennai Super Kings — looked like they were chasing air!", team: "Chennai Super Kings" },
  { id: 31, joke: "In IPL 2016, Match 7, RCB managed just 68 vs Kolkata Knight Riders — even their extras had more impact!", team: "Kolkata Knight Riders" },
  { id: 32, joke: "In IPL 2015, Match 59, RCB scored only 49 against Gujarat Titans — the scoreboard operator barely worked!", team: "Gujarat Titans" },
  { id: 33, joke: "In IPL 2013, Match 30, RCB collapsed for 63 against Punjab Kings — their batsmen thought it was a warm-up!", team: "Punjab Kings" },
  { id: 34, joke: "In IPL 2014, Match 9, RCB were all out for 49 against Delhi Capitals — fans started cheering for the opponent!", team: "Delhi Capitals" },
  { id: 35, joke: "In IPL 2011, Match 27, RCB got bundled for 58 by Rajasthan Royals — looked like they were chasing air!", team: "Rajasthan Royals" },
  { id: 36, joke: "In IPL 2023, Match 11, RCB managed just 63 vs Mumbai Indians — even their extras had more impact!", team: "Mumbai Indians" },
  { id: 37, joke: "In IPL 2018, Match 35, RCB collapsed for 70 against Chennai Super Kings — their batsmen thought it was a warm-up!", team: "Chennai Super Kings" },
  { id: 38, joke: "In IPL 2020, Match 23, RCB got bundled for 58 by Sunrisers Hyderabad — looked like they were chasing air!", team: "Sunrisers Hyderabad" },
  { id: 39, joke: "In IPL 2022, Match 10, RCB scored only 82 against Lucknow Super Giants — the scoreboard operator barely worked!", team: "Lucknow Super Giants" },
  { id: 40, joke: "In IPL 2024, Match 47, RCB collapsed for 49 against Rajasthan Royals — their batsmen thought it was a warm-up!", team: "Rajasthan Royals" },
  { id: 41, joke: "In IPL 2019, Match 37, RCB managed just 58 vs Punjab Kings — even their extras had more impact!", team: "Punjab Kings" },
  { id: 42, joke: "In IPL 2021, Match 2, RCB got bundled for 68 by Gujarat Titans — looked like they were chasing air!", team: "Gujarat Titans" },
  { id: 43, joke: "In IPL 2023, Match 48, RCB were all out for 63 against Delhi Capitals — fans started cheering for the opponent!", team: "Delhi Capitals" },
  { id: 44, joke: "In IPL 2016, Match 45, RCB scored only 54 against Kolkata Knight Riders — the scoreboard operator barely worked!", team: "Kolkata Knight Riders" },
  { id: 45, joke: "In IPL 2009, Match 10, RCB collapsed for 70 against Chennai Super Kings — their batsmen thought it was a warm-up!", team: "Chennai Super Kings" },
  { id: 46, joke: "In IPL 2021, Match 18, RCB got bundled for 58 by Sunrisers Hyderabad — looked like they were chasing air!", team: "Sunrisers Hyderabad" },
  { id: 47, joke: "In IPL 2020, Match 33, RCB managed just 63 vs Rajasthan Royals — even their extras had more impact!", team: "Rajasthan Royals" },
  { id: 48, joke: "In IPL 2022, Match 14, RCB scored only 49 against Mumbai Indians — the scoreboard operator barely worked!", team: "Mumbai Indians" },
  { id: 49, joke: "In IPL 2013, Match 36, RCB collapsed for 58 against Punjab Kings — their batsmen thought it was a warm-up!", team: "Punjab Kings" },
  { id: 50, joke: "In IPL 2012, Match 25, RCB were all out for 54 against Gujarat Titans — fans started cheering for the opponent!", team: "Gujarat Titans" },
  { id: 51, joke: "In IPL 2023, Match 60, RCB scored only 70 against Delhi Capitals — the scoreboard operator barely worked!", team: "Delhi Capitals" },
  { id: 52, joke: "In IPL 2011, Match 13, RCB got bundled for 58 by Kolkata Knight Riders — looked like they were chasing air!", team: "Kolkata Knight Riders" },
  { id: 53, joke: "In IPL 2019, Match 61, RCB collapsed for 68 against Chennai Super Kings — their batsmen thought it was a warm-up!", team: "Chennai Super Kings" },
  { id: 54, joke: "In IPL 2024, Match 24, RCB managed just 63 vs Sunrisers Hyderabad — even their extras had more impact!", team: "Sunrisers Hyderabad" },
  { id: 55, joke: "In IPL 2015, Match 40, RCB were all out for 54 against Punjab Kings — fans started cheering for the opponent!", team: "Punjab Kings" },
  { id: 56, joke: "In IPL 2022, Match 57, RCB scored only 68 against Gujarat Titans — the scoreboard operator barely worked!", team: "Gujarat Titans" },
  { id: 57, joke: "In IPL 2023, Match 25, RCB collapsed for 49 against Rajasthan Royals — their batsmen thought it was a warm-up!", team: "Rajasthan Royals" },
  { id: 58, joke: "In IPL 2018, Match 31, RCB managed just 58 vs Delhi Capitals — even their extras had more impact!", team: "Delhi Capitals" },
  { id: 59, joke: "In IPL 2014, Match 27, RCB got bundled for 54 by Chennai Super Kings — looked like they were chasing air!", team: "Chennai Super Kings" },
  { id: 60, joke: "In IPL 2021, Match 39, RCB scored only 63 against Mumbai Indians — the scoreboard operator barely worked!", team: "Mumbai Indians" },
  { id: 61, joke: "In IPL 2019, Match 35, RCB collapsed for 58 against Gujarat Titans — their batsmen thought it was a warm-up!", team: "Gujarat Titans" },
  { id: 62, joke: "In IPL 2016, Match 38, RCB managed just 70 vs Rajasthan Royals — even their extras had more impact!", team: "Rajasthan Royals" },
  { id: 63, joke: "In IPL 2020, Match 30, RCB were all out for 49 against Lucknow Super Giants — fans started cheering for the opponent!", team: "Lucknow Super Giants" },
  { id: 64, joke: "In IPL 2024, Match 28, RCB got bundled for 68 by Kolkata Knight Riders — looked like they were chasing air!", team: "Kolkata Knight Riders" },
  { id: 65, joke: "In IPL 2023, Match 22, RCB scored only 70 against Punjab Kings — the scoreboard operator barely worked!", team: "Punjab Kings" },
  { id: 66, joke: "In IPL 2012, Match 18, RCB collapsed for 49 against Sunrisers Hyderabad — their batsmen thought it was a warm-up!", team: "Sunrisers Hyderabad" },
  { id: 67, joke: "In IPL 2011, Match 21, RCB managed just 58 vs Delhi Capitals — even their extras had more impact!", team: "Delhi Capitals" },
  { id: 68, joke: "In IPL 2008, Match 8, RCB were all out for 70 against Rajasthan Royals — fans started cheering for the opponent!", team: "Rajasthan Royals" },
  { id: 69, joke: "In IPL 2022, Match 31, RCB scored only 54 against Chennai Super Kings — the scoreboard operator barely worked!", team: "Chennai Super Kings" },
  { id: 70, joke: "In IPL 2024, Match 59, RCB got bundled for 68 by Sunrisers Hyderabad — looked like they were chasing air!", team: "Sunrisers Hyderabad" },
  { id: 71, joke: "In IPL 2017, Match 60, RCB collapsed for 63 against Punjab Kings — their batsmen thought it was a warm-up!", team: "Punjab Kings" },
  { id: 72, joke: "In IPL 2021, Match 51, RCB managed just 58 vs Mumbai Indians — even their extras had more impact!", team: "Mumbai Indians" },
  { id: 73, joke: "In IPL 2020, Match 17, RCB were all out for 49 against Rajasthan Royals — fans started cheering for the opponent!", team: "Rajasthan Royals" },
  { id: 74, joke: "In IPL 2014, Match 10, RCB got bundled for 68 by Gujarat Titans — looked like they were chasing air!", team: "Gujarat Titans" },
  { id: 75, joke: "In IPL 2022, Match 37, RCB scored only 63 against Chennai Super Kings — the scoreboard operator barely worked!", team: "Chennai Super Kings" },
  { id: 76, joke: "In IPL 2018, Match 58, RCB collapsed for 58 against Lucknow Super Giants — their batsmen thought it was a warm-up!", team: "Lucknow Super Giants" },
  { id: 77, joke: "In IPL 2016, Match 11, RCB managed just 70 vs Delhi Capitals — even their extras had more impact!", team: "Delhi Capitals" },
  { id: 78, joke: "In IPL 2023, Match 43, RCB were all out for 49 against Mumbai Indians — fans started cheering for the opponent!", team: "Mumbai Indians" },
  { id: 79, joke: "In IPL 2020, Match 29, RCB got bundled for 63 by Sunrisers Hyderabad — looked like they were chasing air!", team: "Sunrisers Hyderabad" },
  { id: 80, joke: "In IPL 2015, Match 12, RCB scored only 68 against Chennai Super Kings — the scoreboard operator barely worked!", team: "Chennai Super Kings" }
  
];
