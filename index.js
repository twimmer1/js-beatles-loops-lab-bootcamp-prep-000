function theBeatlesPlay(musicians, instruments) {
  var result = []
  for (var i = 0; i < musicians.length; i++) {
   result[i] = musicians[i] + " plays " + instruments[i]
  } 
  return result
}

function johnLennonFacts (facts) {
  var i = 1
  var result = []
  while (i < 10) {
    result[i] = facts[i] + " !!! ";
  i++;  
  }
}