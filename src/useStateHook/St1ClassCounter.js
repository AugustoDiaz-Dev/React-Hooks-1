import React, { Component } from 'react'
// 1- Create a Component
class StClassCounter extends Component {
    constructor(props) {
        super(props)
        // 2- Create a state variable
        this.state = {
            count: 0
        }
    }
    // 3- Create a method to increment the count
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Class Component Counter</h2>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
                <hr />
            </div>
        )
    }
}

export default StClassCounter