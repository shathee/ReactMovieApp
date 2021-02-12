// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours


class App extends Component {

  state = {
    loading: true,
    movies: [],
    errorMessage: null,
    searchValue: " ",
  }

  componentDidMount () {
    this.setState({loading:true});
    this.setState({errorMessage:null});
    fetch(`https://www.omdbapi.com/?s=${this.state.searchValue}&apikey=209bed8b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          this.setState({movies:jsonResponse.Search})
          this.setState({loading:false});
        } else {
          this.setState({errorMessage:jsonResponse.Error});
          this.setState({loading:false});
        }
      });
  }

  render () {
    return (
      <div className="App">
        <Header text="React Movie Search App" />
        <Search search="" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {this.state.loading && !this.state.errorMessage ? (
          <span>loading...</span>
          ) : this.state.errorMessage ? (
            <div className="errorMessage">{this.state.errorMessage}</div>
          ) : (
            this.state.movies.map((movie, index) => (
              <Movie key={`${index}-${this.state.movie.Title}`} movie={this.state.movie} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
  

//   state = {
//     loading: true,
//     movies: [],
//     errorMessage: null
//   }

//   // const [loading, setLoading] = useState(true);
//   // const [movies, setMovies] = useState([]);
//   // const [errorMessage, setErrorMessage] = useState(null);

//   // useEffect(() => {
//   //   fetch(MOVIE_API_URL)
//   //     .then(response => response.json())
//   //     .then(jsonResponse => {
//   //       setMovies(jsonResponse.Search);
//   //       setLoading(false);
//   //     });
//   // }, []);

  
//   // const search = searchValue => {
//   //   setLoading(true);
//   //   setErrorMessage(null);

    
//   //   fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=209bed8b`)
//   //     .then(response => response.json())
//   //     .then(jsonResponse => {
//   //       if (jsonResponse.Response === "True") {
//   //         setMovies(jsonResponse.Search);
//   //         setLoading(false);
//   //       } else {
//   //         setErrorMessage(jsonResponse.Error);
//   //         setLoading(false);
//   //       }
//   //     });
//   // 	};


//   return (
//     <div className="App">
//       <Header text="React Movie Search App" />
//       <Search search={search} />
//       <p className="App-intro">Sharing a few of our favourite movies</p>
//       <div className="movies">
//         {loading && !errorMessage ? (
//          <span>loading...</span>
//          ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           movies.map((movie, index) => (
//             <Movie key={`${index}-${movie.Title}`} movie={movie} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
