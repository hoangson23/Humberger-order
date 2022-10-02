import * as action from '../content/content';
// * as để lấy các giá trị từ content vào: như CHOOSE_TOPPING
// Thay vì import {CHOOSE_TOPPING} from '../content/content'
export const chooseToppingAction = (item) => {
    return{
        type: action.CHOOSE_TOPPING,
        item
    }
}
export const payMoneyAction = () =>{
    return{
        type: action.PAY_MONEY
    }
}
