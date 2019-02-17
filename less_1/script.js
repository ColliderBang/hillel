//------------------------------------
//    Задание 2
//------------------------------------



var r = +prompt('Введите радиус основания цилиндра', 5);
var h = +prompt('Введите высоту цилиндра', 5);
var s = r * r * Math.PI;
var v = s * h;

var star = '**************<br>';
var dash = '--------------------<br>';
var lineBreak = '<br>';

    document.write(star +
                   'Обьем цилиндра с площадью основы ' + s + ', радиусом ' + r + 'и высотой ' + h + 'равен: ' + lineBreak +
                   dash + 
                   'V = ' + v + lineBreak +
                   dash +
                   'end'
                  );


//------------------------------------
//    Задание 2
//------------------------------------



//var a = prompt('Значение a', '');
//var b = prompt('Значение b', '');
//var c = prompt('Значение c', '');
//    a = parseInt(a);
//    b = parseInt(b);
//    c = parseInt(c);
//
//    sum = a + b + c
//
//    document.write(sum + '<br>');
//
//var even_number_a = (a%2 == 0)&&document.write("a четное <br>");
//var even_number_b = (b%2 == 0)&&document.write("b четное <br>");
//var even_number_c = (c%2 == 0)&&document.write("c четное <br>");

