const stateMunu = {
  totalMoney: 0,
  listTopping: [
    {
      id: "steak",
      name: "Steak",
      image: "./Humberger_imgs/steak.jpg",
      totalTopping: 0,
    },
    {
      id: "phomai",
      name: "Pho mai",
      image: "./Humberger_imgs/phomai.jpg",
      totalTopping: 0,
    },
    {
      id: "sausage",
      name: "Sausage",
      image: "./Humberger_imgs/sausage.jpg",
      totalTopping: 0,
    },
    {
      id: "tomato",
      name: "Tomato",
      image: "./Humberger_imgs/tomato.jpg",
      totalTopping: 0,
    },
    {
      id: "veg",
      name: "Vegetable",
      image: "./Humberger_imgs/ves.jpg",
      totalTopping: 0,
    },
  ],
};
//fake dữ liệu
//tạo kho:
const toppingHumbergerReducer = (state = stateMunu, action) => {
  switch (action.type) {
    case "CHOOSE_TOPPING":
      let chooseToppingUpdate = [...state.listTopping];
      // dùng biến và spread operator để sao chép và k tác đọng lên dữ liệu gốc
      let index = chooseToppingUpdate.findIndex(
        (item) => item.id === action.item.id
      );
      console.log(index);
      if (index !== -1) {
          chooseToppingUpdate[index].totalTopping += 5000;
          state.totalMoney += state.listTopping[index].totalTopping;
      }
      return { ...state, listTopping: chooseToppingUpdate };
      break;
    case "PAY_MONEY":
        let reset = state.listTopping.map((item, index) =>{
            return{...item, totalTopping: 0}
        })
        return{...state, listTopping: reset, totalMoney: 0}
        break;
    default:
      //spread operator: là cách thao tác với mảng( object): thêm phần tử,  kết hợp, truyền tham số...
      return { ...state };
      break;
  }
};
export default toppingHumbergerReducer;
// --> qua file main.js
