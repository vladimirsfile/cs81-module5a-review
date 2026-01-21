const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];
// This function calculates the total time spent on all hobies. 
// The function accepts "log" as a parameter, which in an array of objects.
function totalTime(log) {
// This line has a reduce() to combine every item in the array into a 
// single value. "sum" is the accumulator, which is set to start at "0" by the 
// "0" at the end of the line. "session" is the current object, for each loop
// it adds the minutes of the current objet to the accumolator.
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}

function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));