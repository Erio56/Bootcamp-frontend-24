interface FlagContainer {
   flagImage: string
}

const FlagContainer = ({flagImage}: FlagContainer) => {

   return (
      <div>
         <img src={flagImage} alt="" width={150} />
      </div>
   )
}

export default FlagContainer;