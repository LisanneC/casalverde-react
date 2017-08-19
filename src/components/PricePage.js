import React from 'react';
import TextField from 'material-ui/TextField';
import { Panel } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';



const PricePage = ({edit, content}) => {
  console.log(content)
    return (
        <div className='pricepage'>
        { edit ?
            <div className='form'>
                {/* <img src={content.image} /> */}
                <div>
                    <TextField defaultValue={content.start_date} placeholder='Start date' floatingLabelText='Start date '/>
                </div>
                <div>
                    <TextField
                        defaultValue={content.end_date}
                       placeholder='End date' floatingLabelText='End date'
                    />
                </div>
                <div>
                    <TextField defaultValue={content.min_days} placeholder='Minimum days' floatingLabelText='Minimum days'/>
                </div>
                <div>
                    <TextField defaultValue={content.nightly_price} placeholder='Nightly price' floatingLabelText='Nighty price'/>
                </div>
                <div>
                    <TextField defaultValue={content.extra_price} placeholder='Extra price' floatingLabelText='Extra price' />
                </div>
                <div>
                    <TextField defaultValue={content.saturdays_only} placeholder='Saturdays only' floatingLabelText='Saturdays only'/>
                </div>
                <div>
                    <TextField defaultValue={content.service_cost} placeholder='Service costs' floatingLabelText='Service costs'/>
                </div>
            </div>
        :
            <div>
              {content.map((item, i) => {
                return (
                <div key={i}>
                  <Panel collapsible defaultExpanded header="Seizoen" bsStyle="danger">
                    <ListGroup fill>
                      <ListGroupItem>Start date : {item.start_date}</ListGroupItem>
                      <ListGroupItem>End date : {item.end_date}</ListGroupItem>
                      <ListGroupItem> Min. days : {item.min_days}</ListGroupItem>
                      <ListGroupItem>Nightly price : € {item.nightly_price}</ListGroupItem>
                      <ListGroupItem>Extra price : € {item.extra_price}</ListGroupItem>
                      <ListGroupItem>Saturdays only : {item.saturdays_only}</ListGroupItem>
                      <ListGroupItem>Service cost : {item.service_cost}</ListGroupItem>
                    </ListGroup>
                  </Panel>
                </div>
                  )
                })}
            </div>
        }
        </div>
    )
}

export default PricePage;
