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
    const agallonofgas = 2.677;
    const agallonofdiesel = 3.273;
    const fillasmalltank = 32.124;
    const fillasmalldieseltank = 39.276;
    const fillalargetank = 40.155;
    const fillalargedieseltank = 49.095;

//METRO
    const peakmin = 2.25;
    const peakmax = 6;
    const offpeakmin = 2;
    const offpeakmax = 3.85;
    const metroparking = 4.95;
    const metroparkingmax = 8.95;

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
    costofgasone = (agallonofgas/natlminwage).toFixed(2);
    $("#agallonofgasdiv").text(costofgasone + " HOURS");
    console.log("cost of food is" + costofgasone);

    costofgastwo = (agallonofdiesel/natlminwage).toFixed(2);
    $("#agallonofdieseldiv").text(costofgastwo + " HOURS");
    console.log("cost of food is" + costofgastwo);

    costofgasthree = (fillasmalltank/natlminwage).toFixed(2);
    $("#fillasmalltankdiv").text(costofgasthree + " HOURS");
    console.log("cost of food is" + costofgasthree);

    costofgasfour = (fillasmalldieseltank/natlminwage).toFixed(2);
    $("#fillasmalldieseltankdiv").text(costofgasfour + " HOURS");
    console.log("cost of food is" + costofgasfour);

    costofgasfive = (fillalargetank/natlminwage).toFixed(2);
    $("#fillalargetankdiv").text(costofgasfive + " HOURS");
    console.log("cost of food is" + costofgasfive);

    costofgassix = (fillalargedieseltank/natlminwage).toFixed(2);
    $("#fillalargedieseltankdiv").text(costofgassix + " HOURS");
    console.log("cost of food is" + costofgassix);


// ----- METRO SECTION    
// ---------- main metro card
    costofmetro = (metroparking/natlminwage).toFixed(2);
    $("#costofmetrodiv").text(costofmetro + " HOURS");
    console.log("cost of metro is" + costofmetro);

// ---------- metro modal    
    costofmetroone = (peakmin/natlminwage).toFixed(2);
    $("#peakmindiv").text(costofmetroone + " HOURS");
    console.log("cost of food is" + costofmetroone);

    costofmetrotwo = (peakmax/natlminwage).toFixed(2);
    $("#peakmaxdiv").text(costofmetrotwo + " HOURS");
    console.log("cost of food is" + costofmetrotwo);

    costofmetrothree = (offpeakmin/natlminwage).toFixed(2);
    $("#offpeakmindiv").text(costofmetrothree + " HOURS");
    console.log("cost of food is" + costofmetrothree);

    costofmetrofour = (offpeakmax/natlminwage).toFixed(2);
    $("#offpeakmaxdiv").text(costofmetrofour + " HOURS");
    console.log("cost of food is" + costofmetrofour);

    costofmetrofive = (metroparking/natlminwage).toFixed(2);
    $("#metroparkingdiv").text(costofmetrofive + " HOURS");
    console.log("cost of food is" + costofmetrofive);

    costofmetrosix = (metroparkingmax/natlminwage).toFixed(2);
    $("#metroparkingmaxdiv").text(costofmetrosix + " HOURS");
    console.log("cost of food is" + costofmetrosix);



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
