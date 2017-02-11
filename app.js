

var body=document.getElementsByTagName('body')[0]
var boxContainer= document.createElement('div')
boxContainer.className= 'container'
body.appendChild(boxContainer)

for (var i=0; i < 800; i++) {
  var div=document.createElement('div')
  boxContainer.appendChild(div)
  div.className='pixel'
}

var pixel= document.getElementsByClassName('pixel')

var palette= document.createElement('div')
palette.className= 'palette'
palette.style.height='200px';
palette.style.width= '350px';
palette.style.border= '2px solid black';
palette.style.position= 'absolute';
palette.style.display= 'inline';
palette.style.float= 'right';
body.appendChild(palette)


var colors= ['maroon','red', 'orange', 'yellow', 'green', 'lime', 'blue',  'violet', 'purple', 'black', 'gray']
for (var i = 0; i < 11; i++) {
  var div=document.createElement('div')
  let id= div.id=colors[i]
  div.style.height='60px';
  div.style.width='60px';
  div.style.border='1px solid black';
  div.style.display= 'inline-block';
  div.style.backgroundColor= colors[i]
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
