


var body=document.getElementsByTagName('body')[0]
var title=document.createElement('h1')
title.innerText= 'Lets Make Some Art!'
body.appendChild(title)


var boxContainer= document.createElement('div')
boxContainer.className= 'container'
body.appendChild(boxContainer)


for (var i=0; i < 646; i++) {
  var div=document.createElement('div')
  boxContainer.appendChild(div)
  div.className='pixel'
}

// var pixel= document.getElementsByClassName('pixel')
// boxContainer.appendChild(pixel)
var palette= document.createElement('div')
palette.className= 'palette'
palette.style.height='50px';
palette.style.width= '925px';
// palette.style.border= '2px solid black';
// palette.style.borderRadius: '20px 40px 20px 40px'
palette.style.position= 'none';
palette.style.display= 'inline';
// palette.style.float= 'left';
// palette.style.margin= '0 0 80px 0'
body.appendChild(palette);







var colors= ['maroon','red','pink', 'deeppink','salmon','orange', 'yellow', 'gold','greenyellow','green', 'lime', 'aqua', 'darkcyan','blue',  'violet', 'purple', 'black', 'gray', 'saddlebrown','darkgoldenrod', 'peachpuff','white']
for (var i = 0; i < 22; i++) {
  var div=document.createElement('div')
  let id= div.id=colors[i]
  div.style.height='53px';
  div.style.width='53px';
  div.style.border='1.5px solid black';
  div.style.display= 'inline-block';
  div.style.borderRadius= '50px 50px 50px 50px'
  div.style.backgroundColor= colors[i]
  // div.style.float= 'left';
  palette.appendChild(div)
}




function picked () {
  var pick= event.target
  var pickedColor= pick.style.backgroundColor
  console.log(pickedColor);
  return pickedColor
}

palette.addEventListener('click', function(){
  var coloring=picked()

  boxContainer.addEventListener('click', function(){
    event.target.style.backgroundColor=coloring
  })
})


  // clearButton.addEventListener('click', function(){
    // //Hide colors
    // for (var i = 0; i < pixel.length; i++) {
    // // var coloring= picked()
    // pixel[i].value= '';
