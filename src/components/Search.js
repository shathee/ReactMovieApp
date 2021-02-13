import React, { Component } from "react";

import { Container, Button, FormGroup, TextField, Divider } from "@material-ui/core";



class Search extends Component {
    
    state = {
        searchValue: ""
    }
    componentDidMount () {
        console.log(this.props)
    }

    handleSearchInputChanges = (e) => {
        this.setState({ searchValue: e.target.value});
    }

    resetInputField = () => {
        this.setState({ searchValue: ""});
    }

    callSearchFunction = (e) => {
        
        e.preventDefault();
        // alert(this.state.searchValue);
        this.props.search(this.state.searchValue);
        this.resetInputField();
    }

    render ()
        {
            return (
                <FormGroup>

                <form className="search">
                    <Container><TextField value={this.state.searchValue} onChange={this.handleSearchInputChanges} /></Container>
                    <Divider />
                    <Container><Button variant="contained" onClick={this.callSearchFunction}>SEARCH</Button></Container>
                </form>
                </FormGroup>
                
            );
        }
        
}

export default Search;