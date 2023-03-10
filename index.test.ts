const {Room,Booking }= require('./index')


describe("the room is occupied",()=>{


    test('is occupied', () => {
        const book1 = new Booking({name:'usuario1', email: 'usuario1@1.com', checkIn:"2023-04-03", checkOut:"2023-04-15"})
        const book2 = new Booking({name:'usuario2', email: 'usuario2@2.com', checkIn:"2023-01-02", checkOut:"2023-01-15"})
        const book3 = new Booking({name:'usuario3', email: 'usuario3@3.com', checkIn:"2023-01-12", checkOut:"2023-01-19"})

        let occupiedRoom = new Room({name:'Deluxe',bookings:[book1,book2,book3],rate: 15000,discount:10})
        expect(occupiedRoom.isOccuppied("2023-04-03")).toBeTruthy()
    })
    test('is NoOccupied', () => {
        const book1 = new Booking({name:'usuario1', email: 'usuario1@1.com', checkIn:"2023-04-03", checkOut:"2023-04-15"})
        const book2 = new Booking({name:'usuario2', email: 'usuario2@2.com', checkIn:"2023-01-02", checkOut:"2023-01-15"})
        const book3 = new Booking({name:'usuario3', email: 'usuario3@3.com', checkIn:"2023-01-12", checkOut:"2023-01-19"})


        let occupiedRoom1 = new Room({name:'Deluxe',bookings:[book1,book2],rate: 15000,discount:10})
        expect(occupiedRoom1.isOccuppied("2023-01-01")).toBeFalsy()
    })

})

test("occupancyPercentage, 100%", () => {
    const room = new Room("single", [], 300, 10);
    const booking = new Booking(
      "Usuario1",
      "usuario1@g1.com",
      "2023-10-05",
      "2023-10-9",
      10,
      room
    );
    room.bookings = [booking];
  
    expect(room.occupancyPercentage("2023-10-05", "2023-10-09")).toEqual(100);
  });

  test("occupancyPercentage, 50%", () => {
    const room = new Room("single", [], 300, 10);
    const booking = new Booking(
      "Usuario2",
      "usuario2@2.com",
      "2023-07-01",
      "2023-07-08",
      10,
      room
    );
    room.bookings = [booking];
  
    expect(room.occupancyPercentage("2023-05-01", "2023-05-16")).toBe(50);
  });

  test("occupancyPercentage, 0%", () => {
    const room = new Room("single", [], 300, 20);
    const booking = new Booking(
      "usuario3",
      "usuario3@3.com",
      "2023-12-15",
      "2023-12-30",
      10,
      room
    );
    room.bookings = [booking];
  
    expect(room.occupancyPercentage("2022-12-01", "2022-12-15")).toBe(0);
  });
  
  

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