import './App.css';
import Seat from './components/Seat';
import {cinema} from './components/Cine';
import { useState } from 'react';

function App() {
  const [seats, setSeats] = useState(cinema.seats); 
  return (
    <div className="App">
      <div className='scren' />
      <div className='cinema'>
        { seats.map((row, indexRow) =>
          <div className="row" key={indexRow}>
              {row.map((item, index) =>
                <Seat
                  key={`${indexRow}${index}`}
                  reserveSeat={() => {    
                    seats[indexRow][index].reserve();
                    setSeats([...seats]);
                  }}
                  isAvailable={!item.isReserved}
                />)
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
