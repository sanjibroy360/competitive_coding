### Where are you from? [6 kyu]

#### Answer -

```js

function fromWhere(you,me,question){
  //coding and coding...
  
  let ansKey = "";
  let diff = "";
  let diffKey = "";
  let flag = '';
  let where = "Where are you from".toLowerCase().split(' ');
  question = question.toLowerCase().split(' ');
  let quesKey = "";
  
  flag = question[0];
  
  if(flag !== "what" && flag !== "where") {
     return "What are you saying?";
  }
  
  if(flag == "what") {
    quesKey = question[1];
  }
  
  for(let key in you) {
    if(you[key] != me[key] && flag == "where") {
      diff = key;
      break;
    }
    
    if(flag == "what" && key.toLowerCase() == quesKey) {
      ansKey = key;
      diffKey = (me[key] == you[key]);
      break;
    }
  } 
  
  if(flag == 'where') {
    if(diff) {
      return `I am from ${me[diff]}.`;
    } else {
        return 'Same as you.';
    }
  } else if(flag == "what" && ansKey) {
      if(diffKey) {
        return 'Same as you.';
      } else {
          return `I am from ${me[ansKey]}.`;
      }
  } else {
    return "What are you saying?";
  }
  
}

```