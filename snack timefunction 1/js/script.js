
const button = document.getElementById('play');
let conteggio = 0;
let gameOver = false;

button.addEventListener ('click', function(){

    if (!gameOver){
        if (conteggio < 10){
            conteggio++;
            button.innerHTML ='#' + conteggio; 
        } else{ 
            gameOver = true;
            setTimeout(function(){
            gameOver = false
            conteggio = 0;
            button.innerHTML ='#' + conteggio; 
            },3000)
        }
    }
})
