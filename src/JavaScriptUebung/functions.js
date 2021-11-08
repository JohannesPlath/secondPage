let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Philadelphia', population: 1526006}];




let bigCities = cities.filter(function (e) {
        return e.population > 300000;
    });

let numbers = [1, 2, 3];
let sum = numbers.reduce (function (total, currentValue ){
    total += currentValue
    return total
});
console.log(sum);