import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionType from '../redux/action/action';
import "../Humberger/style.css";

class Pay extends Component {
    render() {
        return (
            <div className="pay_btn">
                <button onClick={() => {this.props.pay()}}>Pay</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        totalMoney: state.toppingHumbergerReducer.totalMoney
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        pay: () =>{
            dispatch(actionType.payMoneyAction())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Pay);