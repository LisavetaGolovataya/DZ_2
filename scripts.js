//Задание 1
let name = prompt('Ваше имя?');
let age = prompt('Ваш возраст?');
//let city = prompt('Ваш город проживания?');
//let phone = prompt('Ваш номер телефона?');
//let email = prompt('Ваш email?');
//let company = prompt('Ваше место работы?');
//console.log('Меня зовут ' + name + ' мне ' + age + ' лет.' + ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + ' Мои контактные данные: ' + phone + ' ' + email);

//Задание 2

let year = 2022-age;
console.log(name + ' родился в ' +  year + ' году.');


//Задание 3
let str = '2, 3, 6, 1, 8, 7';
let sum1 = (str[0] + str[1] + str[2]);
let sum2 = (str[3] + str[4] + str[5]);
if  (sum1 = sum2) {
    console.log('Да');
} else {
    console.log('Нет');
}

//Задание 4
let c = prompt('Введите число ');
if (c > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//Задание 5
let a = 10;
let b = 2;
let mult = a * b;
let sub = a - b;
let sum = a + b;
let div = a / b;
if (sum > 1) {
    console.log(sum**2);
};


// задание 6
if (a >= 6 && a < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 7
let n = prompt('Введите число от 0 до 59');
switch (n) {
    case (n < 15):
    console.log('1я четверть');
    break;
    case (n < 30):
    console.log('2я четверть');
    break;
    case (n < 45):
    console.log('3я четверть');
    break;
    case (n < 59):
    console.log('4я четверть');
    break;
};