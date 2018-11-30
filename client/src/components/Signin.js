import React, { Component } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
class Signin extends Component {
  state = {
    username: '',
    password: ''
  }

  render (props) {
    const { username, password } = this.state

    return (
      <div className='Signin'>
        <form
          onSubmit={this.handleFormSubmit}
          style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
        >
          <label>Username:</label>
          <input
            name='username'
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={this.handleInputChange}
            style={{ marginBottom: 10, height: 20 }}
          />
          <label>Password:</label>
          <input
            name='password'
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={this.handleInputChange}
            style={{ marginBottom: 10, height: 20 }}
          />
          <button style={{ height: 30 }} type='submit'>
            Login
          </button>
        </form>
      </div>
    )
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()

    axios
      .post('http://localhost:8000/api/login', this.state)
      .then(res => {
        this.props.history.push('/users')
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export default Signin
