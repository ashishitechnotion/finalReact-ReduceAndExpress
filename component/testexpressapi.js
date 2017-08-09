import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import axios from 'axios';
import {HTTP} from '../reducers/common-url.js';

class TestExpressApi extends Component
{
constructor(props) 
{
super(props);
this.state={data:[]};
};

//retrive data on page load //
    componentDidMount() {
    var self = this;
    var state_id=3;
    HTTP.get('/getFaclistByStateId/'+state_id)
    .then(function (response) {
    self.setState({data:response.data.result});
    })
    .catch(function (error) {
    console.log(error);
    });
    }
  //retrive data on page load //

  render()
  {
     const style={border:"1px solid #000",margin: "20px"}; 
    const faclityList = this.state.data.map((item, i) => {
    return <div key={i} style={style}>
   <p><label>Facility Name</label> :{item.facility_name}</p>
   <p><label>Abn Number</label> :{item.abn_number}</p>
   <p><label>Facility Address</label> :{item.facility_address}</p>
   <p><label>Facility Mobile</label> :{item.facility_mobile}</p>
     <p><label>Facility Email</label> :{item.facility_email}</p> 
     <br/>
     <br/>
    </div>
    });
      return(<div>Test Api Response :: {faclityList}</div>);
  }

}
export default TestExpressApi;