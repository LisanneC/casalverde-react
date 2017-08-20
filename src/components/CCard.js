import React, {PureComponent} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


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
                        <div key={i}>
                            <TextField fullWidth={true} id="text-field-controlled" value={this.state[key]} onChange={this.handleOnChange.bind(this, key)}/>  
                        </div>
                    )
                }else {
                    return <div key={i}>{this.state[key]}</div>;
                }
            }
        })
    }


    render() {
        return (
            <Card style={{width: "45vw", display: 'inline-block', margin: '2vw'}}>
                <CardText>
                    {this.renderContent()}
                </CardText>
                <CardActions>
                    <FlatButton label="Delete" onClick={() => this.props.handleOnDelete(this.props.content.id)} />
                    {this.state.edit ?
                        <FlatButton label="Save" onClick={this.handleMode.bind(this)} />
                    :
                        <FlatButton label="Edit" onClick={this.handleMode.bind(this)} />
                    }
                </CardActions>
            </Card>
        )
    }
}

export default CCard;