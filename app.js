// // // // // // Loops donguler

// // // // // // for loop

// // // // // for(let i=0; i<10; i++){
// // // // //     console.log(i);
// // // // // }

// // // // // for(let i=0; i<10; i++){
         
// // // // //     if(i==3){
// // // // //         console.log('en sevdiğin sayı : '+i);
// // // // //         continue;

// // // // //     }

// // // // //     if (i==6){
// // // // //         console.log('en sevmediğim rakam : 6')
// // // // //         break;
// // // // //     }
// // // // // console.log(i);
     

// // // // // }

// // // // // for(let i=0; i<10; i++){
         
// // // // // console.log(i);
     
// // // // // }

// // // // // let i=0;
// // // // // while(i<10){

// // // // //     console.log(i);
// // // // //     i++;

// // // // // }

// // // // //  let i=0;
// // // // //  do{

// // // // //      console.log(i);
// // // // //      i++;

// // // // //  }while(i<10)

// // // // let toplam=0;
// // // // for (let i=10;i>0;i--){
// // // // //toplam+=i;
// // // // console.log(i);

// // // // }
// // // // //console.log(toplam);

// // let cars = ['Bmw','Mercedes','Toyota']
// // let people = [
// //     {firstName: 'ada',lastName: 'bilgi'},
// //     {firstName: 'yiğit',lastName: 'bilgi'},
// //     {firstName: 'çınar',lastName: 'bilgi'},
// // ];

// // // for (let i=0; i<people.length;i++){
// // //     console.log(people[i]);
// // // }

// // //objects

// // // people.forEach(function(item){
// // //     console.log(item);
// // // });

// // // people.forEach(function(item){
// // //          console.log(item.firstName);
// // //      });
    
// // // map: returns an array

// // // let val = people.map(function(item){
// // //     return item.firstName + ' ' + item.lastName;
// // // });

// // // console.log(val);


// // // for(let i=0;i<cars.length;i++){
// // //     console.log(cars[i]);
// // // }

// // // for-in

// // //  for(let i in cars){
// // //      console.log(`index : ${i} value : ${cars[i]}`);
// // //  }
// // //foreach metodu

// // // cars.forEach(function(item){
// // //     console.log(item);
// // // });

// // // let numbers = [1,5,6,8,10];
// // // let num = numbers.map(function(n){
// // //     return n*n;
// // // });

// // // console.log(num);

// // /**
// //  * demoo loops : Sayı tahmin oyunu
// //  * 
// //  * 1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalısın
// //  * puanlama yapın
// //  * kullancı kaç kerede bileceğini belirtebilirsin
// //  * 
// //  */ 


// //  var hak,can;
// //  var tahmin,sayac = 0;
// //  var sayi = Math.floor((Math.random()*10)+1);
// // can = Number(prompt('kaçkerede bileceksiniz?'));
// // hak = can;
// // console.log(sayi);

// // while(hak>0){
// //     hak--;
// //     sayac++;
// //     tahmin = Number(prompt('bir sayı giriniz'));
    
// // //     if(sayi == tahmin){
// // //         console.log(`tebrikler ${sayac} defada bildiniz`);
// // //         console.log(`puan : ${100 -(100/can)*(sayac-1)}`);
// // //         break;
// // //     }else if(sayi > tahmin){
// // //         console.log('aşağı');
// // //     }else{
// // //         console.log('yukarı');
// // //     };

// // //     if(hak==0){
// // //         console.log('hakkınız bitti. sayı:'+sayi)
// // //     }
// // // }

// // // function declarations

// // function sum(a,b){
// //     var c = a+b;
// //     return c;
// // }

// // console.log(sum(10,20));

// // // function expressions

// // const sum = function(a,b){
// //     var c = a+b;
// //     return c;
// // }

// // // console.log(sum(10,30));
// // function sumAll(){
// //     var total = 0;
// //     for(let i=0,i<arguments.length;i++){
// //         total+=arguments[i];
// //     }
// //     return total;
// // }

// // demo functions

// var hesapA = {
//     ad : 'sena aslan',
//     hesapNo : '1234567',
//     bakiye : 3000,
//     ekHesap : 1000
// }

// var hesapB = {
//     ad : 'emel aslan',
//     hesapNo : '1234568',
//     bakiye : 3000,
//     ekHesap : 2000
// }

// function paraCek(hesap,miktar){
//     console.log(`merhaba ${hesap.ad}`);

//     if(hesap.bakiye >= miktar){
//         console.log('paranızı alabilirsiniz');
//     }else {
//         var toplam = hesap.bakiye + hesap.ekHesap;
//         if(toplam>=miktar){
//             if(confirm('ek hesabınızı kullanmak ister misiniz')){
//                 console.log('paranızı alabilirsiniz');
//             }else{
//                 console.log(`${hesap.hesapNo}nolu hesabınızda ${miktar} bulunmaktadır.`);
//             }else{
//                 console.log('üzgünüz bakiye yetersiz');
//             }
//         }
//     }
// }

// paraCek(hesapA,2000);

// // paraCek(hesapB,2000);