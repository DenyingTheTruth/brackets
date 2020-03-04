module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;
  let stack = [];
  stack[0] = str[0];

  for (let i = 1; i < str.length; i++) {
    stack.push(str[i]);
    if (stack.length > 1) {
      checkBracketsConfig(stack, bracketsConfig);
    }
  }
  return stack.length ? false : true;
};

function checkBracketsConfig(stack, config) {
  for (let i = 0; i < config.length; i++) {
    if (
      stack[stack.length - 2] == config[i][0] &&
      stack[stack.length - 1] == config[i][1]
    ) {
      stack.splice(stack.length - 2, 2);
    }
  }
  return stack;
}
