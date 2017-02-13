

var body=document.getElementsByTagName('body')[0]
var boxContainer= document.createElement('div')
boxContainer.className= 'container'
body.appendChild(boxContainer)

var title=document.createElement('h1')
boxContainer.appendChild(title)
title.innerText= 'Lets Make Some Art!'

for (var i=0; i < 800; i++) {
  var div=document.createElement('div')
  boxContainer.appendChild(div)
  div.className='pixel'
}

var pixel= document.getElementsByClassName('pixel')

var palette= document.createElement('div')
palette.className= 'palette'
palette.style.height='695px';
palette.style.width= '125px';
palette.style.border= '3px solid black';
palette.style.position= 'absolute';
palette.style.display= 'inline-block';
// palette.style.float= 'right';
palette.style.margin= '80px 0 0 0'
body.appendChild(palette)




var colors= ['maroon','red','pink', 'deeppink','salmon','orange', 'yellow', 'gold','greenyellow','green', 'lime', 'aqua', 'darkcyan','blue',  'violet', 'purple', 'black', 'gray', 'saddlebrown','darkgoldenrod', 'peachpuff','white']
for (var i = 0; i < 22; i++) {
  var div=document.createElement('div')
  let id= div.id=colors[i]
  div.style.height='61px';
  div.style.width='60px';
  div.style.border='1.5px solid black';
  div.style.display= 'inline-block';
  div.style.borderRadius= '50px 50px 50px 50px'
  div.style.backgroundColor= colors[i]
  div.style.float= 'left';

  palette.appendChild(div)
}


function picked () {
  let pick= event.target
  let pickedColor= pick.style.backgroundColor
  console.log(pickedColor);
  return pickedColor
}

palette.addEventListener('click', function(){
  let coloring=picked()

  boxContainer.addEventListener('click', function(){
    event.target.style.backgroundColor=coloring
  })
})
