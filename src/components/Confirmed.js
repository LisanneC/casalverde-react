import React from 'react';
import {connect} from 'react-redux';
import { saveBooking } from '../actions/bookingActions';


class Confirmed extends React.Component {
  confirm (){
    let booking = {...this.props.booking, confirmed: true};
    this.props.dispatch(saveBooking(booking));
  }
  reject (){
    let booking = {...this.props.booking, confirmed: false};
    this.props.dispatch(saveBooking(booking));
  }



  render () {
    return (
      <div>
        {this.props.booking.confirmed ? (
          <button onClick={this.reject.bind(this)}>Reject</button>
        ) : (
          <button onClick={this.confirm.bind(this)}>Confirm</button>
        )}
      </div>)
    }
  }

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(Confirmed);
