// import React, { PureComponent } from 'react';
// import Title from '../components/Title';
// import {connect} from 'react-redux';
// import HomePage from '../components/HomePage';
// import RaisedButton from 'material-ui/RaisedButton';
import BookingPage from '../components/BookingPage';
// import ImageUploader from '../components/ImageUploader';
import { fetchBookings } from '../actions/bookingActions';
// import LoadingComponent from './LoadingComponent';


import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import ImageUploader from '../components/ImageUploader';
import LoadingComponent from './LoadingComponent';
import BookingContent from '../components/BookingContent';

class BookingContainer extends LoadingComponent {

  constructor(props){
    super(props);
    this.state = {
      content: [],
    }
  }

  componentWillMount() {
    this.loadBookingContent();
  }

  renderContent() {
    return this.state.content.map(item =>  {
      return (
        <BookingContent key={item.id}
          handleOnSave={this.saveBookingContent.bind(this)}
          handleOnUpdate={this.updateBookingContent.bind(this)}
          handleOnDelete={this.deleteParagraph.bind(this)}
          {...item}
        />
      )
    });
  }

  render() {
    return(
      <div className="Pages wrapper">
        <div>
          <ImageUploader />
          {this.renderContent()}
        </div>
      </div>
    )
  }

  loadBookingContent() {
    let newContent = {heading: 'Add New Header', text: 'Add New Text', new: true};
    this.loadContent('bookings', 'GET', newContent);
  }

  saveBookingContent(item) {
    this.saveContent('bookings', 'POST', item);
  }

  updateBookingContent(item) {
    this.updateContent(`bookings/${item.id}`, 'PUT', item);
  }

  deleteParagraph(id){
    this.deleteContent(`bookings/${id}`, 'DELETE');
  }
}

const mapStateToProps = ({bookingPageContent}) => ({bookingPageContent})

export default connect(mapStateToProps)(BookingContainer);
