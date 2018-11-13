console.log("script.js is connected and working");

$(document).ready(function(){

//NATL MIN WAGE
    const natlminwage = 7.25;

// EMPTY CONSTS
    let costoffood = 0;
    let costofgas = 0;
    let costofmetro = 0;

//FOOD
    const familyfouroneweek = 200;

//GAS
    const fillasmalltank = 33;

//METRO
    const metroparking = 4.85;

$("#nationalwagebutton").on("click", function() {
    alert("I clicked it");
    console.log("I clicked it");
    
    costoffood = (familyfouroneweek/natlminwage);
    $("#costoffooddiv").text(costoffood);
    console.log("cost of food is" + costoffood);

    costofgas = (fillasmalltank/natlminwage);
    $("#costofgasdiv").text(costofgas);
    console.log("cost of gas is" + costofgas);

    costofmetro = (metroparking/natlminwage);
    $("#costofmetrodiv").text(costofmetro);
    console.log("cost of metro is" + costofmetro);

})





}); //to document.readyfunction
