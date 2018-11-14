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
    const amctysonspeak = 14.59;
    const amctysonsweekdaymatinee = 7.29;
    const univmalltheater = 4.00;

//FUN
    const nfltix = 100.26;
    const concerttix = 46.69;
    const twobeers = 10.00;
    const comedyshow = 60;
    const rennfest = 26;
    const didneyworl = 105;    

//RENT
    const onebraptincity = 1238.65;
    const onebraptoutcity = 979.03;
    const threebraptincity = 2045.20;
    const threebraptoutcity = 1582.14;

//EDUCATION
    const fulltimestu = 10230;
    const comcoll = 4847;

//INSURANCE
    const indivmonthprem = 440;
    const fammonthprem = 1168;


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
    console.log("cost of gas is" + costofgasone);

    costofgastwo = (agallonofdiesel/natlminwage).toFixed(2);
    $("#agallonofdieseldiv").text(costofgastwo + " HOURS");
    console.log("cost of gas is" + costofgastwo);

    costofgasthree = (fillasmalltank/natlminwage).toFixed(2);
    $("#fillasmalltankdiv").text(costofgasthree + " HOURS");
    console.log("cost of gas is" + costofgasthree);

    costofgasfour = (fillasmalldieseltank/natlminwage).toFixed(2);
    $("#fillasmalldieseltankdiv").text(costofgasfour + " HOURS");
    console.log("cost of gas is" + costofgasfour);

    costofgasfive = (fillalargetank/natlminwage).toFixed(2);
    $("#fillalargetankdiv").text(costofgasfive + " HOURS");
    console.log("cost of gas is" + costofgasfive);

    costofgassix = (fillalargedieseltank/natlminwage).toFixed(2);
    $("#fillalargedieseltankdiv").text(costofgassix + " HOURS");
    console.log("cost of gas is" + costofgassix);


// ----- METRO SECTION    
// ---------- main metro card
    costofmetro = (metroparking/natlminwage).toFixed(2);
    $("#costofmetrodiv").text(costofmetro + " HOURS");
    console.log("cost of metro is" + costofmetro);

// ---------- metro modal    
    costofmetroone = (peakmin/natlminwage).toFixed(2);
    $("#peakmindiv").text(costofmetroone + " HOURS");
    console.log("cost of metro is" + costofmetroone);

    costofmetrotwo = (peakmax/natlminwage).toFixed(2);
    $("#peakmaxdiv").text(costofmetrotwo + " HOURS");
    console.log("cost of metro is" + costofmetrotwo);

    costofmetrothree = (offpeakmin/natlminwage).toFixed(2);
    $("#offpeakmindiv").text(costofmetrothree + " HOURS");
    console.log("cost of metro is" + costofmetrothree);

    costofmetrofour = (offpeakmax/natlminwage).toFixed(2);
    $("#offpeakmaxdiv").text(costofmetrofour + " HOURS");
    console.log("cost of metro is" + costofmetrofour);

    costofmetrofive = (metroparking/natlminwage).toFixed(2);
    $("#metroparkingdiv").text(costofmetrofive + " HOURS");
    console.log("cost of metro is" + costofmetrofive);

    costofmetrosix = (metroparkingmax/natlminwage).toFixed(2);
    $("#metroparkingmaxdiv").text(costofmetrosix + " HOURS");
    console.log("cost of metro is" + costofmetrosix);


// ----- MOVIE SECTION    
// ---------- main movie card
    costofmovie = (avgmovieprice/natlminwage).toFixed(2);
    $("#costofmoviediv").text(costofmovie + " HOURS");
    console.log("cost of movie is" + costofmovie);

// ---------- movie modal    
    costofmovieone = (avgmovieprice/natlminwage).toFixed(2);
    $("#avgmoviepricediv").text(costofmovieone + " HOURS");
    console.log("cost of movie is" + costofmovieone);

    costofmovietwo = (amctysonspeak/natlminwage).toFixed(2);
    $("#amctysonspeakdiv").text(costofmovietwo + " HOURS");
    console.log("cost of movie is" + costofmovietwo);

    costofmoviethree = (amctysonsweekdaymatinee/natlminwage).toFixed(2);
    $("#amctysonsweekdaymatineediv").text(costofmoviethree + " HOURS");
    console.log("cost of movie is" + costofmoviethree);

    costofmoviefour = (univmalltheater/natlminwage).toFixed(2);
    $("#univmalltheaterdiv").text(costofmoviefour + " HOURS");
    console.log("cost of movie is" + costofmoviefour);


// ----- FUN SECTION    
// ---------- main fun card
    costoffun = (rennfest/natlminwage).toFixed(2);
    $("#costoffundiv").text(costoffun + " HOURS");
    console.log("cost of fun is" + costoffun);

// ---------- fun modal
    costoffunone = (nfltix/natlminwage).toFixed(2);
    $("#nfltixdiv").text(costoffunone + " HOURS");
    console.log("cost of fun is" + costoffunone);

    costoffuntwo = (concerttix/natlminwage).toFixed(2);
    $("#concerttixdiv").text(costoffuntwo + " HOURS");
    console.log("cost of fun is" + costoffuntwo);

    costoffunthree = (twobeers/natlminwage).toFixed(2);
    $("#twobeersdiv").text(costoffunthree + " HOURS");
    console.log("cost of fun is" + costoffunthree);

    costoffunfour = (comedyshow/natlminwage).toFixed(2);
    $("#comedyshowdiv").text(costoffunfour + " HOURS");
    console.log("cost of fun is" + costoffunfour);

    costoffunfive = (rennfest/natlminwage).toFixed(2);
    $("#rennfestdiv").text(costoffunfive + " HOURS");
    console.log("cost of fun is" + costoffunfive);

    costoffunsix = (didneyworl/natlminwage).toFixed(2);
    $("#didneyworldiv").text(costoffunsix + " HOURS");
    console.log("cost of fun is" + costoffunsix);


// ----- RENT SECTION    
// ---------- main rent card
    costofrent = (onebraptincity/natlminwage).toFixed(2);
   $("#costofrentdiv").text(costofrent + " HOURS");
    console.log("cost of rent is" + costofrent);

// ---------- rent modal    
    costofrentone = (onebraptincity/natlminwage).toFixed(2);
    $("#onebraptincitydiv").text(costofrentone + " HOURS");
    console.log("cost of rent is" + costofrentone);

    costofrenttwo = (onebraptoutcity/natlminwage).toFixed(2);
    $("#onebraptoutcitydiv").text(costofrenttwo + " HOURS");
    console.log("cost of rent is" + costofrenttwo);

    costofrentthree = (threebraptincity/natlminwage).toFixed(2);
    $("#threebraptincitydiv").text(costofrentthree + " HOURS");
    console.log("cost of rent is" + costofrentthree);

    costofrentfour = (threebraptoutcity/natlminwage).toFixed(2);
    $("#threebraptoutcitydiv").text(costofrentfour + " HOURS");
    console.log("cost of rent is" + costofrentfour);


// ----- EDU SECTION    
// ---------- main edu card
    costofedu = (fulltimestu/natlminwage).toFixed(2);
    $("#costofedudiv").text(costofedu + " HOURS");
    console.log("cost of edu is" + costofedu);

// ---------- edu modal    
    costofeduone = (fulltimestu/natlminwage).toFixed(2);
    $("#fulltimestudiv").text(costofeduone + " HOURS");
    console.log("cost of edu is" + costofeduone);

    costofedutwo = (comcoll/natlminwage).toFixed(2);
    $("#commcolldiv").text(costofedutwo + " HOURS");
    console.log("cost of edu is" + costofedutwo);


// ----- INS SECTION    
// ---------- main ins card
    costofins = (indivmonthprem/natlminwage).toFixed(2);
    $("#costofinsdiv").text(costofins + " HOURS");
    console.log("cost of ins is" + costofins);

// ---------- ins modal    
    costofinsone = (indivmonthprem/natlminwage).toFixed(2);
    $("#indivmonthpremdiv").text(costofinsone + " HOURS");
    console.log("cost of ins is" + costofinsone);

    costofinstwo = (fammonthprem/natlminwage).toFixed(2);
    $("#fammonthpremdiv").text(costofinstwo + " HOURS");
    console.log("cost of ins is" + costofinstwo);


})





}); //to document.readyfunction


// 24 hours in a day.
// 720 hours in a month.
// At a rate of 40 work hours a week,
// 173.3 hours in a month.
// At a rate of 60 work hours a week,
// 259.95 hours in a month.
// At a rate of 80 work hours a week,
// 346.6 hours in a month.