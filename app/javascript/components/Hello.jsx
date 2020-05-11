import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Hello extends React.Component {
  render() {
    return <span>{this.props.name}</span>
  }
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
