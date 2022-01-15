// Put functions with calls to service here

// get 15 top scores from mongo
function getTopScores() {
  let scores;
  fetch("http://localhost:9999/scores")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      scores = data;
    })
    .catch((err) => console.log(err));
  return scores;
}

// send single score to db
function sendScore(scoreObj) {
  fetch("http://localhost:9999/sendScore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scoreObj),
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);   // THIS ISNNT WORKING WHYYYYYYYYY?
  })
  .catch((err) => console.log(err));
}
