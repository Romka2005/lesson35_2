//case 1
// let a = prompt("Введите целое число в диапазоне 1-7");
// switch(a){
//     case "1":
//         alert("понедельник");
//         break;
//     case "2":
//         alert("вторник");
//         break;
//     case "3":
//         alert("среда");
//         break;
//     case "4":
//         alert("четверг");
//         break;
//     case "5":
//         alert("пятница");
//         break;
//     case "6":
//         alert("субота");
//         break;
//     case "7":
//         alert("воскресенье");
//         break;
//     default:
//         alert("ЧЕГО?!");
//         break;
// }

//case 2
// let k = prompt("Введите целое число в диапазоне 1-5 с плохого до отлично");
// switch(k){
//     case "1":
//         alert("плохо");
//         break;
//     case "2":
//         alert("неудовлетворительно");
//         break;
//     case "3":
//         alert("удовлетворительно");
//         break;
//     case "4":
//         alert("хорошо");
//         break;
//     case "5":
//         alert("отлично");
//         break;
//     default:
//         alert("ошибка");
//         break;
// }

//case 3
// let a = +prompt("Введите целое число от 1-12(месяц)");

// switch(a){
//     case 1:
//     case 2:
//     case 12:
//         alert("Зима");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("Весна");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("Лето");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Осень");
//         break;
//     default:
//         alert("Error");
//         break;
// }

//case 4
// let a = +prompt("Введите целое число от 1-12(месяц)");

// switch(a){
//     case 3:
//     case 6:
//     case 9:
//     case 11:
//         alert("30 дней");
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         alert("31 дней");
//         break;
//     case 2:
//         alert("28 дней");
//         break;
//     default:
//         alert("Error");
//         break;
// }

//case 5
// let n = +prompt("Сложение - 1 Вычитание - 2 Умножение - 3 Деление - 4");
// let a = +prompt("Введите 1 число");
// let b = +prompt("Введите 2 число (кроме нуля)");

// switch(n){
//     case 1:
//         alert(a+b);
//         break;
//     case 2:
//         alert(a-b);
//         break;
//     case 3:
//         alert(a*b);
//         break;
//     case 4:
//         alert(a/b);
//         break;
//     default:
//         alert("Error");
//         break;
// }

//case 6
// let n = +prompt("1 - дециметр 2 - километр 3 - метр 4 - миллиметр 5 - сантиметр ");
// let l = +prompt("Введите длину отрезка");

// switch(n){
//     case 1:
//         alert(l/10);
//         break;
//     case 2:
//         alert(l*1000);
//         break;
//     case 3:
//         alert(l);
//         break;
//     case 4:
//         alert(l/1000);
//         break;
//     case 5:
//         alert(l/100);
//         break;
//     default:
//         alert("Error");
//         break;
// }

//case 7
// let n = +prompt("1 - килограмм 2 - миллиграмм 3 - грамм 4 - тонна 5 - центнер ");
// let l = +prompt("Введите массу тела");

// switch(n){
//     case 1:
//         alert(l);
//         break;
//     case 2:
//         alert(l/1000000);
//         break;
//     case 3:
//         alert(l/1000);
//         break;
//     case 4:
//         alert(l*1000);
//         break;
//     case 5:
//         alert(l*100);
//         break;
//     default:
//         alert("Error");
//         break;
// }

//case 8
// let d = +prompt("Введите целое число (день)");
// let m = +prompt("Введите целое число (месяц)");
// d--;

// if (d == 0) {
//     m--;
//     if (m == 0) { 
//         m = 12; 
//     }   
//     switch (m) {
//         case 1: 
//             d = 31;
//             break;
//         case 2: 
//             d = 28;
//             break;
//         case 3: 
//             d = 31;
//             break;
//         case 4: 
//             d = 30;
//             break;
//         case 5: 
//             d = 31;
//             break;
//         case 6: 
//             d = 30;
//             break;
//         case 7: 
//             d = 31;
//             break;
//         case 8: 
//             d = 31;
//             break;
//         case 9: 
//             d = 30;
//             break;
//         case 10: 
//             d = 31;
//             break;
//         case 11: 
//             d = 30;
//             break;
//         case 12: 
//             d = 31;
//             break;  
//     }
// }
// alert(`Day: ${d}; Month: ${m}`);

//case 9
// let d = +prompt("Введите целое число (день)");
// let m = +prompt("Введите целое число (месяц)");

// switch(m){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         if(d==31){
//             d=0;
//         }
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         if(d==30){
//             d=0;
//         }
//         break;
//     case 2:
//         if(d==28){
//             d=0;
//         }
//         break;
// }
// if(d==0){
//     if(m==12){
//         m=1;
//     }
//     else{
//         m++;
//     }
    
// }
// d++;

// alert(`Day: ${d}; Month: ${m}`);

//case 10
// let c = prompt("Выберите направление: С - север З - запад Ю - юг В - восток");
// let n = +prompt("Выберите команду: 0 - продолжать движение 1 - поворот налево -1 - поворот направо");

// switch(c){
//     case "С":
//         switch(n){
//             case 0:
//                 c = "С";
//                 break;
//             case 1:
//                 c = "З";
//                 break;
//             case -1:
//                 c = "В";
//                 break;
//         }
//         break;
//     case "З":
//         switch(n){
//             case 0:
//                 c = "З";
//                 break;
//             case 1:
//                 c = "Ю";
//                 break;
//             case -1:
//                 c = "С";
//                 break;
//         }
//         break;
//     case "Ю":
//         switch(n){
//             case 0:
//                 c = "Ю";
//                 break;
//             case 1:
//                 c = "В";
//                 break;
//             case -1:
//                 c = "З";
//                 break;
//         }
//         break;
//     case "В":
//         switch(n){
//             case 0:
//                 c = "В";
//                 break;
//             case 1:
//                 c = "С";
//                 break;
//             case -1:
//                 c = "Ю";
//                 break;
//         }
//         break;

// }
// alert(c);

//case 11
// let c = prompt("Выберите направление: С - север З - запад Ю - юг В - восток");
// let n1 = +prompt("Выберите команду:  1 - поворот налево -1 - поворот направо 2 - поворот на 180");
// let n2 = +prompt("Выберите команду:  1 - поворот налево -1 - поворот направо 2 - поворот на 180");

// switch(c){
//     case "С":
//         switch(n1+n2){
//             case -1:
//             case 3:
//                 c = "В";
//                 break;
//             case 1:
//                 c = "З";
//                 break;
//             case -2:
//             case 2:
//                 c = "Ю";
//                 break;
//         }
//         break;
//     case "З":
//         switch(n1+n2){
//             case -1:
//             case 3:
//                 c = "С";
//                 break;
//             case 1:
//                 c = "Ю";
//                 break;
//             case -2:
//             case 2:
//                 c = "В";
//                 break;
//         }
//         break;
//     case "Ю":
//         switch(n1+n2){
//             case -1:
//             case 3:
//                 c = "З";
//                 break;
//             case 1:
//                 c = "В";
//                 break;
//             case -2:
//             case 2:
//                 c = "С";
//                 break;
//         }
//         break;
//     case "В":
//         switch(n1+n2){
//             case -1:
//             case 3:
//                 c = "Ю";
//                 break;
//             case 1:
//                 c = "С";
//                 break;
//             case -2:
//             case 2:
//                 c = "З";
//                 break;
//         }
//         break;

// }
// alert(c);

//case 12
// let n = +prompt("Введите номер элемента окружности");
// let ll = +prompt("Введите длину элемента окружности");
// let r,d,l,s;
// let p = 3.14;
// switch(n){
//     case 1:
//         r=ll;//2
//         d=2*r;
//         l=2*p*r;
//         s=p*(r**2);
//         break;
//     case 2:
//         r=ll/2;
//         d=ll;
//         l=2*p*r;
//         s=p*(r**2);
//         break;
//     case 3:
//         r=ll/2*p;
//         d=2*r;
//         l=ll;
//         s=p*(r**2);
//         break;
//     case 4:
//         r=(ll/p)**1/2;
//         d=2*r;
//         l=2*p*r;
//         s=ll;
//         break;
// }

alert(`R = ${r}; D = ${d}; L = ${l}; S = ${s}`);
