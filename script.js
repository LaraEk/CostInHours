console.log("script.js is connected and working");

$(document).ready(function(){

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
    const familyfouroneweek = 200;
//    <p>Avg groc/wk (family of 4, thrift): 146 (in 2013) 158 (2018)</p>
//    <p>Avg groc/wk (family of 4, low-cost): 191 (in 2013) 206 (2018)</p>
//    <p>Avg groc/wk (family of 4, moderate): 239 (in 2013) 258 (2018)</p>
//    <p>Avg groc/wk (family of 4, liberal): 289 (in 2013) 313 (2018)</p>
//    <p>https://www.usatoday.com/story/news/nation/2013/05/01/grocery-costs-for-family/2104165/</p> -->


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
    
    costoffood = (familyfouroneweek/natlminwage).toFixed(2);
    $("#costoffooddiv").text(costoffood + " HOURS");
    console.log("cost of food is" + costoffood);

    costofgas = (fillasmalltank/natlminwage).toFixed(2);
    $("#costofgasdiv").text(costofgas + " HOURS");
    console.log("cost of gas is" + costofgas);

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
