import React, {PureComponent} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';
import Create from 'material-ui/svg-icons/content/create';


class CCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
           cardTitle: this.props.cardTitle
        }

        let content = this.props.content;
        let keys = Object.keys(content);
        keys.map(key => {
            this.state[key] = content[key];
        })

    }

    handleOnChange (field, event){
        let newState = {};
        newState[field] = event.target.value;
        this.setState(newState);
    }
    

    handleMode(){
        if (this.state.edit) {
            this.props.handleOnUpdate(this.state);
            this.setState({
                cardTitle: this.props.cardTitle,
                edit: !this.state.edit,
            })
        }else {
            this.setState({
                cardTitle: 'EDITING ' + this.props.cardTitle,
                edit: !this.state.edit,
            })
        }
    }

    renderContent() {
        let content = this.props.content;
        let keys = Object.keys(content);
        return keys.map((key,i) => {
            if(key !== "id" && key !== "page_id"){
                if(this.state.edit){
                    return (
                        <div key={i} className='card-text'>
                            <TextField multiLine={true} fullWidth={true} id="text-field-controlled" value={this.state[key]} onChange={this.handleOnChange.bind(this, key)}/>  
                        </div>
                    )
                }else {
                    return (
                        <div key={i} className='card-text'>
                            <h5 style={{textTransform: "uppercase", color: '#9E9E9E'}}> {key}: </h5>
                            <Divider />
                            {this.state[key]}
                        </div>
                    );
                }
            }
        })
    }


    render() {
        return (
            <Card style={{width: "45vw", display: 'inline-block', margin: '2vw', verticalAlign: 'top'}}>
                <CardTitle className="card-title">
                    {this.state.cardTitle}
                </CardTitle>
                <CardText>
                    {this.renderContent()}
                </CardText>
                <CardActions className="card-actions">
                    <div>
                        <Delete color='#CCCCCC' label="Delete" className="delete-btn" onClick={() => this.props.handleOnDelete(this.props.content.id)} />
                    </div>
                    <div>
                        {this.state.edit ?
                            <Done color='#CCCCCC' className="save-btn" label="SAVE" onClick={this.handleMode.bind(this)} />
                        :
                            <Create color='#CCCCCC' className="save-btn" label="EDIT" onClick={this.handleMode.bind(this)} />
                        }
                    </div>
                </CardActions>
            </Card>
        )
    }
}

export default CCard;