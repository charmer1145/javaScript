var n , i=1, sum=0;
n=prompt("Enter the value of n");
n=parseInt(n);
for(i=1;i<=n;i++)
{
    sum=sum+i;
}
document.write("The sum of series is "+sum);
alert("The sum of series is "+sum);