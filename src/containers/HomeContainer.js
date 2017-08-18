import React, { PureComponent } from 'react';
import Title from '../components/Title';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUploader from '../components/ImageUploader';
import {saveHomeContent} from '../actions/homeActions';


class HomeContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      buttonName: 'Edit',
      header: '',
      parafs: [],
    }
  }

  componentWillMount() {
    this.loadHomeContent();
  }

  render() {
    return(
      <div className="Pages wrapper">
        <main>
          <ImageUploader />
          <HomePage
              edit={this.state.edit}
              header={this.state.header}
              parafs={this.state.parafs} // this.state.content
              handleOnChange={this.handleOnChange.bind(this)}
          />
          <RaisedButton label={this.state.buttonName} primary={true} onClick={this.handleOnClick.bind(this)} />
        </main>
      </div>
    )
  }

  handleOnChange(event, contentPart) {
    let obj = {};
    let parafs = this.state.parafs;
    if(this.isNumber(contentPart)){
      obj = {text: event.target.value};
      parafs[contentPart] = obj;
      this.setState({parafs});
    }else {
      obj[contentPart] = event.target.value;
      this.setState(obj);
    }
  }

  isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleOnClick() {
    if(this.state.edit){
      this.setState({
        edit: false,
        buttonName: 'Edit'
      });
      this.saveHomeContent();
    }else {
      this.setState({
        edit: true,
        buttonName: 'Save'
      });
    }
  }

  loadHomeContent() {

    let url = 'http://localhost:5000/admin/pages/5/paragraphs.json'
    let data;
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      data = data;
      this.updateState(data);
    }.bind(this));

  }

  updateState(data){
    let parafs = [];
    data.map(item => {
      if (item.heading){
        this.setState({header: item.heading});
      }
      parafs.push({text: item.text});
    });
    this.setState({parafs});
  }

  saveHomeContent() {

    // let homeContent = {
    //     title: this.state.title,
    //     text: this.state.text
    //   }
    // this.props.dispatch(saveHomeContent(homeContent));

    console.log('saveHomeContent', this.state.parafs);


    const url = 'http://localhost:5000/admin/reviews.json';
    // The data we are going to send in our request
    // let data = {
    //     title: this.state.title,
    //     text: this.state.text
    //   }

    // The parameters we are gonna pass to the fetch function
    // let fetchData = {
    //     method: 'POST',
    //     body: data,
    //     headers: new Headers()
    // }
    // fetch(url, fetchData)
    // .then(function() {
    //     // Handle response you get from the server
    // });

  }
}

const mapStateToProps = ({homePageContent}) => ({homePageContent})

export default connect(mapStateToProps)(HomeContainer);
