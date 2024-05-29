type TriviaButtonProps = {
   buttonName: string,
   handleOnClick: () => void
}

const TriviaButton = (props : TriviaButtonProps) => {
   return (
      <button onClick={props.handleOnClick} type="button"> {props.buttonName} </button>
   )
}

export default TriviaButton;