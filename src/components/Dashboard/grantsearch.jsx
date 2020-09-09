import React, {Component} from 'react';
import GrantEntry from './grantentry';
import DashboardSidebar from "./dashboardsidebar";

// const testGrants = [{id: '5', title: 'Gov Grant', agency: 'Pineapple Firm', postDate: '1/20/2021', closeDate: '12/12/2021', awardMin: '1000', awardMax: '50,000'},{id: '12345', title: 'test grant 2', postDate: '1/1/2020', closeDate: '12/1/2020', awardMin: '500', awardMax: '500,000', agency: 'B&M Gates Foundation'}]

const tableHeaders = {
    fontSize: '20px',
    fontFamily: 'Roboto',
    border: '.2rem solid black'
}

const background = {
    background: '#E5E5E5',
}

const search = {
    textAlign: 'right',
    padding: '1rem'
}

const searchbar = {
    fontSize: '24px',
    borderRadius: '.3rem',
    height: '100%',
    boxShadow: '0rem .3rem .3rem rgba(0, 0, 0, 0.25)',
}

const searchbtn = {
    backgroundColor: '#7598CC',
    border: '.06rem solid #000000',
    color: '#FFFFFF',
    padding: '.06rem 2rem',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    boxShadow: '0rem .3rem .3rem rgba(0, 0, 0, 0.25)',
    borderRadius: '.3rem',
}

class GrantSearch extends Component{
    constructor(){
        super()
        this.state={
            grantData: []
        }
    }

    postRequest(requestOptions){
        return fetch('/search_grants', requestOptions).then(token => {return token})
      }

    submitQuery = e => {   
        e.preventDefault();   
        const searchKey = e.target.searchkey.value;     

        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({searchKey})
        };
        
        const userToken = this.postRequest(requestOptions)

        userToken.then(function(response) {
            return response.json();
        }).then((data) => {
            this.setState({grantData: data})
        });
    }

    render(){
        const grantData = this.state.grantData;
        return(
            <>
            <DashboardSidebar/>
            <div style={background}>
                <form style={search} onSubmit={this.submitQuery}>
                    <input style={searchbar} placeholder="Keyword Search" name="searchkey" />
                    <button style={searchbtn} type='submit'>Search</button>
                </form>
            
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={tableHeaders}>Grant Id</th>
                            <th style={tableHeaders}>Title</th>
                            <th style={tableHeaders}>Agency</th>
                            <th style={tableHeaders}>Post Date</th>
                            <th style={tableHeaders}>Close Date</th>
                            <th style={tableHeaders}>Min Award</th>
                            <th style={tableHeaders}>Max Award</th>
                            <th style={tableHeaders}>Track Grant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grantData.map((grant) =>
                            <GrantEntry
                                key={grant.key}
                                id={grant.id}
                                title={grant.title}
                                agency={grant.agency}
                                postDate={grant.postDate}
                                closeDate={grant.closeDate}
                                awardMin={grant.awardMin}
                                awardMax={grant.awardMax}
                            />
                        )}
                    </tbody>            
                </table>
            </div>
            </>
        )
    }
}

export default GrantSearch;