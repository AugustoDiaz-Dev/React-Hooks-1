import React, { Component } from 'react'
// Using prevCount.
// prevCount is a function that has access to the old value of the state.
class ClassCounter2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Class Component Counter with preState</h2>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
                <hr />
            </div>
        )
    }
}

export default ClassCounter2