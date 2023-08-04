const inputRangePtn = document.querySelector("#ptn");
const rangeValuePtn = document.querySelector("#range-value-ptn");

inputRangePtn.addEventListener("input", function(){
    rangeValuePtn.innerHTML = `${this.value}g/kg`;
})

const inputRangeFat = document.querySelector("#fat");
const rangeValueFat = document.querySelector("#range-value-fat");

inputRangeFat.addEventListener("input", function(){
    rangeValueFat.innerHTML = `${this.value}g/kg`;
})