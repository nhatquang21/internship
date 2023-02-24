const getDateToday = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  let strToday = `${yyyy}-${mm}-${dd}`;
  return strToday;
};

// const dishList = [
//   {
//     dish_id: 1,
//     dish_quantity: 1,
//     dish_price: 55000,
//   },
//   {
//     dish_id: 2,
//     dish_quantity: 1,
//     dish_price: 55000,
//   },
// ];

// for (let item of dishList) {
//   console.log(item.dish_id);
// }

export { getDateToday };
