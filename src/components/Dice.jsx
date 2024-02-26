/* eslint-disable react/prop-types */


export default function Dice(props){
  const lockStyle = {
    backgroundColor: props.isLocked ? "#8978de" : "white"
  }

    return (
        <div className="die" style={lockStyle} onClick={props.lockDice}>
            <h2>{props.value}</h2>
        </div>
    )
}
