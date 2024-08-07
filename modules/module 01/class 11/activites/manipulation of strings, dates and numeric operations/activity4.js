// 4) Dias entre duas datas

let x1 = new Date(2022, 8, 9);
let x2 = new Date(2024, 7, 7);

function day_between_2dates(date1, date2){
    let milliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime());
    let milliseconds_per_day = 24 * 3600 * 1000;
    let difference_between_dates = Math.ceil(milliseconds_between_dates / milliseconds_per_day);

    return difference_between_dates;
}

console.log(`A diferença entre as datas é de ${day_between_2dates(x1, x2)} dias`);


