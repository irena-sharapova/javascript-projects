//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function increasingOrder(a,b) {
    return a-b;
}
nums1.sort(increasingOrder)
nums2.sort(increasingOrder)
nums3.sort(increasingOrder)
console.log(nums1);
console.log(nums2);
console.log(nums3);
//Sort each array in descending order.
function decreasingOrder(a,b) {
    return b-a;
}
nums1.sort(decreasingOrder)
nums2.sort(decreasingOrder)
nums3.sort(decreasingOrder)
console.log(nums1);
console.log(nums2);
console.log(nums3);

