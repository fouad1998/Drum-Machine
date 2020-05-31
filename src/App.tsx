import * as React from 'react'
import Table from './Component/Timer'

interface state {
  breakLength: number
  sessionLength: number
  refresh: boolean
}

function reformate(f: number | string): string {
  if (f >= 0 && f <= 9) {
    return '0' + f
  }
  return f.toString()
}

function formateTime(seconds: number): string {
  const MM = reformate((seconds - (seconds % 60)) / 60)
  const SS = reformate(seconds % 60)
  const time: string = MM + ':' + SS
  return time
}
function countSeconds(str: string | Array<string | number>): number {
  if (Array.isArray(str)) {
    let s = 0
    for (const item of str) {
      if (typeof item === 'string') {
        s += countSeconds(item)
      } else {
        s += item
      }
    }
    return s
  } else {
    const intervals = str.split(':').map(item => parseInt(item))
    const seconds = intervals[0] * 60 + intervals[1]
    return seconds
  }
}

export default class App extends React.Component<{}, state> {
  private interval: NodeJS.Timeout
  private playing: boolean
  private timeLeft: string
  private label: string

  constructor(props: {}) {
    super(props)
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      refresh: false,
    }

    this.playing = false
    this.timeLeft = '25:00'
    this.label = 'Session'
    this.interval = setTimeout(() => {}, 0)

    this.playPause = this.playPause.bind(this)
    this.reset = this.reset.bind(this)
  }

  sessionLengthAlter(sense: number) {
    if (this.state.sessionLength + sense >= 0 && this.state.sessionLength + sense < 60) {
      if (this.label === 'Session') {
        this.timeLeft = formateTime((this.state.sessionLength + sense) * 60)
      }
      this.setState({ sessionLength: this.state.sessionLength + sense })
    }
  }

  breakLengthAlter(sense: number) {
    if (this.state.breakLength + sense >= 0 && this.state.breakLength + sense < 60) {
      if (this.label === 'Break') {
        this.timeLeft = formateTime((this.state.breakLength + sense) * 60)
      }
      this.setState({ breakLength: this.state.breakLength + sense })
    }
  }

  playPause() {
    if (this.playing) {
      clearInterval(this.interval)
      this.playing = false
    } else {
      this.playing = true
      this.interval = setInterval(() => {
        let realTime = countSeconds(this.timeLeft)
        if (realTime >= 0) {
          realTime--
          this.timeLeft = formateTime(realTime)
        } else {
          this.label = this.label === 'Session' ? 'Break' : 'Session'
          this.timeLeft = formateTime(
            (this.label === 'Session' ? this.state.sessionLength : this.state.breakLength) * 60
          )
        }
        this.setState({ refresh: !this.state.refresh })
      }, 1000)
    }
  }

  reset() {
    clearInterval(this.interval)
    this.playing = false
    this.timeLeft = formateTime(25 * 60)
    this.label = 'Session'
    this.setState({ sessionLength: 25, breakLength: 5 })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-center text-white py-5">Drum Machine</h1>
        </div>
        <Table />
        <div className="row">
          <h6 className="col-12 text-center text-white py-5">
            Designed and Coded By @Hachour Fouad
          </h6>
        </div>
      </div>
    )
  }
}
