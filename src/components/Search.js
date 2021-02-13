import React, { Component } from "react";


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
                <form className="search">
                <input value={this.state.searchValue} onChange={this.handleSearchInputChanges} type="text" />
                <input onClick={this.callSearchFunction} type="submit" value="SEARCH" /> 
                </form>
            );
        }
        
}

export default Search;