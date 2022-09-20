let array_of_grades = [34, 38, 44, 68, 99, 77];
//47 =>50 difference =3;
//passing grade 40;

function gradingStudents(grades){
    let result_arr = [];
    grades.forEach((grade) => {
        if (grade < 38){
            result_arr.push(grade);
        }else{
            if (grade >=38){
            let nextMultipleof5 = getTheNextMultiple(grade); //100
            let difference = Math.abs(nextMultipleof5 - grade); //1
            // difference < 3
            // ? result_arr.push(nextMultipleof5)
            // : result_arr.push(grade);
            if (difference < 3){
                //do the round up
                result_arr.push(nextMultipleof5);
            }else{
                result_arr.push(grade);
            }
        }
    }
    });
    return result_arr;
}
function getTheNextMultiple(n){
    // divide by 5
    let multiple = (Math.floor(n/5)+1)* 5;
    return multiple;
}
console.log(gradingStudents(array_of_grades));