/*Primer ejercicio callback */
function sum(a,b){
    return a + b;
}

function probarCall(a,b,callBack){
    return callBack(a,b);
}

console.log(probarCall(5,5,sum));

/*Segundo ejercicio callback */
function date(callBack){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callBack(date);
    }, 3000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);