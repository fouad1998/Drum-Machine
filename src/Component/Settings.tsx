import * as React from 'react'

interface props {
  breakLength: number
  sessionLength: number
  breakLengthDown: () => void
  breakLengthUp: () => void
  sessionLengthDown: () => void
  sessionLengthUp: () => void
}
interface State {}

export default class App extends React.Component<props, State> {
  render() {
    const breakLength = this.props.breakLength
    const sessionLength = this.props.sessionLength
    const breakLengthDown = this.props.breakLengthDown
    const breakLengthUp = this.props.breakLengthUp
    const sessionLengthDown = this.props.sessionLengthDown
    const sessionLengthUp = this.props.sessionLengthUp

    return (
      <div className="row py-3 my-4">
        <div className="col-6 justify-content-center">
          <h4 className="col-12 text-center text-white" id="break-label" style={{ fontSize: 35 }}>
            Break Length
          </h4>
          <div className="row">
            <div
              className="col-12 d-flex justify-content-center text-white"
              style={{ fontSize: 25 }}>
              <i
                className="fa fa-arrow-down px-3 py-3"
                id="break-decrement"
                onClick={breakLengthDown}></i>
              <i id="break-length">{breakLength}</i>
              <i className="fa fa-arrow-up px-3" id="break-increment" onClick={breakLengthUp}></i>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h4 className="col-12 text-center text-white" id="session-label" style={{ fontSize: 35 }}>
            Session Length
          </h4>
          <div className="row">
            <div
              className="col-12  d-flex justify-content-center text-white"
              style={{ fontSize: 25 }}>
              <i
                className="fa fa-arrow-down px-3  py-3"
                id="session-decrement"
                onClick={sessionLengthDown}></i>
              <i id="session-length">{sessionLength}</i>
              <i
                className="fa fa-arrow-up px-3"
                id="session-increment"
                onClick={sessionLengthUp}></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
