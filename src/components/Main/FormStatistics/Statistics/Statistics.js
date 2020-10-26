import React from "react"
class Statistics extends React.Component {
  render() {
    return (
      <div className="formInfo">
        <p>{this.props.amount}</p>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
export default Statistics
