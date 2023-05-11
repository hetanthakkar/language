import {ADD_TO_CART, DELETE_TO_CART} from './constants';
const initialState = [];
function countOccurrences(arr, targetObj) {
  let count = 0;

  arr.forEach(obj => {
    if (obj.id === targetObj.id) {
      count++;
    }
  });
  return count;
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let obj1 = {...action.data, price: action?.data?.variants[0]?.price};
      let count = countOccurrences([...state], obj1);
      console.log('this is count', count, obj1);

      if (count == 0) {
        return [...state, {...obj1, quantity: 1}];
      } else {
        let index = [...state].findIndex(obj => obj.id === obj1.id);
        console.log('this is index', index);
        let counter = [...state][
          [...state].findIndex(ob => ob.id == action.data.id)
        ].quantity;
        console.log('this is counter', counter);
        // let index = findIndexByKey([...state], 'id', action.data.id);
        let temp = JSON.parse(JSON.stringify(state));
        temp[index].quantity = counter + 1;
        console.log('this is temp', temp);
        return temp;
      }

    case DELETE_TO_CART: {
      let obj1 = {...action.data, price: action?.data?.variants[0]?.price};
      let index = [...state].findIndex(obj => obj.id === action.data.id);

      let counter = [...state][
        [...state].findIndex(ob => ob.id == action.data.id)
      ].quantity;

      let temp = JSON.parse(JSON.stringify(state));
      if (counter == 1) {
        temp.splice(index, 1);
        console.log('new temp', temp);
      } else {
        console.log('hey counter', counter);
        temp[index].quantity = counter - 1;
      }
      return temp;
    }

    default:
      return state;
  }
};
