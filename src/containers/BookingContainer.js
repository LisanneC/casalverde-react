import React from 'react';
import {connect} from 'react-redux';
import ImageUploader from '../components/ImageUploader';
import LoadingComponent from './LoadingComponent';
import CCard from '../components/CCard';


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
        <CCard key={item.id} 
          handleOnSave={this.saveBookingContent.bind(this)} 
          handleOnUpdate={this.updateBookingContent.bind(this)} 
          handleOnDelete={this.deleteParagraph.bind(this)}
          content={item} 
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
    this.loadContent('bookings', 'GET');
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

const mapStateToProps = ({BookingPageContent}) => ({BookingPageContent})

export default connect(mapStateToProps)(BookingContainer);
