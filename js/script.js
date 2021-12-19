// Dichiarazione variabili

// Livello facile
const easy = document.querySelector('.easy-level');
const easyGrid = 100;

// Livello medio
const medium = document.querySelector('.medium-level');
const mediumGrid = 81;

// Livello difficile
const hard = document.querySelector('.hard-level');
const hardGrid = 49;

// Contenitore dei 'box'
const gridContainer = document.querySelector('.grid-container');

// Variabili per la scelta del numero di
// 'box' contenuti nel container
let easyDifficulty = false;
let mediumDifficulty = false;
let hardDifficutly = false;

// Funzione per il cambio dimensione della grid
// in base alla difficoltà scelta

function gridDimension (boxContainer){
    if(easy){

        boxContainer.classList.add('easy-width');
        boxContainer.classList.remove('medium-width');
        boxContainer.classList.remove('hard-width');
        
    }
    else if(medium){

        boxContainer.classList.remove('easy-width');
        boxContainer.classList.add('medium-width');
        boxContainer.classList.remove('hard-width');
        
    }
    else{ 

        boxContainer.classList.remove('easy-width');
        boxContainer.classList.remove('medium-width');
        boxContainer.classList.add('hard-width');
    }
}