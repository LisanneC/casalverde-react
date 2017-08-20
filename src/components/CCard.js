import React, {PureComponent} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';


class CCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
           
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
        }
        this.setState({
            edit: !this.state.edit,
        })
    }

    renderContent() {
        let content = this.props.content;
        let keys = Object.keys(content);
        return keys.map((key,i) => {
            if(key !== "id" && key !== "page_id"){
                if(this.state.edit){
                    return (
                        <div key={i} style={{marginTop: '40px', background: '#EEEEEE', padding: '1em 0.53em'}}>
                            <TextField multiLine={true} fullWidth={true} id="text-field-controlled" value={this.state[key]} onChange={this.handleOnChange.bind(this, key)}/>  
                        </div>
                    )
                }else {
                    return (
                        <div key={i} style={{marginTop: '40px', background: '#EEEEEE', padding: '1em 0.53em'}}>
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
                <CardTitle style={{background: '#EF5350', color: '#fff', padding:'1.5em'}}>
                    {this.props.title}
                </CardTitle>
                <CardText>
                    {this.renderContent()}
                </CardText>
                <CardActions>
                    <FlatButton label="Delete" primary={true} onClick={() => this.props.handleOnDelete(this.props.content.id)} />
                    {this.state.edit ?
                        <FlatButton secondary={true} label="SAVE" onClick={this.handleMode.bind(this)} />
                    :
                        <FlatButton secondary={true} label="EDIT" onClick={this.handleMode.bind(this)} />
                    }
                </CardActions>
            </Card>
        )
    }
}

export default CCard;