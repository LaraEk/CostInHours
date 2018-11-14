console.log("script.js is connected and working");  

$(document).ready(function(){

    $('.modal').modal();

//NATL MIN WAGE
    const natlminwage = 7.25;

// EMPTY LETS
    let costoffood = 0;
    let costofgas = 0;
    let costofmetro = 0;
    let costofmovie = 0;
    let costoffun = 0;
    let costofrent = 0;
    let costofedu = 0;
    let costofins = 0;


//FOOD
    // median of indiv 19-50 per. at mod-cost plan. used mod-cost for all calcs
    const indivweeklycost = 65;
    const indivmonthlycost = 275;
    const familyoftwoweekly = 141;
    const familyoftwomonthly = 611;
    const familyoffourweekly = 244;
    const familyoffourmonthly = 1057;

//GAS
    const fillasmalltank = 33;
//    Nat'l avg: $2.75/gal [as of 11.9.2018]</p>
//    <p>Fill a 12-gal tank: $33</p>
//    <p>Fill a 15-gal tank: $41.25</p>


//METRO
    const metroparking = 4.85;
//    <!-- <p>Metro ticket (off-peak min): $2.00 </p>
//    <p>Metro ticket (peak longest): $6.00 </p>
//    <p>Metro parking (gen'l): $4.85</p>
//    <p>Metro parking (most exp): $8.95</p> -->

//MOVIE
    const avgmovieprice = 9.14;

//FUN
    const rennfesttkt = 26;
//<p>Cost of Sports game</p>
//<p>Cost of concert ticket</p>
//<p>Cost of entrance to a club</p>
//<p>cost of stand-up comedy show</p> 
//<p>Cost of entrance to a fun fair</p>
//<p>Cost of entrance to an amusement park</p>-->

//RENT
//Average rent for a month in US: $

//EDUCATION
//<p>Average cost of college, 1 semester: $</p>

//INSURANCE
// Average 1 mo health insurance in US: $</p>

$("#nationalwagebutton").on("click", function() {
    console.log("I clicked it");
    
// ----- FOOD SECTION    
// ---------- main food card
    costoffood = (indivmonthlycost/natlminwage).toFixed(2);
    $("#costoffooddiv").text(costoffood + " HOURS");
    console.log("cost of food is" + costoffood);

// ---------- food modal    
    costoffoodone = (indivweeklycost/natlminwage).toFixed(2);
    $("#costindivweeklydiv").text(costoffoodone + " HOURS");
    console.log("cost of food is" + costoffoodone);

    costoffoodtwo = (indivmonthlycost/natlminwage).toFixed(2);
    $("#costindivmonthlydiv").text(costoffoodtwo + " HOURS");
    console.log("cost of food is" + costoffoodtwo);

    costoffoodthree = (familyoftwoweekly/natlminwage).toFixed(2);
    $("#costfamtwoweeklydiv").text(costoffoodthree + " HOURS");
    console.log("cost of food is" + costoffoodthree);

    costoffoodtwo = (familyoftwomonthly/natlminwage).toFixed(2);
    $("#costfamtwomonthlydiv").text(costoffoodtwo + " HOURS");
    console.log("cost of food is" + costoffoodtwo);

    costoffoodfive = (familyoffourweekly/natlminwage).toFixed(2);
    $("#costfamfourweeklydiv").text(costoffoodfive + " HOURS");
    console.log("cost of food is" + costoffoodfive);

    costoffoodsix = (familyoffourmonthly/natlminwage).toFixed(2);
    $("#costfamfourmonthlydiv").text(costoffoodsix + " HOURS");
    console.log("cost of food is" + costoffoodsix);


// ----- GAS SECTION    
// ---------- main gas card
    costofgas = (fillasmalltank/natlminwage).toFixed(2);
    $("#costofgasdiv").text(costofgas + " HOURS");
    console.log("cost of gas is" + costofgas);

// ---------- gas modal    

    costofmetro = (metroparking/natlminwage).toFixed(2);
    $("#costofmetrodiv").text(costofmetro + " HOURS");
    console.log("cost of metro is" + costofmetro);

    costofmovie = (avgmovieprice/natlminwage).toFixed(2);
    $("#costofmoviediv").text(costofmovie + " HOURS");
    console.log("cost of movie is" + costofmovie);

    costoffun = (rennfesttkt/natlminwage).toFixed(2);
    $("#costoffundiv").text(costoffun + " HOURS");
    console.log("cost of fun is" + costoffun);

    costofrent = (avgmovieprice/natlminwage).toFixed(2);
 //   $("#costofrentdiv").text(costofrent + " HOURS");
    console.log("cost of rent is" + costofrent);

    costofedu = (avgmovieprice/natlminwage).toFixed(2);
    $("#costofedudiv").text(costofedu + " HOURS");
    console.log("cost of edu is" + costofedu);

    costofins = (avgmovieprice/natlminwage).toFixed(2);
    $("#costofinsdiv").text(costofins + " HOURS");
    console.log("cost of ins is" + costofins);
})





}); //to document.readyfunction
