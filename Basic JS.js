                                                // strict mode 
// ***it indicate browser to execute code in strict mode (this mode on,you can't use for eg. undeclared variables)***
// "use strict";
// x = 9;
// console.log(x);


                                                // hello world (different ways to get output) + &nbsp or \xa0
// ***&nbsp and \xa0 is used to create multiple spaces***
// console.log("hello world");
// document.write("&nbsp&nbsp&nbsp&nbsp hello world \xa0\xa0\xa0\xa0\xa0\xa0");
// alert("hello world");

                                                // if else statement
// let age , card;
// age = prompt('enter your age',18);
// card = prompt('do yo have your card','type yes or no');
// if (age >= 18 && card === 'yes') {
//     document.write('you can vote<br>')
// } else if (age >= 18 && card === 'no'){
//     document.write('bring your id<br>')
// } else if (age <= 18 && card === 'yes'){
//     document.write('you are underage<br>')
// } else {
//     document.write('nikal law*e,pehli fursat me nikal<br>')
// }




                                                // switch statement + break
// let user = prompt('are you an old user or new user?');
// switch (user) {
//     case "old":
//         alert('welcome again')
//         break;
//     case "new":
//         alert('log in first')
//         break;
//     default:
//         alert('wrong input')
//         break;
// }




                                                //ternary operator
// let customer;
// customer = prompt("new or old?");
// let declare = customer === 'old' ? 'welcome' : 'fuck off';
// console.log(declare);







                                                // do while & while loop + typeof operator
// i = 7;
// do {
//     document.write('nadeem ');
//     i++;
// } while (i<=10);
// console.log(typeof i);  // ***typeof operator gives datatype of the operand***
// i = 7;
// while (i<=10) {
//         document.write('ahammad ');
//         i++;
// }


                                                // for loop + nested loop + continue
// for (let k = 5; k < 10; k++) {
//     if (k == 8) {
//         document.write('<br>aidni');
//         continue;
//     }
//     document.write('<br>india');
//     for (let k2 = 5; k2 < 7; k2++) {
//         document.write(6*9 + 6+9);
//     }
// }



                                                // nullish coalescing operator
// ***this (??) operator returns its rhs operand if its lhs operand is null or undefined***
// let p = null;
// let q;
// document.write(p ?? 'hello');
// document.write(q ?? ' world');




                                                // if else + confirm
// let response = confirm('you really want to delete this file?');
// if (response == true) {
//     document.write('file is deleted');
// } else {
//     document.write('file is not deleted');
// }






                                                // template literal + prompt 
// let height = prompt('enter your height');
// document.write(`you are ${height} cm tall`);






                                                // datatype conversion
// let p = 56;
// let x = Number("go");
// newP = String(p);
// document.write(typeof newP +'<br>');
// document.write(typeof x);





                                                // string manipulation
// let Name = 'My name is Sk\nNadeem\t\tAhammad ';

// console.log(Name);
// document.write(Name.length);
// document.write('<br>' + Name[8]);

// let str1 = 'instagram';
// let str2 = ' is a social media platform ';
// let str3 = str1.concat(str2,Name,"hello");
// console.log(str3);



// ***extract substring***
// let country = 'i live in india,it is one of the best country in the world';

// fetchSubstr = country.substr(10,17);
// ***1st arg is for index of starting position and 2nd arg is length of the desired substring***
// fetchSubstring = country.substring(10,25) +'\\';
// ***1st arg is index of beginning and 2nd arg is index of the end of the substring,if end index is not defined then the characters from start through the end of the original string are returned***

// console.log(fetchSubstr);
// console.log(fetchSubstring);



// ***find position of character in string***
// let country = 'i live in india,it is one of the best country in the world';

// let positionStart = country.indexOf('ind'); // ***it finds the index of substring from start***
// document.write('<br>' + positionStart);     
// let positionEnd = country.lastIndexOf('world',60);    // ***it finds the index of substring from end***
// document.write('<br>' + positionEnd);



// ***removing whitespace***
// let text = '     my city is mumbai      ';

// console.log('~'+text+'~');
// let trimText1 = text.trimStart();                               // ***trim the white spaces from start***
// let trimText2 = text.trimEnd();                                 // ***trim the white spaces from end***
// let trimText3 = text.trim();                                    // ***trim the white spaces from both side***

// console.log('~'+trimText1 +'~');
// console.log('~'+trimText2 +'~');
// console.log('~'+trimText3 +'~');


// ***upper & lower case***
// let text = '      My City Is Mumbai      ';
// console.log(text);
// let upper = text.toUpperCase();
// document.write(upper + '<br>');
// let lower = text.toLowerCase();
// document.write(lower);


// ***replace sub string***
// let text = '    my city is mumbai      ';

// let replacedText = text.replace('mumbai','kolkata');
// document.write(replacedText);



// ***find if a substring is inclued in the string or not***
// let myName = "hi my name is nadeem";
// let str = myName.includes('nadeeuyfm');
// alert(str);


                                                // array
// let firstArray =  new Array('sk','nadeem','ahammad');               // ***another way to declare array***
// let firstArray = ['my','name','is','sk','nadeem','ahammad'];
// firstArray[0] = 'shaikh';                        // ***to replace element in array***
// firstArray.unshift('the')                        // ***add element in start of the array***
// firstArray.push('hello');                        // ***add element at end of the array***
// firstArray.pop();                                // ***remove element from the end of the array***
// firstArray.shift();                              // ***remove element from the start of the array***
// cpyFirstArray= firstArray.slice()                // ***to make a shallow copy of an array***
// firstArray.splice(1,2);                          // ***use to add & remove element to/from particular place***
// firstArray = [];                                 // ***to make array empty***
// firstArray.length = 0;                           // ***another way to make array empty***
// let arrayPosition = firstArray.indexOf('nadeem');


// document.write(firstArray);
// console.log(firstArray);
// console.log(firstArray.length);
// console.log(arrayPosition);
// console.log(Array.isArray(firstArray));              // ***to find the declared variable is array or not***

// ***array to string***
// let joinArray = firstArray.join('+');                // ***default separator is comma***
// document.write("<br>" + joinArray);

// ***string to array***
// let random = "this is a random text";
// let turnIntoArray = random.split(" ",4);                // ***split(separator,limit)***
// document.write("<br>" + turnIntoArray);
// console.log(Array.isArray(turnIntoArray));


// let secondArray = ['mumbai','kolkata','pune','delhi'];
// let outputArray = firstArray.concat(secondArray);
// document.write('<br>' + outputArray + '-------' + firstArray);

// ***to iterate array***

// ***for in loop (for iterating over enumerable properties of objects)***
// for(let x in firstArray){
//         console.log(x,firstArray[x]);
// }

// ***for of loop (for iterating over values of iterable objects like arrays)***
// for(let y of firstArray){
//         console.log(y)
// }



// ***multi dimension array***
// let multiDArray = [['virat',18],['devilliers',17],['dhoni',7]];
// document.write(multiDArray[0][0] + ' loves ' + multiDArray[2][0] + ' & ' + multiDArray[1][1]);




                                                //function + argument + parameter
//*** here 'table' is function, 'num' is parameter and '468' is argument ***
// function table(num){
//     for (let q = 1; q <= 10; q++) {
//         document.write(`${num} X ${q}` + ' = ' + num*q +'<br>');
//     }
// }
// table(468);

// ***multi parameters and arguments***
// function addition(num1,num2,num3){
//     console.log(num1 + num2 - num3);
// }
// addition(100,200,300); 

                                                // arguments object
// function add(){
//     console.log(arguments);
//     if (arguments.length == 0) {
//         document.write('<br>argument is empty')        
//     } else {
//         let sum = 0;
//         for (let g = 0; g < arguments.length; g++) {
//             sum  = sum + arguments[g]; 
//         }
//         document.write(sum);
//     }
// }
// add(52,25,69,54,23,14,201);




                                                //anonymous + immediately invoked  ***we don't name the function***
// (function () {
//         let standard = "XII";
//         console.log(standard);
// })();




                                                // objects
// let man = {
//         firstName: 'Nadeem ',
//         lastName: 'Ahammad',
//         standard: 12,
// };
// man.age = 17;                                                //to add object property from outside
// man.firstName = "Sk Nadeem "                                 //to replace value of property
// console.log('ef' in man);                                    //to know if a property is exist in the objects
// delete man.standard;                                         //to delete property of objects
// console.log(man.standard)
// console.log(Object.keys(man).length);                        //to find the length of the object

// ***to show case data in table format in console***
// const data = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
// console.table(data);


// ***there's 2 ways to call object property  --> . dot notation & [] array notation, both ways are important***
// document.write(man.firstName);
// document.write(man['standard']);
// console.log(man);

// ***to iterate object***
// ***for in loop***
// for(let x in man){
//         console.log(x +': ' + man[x]);
// }




                                                //object methods
// let carry = {
        // sayHello: function (){                                               // ***1st way***
        //         console.log('toh kaise hai aap log?');                       
        // }        

        // sayHello (){                                                         // ***2nd way***
        //         console.log('toh kaise hai aap log?');                                                 
        // }
// }


// carry.sayHello = function () {                                               // ***3rd way***
//         console.log('toh kaise hai aap log?') add
// }

// function greet(){                                                            // ***4th way***
//         console.log('toh kaise hai aap log?');                               
// }
// carry.sayHello = greet;


// carry.sayHello();




                                                // math object
// ***some examples***
// let pi = Math.PI;
// let e = Math.E;
// let findMax = Math.max(14,50,93,-96);
// let findMin = Math.min(599,2,25,96,-8);
// let round = Math.round(4.49);
// let ceil = Math.ceil(6.3);
// let floor = Math.floor(6.8);
// let trunc = Math.trunc(6.3);
// let power_of = Math.pow(65,2);
// let square_root = Math.sqrt(121);
// let cube_root = Math.cbrt(125);
// let log = Math.LOG2E;

// console.log(trunc);


                                                // random number generator
// ***another way to generate random number manually***
// let random_number = Math.random();
// function random_number_generator(min,max){
//         console.log(Math.trunc(random_number*(max - min + 1) + min));
// }

// random_number_generator(90,95);


                                                // date object
// let today = new Date();
// console.log(today)
// let D = new Date(2003,11,7,19,34,21,69);                        // ***(yr,mnth,day,hr,min,sec,milisec)***
// let d = new Date("october 10 2012 10:8:36");                    // ***string format to define date***

// console.log(d);
// d.setFullYear(2050);

// console.log(d.getFullYear());

// D.setDate(D.getDate() + 731);
// console.log(D);

      


                                                // getters and setters
// let human = {
//         firstName: 'Nadeem',
//         lastName: 'Ahammad',
//         age: 17,
//         get toGet(){                                  // ***to define a getter method to get the property value***
//                 return this['firstName'].toUpperCase()
//         },
//         set toSet(n){                                 // ***to define a setter method to set the property value***
//                 this.lastName = n.toUpperCase();
//         }
// }

// human.toSet = 'shaikh';

// console.log(human.toGet);
// console.log(human.lastName);



                                                // object constructor
// function Student(nm,sirnm,cls,sec){
//         this.name = nm,
//         this.sirname = sirnm,
//         this.class = cls,
//         this.section = sec
// }
// function Man(hnd) {
//         this.hands=hnd
// }
// Student.prototype.nationality="indian";              // ***to add property in constructor from outside (it will save into prototype of the constructor)***
// Man.prototype.speak=function () {
//         console.log("hello im a man");
// }

// Student.prototype.__proto__=Object.create(Man.prototype);       //***to inherit method/property from another object constructor's prototype***

// let stud1 = new Student('raju','rastogi',5,'A');
// stud1.age = 82;
// console.log(stud1.nationality);


// let stud2 = new Student('farhan','qureshi',8,'B');
// stud2.speak();



                                                // nested object
// let applicant = {
//         name: 'rahul',
//         address: {
//                 village: 'gobindanagar',
//                 district: 'east medinipur',
//                 pin: 721139
//         }
// }

// console.log(applicant.address.village);



                                                // select element by id
// let selId = document.getElementById('id1');
// console.log(selId.innerHTML);

// selId.innerHTML = 'hello';

// console.log(selId);
// console.log(selId.innerHTML);


                                                // select element by class
// selClass = document.getElementsByClassName("cls1");

// for (let f = 0; f < selClass.length; f++) {
//         console.log(selClass[f].innerHTML);
// }

// selClass[1].innerHTML = "something is different isn't it?";


                                                // select element by tag                
// let selTag = document.getElementsByTagName('p');
// change = selTag[2].innerHTML = 'changed text';
// console.log(selTag);
// console.log(change);


                                                // query selector
// let selQuery = document.querySelectorAll('p.p1');
// console.log(selQuery[1]);



                                                // trasversing
// let selParentyByChild = document.getElementById('chld2prnt');
// console.log(selParentyByChild.parentElement);


// let selChildByParent = document.getElementById('prnt2chld');
// console.log(selChildByParent.firstElementChild);
// console.log(selChildByParent.lastElementChild);

// selSibling = document.getElementById('sl1');
// console.log(selSibling.nextElementSibling);
// console.log(selSibling.previousElementSibling);

// ***changing of a tag which comes under particular id***
// let changeVar = document.getElementById('unOrdLi');
// let changeP = changeVar.getElementsByTagName('p');
// changeP[1].innerHTML = 'PARA II';

                                                // append element       
// let lis = document.getElementById('unOrdLi');
// let addLi = document.createElement('i');
// addLi.textContent = 'itallic text';
// lis.appendChild(addLi);



// let selH4 = document.getElementById('hIV');
// selH4.className = "hfour";                                                   // ***add class from outside***

// console.log(selH4);


// let selH5 = document.getElementsByClassName('hV');                           // ***add id from outside***
// for (let z = 0; z < selH5.length; z++) {
//         selH5[z].id = 'hfive';        
// }
// console.log(selH5);


                                                // insert before + remove + replace element 
// befre = document.getElementById('bef');
// let chld = befre.firstElementChild.nextElementSibling.nextElementSibling;
// let chld2 = befre.firstElementChild;
// console.log(chld);

// let elm = document.createElement('b');
// elm.textContent = 'new text in bold';
// let elm2 = document.createElement('u');
// elm2.textContent = 'new text in underline';


// befre.insertBefore(elm,chld);
// befre.removeChild(chld);
// befre.replaceChild(elm2,chld2);




                                                // clone element
// let ol = document.getElementById('ordLi');
// let cloneElm = ol.cloneNode(true); // ***if we don't passs any boolean value  the function only select parent element***

// cloneElm.id = 'ordLi2';

// document.body.appendChild(cloneElm);




                                                // insert adjacent html
// let ins = document.getElementById('bef');
// ins.insertAdjacentHTML('afterbegin','<del>text in delete tag</del>');
// ins.insertAdjacentHTML('beforeend','<mark>text in mark tag</mark>');




                                                // modify attribute
// let tex = document.getElementById('txt');

// tex.setAttribute('placeholder','enter text');
// console.log(tex.getAttribute('id'));
// tex.removeAttribute('name');
// console.log(tex.hasAttribute('i'));



                                                // change inline style
// let bton = document.getElementById('btn');
// bton.style.border = '5px double green';
// bton.style.cssText += 'background-color: orange; color: blue';          // ***cssText overwrite other css property***




                                                // get computed style
// let hed = document.getElementById('id1');
// let getCompSty = getComputedStyle(hed);

// console.log(getCompSty);



                                                // modify css class
// let changeClass = document.getElementById('chClass');

// changeClass.classList.add('dimension','colour');
// changeClass.classList.remove('dimension');
// changeClass.classList.replace('dimension','colour');
// changeClass.classList.toggle('colour');             // ***toggle remove the class if it already exist and vice versa***

// for(let t of changeClass.classList){
//         console.log(t);
// }


                                                // find height and width of element
// let changeClass = document.getElementById('chClass');
// console.log(changeClass.offsetHeight);
// console.log(changeClass.clientHeight);

// console.log(changeClass.offsetWidth);
// console.log(changeClass.clientWidth);




                                                // DOM(Document Object Model) events
// let bton = document.getElementById('btn');
// let changeClass = document.getElementById('chClass');

// function clck(){
//         changeClass.classList.toggle('colour');
// }





                                                // add and remove event listener
// let changeClass = document.getElementById('chClass');

// function clck1(){
//         console.log('clicked 1')
// }
// function clck2(){
//         console.log('clicked 2')
// }

// changeClass.addEventListener('mouseover',clck1);
// changeClass.addEventListener('mouseleave',clck2);

// changeClass.removeEventListener('mouseleave',clck2);





                                                // key up & down event
// window.addEventListener('keyup',keyboard);
// window.addEventListener('keydown',keyboard);

// function keyboard(tap){
//         console.log(tap.key)
// }




                                                // scroll event 
// window.addEventListener('scroll',function (){
//         console.log('you are scrolling page')
// });


// window.addEventListener('wheel',function (scrll){
//         if (scrll.deltaY < 0) {
//                 console.log('you are scrolling up')
//         } else if(scrll.deltaY > 0){
//                 console.log('you are scrolling down')
//         }
// });



// window.addEventListener('scroll',function (){
//         if (window.pageYOffset > 1000) {
//                 document.body.style.backgroundColor = 'yellow'
//         } else if(window.pageYOffset < 1000) {
//                 document.body.style.backgroundColor = 'lawngreen'
//         }
// });


                                                // load events
// window.addEventListener('DOMContentLoaded',function (){
//         console.log('DOM Tree is created')
// })

// document.getElementById('img').addEventListener('load',function (){
//         console.log('page is fully loaded')
// })





                                                // form-input events
// let inpEvent = document.getElementById('pswrd');

// inpEvent.addEventListener('focus',function (){
//         inpEvent.style.backgroundColor = 'orange'
// });

// inpEvent.addEventListener('blur',function (){
//         inpEvent.style.backgroundColor = 'green'
// });

// inpEvent.addEventListener('input',function (){
//         console.log(this.value)
// });

// inpEvent.addEventListener('change',function (){
//         console.log(this.value)
// });





                                                // event bubbling & event capturing
// ***in event bubbling(its default): button > div > body & in event capturing: body > div > button***
// let div = document.getElementById('divForEvent');
// let button = document.getElementById('btnForEvent');

// div.addEventListener('click',divClick,true);
// button.addEventListener('click',buttonClick,true);
// document.body.addEventListener('click',bodyClick,true);


// function buttonClick(){
//         console.log('button is clicked');
// }
// function divClick(event){
//         console.log('div is clicked');
//         event.stopPropagation();
// }
// function bodyClick(){
//         console.log('body is clicked');
// }



                                                // prevent default
// let anc = document.getElementById('anchor');
// anc.addEventListener('click',function (x){
//         console.log('link is clicked');
//         x.preventDefault();
// })




                                                // window objects
// console.log(window.innerHeight);
// console.log(window.outerHeight);

// console.log(window.innerWidth);
// console.log(window.outerWidth);


// ***open(link,name,features) name is used if you want to open a new link in same window *** 
// let win;

// function btn1(){
//         win = window.open('https://www.facebook.com','google','height = 350px,width = 350px,left = 450px,top = 200px');
// }

// function btn2(){
//         win = window.open('https://www.yahoo.com','google','height = 150px,width = 150px,left = 450px,top = 200px');
// }

// function btn3(){
//         win.close();
// }





                                                // timeout & time interval
// let timoutId = setTimeout(function (){
//         alert('Welcome')
// },5000);
// clearTimeout(timoutId);

// let intervalId = setInterval(function (){
//         console.log('nadeem')
// },2000);

// function clrTimeInterval(){
//         clearInterval(intervalId);
//         console.log("interval stopped!");
// }





                                                // location object
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);

// function locObj(){
//         location.assign('./Advance JS.html')
// }

// function locObj(){
//         location.replace('./Advance JS.html')
// }

// function locObj(){
//         location.reload()
// }






                                                // navigator object
// console.log(navigator.appCodeName);
// console.log(navigator.platform);
// console.log(navigator.cookieEnabled);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// navigator.clipboard.writeText("nadeem");     //***to copy any text into clipboard***




                                                // screen objects
// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.orientation);
// console.log(screen.colorDepth);

                                                // promises
// const myPromise = new Promise((resolve, reject) => {
//   //***Asynchronous operation here (e.g., fetching data, setting a timeout)***
//   let success=true;
//   if (success) {
//     resolve("we got success"); //***Promise fulfilled with data***
//   } else {
//     reject("we failed"); //***Promise rejected with error***
//   }
// });
// myPromise.then((msg) => {
//         console.log("from then:", msg);
// }).catch((error) => {
//         console.log("from catch:", error);
// });


// ***for async and await notes check 50days50projects's 10.html***
      