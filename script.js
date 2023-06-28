function findCombinations(arr, target) {
    let complements = {};
    let firstCombination = [];
  
    // Step 1: Find the first combination pairs
    for (let num of arr) {
      let complement = target - num;
      if (complements[complement]) {
        let pair = [num, complement];
        firstCombination.push(pair);
      }
      complements[num] = true;
    }
  
    // Step 2: Merge and sort the first combination array
    let mergedArray = firstCombination.flat().sort((a, b) => a - b);
  
    // Step 3: Double the target value
    target *= 2;
    let secondCombination = [];
  
    // Step 4: Find the second combination pairs
    for (let num of mergedArray) {
      let complement = target - num;
      if (complements[complement]) {
        let pair = [num, complement];
        secondCombination.push(pair);
      }
    }
  
    return [firstCombination, secondCombination];
  }
  
  // Test the function
  let arr = [1, 3, 2, 2, -4, -6, -2, 8];
  let target = 4;
  
  let [firstCombination, secondCombination] = findCombinations(arr, target);
  console.log(`First Combination For ${target}:`, firstCombination);
  console.log("Merge Into a Single Array:", mergedArray);
  console.log(`Second Combination For ${target * 2}:`, secondCombination);
  