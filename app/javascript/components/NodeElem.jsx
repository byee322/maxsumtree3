import React from "react"
import PropTypes from "prop-types"

class NodeElem extends React.Component {
  render() {
    return <div className="node-value">
      <input type="number" min="1" max="100" />
    </div>
  }
}

export default NodeElem
