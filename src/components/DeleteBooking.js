import React from 'react';
import {connect} from 'react-redux';
import { deleteBooking } from '../actions/bookingActions';


class DeleteBooking extends React.Component {

  delete (){
    this.props.dispatch(deleteBooking(this.props.booking.id));
  }


  render () {
    return (
      <div>
        <button onClick={this.delete.bind(this)}>Delete</button>
      </div>)
    }
  }

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(DeleteBooking);
