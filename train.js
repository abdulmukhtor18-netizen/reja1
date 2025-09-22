console.log('Jack Ma maslahatlari');
const list = [
     "yaxshi talab bo'ling",
     "to'g'ri boshliq tanlang,ko'p xatolar qiling",
     "o'zingizga ishlashni boshlang",
     "siz kuchli bo'lgan narsalarni qiling",
     "yoshlarga investitsiya qiling",
     "endi dam oling,foydasi yo'q"
];

function maslahatBering(a,callback){
    if (typeof a!== "number") callback("insert a number",null);
    else if (a<=20) callback(null,list[0]);
    else if (a>20 && a<=30) callback(null,list[1]);
    else if (a>30 && a<=40) callback(null,list[2]);
    else if (a>40 && a<=50) callback(null,list[3]);
    else if (a>50 && a<=60) callback(null,list[4]);
    else{
        setTimeout(function(){
            callback(null,list[5]);
        },5000);
    }
}

console.log("passed here 0")
maslahatBering(65,(err,data)=>{
    if(err) console.log('ERROR:',err);
    console.log('javob:',data);
});
console.log("passed here 1");
