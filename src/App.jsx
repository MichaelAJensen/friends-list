import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            friend: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleAddFriend = this.handleAddFriend.bind(this)
    }
    handleInput(e) {
        let { value, name } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    handleAddFriend(e) {
        e.preventDefault()
        this.setState({
            ...this.state,
            friends: [this.state.friend, ...this.state.friends],
            friend: ""
        })
    }
    render() {
        return (
            //Good template for a form
            <div>
                <form onSubmit={this.handleAddFriend}>
                    <input type="text"
                        placeholder="Friend"
                        name="friend"
                        value={this.state.friend}
                        onChange={this.handleInput} 
                        required/>
                    <input type="submit" />
                </form>
                <div>
                    <ul>
                        {this.state.friends.map((friend, i) => {
                            return (
                                <li key={i}>{friend}</li>
                    )
                        })}
                </ul>
            </div>
            </div >
        )
    }
}
export default App
