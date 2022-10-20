var line = "all is good when all of all is perfect";
console.log(line.replace(/all/g, 'everything'));
console.log(line.replaceAll('all', 'everything')); //working same
// when we need to replace all like this everything is good when everything of everything is perfect
console.log(line.replace('all', 'everything'));   // when we need to replace first similar word like this everything is good when all of all is perfect