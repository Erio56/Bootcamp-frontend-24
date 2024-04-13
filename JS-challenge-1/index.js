class Seat {
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
           for (let j = 1; j <= seatsPerRow; j++) {
               this.seats.push(new Seat(i, j));
           }
       }
   }

   showSeatStatus() {
       console.log("Current seat status:");
       this.seats.forEach(seat => {
           const status = seat.isReserved ? "Occupied" : "Available";
           console.log(`Seat ${seat.row}-${seat.seatNumber}: ${status}`);
       });
   }

   reserveSeat(row, seatNumber) {
       const seat = this.findSeat(row, seatNumber);
       if (seat) {
           return seat.reserve();
       } else {
           console.log("Specified seat does not exist.");
           return false;
       }
   }

   findSeat(row, seatNumber) {
       return this.seats.find(seat => seat.row === row && seat.seatNumber === seatNumber);
   }
}

// Create an instance of Cinema with 5 rows and 10 seats per row
const cinema = new Cinema(5, 10);

// Show the initial state of the cinema hall
cinema.showSeatStatus();

// Reserve seat in row 3, seat 5
cinema.reserveSeat(3, 5);

// Show the updated state of the cinema hall
cinema.showSeatStatus();

// Try to reserve the same seat again
cinema.reserveSeat(3, 5); // Should display a message indicating that the seat is not available
