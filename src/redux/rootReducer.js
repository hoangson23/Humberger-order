//B4: làm việc bên file rootReducer
// --> tạo các file action.js, reducer.js, content.js
// --> tạo folder Humberger, tạo file main.js
// --> đi vào xử lý folder content
//1 redux lúc nào cũng trả về một state, state này có thể có giá trị hoặc null
import { combineReducers } from "redux";
import toppingHumbergerReducer from "./reducer/reducer";

export const rootReducer = combineReducers({
    toppingHumbergerReducer
})
//gán rootRedeucer qua store bên index.js