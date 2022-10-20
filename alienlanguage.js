function AlienLanguage(lang, arr){
    const langArr = lang.split(""); // ['b', 'a', 'c', 'd', 'e'...]
    const langObj = {};
    const letterToNum = [];
    const unSortedObj = {};
    const sortedArr = [];
    langArr.map((item, index) => langObj[item] = (index+1));
     arr.map(item => {
        let num = '';
        item.split('').map(letr => {
            num+= langObj[letr];
        })
        letterToNum.push(parseInt(num));
        unSortedObj[parseInt(num)] = item;
     })

     letterToNum.sort((a,b) => a-b);
     letterToNum.map(item => {
        sortedArr.push(unSortedObj[item]);
     })
     return sortedArr;
}  

console.log(AlienLanguage("bacdefghijklmnopqrstuvwxyz", ['bb','yb','za']));
console.log(AlienLanguage("bacdefghijklmnopqrstuvwxyz", ['cu','xx','om']));
console.log(AlienLanguage("bacdefghijklmnopqrstuvwxyz", ['zz','oo','ss']));