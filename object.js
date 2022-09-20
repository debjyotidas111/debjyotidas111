["alex", 24, "b+"];
["basirhat", 743427, "nasa"]
["single", "director", "100000"]
var place = place;
const biodata = {
      "name":"debjyoti",
      "age": 24,
      "bloodgroup":"b+",
      place:"basirhat",
      "area":{
        "pincode":743427,
        "landmark":"near dolmath",
        "number": 8918751827
      },
      "marks" : [1, 5, 4, 7]
}
console.log(biodata.age);
console.log(biodata.place);
console.log(biodata["name"]);
console.log(biodata.area.pincode);
console.log(biodata["area"].landmark);
console.log(biodata["area"]["number"]);
console.log(biodata.marks[3]);

const students = [
    {"gg":"tt", "pp":"ee"},
    {"ff":"rr", "bb":"ll"}
]
console.log(students[1].bb);