function theBeatlesPlay(musicians, instruments) {
  var result = []
  for (var i = 0; i < musicians.length; i++) {
   result[i] = musicians[i] + " plays " + instruments[i]
  } 
  return result
}

function johnLennonFacts (facts) {
  var i = 0
  var result = []
  while (i < facts.length) {
    result[i] = facts[i] + "!!!";
  i++;  
  }
  return result
}

function iLoveTheBeatles() {
  var i = 0
  var result = []
  do {
    result[0] = "I love the Beatles!"; 
    //result.push("something");
    i++;
  }
  while (i < 15);
  return result
}