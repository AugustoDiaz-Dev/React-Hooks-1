import React, { Component } from 'react'
// run effects only once
class E5ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    };

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition);
    }
    // This is used to cleanup the event listener.
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition);
    }

    render() {
        return (
            <div>
                <h2>Run effects only once with lifecycle methods</h2>
                <p>X - {this.state.x} Y - {this.state.y}</p>
            </div>
        )
    }
}

export default E5ClassMouse