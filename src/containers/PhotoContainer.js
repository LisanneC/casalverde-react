import React from 'react';
import LoadingComponent from './LoadingComponent';
import CCard from '../components/CCard';
import NCard from '../components/NCard';


export default class HomeContainer extends LoadingComponent {
  constructor(props){
    super(props);

    this.state = {
      content: [],
    }
  }

  getUrl() {
    return 'pages/10/paragraphs';
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
          content={item}
        />
      )
    });
  }

  render() {
    return(
      <div className="Pages wrapper">
        {/* <div>
          {this.renderContent()}
          {this.state.content.length > 0 ?
            <NCard
              handleOnSave={this.saveData.bind(this)}
              content={this.state.content[0]}
            />
          :
            " "
          }
        </div> */}
        <center><img src={'http://res.cloudinary.com/liss/image/upload/v1503062802/front_ytmnlh.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503306284/13702930_1765751677041505_1685675442_n_rkh5pv.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503062801/pool_qbwrfe.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503062801/pool_day_ghpccr.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503306282/14565048_675596419264043_7544815898939359232_n_zmyapj.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503062800/1_vuul3n.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503062802/table_wr0eve.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503306302/14704927_1108976682551768_5617388460877807616_n_aokcaz.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503062800/6_agziui.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503306289/13721109_1112620112157272_1746113417_n_t3t5vs.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503062800/5_hiks63.jpg'} width='300' height='250'/>
        <img src={'http://res.cloudinary.com/liss/image/upload/v1503062801/fire_rehceh.jpg'} width='300' height='250'/>
        {/* <img src={'http://res.cloudinary.com/liss/image/upload/v1503306447/20589512_1630498250355261_3648812324132749312_n_dhtidn.jpg'} width='300' height='250'/> */}
      </center></div>
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
