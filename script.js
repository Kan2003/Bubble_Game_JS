var hitrn = 0;
var score = 0;
var timer = 60;


function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 182; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runtime(){
    
    var timeint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else{
          clearInterval(timeint)
          document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <br> <h1>Your Score :- ${score}</h1>`
        }   
    },1000)
}
function getNewhit(){
    hitrn =  Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent = hitrn
}

function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var  clickedNum = dets.target.textContent;
    if(clickedNum == hitrn){
        increaseScore();
        makebubble()
        getNewhit()
    }
})

makebubble();
runtime();
getNewhit();


