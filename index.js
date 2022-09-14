function calculator(){
  var result;
  function add(a,b){for(var i = 0; i<b; i++){a++}return a};
  function sub(a,b){return a-b}
  function mult(a,b){return a*b}
  function div(a,b){return Math.round(a/b)}
  console.log("Welcome to Javascript calculator! Enter calculator() to restart. Too lazy? Use functions add(), subtract(), mult(), and div(). Put the two operation numbers inside them like: add(1,4), returns 5")
  const a = prompt("Enter the first number")
  const d = prompt("Enter 1 for add, 2 or subtract, 3 for multiply, and 4 for divide")
  const c = prompt("Enter the second number")
  var b = parseInt(d)
  if(b === 1){
    result = add(a,c)
  }
  else{
    if(b === 2){
      result = sub(a,c)
    }
    else{
      if(b === 3){
        result = mult(a,c)
      }
      else{
        if(b ===4){
          result = div(a,c)
        }
        else{
          console.log("please read the instructions for operator. Sorry for the inconvience")
        }
      }
    }
  }
  console.log(result)
}
calculator()
