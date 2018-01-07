/**
 * Remove duplicate values at stack's top, return number of removed values.
 * Complexity: O(stack.length)
 */
const removeAllEqualValues = stack => {
  let removedCount = 1;
  let last = stack.pop();
  while (stack[stack.length - 1] === last && stack.length > 0) {
    removedCount += 1;
    last = stack.pop();
  }
  return removedCount;
};

/**
 * Complexity: O(1)
 */
const getLast = stack => stack[stack.length - 1];

/**
 * Complexity: O(2*H.length)
 */
function solution(H) {
  const stack = [];
  let blockCount = 0;
  // The first loop to H.length elements
  for (let i = 0; i < H.length; i++) {
    // Second nested loop, will be loop in total H.length elements
    while (H[i] < getLast(stack)) {
      removeAllEqualValues(stack);
      blockCount += 1;
    }
    stack.push(H[i]);
  }
  while (stack.length > 0) {
    removeAllEqualValues(stack);
    blockCount += 1;
  }
  return blockCount;
}

exports.removeAllEqualValues = removeAllEqualValues;
exports.solution = solution;
