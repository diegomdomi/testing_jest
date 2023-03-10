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

    constructor(configRoom:RoomInterface){
            this.name = configRoom.name;
            this.bookings = configRoom.bookings;
            this.rate = configRoom.rate;
            this.discount = configRoom.discount;
    };
      isOccuppied(date:string):boolean {
        let status = false;
        this.bookings.forEach(item => {
            if ( date >= item.checkIn && date <= item.checkOut ){
               status = true;
            }
               
        })
        return status
    }
    occupancyPercentage(startDate:string, endDate: string): number {
        const start = new Date(startDate);
        const end = new Date(endDate)
        let count = 0;
        const dates: string[] = [];
        let occupiedDays = 0;
        let unoccupiedDays = 0;
    
        for (const date of dates) {
          this.isOccuppied(date) ? occupiedDays++ : unoccupiedDays++;
        }
        let totalDays = occupiedDays + unoccupiedDays;
        let occupancyPercentage = (occupiedDays * 100) / totalDays;
    
        return Math.round(occupancyPercentage);
    }

    static totalOccupancyPercentage(rooms, startDate, endDate) : void{}
    static availableRooms(rooms, startDate, endDate): void{}
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