import FlagContainer from "../atoms/FlagContainer"

const FlagsBar = () => {
   return (
      <div>
         <FlagContainer flagImage={"assets/flags/spain.svg"} />
         <FlagContainer flagImage={"assets/flags/spain.svg"}/>
         <FlagContainer flagImage={"assets/flags/spain.svg"}/>
      </div>
   )
}

export default FlagsBar;