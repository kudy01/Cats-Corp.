import React, {Component} from 'react';
import CatList from './components/CatList';
import Searchbox from './components/Searchbox';
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: ''
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
        .then(users => this.setState({ cats: users}));
      
   }

   onSearchChange = (event) => {
      this.setState({searchField: event.target.value})
      console.log(this.state.searchField)
   }

  render(){
    const { cats, searchField } = this.state
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
            <h1>Cats Corp.</h1>
            <Searchbox searchChange= {this.onSearchChange}/>
            <CatList cats={filteredCats}/>
        </div>
      </ThemeProvider>
      )  
  }
}


export default App;