var container= document.getElementById('container');
var grid = prompt("Please enter number", "16");
var myButton =document.createElement('button');
myButton.textContent = 'Click me to Reset the  Grid';
myButton.style.margin ="20px 600px";
myButton.style.color = "red";
container.insertAdjacentElement('beforebegin', myButton);
myButton.addEventListener('click',function(){
  window.location.reload();
});

// function divsNumber(num) {
//   var myDivs = document.querySelectorAll('div');
//   for (let k=1; k<= myDivs.length-1; k++) {
//     container.removeChild(myDivs[k]);
      
//   }
//   grid =prompt("Please enter number", "16");
//   addSquare(grid);
// };


////////////////////////////////////////////////////////////
function addSquare(){
 
    var square= document.createElement('div');
    square.classList.add('details');
    container.appendChild(square);
    square.style.backgroundColor="rgb(236, 207, 168)";
    square.style.width = `${1000/grid}px`;
    square.style.height=`${1000/grid}px`;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
for (var i=0; i<grid; i++){

    for (var j=0; j<grid; j++){
        addSquare();
        
    }}
var ele=document.querySelectorAll('.details');
for(let t=0;t<Math.pow(grid,2) ; t++){
   ele[t].addEventListener("mouseover", function()
   {ele[t].style.backgroundColor=getRandomColor();
  })}

  /////////////////////////////////
  