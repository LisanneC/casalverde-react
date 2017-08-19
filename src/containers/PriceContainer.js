import React, { PureComponent } from 'react';
import Title from '../components/Title';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import RaisedButton from 'material-ui/RaisedButton';
import PricePage from '../components/PricePage';
import ImageUploader from '../components/ImageUploader';
import { fetchPrices } from '../actions/priceActions';
import LoadingComponent from './LoadingComponent';
import PriceContent from '../components/PriceContent';



class PriceContainer extends LoadingComponent {

  constructor(props){
    super(props);
    this.state = {
      content: [],
    }
  }

  componentWillMount() {
    this.loadPriceContent();
  }

  renderContent() {
    return this.state.content.map(item =>  {
      return (
        <PriceContent key={item.id}
          handleOnSave={this.savePriceContent.bind(this)}
          handleOnUpdate={this.updatePriceContent.bind(this)}
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

  loadPriceContent() {
    let newContent = {heading: 'Add New Header', text: 'Add New Text', new: true};
    this.loadContent('prices', 'GET', newContent);
  }

  savePriceContent(item) {
    this.saveContent('prices', 'POST', item);
  }

  updatePriceContent(item) {
    this.updateContent('prices/${item.id}', 'PUT', item);
  }

  deleteParagraph(id){
    this.deleteContent('prices/${id}', 'DELETE');
  }
}

const mapStateToProps = ({pricePageContent}) => ({pricePageContent})

export default connect(mapStateToProps)(PriceContainer);
