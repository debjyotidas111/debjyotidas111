//  Given an array You need to find the length of the longest consecutive sequence such that elements
//are consecutive integers

        function longestConsecutiveSequence(arr, n) {
            let output = 0, count = 0;

            arr.sort(function (a, b) { return a - b; })

            var tempArray = [];
            tempArray.push(arr[0]);

            for (let i = 1; i < n; i++) {
                if (arr[i] != arr[i - 1])
                    tempArray.push(arr[i]);
            }
          
            for (let i = 0; i < tempArray.length; i++) {

                
                if (i > 0 && tempArray[i] == tempArray[i - 1] + 1)
                    count++;
               
                else
                    count = 1;

                output = Math.max(output, count);
            }
            return output;
        }

       

        let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
        let n = arr.length;
        console.log(
        "Length of the Longest consecutive sequence is "
        +longestConsecutiveSequence(arr, n)
        );
