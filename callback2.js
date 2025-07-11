function displayconsole(res){
    console.log(res);
}

function add(x,y){
    return x+y;
}
function substract(x,y){
    return x-y;
}
function division(x,y){
    return x/y;
}
function miltiply(x,y){
    return x*y;
}
function oper(x,y,call){
    call(x,y);
}
oper(112,10,substract)