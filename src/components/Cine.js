class Seat {
  row = 0;
  seatNumber = 0;
  isReserved = false;


  constructor(row, seatNumber) {
      this.row = row;
      this.seatNumber = seatNumber;
      this.isReserved = false;
  }

  reserve() {
      if (!this.isReserved) {
          this.isReserved = true;
          console.log(`Seat ${this.row}-${this.seatNumber} reserved.`);
          return true;
      } else {
          console.log(`Seat ${this.row}-${this.seatNumber} is already occupied.`);
          return false;
      }
  }

  cancelReservation() {
      if (this.isReserved) {
          this.isReserved = false;
          console.log(`Reservation for seat ${this.row}-${this.seatNumber} canceled.`);
          return true;
      } else {
          console.log(`Seat ${this.row}-${this.seatNumber} is not reserved.`);
          return false;
      }
  }
}

class Cinema {
  constructor(rows, seatsPerRow) {
      this.rows = rows;
      this.seatsPerRow = seatsPerRow;
      this.seats = [];
      for (let i = 1; i <= rows; i++) {
          let row = [];
          for (let j = 1; j <= seatsPerRow; j++) {
              row.push(new Seat(i, j));
          }
          this.seats.push(row);
      }
  }

  showSeatStatus() {
      console.log("Current seat status:");
      this.seats.forEach((row, rowIndex) => {
          row.forEach(seat => {
              const status = seat.isReserved ? "Occupied" : "Available";
              console.log(`Seat ${rowIndex + 1}-${seat.seatNumber}: ${status}`);
          });
      });
  }

  reserveSeat(row, seatNumber) {
      if (row <= this.rows && seatNumber <= this.seatsPerRow) {
          const seat = this.seats[row - 1][seatNumber - 1];
          return seat.reserve();
      } else {
          console.log("Specified seat does not exist.");
          return false;
      }
  }
}


// Create an instance of Cinema with 5 rows and 10 seats per row
const cinema = new Cinema(5, 10);

console.log(cinema.seats);
export {cinema};