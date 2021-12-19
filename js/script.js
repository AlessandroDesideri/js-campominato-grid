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
let hardDifficulty = false;

// Funzione per il cambio dimensione della grid
// in base alla difficoltà scelta

function gridDimension (boxContainer){
    if(easyDifficulty){

        boxContainer.classList.add('easy-width');
        boxContainer.classList.remove('medium-width');
        boxContainer.classList.remove('hard-width');
        
    }
    else if(mediumDifficulty){

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

// Funzione creazione box
function boxCreator(container, index){
    const createdSquare = document.createElement('div');
    createdSquare.className = 'square';
    createdSquare.innerHTML = index;
    gridContainer.append(createdSquare);
    createdSquare.addEventListener('click', function(){
        this.classList.toggle('cyan')
    })
}

// Limito la dimensione della griglia creata
function maxGridDimension(maxDimension){
    for(let i = 1; i <= maxDimension; i++){
        boxCreator(gridContainer, i);
    }
}

// Creazione eventi in base alla 
// difficoltà scelta
easy.addEventListener('click', function(){
    if (!easyDifficulty){
        gridContainer.innerHTML='';
        easyDifficulty = true;
        mediumDifficulty = false;
        hardDifficutly = false;
        gridDimension(gridContainer);
        maxGridDimension(easyGrid)
    }
})
medium.addEventListener('click', function(){
    if (!mediumDifficulty){
        gridContainer.innerHTML='';
        easyDifficulty = false;
        mediumDifficulty = true;
        hardDifficutly = false;
        gridDimension(gridContainer);
        maxGridDimension(mediumGrid)
    }
})
hard.addEventListener('click', function(){
    if (!hardDifficulty){
        gridContainer.innerHTML='';
        easyDifficulty = false;
        mediumDifficulty = false;
        hardDifficutly = true;
        gridDimension(gridContainer);
        maxGridDimension(hardGrid)
    }
})