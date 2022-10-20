// var xyx = [];
// var xyx1 = [];
// function findIndex(nums, target) {   
//     if(nums.includes(target))
//     return nums.indexOf(target);

//     if(target<7){
//         for(let i=2; i<=6; i++){
//             xyx1.push(i); }  
//             let mmm = xyx1.length - nums.length;     //1,3,5,6
//             let ttt = [...new Set([...nums, ...xyx1])];
//             let ooo = ttt.sort();
//             if(ooo.includes(target)){
//               let uuu = ooo.indexOf(target);
//                let result =  uuu - mmm  ;
//               return result;             
//     }
// }

//     if(target==7)
//     {
//         for(let i=2; i<=7; i++){
//             xyx.push(i); }                     
//         let mmm = xyx.length - nums.length; 
//         let ttt = [...new Set([...nums, ...xyx])];
//         let ooo = ttt.sort();
//         if(ooo.includes(target)){
//           let uuu = ooo.indexOf(target);
//            let result =  uuu - mmm  ;
//           return result;
//         }        
//         } 
//     //     if(target<7){
//     //         for(let i=2; i<=6; i++){
//     //             xyx1.push(i); }  
//     //             let mmm = xyx.length - nums.length; 
//     //             let ttt = [...new Set([...nums, ...xyx])];
//     //             let ooo = ttt.sort();
//     //             if(ooo.includes(target)){
//     //               let uuu = ooo.indexOf(target);
//     //                let result =  uuu - mmm  ;
//     //               return result;             
//     //     }
//     // }
// }

// class Solution {
//     public:
//         int searchInsert(vector<int>& nums, int target) {
            
//             int low = 0;
//             int high = nums.size()-1;
//             int mid;
//             while(low<=high)
//             {
//                 mid = low + (high-low)/2;
//                 if(nums[mid]==target)
//                     return mid;
//                 else if(nums[mid]<target)
//                     low = mid+1;
//                 else
//                     high = mid-1;
//             }
//             return low;
//         }
//     };


//     var nums = [1,3,5,6];  
//     var target = 2;
//     console.log(findIndex(nums, target));