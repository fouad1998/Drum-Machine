import * as React from 'react'

interface Props {}
interface State {}

export default class GamePad extends React.Component<Props, State> {
  playSound(target: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const Element = target.currentTarget
    Element.classList.toggle('bg-warning')
    const CHILDREN = Element.childNodes
    const TEXT = Element.id && Element.id.replace('-', ' ')
    const AUDIO = CHILDREN[0] as HTMLAudioElement
    AUDIO.play()
    const DISPLAY = document.getElementById('display') as HTMLDivElement
    DISPLAY && (DISPLAY.innerText = TEXT)
    setTimeout(() => {
      Element.classList.toggle('bg-warning')
    }, 300)
  }

  render() {
    const KEYS = 'QWEASDZXC'
    const source = [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    ]
    const DISPLAY = [
      'Heater-1',
      'Heater-2',
      'Heater-3',
      'Heater-4',
      'Clap',
      'Open-HH',
      "Kick-n'-Hat",
      'Kick',
      'Closed-HH',
    ]
    return (
      <div className="row justify-content-center" id="drum-machine">
        <div className="col-12 d-flex justify-content-center">
          <div
            id="display"
            className="col-6 bg-white text-dark  font-weight-bold d-flex justify-content-center align-items-center"
            style={{ height: 60, fontSize: 25 }}></div>
        </div>
        <div className="col-6 rounded border border-white py-2 my-4">
          {new Array(KEYS.length).fill(0).map((_, i) => (
            <button
              id={DISPLAY[i]}
              className="col-4 p-3 drum-pad btn"
              key={i}
              onClick={this.playSound}
              style={{ height: 90, transition: '0.2s' }}>
              <audio src={source[i]} className="clip" id={KEYS[i]}></audio>
              <strong>{KEYS[i]}</strong>
            </button>
          ))}
        </div>
      </div>
    )
  }
}
