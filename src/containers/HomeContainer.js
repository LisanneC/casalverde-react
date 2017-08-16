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
      content: {}
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
              content={this.props.homePageContent} // this.state.content
              handleOnChange={this.handleOnChange.bind(this)} 
          />
          <RaisedButton label={this.state.buttonName} primary={true} onClick={this.handleOnClick.bind(this)} />
        </main>
      </div>
    )
  }

  handleOnChange(event, contentPart) {
    let obj = {};
    obj[contentPart] = event.target.value;
    this.setState(obj);
  }

  handleOnClick() {
    if(this.state.edit){
      this.setState({
        edit: false,
        buttonName: 'Edit'
      });
      this.saveHomeContent();
      
      // ipv dispatch wil je een fetch naar api endpoint.
    }else {
      this.setState({
        edit: true,
        buttonName: 'Save'
      });
    }
  }

  loadHomeContent() {
    //hier zet je de code waarmee je je data ophaalt vanuit je api endpoint;

    // let url = '/api/homePage';
    // fetch(url)
    // .then((resp) => resp.json()) // Transform the data into json
    // .then(function(data) {
      // this.setState({
      //   content: data
      // });
      // })
  }

  saveHomeContent() {

    let homeContent = {
        title: this.state.title,
        text: this.state.text
      }
    this.props.dispatch(saveHomeContent(homeContent));


    // const url = '/api/homeContent';
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
