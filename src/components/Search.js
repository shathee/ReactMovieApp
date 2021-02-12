import React, { Component } from "react";




class Search extends Component {

    state = {
        searchValue: ""
    }

    handleSearchInputChanges = (e) => {
        setState({ searchValue: e.target.value});
    }

    resetInputField = () => {
        setState({ searchValue: ""});
    }

    callSearchFunction = (e) => {
    e.preventDefault();
    this.props.search(searchValue);
    resetInputField();
    }

    return ()
        {
            <form className="search">
            {/* // <input value={this.state.searchValue} onChange={this.handleSearchInputChanges} type="text" />
            // <input onClick={this.callSearchFunction} type="submit" value="SEARCH" /> */}
            </form>

        }
        
}

export default search;