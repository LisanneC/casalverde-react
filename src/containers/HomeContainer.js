import React from 'react';
import {connect} from 'react-redux';
import ImageUploader from '../components/ImageUploader';
import LoadingComponent from './LoadingComponent';
import CCard from '../components/CCard';
import NCard from '../components/NCard';


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
        <CCard key={item.id} 
          handleOnSave={this.saveHomeContent.bind(this)} 
          handleOnUpdate={this.updateHomeContent.bind(this)} 
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
          {this.state.content.length > 0 ?
            <NCard 
              handleOnSave={this.saveHomeContent.bind(this)} 
              content={this.state.content[0]} 
            />
          : 
            " "
          }
        </div>
      </div>
    )
  }

  loadHomeContent() {
    this.loadContent('pages/10/paragraphs', 'GET');
  }

  saveHomeContent(item) {
    this.saveContent('pages/10/paragraphs', 'POST', item);
  }

  updateHomeContent(item) {
    this.updateContent(`pages/10/paragraphs/${item.id}`, 'PUT', item);
  }

  deleteParagraph(id){
    this.deleteContent(`pages/10/paragraphs/${id}`, 'DELETE');
  }
}

const mapStateToProps = ({homePageContent}) => ({homePageContent})

export default connect(mapStateToProps)(HomeContainer);
