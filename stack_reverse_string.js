//function to reverse string using stack
function StackReverseString(str) {
  str = str.split("");
  let stack = [];
  function popMehtod() {
    let popelement = stack[stack.length - 1];
    stack.length = stack.length - 1;
    return popelement;
  }
  function pushmethod(element) {
    stack[stack.length] = element;
  }
  for (let i = 0; i < str.length; i++) {
    pushmethod(str[i]);
  }
  for (let j = 0; j < str.length; j++) {
    str[j] = popMehtod();
  }
  return str.join("");
}
console.log(StackReverseString("hii"));
