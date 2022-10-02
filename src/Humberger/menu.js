import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../redux/action/action";
import "../Humberger/style.css";

class Menu extends Component {
  renderListTopping = () => {
    return this.props.listTopping.map((item, key) => {
      return (
        <div className="wrapper_topping" key={key}>
          <div className="orderTopping">
            <button className="topping_btn" onClick={() => {this.props.chooseTp(item)}}>
              <img className="topping_img" src={item.image} />
            </button>
            <span className="topping_name">{item.name}</span>
            <span className="total_topping">+ {item.totalTopping}</span>
          </div>
        </div>
      );
    });
  };
  //--> bỏ renderListTopping xuống render
  render() {
    return (
      <div className="menu_container">
        <div className="col">
          <h1 className="menu_title">SON'S HUMBERGER</h1>
          {this.renderListTopping()}
        </div>
        <div className="total_money">{this.props.totalMoney} vnđ</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //tên giá trị: lấy dữ liệu từ trong kho
    listTopping: state.toppingHumbergerReducer.listTopping,
    totalMoney: state.toppingHumbergerReducer.totalMoney,
  };
};
//hàm nhận action khi người dùng click chuột vào các nút trên html
const mapDispatchToProps = (dispatch) => {
  return {
    chooseTp: (item) => {
      dispatch(actionType.chooseToppingAction(item));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
//--> import vào main.js
