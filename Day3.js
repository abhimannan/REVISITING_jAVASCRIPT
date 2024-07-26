// for loop : for iteration

for(let i=1;i<=10;i++){
   console.log("for loop");
}
// i=1  ,i<=10 -->forloop
// i++   ,1++  -->for loop

// Fibonocci series
let n=window.prompt("Enter the number : ");
function fib(n){
var n1=0;
var n2=1;
for(let i=n1;i<=n;i++){
   console.log(n1);
   sum=n1+n2;
   n1=n2;
   n2=sum;
}
}
fib(n);

