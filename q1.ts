function twoSum(nums: number[], target: number) {
  const tmp: number[] = [];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        if (j === i) {
          break;
        }

        tmp.push(j, i);
        return tmp;
      }
    }
  }
  return [];
}

let a = twoSum([2, 5, 5, 11], 10);
console.log(a);
