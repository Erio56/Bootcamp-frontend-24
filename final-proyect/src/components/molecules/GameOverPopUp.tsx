type GameOverPopUpProps = {
   score: number
}

const GameOverPopUp = (props: GameOverPopUpProps) => {

   return (
      <div>Game over your score is {props.score}</div>
   )
}

export default GameOverPopUp;