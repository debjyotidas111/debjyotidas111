var k = 1;
for(let i =1;i<=8;i++){
let inner = [];
for(let j=1;j<=8;j++){
inner.push(k++);
}
console.log('| ' + inner.join(' | ') + ' |');
}