//------------------------------------
//      Практика
//------------------------------------


list_A = []         // Массив для задания 1
list_A.length = 25  // Длинна массива для 1го заания   
list_B = []         // Массив для задания 1.1   
list_C = []         // Массив для задания 2
list_E = []         // Массив для задания 3
listItemMax = 0

// ------------------ Задание 1 ------------------

for (i = 0; i < list_A.length; i++){
    
    // Заполняю массив
    list_A[i] = Math.floor(Math.random()*100+1)  
    
   isPrime = true
    
    // Проверяю на простоту
    for (y = 2; y < list_A[i]; y++){
        
        if (list_A[i] % y == 0){
            isPrime = false
            break
            list_B[list_B.length] = list_A[i]
        }
    }
    
    // Записываю простые числа в массив list_B
    if (isPrime){
        list_B[list_B.length] = list_A[i]
    }
    
}

// создаю переменую для минимального числа
listItemMin = list_B[0]

// Перебор массива list_B для поиска min max
for (z = 0; z < list_B.length; z++){
    
    
    if (list_B[z] > listItemMax) {
        listItemMax = list_B[z]
    } 
    
    if (listItemMin > list_B[z]){
        listItemMin = list_B[z]
    }
    
}


// ------------------ Задание 2 ------------------



// Перебор масиива list_B (с простыми чслами из 1го задания)
for (i = 0; i < list_B.length; i++){
    
    // ищу эл-ты между максимальным и минимальным заначением
    if (list_B[i] != listItemMax && list_B[i] != listItemMin) {
        
        // Записываю найденые числа в новый массив.
        list_C[list_C.length] = list_B[i]
    }
}


// ------------------ Задание 3 ------------------


// Создаю переменные для поиска min max
maxValue = 0
minValue = list_C[0]

// Дублирую данные массива из второго задания в новый
list_E = list_C.concat()


for (i = 0; i < list_E.length; i++){
    
    if (list_E[i] > maxValue){
        
        // присваиваю значение максимального числа
        maxValue = list_E[i]
        
        // присваиваю индекс максимального числа
        maxValueIndex = list_E.indexOf(list_E[i])
        
    }
    if (list_E[i] < minValue) {
        
        // присваиваю значение минимального числа
        minValue = list_E[i]
        
        // присваиваю индекс максимального числа
        minValueIndex = list_E.indexOf(list_E[i])
    }
    
}

// меняю местами знечения min и max
list_E[maxValueIndex] = minValue;
list_E[minValueIndex] = maxValue;


// Вывожу все в index
document.write('Задание 1<br>')
document.write('Массив list_A: ' + list_A.join(', ') + '<br>')
document.write('Массив list_B: ' + list_B.join(', ') + '<br>')
document.write('Минимальное число: ' + listItemMin + '<br>')
document.write('Максимаьное число: ' + listItemMax + '<br>')
document.write('<br>Задание 2<br>')
document.write('Массив list_С: ' + list_C.join(', ') + '<br>')
document.write('<br>Задание 3<br>')
document.write('Максимальное число: ' + maxValue + '<br>')
document.write('Индекс максимального числа: ' + maxValueIndex + '<br>')
document.write('Минимальное число: ' + minValue + '<br>')
document.write('Индекс минимального числа: ' + minValueIndex + '<br>')
document.write('Массив list_С: ' + list_C.join(', ') + '<br>')
document.write('Массив list_E после смены мест min и max: ' + list_E.join(', ') + '<br>')




//------------------------------------
//      Задание 4       Практика
//------------------------------------



// Созданю новый массив 
list_F = [23,1,2,52,5,34,23,6,246,436]
indexA = list_F.length -2
console.log(list_F)

document.write('<br>Задание 4<br>')
document.write('Массив list_F: ' + list_F.join(', ') + '<br>')


for (i = 0; i < 10 ; i++){
    list_F[list_F.length] = list_F[indexA]
    list_F.splice(indexA, 1)
    console.log(indexA)
    indexA--;
    
}

console.log(list_F)



document.write('Перевернутый массив list_F : ' + list_F.join(', ') + '<br>')




//------------------------------------
//      Задание 1       Лекция
//------------------------------------


//list = []
//list.length = +prompt('')
//
//for (i = 0; i < list.length; i++) {
//
//    list[i] = Math.floor(Math.random() * 66 - 20);
//
//    if ((list[i] > 9 && list[i] < 100) || (list[i] < -9 && list[i] > -100)) {
//
//        console.log(list[i])
//    }
//}
//console.log(list)


//------------------------------------
//    Задание 2  Лекция
//------------------------------------

//
//a = [2, 3, 5, 9, 9, 6, 30, 6, 56]
//b = [2, 5, 8, 9, 7, 31, 69, 576, 45, 2, 9]
//checkLong = 0
//checkShort = 0
//checkResul = []
//
//if (a < b) {
//
//    checkLong = b
//    checkShort = a
//
//} else {
//    checkLong = a
//    checkShort = b
//}
//
//for (i = 0; i < checkLong.length; i++) {
//
//    for (y = 0; y < checkShort.length; y++) {
//
//        if (checkLong[i] == checkShort[y]) {
//
//            checkResul[checkResul.length] = checkLong[i];
//        }
//    }
//}
//
//console.log(checkResul)


//------------------------------------
//    Задание 3  Лекция
//------------------------------------


//list = []
//list.length = 20
//
//for (i = 0; i < list.length; i++) {
//        list[i] = Math.floor(Math.random() * 10 + 1);
//
//    isPrime = true;
//
//    for (y = 2; y <= list[i] - 1; y++) {
//
//        if (list[i] % y == 0) {
//            isPrime = false;
//            break;
//
//        }
//    }
//    
//    if (isPrime) {
//        console.log(list[i])
////        list[i] = undefined
//        
//        for (k = i; k < list.length - 2; k++){
//            list[k] = list[k + 1] 
//        }
//        
//        list.length--
//        i--
//    }
//}
//
//console.log(list)

//newList = []
//
//for (i = 0; i < list.length; i++){
//    if (list[i] != undefined) {
//        newList[newList.length] = list[i]
//    }
//}
//
//console.log(newList)
