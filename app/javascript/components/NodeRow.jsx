import React from "react"
import PropTypes from "prop-types"
import NodeElem from "./NodeElem"

class NodeRow extends React.Component {

  calulateTerm(level) {
    if(level === 1) return 1

    return 2 ** (level - 1)
  }

  render() {
    const elems = [];
    for (let i = this.calulateTerm(this.props.level); i > 0; i--) {
      elems.push(<NodeElem key={i} />);
    }

    return <div className={`node-row level-${this.props.level}`}>
      {elems}
    </div>
  }
}

NodeRow.propTypes = {
  level: PropTypes.number
}

export default NodeRow
