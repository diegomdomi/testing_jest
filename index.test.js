// const room = require ('./index')
const {Room,Booking }= require('./index')


describe("the room is occupied",()=>{
    let date = new Date(2023, 2,1).toLocaleDateString()
    let date1 = new Date(2023, 2,15).toLocaleDateString()
    console.log(date)

    test('is occupied', () => {
        const book1 = new Booking('usuario1', 'usuario1@1.com', "2023-04-03","2023-04-15")
        const book2 = new Booking('usuario2', 'usuario2@2.com', "2023-01-02","2023-01-15")

        let occupiedRoom = new Room('Deluxe',[book1,book2],15000,10)
        expect(occupiedRoom.isOccuppied("2023-04-03")).toBeTruthy()
    })
    test('is NoOccupied', () => {
        const book1 = new Booking('usuario1', 'usuario1@1.com', "2023-04-03","2023-01-15")
        const book2 = new Booking('usuario2', 'usuario2@2.com', "2023-01-02","2023-01-15")
        let occupiedRoom1 = new Room('Deluxe',[book1,book2],15000,10)
        expect(occupiedRoom1.isOccuppied("2023-01-01")).toBeFalsy()
    })

})