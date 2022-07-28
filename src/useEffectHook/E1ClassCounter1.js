import React, { Component } from 'react'
// Class Counter using lifecycle methods (componentDidMount, componentDidUpdate)
class E1ClassCounter1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <h2>Change the document title counter value with lifecycle methods</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Clicked {this.state.count} times.</button>
                <hr />
            </div>
        )
    }
}

export default E1ClassCounter1