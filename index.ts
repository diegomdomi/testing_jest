interface RoomInterface {
    name: string;
    bookings: Array<Booking>;
    rate: number;
    discount: number;
}
class Room {
    name: string;
    bookings:Array<Booking>
    rate:number;
    discount: number;

    constructor(ConfigRoom:RoomInterface){
            this.name = ConfigRoom.name;
            this.bookings = ConfigRoom.bookings;
            this.rate = ConfigRoom.rate;
            this.discount = ConfigRoom.discount;
    };
      isOccuppied(date:string):boolean {
        let status = false;
        this.bookings.forEach(item => {
            if ( date >= item.checkIn && date <= item.checkOut ){
               status = true;
            }
                status
        })
        return status
    }
    occupancyPercentage(startDate, endDate){}

    static totalOccupancyPercentage(rooms, startDate, endDate) {}
    static availableRooms(rooms, startDate, endDate){}
}

interface BookInterface {
    name: string,
    email: string,
    checkIn: string,
    checkOut: string,
    discount: number,
    room?: Room
}
class Booking{
    name: string;
    email: string;
    checkIn: string;
    checkOut: string;
    discount: number;
    room?: Room;


    constructor(ConfigBook : BookInterface){
        this.name = ConfigBook.name;
        this.email = ConfigBook.email;
        this.checkIn = ConfigBook.checkIn;
        this.checkOut = ConfigBook.checkOut;
        this.discount =  ConfigBook.discount;
        this.room = ConfigBook.room;
    }
    getFee():number {
        let roomDiscount =(this.room ? this.room.discount : 0)
        let roomRate =  (this.room ? this.room.rate : 0);
        const discountTotal = this.discount + roomDiscount; 
        let priceTotal = roomRate;
        if (discountTotal > 0 && discountTotal < 100) {
            priceTotal =roomRate - ((discountTotal * roomRate) / 100);
          }
          return Math.round(priceTotal) ;
        }
};

export { Room, Booking,RoomInterface}