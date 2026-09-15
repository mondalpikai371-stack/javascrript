const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select");



for(let select of dropdowns){
    for(currCode in countryLists){
        let newoption=document.createElement("option");
        newoption.innerText=currCode;
        newoption.value = currCode;
        select.append(newoption);
    }
}








