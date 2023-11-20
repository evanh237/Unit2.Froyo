/*A visitor receives a prompt upon opening the website to enter a list of comma-separated
froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
When they view the browser console, they observe a table listing how many 
of each flavor they have ordered. In this case, they will be able to observe
 that they have ordered three vanilla, two coffee, and one strawberry froyo.*/

const froyoOrder = prompt("Please Place an order for some Frozen Yogurt");
const froyoOrderArr = froyoOrder.split(",");
const orderCounter = {};
for (let i = 0; i < froyoOrderArr.length; i++) {
  const flavor = froyoOrderArr[i];
  if (flavor in orderCounter) {
    orderCounter[flavor]++;
  } else {
    orderCounter[flavor] = 1;
  }
}
