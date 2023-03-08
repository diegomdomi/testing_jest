const {Room,Booking }= require('./index')


describe("the room is occupied",()=>{


    test('is occupied', () => {
        const book1 = new Booking({name:'usuario1', email: 'usuario1@1.com', checkIn:"2023-04-03", checkOut:"2023-04-15"})
        const book2 = new Booking({name:'usuario2', email: 'usuario2@2.com', checkIn:"2023-01-02", checkOut:"2023-01-15"})

        let occupiedRoom = new Room({name:'Deluxe',bookings:[book1,book2],rate: 15000,discount:10})
        expect(occupiedRoom.isOccuppied("2023-04-03")).toBeTruthy()
    })
    test('is NoOccupied', () => {
        const book1 = new Booking({name:'usuario1', email: 'usuario1@1.com', checkIn:"2023-04-03", checkOut:"2023-04-15"})
        const book2 = new Booking({name:'usuario2', email: 'usuario2@2.com', checkIn:"2023-01-02", checkOut:"2023-01-15"})

        let occupiedRoom1 = new Room({name:'Deluxe',bookings:[book1,book2],rate: 15000,discount:10})
        expect(occupiedRoom1.isOccuppied("2023-01-01")).toBeFalsy()
    })

})

test("getFee,10% discount", () => {
    const room1 = new Room({name: "single", bookings:[],rate: 250, discount:5});
    const book1 = new Booking({name:'usuario1', email:'usuario1@1.com', checkIn:"2023-04-03",checkOut:"2023-01-15",discount: 5,room: room1})
  
    room1.bookings = [book1];
  
    expect(book1.getFee()).toBe(225);
  });
test("getFee, 20% discount", () => {
    const room1 = new Room({name: "suite", bookings:[], rate: 350, discount:15});
    const book1 = new Booking({name:'usuario1', email:'usuario1@1.com', checkIn:"2023-04-03", checkOut:"2023-01-15",discount:5,room: room1})
  
    room1.bookings = [book1];
  
    expect(book1.getFee()).toBe(280);
  });