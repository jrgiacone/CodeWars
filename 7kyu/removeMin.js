function removeSmallest(numbers) {
  const nums = numbers.slice(0)
  nums.splice((nums.indexOf(Math.min(...nums))), 1)
  return nums
}
