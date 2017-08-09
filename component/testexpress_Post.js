import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router,hashHistory,Route} from 'react-router';
import { Link } from 'react-router';
//import axios from 'axios';
import {HTTP} from '../reducers/common-url.js';

class TestExpressPost extends Component
{
    
        getInitialState() 
        {
        return { drdcountry : '',txtstate:''};
        }

    constructor(props)
    {
        super(props);
        this.state={data:[],"drdcountry":"","txtstate":""};
        this.drpClick=this.drpClick.bind(this);
        this.txtChangeState=this.txtChangeState.bind(this);
        this.fromSubmit = this.fromSubmit.bind(this);
    }
    //retrive data on page load //
    componentDidMount()
    {
        var self = this;
        HTTP.get('getAllState')
        .then(function (response) {
        self.setState({data:response.data.result});
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    //retrive data on page load //
    drpClick(e)
    {
   this.setState({"drdcountry": e.target.value});
    }
  txtChangeState(e)
    {
        this.setState({"txtstate": e.target.value});
    }
    //post method//
    fromSubmit(e)
    {
        e.preventDefault();
        var state_name=this.state.txtstate;
        //console.log(state_name);
        var country_id=this.state.drdcountry;
        //console.log(country_id);
        HTTP.post('addState', 
        {
        state_name: state_name,
        country_id: country_id,
        })
        .then(function (response) 
        {
        console.log(response);
        alert(response.data.message);
        })
        .catch(function (error) {
        console.log(error);
        });
      
    }
    //post method//

    render()
    {
        const countryList=this.state.data.map((items,i)=>
        {
          return  <option  key={i} value={items.country_id}>{items.country_name}</option>
        })
         const { txtstate, drdcountry,} = this.state;
        return(
            <div>
                <form>
                    <div className="row">
                    axios with Express Post data  <br/> <br/>
                    <div className="form-group">
                    <div className="col-md-8">
                        <label>State Name:</label>
                        <input type='text' id='txtStateName'  className="form-control" 
                         onChange={this.txtChangeState}/>
                         
                    </div>
                    <div className="col-md-4"></div>
                    </div>
                    <div className="form-group">
                    <div className="col-md-8">
                        <label>Country</label>
                        <select className="form-control"  onChange={this.drpClick}>
                        {countryList}
                        </select>
                    </div>
                    <div className="col-md-4"> </div>
                    <div className="clearfix"></div>
                    </div>
                 <div className="from-group">
                <div className="col-md-12">
                <button type="button" onClick={this.fromSubmit}>Submit</button>   
                </div>
                </div>

                </div>                 
                </form>
            </div>
        );
    }
}
export default TestExpressPost;