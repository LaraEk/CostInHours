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

//MOVIE
    const avgmovieprice = 9.14;

$("#nationalwagebutton").on("click", function() {
    console.log("I clicked it");
    
    costoffood = (familyfouroneweek/natlminwage).toFixed(2);
    $("#costoffooddiv").text(costoffood + "HOURS");
    console.log("cost of food is" + costoffood);

    costofgas = (fillasmalltank/natlminwage).toFixed(2);
    $("#costofgasdiv").text(costofgas + "HOURS");
    console.log("cost of gas is" + costofgas);

    costofmetro = (metroparking/natlminwage).toFixed(2);
    $("#costofmetrodiv").text(costofmetro + "HOURS");
    console.log("cost of metro is" + costofmetro);

    costofmovie = (avgmovieprice/natlminwage).toFixed(2);
    $("#costofmoviediv").text(costofmovie + "HOURS");
    console.log("cost of movie is" + costofmovie);

})





}); //to document.readyfunction
