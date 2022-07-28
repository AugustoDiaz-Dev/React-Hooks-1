import React, { Component } from 'react'

class E8IntervalClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    // clearInterval(this.interval);
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Interval Class Counter with setInterval()</h2>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default E8IntervalClassCounter