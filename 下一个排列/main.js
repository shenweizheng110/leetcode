/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 从最后往前找，找到第一个比自己小的，插在其前面
 */
var nextPermutation = function(nums) {
    let crackIndex = 0, flagNum = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1 && nums[i] > nums[i - 1]){
            let temp = nums[i];
            nums[i] = nums[i - 1];
            nums[i - 1] = temp;
            return;
        }
        if(nums[i] > nums[i - 1]) {
            crackIndex = i - 1;
            flagNum = nums[i - 1];
            break;
        }
    }
    for(let i = nums.length - 1; i >crackIndex; i--) {
        if(nums[i] > flagNum) {
            nums[crackIndex] = nums[i];
            nums[i] = flagNum;
            break;
        }
    }
    for(let i = crackIndex + 1, j = nums.length - 1;;i++, j--) {
        if(i === j || j < i)
            break;
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};

let nums = [1,1];
nextPermutation(nums);
console.log(nums);
