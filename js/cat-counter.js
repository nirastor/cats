// input data
let catsOnStart = 1;
let childbirthPerYear = 3;
let femaleCatsPerChildbirth = 4;
let numOfYears = 10;
let minReroducitiveAge = 2;

// intermediate declaration
let femaleCats = [];
let reproductiveCats =[];
let numOfIterations;
let reproductiveDelay;

// interface
let btnCount = document.querySelector(".btn-count");
let graphContainer = document.querySelector(".result-graph");


// main {}
btnCount.onclick = function() {
    countCats();
    console.log(femaleCats);
    showFinalResultAsText();
    drawGraph();
}

// **** function area ****

function countCats() {
    
    getInputData();
    setStartValues();
 
    for (let i = 0; i < numOfIterations; i++) {
        reproductiveCats[i + 1] = reproductiveCats[i]; 

        if (i > reproductiveDelay) {
            reproductiveCats[i + 1] = femaleCats[i + 1 - reproductiveDelay];
        }

        femaleCats[i + 1] = femaleCats[i] + reproductiveCats[i] * femaleCatsPerChildbirth;
    }
}

function getInputData() {
    numOfYears = document.getElementById("number-of-years").value;
}

function setStartValues() {
    femaleCats = [];
    reproductiveCats =[];
    femaleCats[0] = catsOnStart;
    reproductiveCats[0] = catsOnStart;
    numOfIterations = numOfYears * childbirthPerYear;
    reproductiveDelay = minReroducitiveAge * childbirthPerYear;
}

function showFinalResultAsText() {
    let resultOut = document.querySelector(".result");
    resultOut.textContent = femaleCats[numOfIterations];
}

function drawGraph() {
    while (graphContainer.firstChild) {
        graphContainer.removeChild(graphContainer.firstChild);
    }
    
    for (let i = 0; i < numOfIterations; i++) {
        let column = document.createElement("div");
        column.classList.add("result-graph-item");
        graphContainer.appendChild(column);
        column.style.height = femaleCats[i] / femaleCats[numOfIterations] * 100 + "%";
    }
}