class Room {
    constructor(name,bookings,rate,discount){
            this.name = name;
            this.bookings = bookings;
            this.rate = rate;
            this.discount = discount;
    };
      isOccuppied(date){
        let status = false;
        this.bookings.forEach(item => {
            if ( date >= item.checkIn && date <= item.checkOut ){
               status = true;
            }
                status
        })
        return status
    }
    occupancyPercentage(startDate, endDate){

    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {}
    static availableRooms(rooms, startDate, endDate){}
}


class Booking{
    constructor(name,email,checkIn,checkOut,discount,room){
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }
    getFee(){

    }
};

module.exports = { Room, Booking }