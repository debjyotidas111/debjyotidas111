
function smallest(x, y, z)
{
    let c = 0;
    while (x && y && z) {
        x--;
        y--;
        z--;
        c++;
    }
    console.log(c , " is the smallest number");
    return c;
}
smallest(12, 100, 55);
smallest(12, 1, 555);
smallest(222, 100, 55);


