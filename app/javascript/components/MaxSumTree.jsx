import React from "react"
import PropTypes from "prop-types"
import NodeRow from "./NodeRow"
import Tree from "../packs/tree"

class MaxSumTree extends React.Component {

  state = {
    level: 1,
    maxVal: 0
  }

  newRow = () => {
    this.setState({level: this.state.level + 1})
  }

  calculateMaxSum = () => {
    const nodeVals = [...document.querySelectorAll(".node-value input")].map((node) => {
      return parseInt(node.value, 10) || 0
    })

    const val = new Tree(nodeVals).calculateMax()
    this.setState({ maxVal: val })
  }

  render() {
    const rows = []
    for(let i=1; i < this.state.level + 1; i++){
      rows.push(<NodeRow level={i} key={i} />)
    }

    return <div className="tree-container">
      <div className="button-container">
        <button
          className={`button-input ${this.state.level >= 5 ? 'disabled': ''}`}
          disabled={this.state.level >= 5}
          onClick={this.newRow}
          key={this.state.level}>
          New Row
        </button>
        <button
          className="button-input"
          onClick={() => this.calculateMaxSum()}
          key="calc-button">
          Calculate
        </button>
      </div>
      <div className="max-value">Max Value: {this.state.maxVal !== 0 ? this.state.maxVal : "N/A" }</div>
      {rows}
    </div>
  }
}

export default MaxSumTree
