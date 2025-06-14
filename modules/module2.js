import { nme } from "./module1.js"

export function intro(){
    console.log(nme);
};

//***every module can have one  default function which doesnt have any namebut while exporting u have to name it***
export default function(){
    console.log("default func called from mod1");
}