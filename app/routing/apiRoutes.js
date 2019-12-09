let friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let compatibleMatch = {
      name: "",
      photo: "",
      friendScore: 1000
    };

    let userData = req.body;
    let userScore = userData.scores;

    let totalDiff = 0;

    for (let i = 0; i < friends.length; i++) {
      totalDiff = 0;
      for (let j = 0; friends[i].scores[j]; j++) {
        totalDiff += Math.abs(
          parseInt(userScore[j] - parseInt(friends[i].scores[j]))
        );

        if (totalDiff <= compatibleMatch.friendScore) {
          compatibleMatch.name = friends[i].name;
          compatibleMatch.photo = friends[i].photo;
          compatibleMatch.friendScore = friends[i].friendScore;
        }
      }
    }
    friends.push(userData);

    res.json(compatibleMatch)
  });
};
