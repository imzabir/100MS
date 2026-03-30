//variables
let fl = document.querySelector('.firstline')
let sl =document.querySelector('.secondline')
let equation = ""
let isShift = false
let isAlpha = false
let firstChar = true
let isActive = false
let errorName = ''
let modes= {
  "calculator" : ["COMP","CMPLX","SD", "REG", "BASE", "EQN"],
  "angle": ["Deg", "Rad", "Gra"], 
  "display": ["Fix", "Sci", "Norm"]
}
let mode = [modes.calculator[0], modes.angle[0], modes.display[2]]
let ans = ""
let preAns = ""
let result = ""
let modeCounter = 0;
//functions...
function key(a,b){
  if(isActive){
    if(mode[0] === "COMP"){
    firstChar = false
  if(!isShift && !isAlpha){
    switch (a.textContent) {
      case "AC":
        sl.querySelector('h2').textContent = ''
        fl.querySelector('h1').textContent = ''
        equation = ''
        firstChar = true
        break;
      case "DEL":
        nfl = fl.querySelector('h1').textContent.slice(0,-1)
        fl.querySelector('h1').textContent = nfl
        equation = nfl
        break;
      case '=':
        calculate()
        history()
        break;
      case 'sin':
        fl.querySelector('h1').textContent += "sin("
        equation += `${b}Math.PI/180*`
        
        break;
      case 'cos':
        fl.querySelector('h1').textContent += "cos("
        equation += `${b}Math.PI/180*`
        
        break;
      case 'tan':
        fl.querySelector('h1').textContent += "tan("
        equation += `${b}Math.PI/180*`
        
        break;
      case 'log':
        fl.querySelector('h1').textContent += "log("
        equation += b
        
        break;
      case 'ln':
        fl.querySelector('h1').textContent += "ln("
        equation += b
        
        break;
      case 'x²':
        fl.querySelector('h1').textContent += "²"
        equation += b
        
        break;
      case 'x³':
        fl.querySelector('h1').textContent += "³"
        equation += b
        
        break;
      case 'x-1':
        fl.querySelector('h1').textContent += "⁻¹"
        equation += b
        
        break;
      default:
        fl.querySelector('h1').textContent += a.textContent
        equation += b
        
    }
  }
  else{
    if(isShift){
      shift()
      switch (a.textContent) {
        case "AC":
        sl.querySelector('h2').textContent = ''
        fl.querySelector('h1').textContent = ''
        equation = ''
        firstChar = true
        break;
      case "DEL":
        nfl = fl.querySelector('h1').textContent.slice(0,-1)
        fl.querySelector('h1').textContent = nfl
        equation = nfl
        break;
      case '=':
        calculate()
        history()
        break;
        case 'sin':
          fl.querySelector('h1').textContent += 'sin⁻¹('
          equation += '180/Math.PI*Math.asin('
          break;
        case 'value2':
          
          break;
        default:
        fl.querySelector('h1').textContent += a.textContent
        equation += b
        
          
      }
      //underconstructionnnnnn
    }
    else if(isAlpha){
      alpha()
      switch (a.textContent) {
        case "AC":
        sl.querySelector('h2').textContent = ''
        fl.querySelector('h1').textContent = ''
        equation = ''
        firstChar = true
        break;
      case "DEL":
        nfl = fl.querySelector('h1').textContent.slice(0,-1)
        fl.querySelector('h1').textContent = nfl
        equation = nfl
        break;
      case '=':
        calculate()
        history()
        break;
        case 'value1':
          
          break;
        case 'value2':
          
          break;
        default:
          
      }
      //underconstructionnnnnn 
    }
  }
  }
  }
}
function calculate(){
  
  if(equation === ""){
    result = ans
  }
  else{
    try{
    result = eval(equation)
    if(error(result)){ result = errorName }
    }
    catch(err){
    result = "Error"
    error(err)
  }
  }
  sl.querySelector('h2').textContent = result
  fl.querySelector('h1').textContent = ''
  equation = ''
}
function shift(){
    isShift = !isShift
}
function alpha(){
    isAlpha = !isAlpha
}
function changeMode(a){
  let total = modes.calculator.length
}
function history(){
  preAns = ans
  ans = result
}
function error(a){
  if(a >= 10**100){
    errorName = "Math Error!"
    return true
  }
  else if(a.message === "missing ) after argument list"){
    equation += ")"
    calculate()
  }
  else{
    console.log(a.message)
    equation = a
    console.log(equation)
    return false
  }
}
function active(){
  isActive = true
}