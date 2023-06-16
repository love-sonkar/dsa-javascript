let Money = 100;
let apple = 0;
function AppleBuy(money) {
  if (apple == 5) return 1;
  apple++;
  console.log(`you can buy ${apple} apple's`);
  return GamePad(money - 50);
}

function GamePad(money) {
  if (money >= 50) {
    console.log("you can buy Gamepad");
    return AppleBuy(money - 5);
  }
  return 1;
}

AppleBuy(Money);
