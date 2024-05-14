"use strict";

let products = [ 
    {product: "Gummy Worms", price: 5.79}, 
    {product: "Plain M&Ms", price: 2.89}, 
    {product: "Peanut M&Ms", price: 2.89}, 
    {product: "Swedish Fish", price: 3.79}, 
  
    // TODO:  fill the array with 10 candies of various 
    //        price ranges 
 ]; 

// Which candies costs less than $4.00? 

 let candyCostLessThan4 = products.filter((product) => product.price < 4.0)
 candyCostLessThan4.forEach((candyCostLessThan4) => {console.log(candyCostLessThan4.product + " " + candyCostLessThan4.price);})


 console.log();
// Which candies has "M&M" its name? 

let namedCandiesM$M = products.filter((products) => products.product.includes("M&Ms"))
namedCandiesM$M.map((products) => products.product);
namedCandiesM$M.forEach((namedCandiesM$M) => {console.log(namedCandiesM$M.product);})

console.log();
// Do we carry "Swedish Fish"? 

let doWeHaveSwdishFish = products.find((p) => p.product == "Swedish Fish");

if (doWeHaveSwdishFish) {
    console.log("Yes, We have Swedish Fish");
}else{
    console.log("No, We dont have Swedish Fish");
}

