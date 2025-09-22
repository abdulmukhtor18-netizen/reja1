// console.log('Jack Ma maslahatlari');
// const list = [
//      "yaxshi talab bo'ling",
//      "to'g'ri boshliq tanlang,ko'p xatolar qiling",
//      "o'zingizga ishlashni boshlang",
//      "siz kuchli bo'lgan narsalarni qiling",
//      "yoshlarga investitsiya qiling",
//      "endi dam oling,foydasi yo'q"
// ];

// function maslahatBering(a,callback){
//     if (typeof a!== "number") callback("insert a number",null);
//     else if (a<=20) callback(null,list[0]);
//     else if (a>20 && a<=30) callback(null,list[1]);
//     else if (a>30 && a<=40) callback(null,list[2]);
//     else if (a>40 && a<=50) callback(null,list[3]);
//     else if (a>50 && a<=60) callback(null,list[4]);
//     else{
//         setTimeout(function(){
//             callback(null,list[5]);
//         },5000);
//     }
// }

// console.log("passed here 0")Git commit -m "fixed: all finished"
// maslahatBering(65,(err,data)=>{
//     if(err) console.log('ERROR:',err);
//     console.log('javob:',data);
// });
// console.log("passed here 1");


//  async function maslahatBering(a){
//     if (typeof a!== "number") throw new Error("insert a number");
//     else if (a<=20) return list[0];
//     else if (a>20 && a<=30) return list[1];
//     else if (a>30 && a<=40) return list[2];
//     else if (a>40 && a<=50) return list[3];
//     else if (a>50 && a<=60) return list[4];
//     else{
//         return new Promise((resolve,reject)=>{
//             setTimeout(function(){
//                 resolve(list[5]);
//             },5000);
//         })
       
//     }
// }

// .then/.catch
// console.log("passed here 0")
// maslahatBering(22)
//     .then((data)=>{
//         console.log("javob:",data);
//     })
//     .catch((err)=>{
//         console.log("error:",err);
//     });
// console.log("passed here 1");


// async function run(){
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// A-task
function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}


console.log(countLetter("e", "engineer")); 
console.log(countLetter("a", "mexanizalashtirolmaganingizdandurda")); 
