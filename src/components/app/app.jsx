import React, {Component} from 'react';
import DogImage from '../dog-image/dog-image.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';
import Spinner from '../spinner/spinner.jsx';
import SearchBox from '../search-box/search-box.jsx';

import './app.css';

export default class App extends Component {
    
    _apiBase = 'https://dog.ceo/api/breeds/image/random/';
    url = Math.floor(Math.random() * 15) + 1;

    constructor(props){
        super(props);
        this.state = {
            dogImages: [],
            loading: true,
        }
    }
    
    componentDidMount(){
        this.updateDogs();
        this.interval = setInterval(this.updateDogs, 10000);
        setTimeout(() => {
            clearInterval(this.interval);
        }, 60000)
    }

    onError = (err) => {
        this.setState({
          error: true,
          loading: false
        });
      };

    updateDogs = () => {
        fetch(`${this._apiBase}${this.url}`)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                dogImages: data.message,
                error: false,
                loading: false
            })
        })
        .catch(this.onError);
    }

    render(){

        const{loading, error, dogImages} = this.state
        const hasData = !(loading||error)

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <DogImage dogImages={dogImages}/> : null;

        return (
            <div>
                <h1>Welcome to Dog World</h1>
                <SearchBox />
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
    
}