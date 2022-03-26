let country = [
    "Mercedes",
    'Bmw',
    'Audi'
];




let city = [
    ['C-class', 'E-class', 'S-class', ""],
    ['3-series' , '5-series', '7-series'],
    ['a3', 'a4','a7']
];
let img = [
    ['<img src="./img/meredes c class.jpg" ></img>','<img src="./img/meredes e class.jpg" ></img>','<img src="./img/meredes s class.jpg" ></img>' ],
    ['<img src="./img/bmw 3 series.jpg"></img>','<img src="./img/bmw 5 series.jpg"></img>','<img src="./img/bmw 7 series.jpg"></img>'],
    ['<img src="./img/audi a3.jpg"></img>','<img src="./img/audi a5.jpg"></img>','<img src="./img/audi a7.jpg"></img>',]
];









let countryS = document.getElementById('country');
let cityS = document.getElementById("city");
let show = document.getElementById("show");
let car = document.getElementById("car");


// onload = function(){
//     let data = '<option selected disabled> OLke secin </option>';
//     for(let i = 0; i<country.length; i++){
//         data += `<option value="${i}">${country[i]}</option>`
//     }
//     countryS.innerHTML = data;
// }


onload = function(){
    let data = '<option  selected disabled> Marka secin </option>';
    for(let item in country){
        data += `<option value="${item}">${country[item]}</option>`
    }
    countryS.innerHTML = data;
}


countryS.onchange = function(){
    let data = '<option selected disabled> seria secin </option>';
    let value = countryS.value;
        for(let i = 0; i<city[value].length; i++){
            data += `<option value="${i}">${city[value][i]}</option>`
        }
        cityS.innerHTML = data;
}



// countryS.onchange = function(){
//     let data = '<option selected disabled> Seher secin </option>';
//     let value = countryS.value;
//     for(let item in city[value].length){
//         data += `<option value="${item}">${city[value][item]}</option>`
//     }
//     cityS.innerHTML = data;
// }


cityS.onchange = function(){

    let olke = countryS.value;
    let seher = cityS.value;
    let img = cityS.value

    show.innerHTML = `Sizin secdiyiniz marka ${country[olke]} <br/> Sizin secdiyin seria ${city[olke][seher]}  `
    car.innerHTML = '${img[ [ ]]}'
}





