let favoriteNumber = 13;
let APIURL = "http://numbersapi.com";

//1.
async function part1(){
    let data = await $.getJSON(`${APIURL}/${favoriteNumber}?json`);
    console.log(data);
}
part1();

//2.
const favoriteNumbers = [1,2,3,5,13,23]
async function part2(){
    let data = await $.getJSON(`${APIURL}/${favoriteNumbers}?json`);
    console.log(data);
}
part2();

//3.

async function part3(){
    let facts = await Promise.all(
        Array.from({length:4}, () => $.getJSON(`${APIURL}/${favoriteNumber}?json`))
    );
    facts.forEach(data =>{
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();