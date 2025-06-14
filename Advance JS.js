                                                        // default parameters
// function ask(ques = "what is your name?"){
//     console.log(ques)
// }

// ask();




                                                        // rest parameters
// let result = 0;
// function sum(...args){
//     for (let i = 0; i < args.length; i++) {
//         result += args[i]; 
//     }
//     console.log(result)
//     console.log(...args)
// }


// sum(1,2,8,88,7,-100);





                                                        // spread operators
// let array1 = ['sk','nadeem','ahammad'];
// let array2 = [17,...array1,18];

// let obj1={a:5,b:9};
// let obj2={p:7,...ob};

// console.log(array2);
// console.log(obj2);




                                                        // template literal
// let fav = 'virat kohli(18)';
// console.log(`my fav cricketer is ${fav}
//                                    and he is the world's number 1 cricketer`);




                                                        // array destucturing
// let book = ['Harry Potter','J.K.Rowling',,'1500$',['13th',2021]];
// let[title,author,pages = 500,price,[edition,year]] = book;

// console.log(author);



                                                        // object destructuring
// let book = {
//     title: 'Harry Potter',
//     author: 'J.K.Rowling',
//     pages: 420,
//     price: '1500$',
//     release: {
//         edition: '69th',
//         year: 2012
//     }
// };

// let{title: name,author,pages,price,release: {edition,year}} = book;

// console.log(edition);



                                                        // modules
// import * as mod1 from "./modules/module1.js";
// import { intro as it,default as def } from "./modules/module2.js";
// console.log(mod1.nme + ' ahammad');
// it();
// def();



                                                        // OOPs
// class Employee{
//     #age;
//     constructor(id,nm) {
//         this.idNum=id,
//         this.name=nm
//         this.#age=50;   //***to make prperty/method private though they can be used inside the class***
//     }
//     intro(){
//         console.log("my name is "+this.name+" my id is "+this.idNum)
//     }
//     //***static property/method can be only accessed by the class name not by object made of that class***
//     static sProp="static property"
//     static sMethod(){
//         console.log("static method")
//     }
// }
// class Manager extends Employee {
//     constructor(i,n,dep) {
//         super(i,n);
//         this.department=dep;
//     }
//     advIntro(){
//         super.intro();
//         console.log("my department is "+this.department)
//     }
// }

// let emp1=new Employee(98785,"kalu");
// let mngr1=new Manager(68468,"lalu","sales");

// console.log(emp1);
// console.log(mngr1);

// emp1.intro();
// mngr1.advIntro();



                                                        // map function
// let arr=[46,64,65,6,7];
// let sqrArr=arr.map((value)=>value*value);
// console.log(sqrArr);


                                                        // filter function
// let arr=[46,64,65,6,7];
// let evenArr=arr.filter((value)=>value%2===0);
// console.log(evenArr);



                                                        // cookies
// document.cookie="cookie=yes; expires=Wed, 18 Dec 2024 12:00:00 UTC";    //***to delete cookie set expiry date to that ha passed***

// let cki=document.cookie
// console.log(cki);


                                                        // localstorage & sessionstorage
// localStorage.setItem("name","nadeem");
// localStorage.getItem("name");
// localStorage.removeItem("name");

// sessionStorage.setItem("name","nadeem");
// sessionStorage.getItem("name");
// sessionStorage.removeItem("name");



                                                        // json
// fetch("data.json").then(res=>res.json()).then(d=>console.log(d));   //***to access json file***

// let Data=`{
//     "name":"nadeem",
//     "age":20,
//     "favSports":["cricket","kabaddi","football"],
//     "address":{
//         "city":"mumbai",
//         "pincode":400104
//     }
// }`;

// let objData=JSON.parse(Data);           //***json -> js obj***
// console.log(objData);


// let jData=JSON.stringify(objData);      //***js obj -> json***
// console.log(jData);



