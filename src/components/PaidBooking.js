import React from 'react';
import {connect} from 'react-redux';
import { saveBooking } from '../actions/bookingActions';


class PaidBooking extends React.Component {

  paid (){
    let booking = {...this.props.booking, paid: true};
    this.props.dispatch(saveBooking(booking));
  }

  render () {
    return (
      <div>
        {this.props.booking.paid ? ('') : (
          <button onClick={this.paid.bind(this)}>Paid</button>
        )}
      </div>)
    }
  }

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(PaidBooking);
