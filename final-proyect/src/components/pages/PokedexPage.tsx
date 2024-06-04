
import PokedexList from "../organisms/PokedexList";


const PokedexPage = () => {

   

   return ( 
      <div>
         <div>
            <PokedexList limit={150} offset={0}/>
         </div>
         <p>pokedex</p>
      </div>
   )
}

export default PokedexPage;