import * as React from 'react'

interface props {
  playPause: () => void
  reset: () => void
}
interface State {}

export default class App extends React.Component<props, State> {
  render() {
    const playPause = this.props.playPause
    const reset = this.props.reset
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-warning px-3 mx-3" id="start_stop" onClick={playPause}>
            <i className="fa fa-play"></i>
            <i className="fa fa-pause"></i>
          </button>
          <button className="btn btn-danger mx-3" id="reset" onClick={reset}>
            <i className="fa fa-refresh px-3"></i>
          </button>
        </div>
      </div>
    )
  }
}
