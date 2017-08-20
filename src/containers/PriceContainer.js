import React from 'react';
import LoadingComponent from './LoadingComponent';
import CCard from '../components/CCard';
import NCard from '../components/NCard';


export default class PriceContainer extends LoadingComponent {
  constructor(props){
    super(props);
    
    this.state = {
      content: [],
    }
  }

  getUrl() {
    return 'prices';
  }

  componentWillMount() {
    this.loadData();
  }

  renderContent() {
    return this.state.content.map(item =>  {
      return ( 
        <CCard key={item.id} 
          handleOnSave={this.saveData.bind(this)} 
          handleOnUpdate={this.updateData.bind(this)} 
          handleOnDelete={this.deleteData.bind(this)}
          cardTitle="PRICE"
          content={item} 
        />
      )
    });
  }

  render() {
    return(
      <div className="Pages wrapper">
        <div>
          {this.renderContent()}
          {this.state.content.length > 0 ?
            <NCard 
              handleOnSave={this.saveData.bind(this)} 
              cardTitle="ADD NEW PRICE"
              content={this.state.content[0]} 
            />
          : 
            " "
          }
        </div>
      </div>
    )
  }

  loadData() {
    this.loadContent(this.getUrl(), 'GET');
  }

  saveData(item) {
    this.saveContent(this.getUrl(), 'POST', item);
  }

  updateData(item) {
    this.updateContent(this.getUrl() + '/' + item.id, 'PUT', item);
  }

  deleteData(id){
    this.deleteContent(this.getUrl() + '/' + id, 'DELETE');
  }
}

