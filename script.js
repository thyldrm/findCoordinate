var body1 = document.querySelector("#body1");
var time = document.querySelector("#time");
var btnClick = document.querySelector("#start");

eventListeners();

function eventListeners(){
    body1.addEventListener("click",find);
    btnClick.addEventListener("click",runTimer);
}

var reset;
var sayac=1;

function runTimer(event) {
    reset = setInterval(timer,1000)
    btnClick.disabled=true;
    event.stopPropagation();
}

function timer(){
    time.innerHTML=sayac;
    sayac++;
}

var x;

 const deger = function calculate(){
    x = Math.floor((Math.random() * 1519) + 1);
    return x;
}

const a = deger();
console.log(a);
needFind.innerHTML=`Bulmanız gereken X koordinatı = ${a}`;


  function find(event){

      console.log(a);
      console.log(event.pageX);

      clicked.innerHTML=`Şu an bulduğunuz koordinat ${event.pageX}`;
      

      if(a===event.pageX){
          console.log("You win")
          clearInterval(reset);
          congrats.innerHTML=`TEBRİKLER ${sayac-1} SANİYEDE BULDUNUZ`

      }else {
          console.log("Again")
      }

      event.preventDefault();
  }