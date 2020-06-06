var i;
var num = 0;
for(i=0;i<=99;i++){
    num = num + 1;
    if(num%3==0 && num%5==0)
    {
        console.log("FizzBuzz");
    }
    else
    if(num%3==0)
    {
        console.log("Fizz");
    }
    else
    if(num%5==0)
    {
        console.log("Buzz");
    }
    else
    {
    console.log(num);
    }
} 