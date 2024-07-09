const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   
const adding = []
gameInfo.forEach(user => adding.push(user.username+'!')) 
console.log(adding);
 const scoresMoreThan5 = []
 gameInfo.forEach(user => {
    if (user.score>5)
    scoresMoreThan5.push(user.username)})
 console.log(scoresMoreThan5);
 const totalScore = gameInfo.reduce((a,v) => a +v.score,0)
 console.log(totalScore);
