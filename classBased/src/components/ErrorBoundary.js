import {Component} from 'react';


class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }
    componentDidCatch(error){
        this.setState({hasError:true});
    }
    render(){
        if(this.state.hasError)
        {
            return <h2>This has errors..Something went Wrong!</h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;