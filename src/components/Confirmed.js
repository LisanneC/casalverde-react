import React from 'react';
import {connect} from 'react-redux';
import { saveBooking } from '../actions/bookingActions';


class Confirmed extends React.Component {
  onClick (){
    let booking = {...this.props.booking, confirmed: true};
    this.props.dispatch(saveBooking(booking));
  }

  render () {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>Confirm</button>
      </div>)
    }
  }

// export default Confirmed;
const mapStateToProps = () => ({});
export default connect(mapStateToProps)(Confirmed);
