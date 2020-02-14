import React, {Component} from 'react';
import DogImage from '../dog-image/dog-image.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';
import Spinner from '../spinner/spinner.jsx';

import './app.css';

export default class App extends Component {
    
    _apiBase = 'https://dog.ceo/api/breeds/image/random/';
    url = Math.floor(Math.random() * 15) + 1;

    constructor(props){
        super(props);
        this.state = {
            dogImages: [],
            loading: true
        }
    }
    
    componentDidMount(){
         this.updateDogs()
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
        const{loading, error} = this.state
        const hasData = !(loading||error)

        const dogList = this.state.dogImages.map((url, id) => {
            return <DogImage key={id} url={url}/>
        })

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? dogList : null;

        return (
            <div>
                <h1>Dogs Images</h1>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
    
}

