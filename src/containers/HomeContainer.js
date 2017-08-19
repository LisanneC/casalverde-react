import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import ImageUploader from '../components/ImageUploader';
import LoadingComponent from './LoadingComponent';
import HomeContent from '../components/HomeContent';


class HomeContainer extends LoadingComponent {
  constructor(props){
    super(props);
    this.state = {
      homeContent: [],
    }
  }

  componentWillMount() {
    this.loadHomeContent();
  }

  renderContent() {
    return this.state.homeContent.map(item =>  {
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
    this.fetch('pages/9/paragraphs.json', 'GET').then((response) => {
      let newContent = {heading: 'Add New Header', text: 'Add New Text', new: true};
      response.body.push(newContent);
      this.setState({homeContent: response.body});
    });
  }

  saveHomeContent(item) {
    this.fetch(`pages/9/paragraphs`, 'POST', item).then((response) => {
      this.loadHomeContent();
    });
  }

  updateHomeContent(item) {
    this.fetch(`pages/9/paragraphs/${item.id}`, 'PUT', item).then((response) => {
      this.loadHomeContent();
    });
  }

  deleteParagraph(id){
    this.fetch(`pages/9/paragraphs/${id}`, 'DELETE').then((response) => {
      this.loadHomeContent();
    });
  }
}

const mapStateToProps = ({homePageContent}) => ({homePageContent})

export default connect(mapStateToProps)(HomeContainer);
