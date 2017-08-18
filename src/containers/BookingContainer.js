import React, { PureComponent } from 'react';
import Title from '../components/Title';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import RaisedButton from 'material-ui/RaisedButton';
import BookingPage from '../components/BookingPage';
import ImageUploader from '../components/ImageUploader';
import { fetchBookings } from '../actions/bookingActions';


class BookingContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      buttonName: 'Edit',
    }
  }

componentWillMount() {
  this.props.dispatch(fetchBookings())
}

  render() {
    return(
      <div className="Pages wrapper">
        <main>
          <ImageUploader />
          <BookingPage edit={this.state.edit} content={this.props.bookingPageContent} />
          <RaisedButton label={this.state.buttonName} primary={true} onClick={this.handleOnClick.bind(this)} />
        </main>
      </div>
    )
  }

  handleOnClick() {
    if(this.state.edit){
      this.setState({
        edit: false,
        buttonName: 'Edit'
      });
    }else {
      this.setState({
        edit: true,
        buttonName: 'Save'
      });

    }
  }
}

const mapStateToProps = ({bookingPageContent}) => ({bookingPageContent})

export default connect(mapStateToProps)(BookingContainer);
