/*
 * @File: 1480. 一维数组的动态和
 * @Author: shenweizheng110@github.com
 * @Date: 2021-03-20
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let ret = 0;
  return nums.map(num => {
    ret += num;
    return ret
  })
};