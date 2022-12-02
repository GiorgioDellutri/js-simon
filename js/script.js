
const button = document.getElementById('play');

let conteggio = 0;

button.addEventListener ('click', function(){
    conteggio++;
    
    for ( let i = 0; i < 10; i++){
        button.innerHTML ='#' + conteggio;
        console.log(conteggio);
    }

    setTimeout(function(){
        if
    })
});
