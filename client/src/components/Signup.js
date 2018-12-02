import React, { Component } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
class Signup extends Component {
  state = {
    username: '',
    password: '',
    department: ''
  }

  render () {
    const { username, password, department } = this.state

    return (
      <form
        type='submit'
        onSubmit={this.handleFormSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
      >
        <label>Username: </label>
        <input
          name='username'
          type='text'
          placeholder='Enter username'
          value={username}
          onChange={this.handleInputChange}
          style={{ marginBottom: 10, height: 20 }}
        />
        <label>Password: </label>
        <input
          name='password'
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={this.handleInputChange}
          style={{ marginBottom: 10, height: 20 }}
        />
        <label>Department: </label>
        <input
          name='department'
          type='text'
          placeholder='Enter department'
          value={department}
          onChange={this.handleInputChange}
          style={{ marginBottom: 10, height: 20 }}
        />
        <button style={{ height: 30 }} type='submit'>
          Submit
        </button>
        <button
          style={{ height: 30, marginTop: 10 }}
          onClick={this.handleGitHubClick}
        >
          GitHub
        </button>
      </form>
    )
  }

  handleGitHubClick = () => {
    axios.get('http://localhost:8000/api/auth/github')
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
      .post('http://localhost:8000/api/register', this.state)
      .then(res => {
        this.setState({
          username: '',
          password: '',
          department: ''
        })
        this.props.history.push('/users')
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export default Signup
