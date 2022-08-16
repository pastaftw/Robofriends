import React from 'react';

class ErrorHandle extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: '',
            error_happened: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({error_happened: true})
    }

    render() {
        if (this.state.error_happened) { return <h1> hi </h1>}
        return this.props.children;   
    }
}

export default ErrorHandle;