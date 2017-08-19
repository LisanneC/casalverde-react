import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import ImageUploader from '../components/ImageUploader';
import LoadingComponent from './LoadingComponent';
import HomeContent from '../components/HomeContent';


class HomeContainer extends LoadingComponent {
  constructor(props){
    super(props);
    this.state = {
      content: [],
    }
  }

  componentWillMount() {
    this.loadHomeContent();
  }

  renderContent() {
    return this.state.content.map(item =>  {
      return ( 
        <HomeContent key={item.id} 
          handleOnSave={this.saveHomeContent.bind(this)} 
          handleOnUpdate={this.updateHomeContent.bind(this)} 
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

  loadHomeContent() {
    let newContent = {heading: 'Add New Header', text: 'Add New Text', new: true};
    this.loadContent('pages/9/paragraphs', 'GET', newContent);
  }

  saveHomeContent(item) {
    this.saveContent('pages/9/paragraphs', 'POST', item);
  }

  updateHomeContent(item) {
    this.updateContent(`pages/9/paragraphs/${item.id}`, 'PUT', item);
  }

  deleteParagraph(id){
    this.deleteContent(`pages/9/paragraphs/${id}`, 'DELETE');
  }
}

const mapStateToProps = ({homePageContent}) => ({homePageContent})

export default connect(mapStateToProps)(HomeContainer);
