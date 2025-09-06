$(document).ready(function() {
  
     let s = suma(2,3);
       alert("El resultado de la suma:" + s );
    let c = resta(5,2);
       alert("El resultado de la resta:" + c);
    
    let m = multiplicacion(4, 6);
       alert("El resultado de la multiplicacion:" + m);

    let x = division(8, 4);
       alert("El resultado de la division:" + x);
 


});
function suma(a, b)
{
    let s = a+b;
    return s;
}
function resta(a, b) 
{
    let c = a-b;
    return c;
}
function multiplicacion(a, b)
{
   let m = a*b;
   return m;
}
function division(a, b) 
{
    let x = a/b;
    return x;
}