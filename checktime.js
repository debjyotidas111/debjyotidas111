function checktime(time)
{
if (time>=22 && time<=4)
{
    console.log("this is night");
}
else if (time>=12 && time<=16)
{
    console.log("this is afternoon");
}
else if (time>=17 && time<=21)
{
    console.log("this is evening");
}
else if (time>=5 && time<=11)
{
    console.log("this is morning");
}
else {
    console.log("time is invalid");
}
}
checktime(22);
checktime(14);
checktime(18);
checktime(8);
checktime(28);