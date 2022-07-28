import React, { Component } from 'react'
// Conditionally run effects using if() {}
class E3ClassCounter2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <h2>Conditionally run effects with lifecycle methods</h2>
                <input type="text" placeholder='Name' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
                <hr />
            </div>
        )
    }
}

export default E3ClassCounter2