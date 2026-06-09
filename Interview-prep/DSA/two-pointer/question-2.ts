/**
 * @param {number[]} arr
 */
class Solution {
    segregate0and1(arr: number[]) {

        let p1 = 0;
        let p2 = arr.length - 1;
        let temp = null;

        while (p1 < p2) {
            if (arr[p1] === 1) {
                temp = arr[p1];
                arr[p1] = arr[p2];
                arr[p2] = temp
                p2--;
            } else {
                p1++
            }
        }

        return arr
    }
}