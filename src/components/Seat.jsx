import SeatImg from '../assets/seat.png';
import SeatReservedImg from '../assets/seatReserved.png';

function getColum(column) {
  return String.fromCharCode(65 + column);
}

export default function Seat(props) {
  const { reserveSeat, row = 0, column = 0, isAvailable = true } = props;
  const reserve = () => {
    reserveSeat(false);
  };
  return (
    <div onClick={reserve} className="seat">
      <div className="seat__number">{`${getColum(column)}${row}`}</div>
      <img className='set_img' src={isAvailable ? SeatImg : SeatReservedImg} alt='seat' />
    </div>
  );
}