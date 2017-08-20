import React from 'react';
import {connect} from 'react-redux';
import ImageUploader from '../components/ImageUploader';
import LoadingComponent from './LoadingComponent';
import CCard from '../components/CCard';


class ReviewContainer extends LoadingComponent {
  constructor(props){
    super(props);
    this.state = {
      content: [],
    }
  }

  componentWillMount() {
    this.loadReviewContent();
  }

  renderContent() {
    return this.state.content.map(item =>  {
      return ( 
        <CCard key={item.id} 
          handleOnSave={this.saveReviewContent.bind(this)} 
          handleOnUpdate={this.updateReviewContent.bind(this)} 
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

  loadReviewContent() {
    this.loadContent('reviews', 'GET');
  }

  saveReviewContent(item) {
    this.saveContent('reviews', 'POST', item);
  }

  updateReviewContent(item) {
    this.updateContent(`reviews/${item.id}`, 'PUT', item);
  }

  deleteParagraph(id){
    this.deleteContent(`reviews/${id}`, 'DELETE');
  }
}

const mapStateToProps = ({ReviewPageContent}) => ({ReviewPageContent})

export default connect(mapStateToProps)(ReviewContainer);
