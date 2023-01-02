function drawrectangle(x,y,base,height,color){
  var pantalla=document.querySelector("canvas")
  var pincel= pantalla.getContext("2d")
  
  pincel.fillStyle=color
  pincel.fillRect(x,y,base,height)
  pincel.strokeStyle='black'
  pincel.strokeRect(x,y,base,height)
  
}

function writeText(x,y,text){
  var pantalla=document.querySelector('canvas')
  var pincel = pantalla.getContext('2d')
  
  pincel.font='15px Georgia'
  pincel.fillStyle ='black'
  pincel.fillText(text,x,y)
}


function drawBar(x,y, serie, colors, text){

  writeText(x,y -10, text);
  
  var totalHeight = 0;
  for(var i=0; i< serie.length; i++){
    var height = serie[i]
    drawrectangle(x,y + totalHeight, 50, height, colors[i])
    totalHeight = totalHeight + height
  }
  
}
var serie2009=[6,47,41,3,3]
var serie2019=[81,9,3,3,4]
var colors=['blue', 'green', 'yellow', 'red', 'gray']

drawBar(50,50,serie2009, colors, "2009")
drawBar(150,50,serie2019,colors, "2019")
