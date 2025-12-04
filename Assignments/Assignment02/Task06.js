// 6. A theatre booking system has:  totalSeats = 120 and bookedSeats = 
// 78. Write a program to Calculate available seats, Check if the show is 
// “Almost Full” if seats < 20, “Moderate Availability” if seats between 20
// 60, “Plenty of Seats Available” if seats > 60. Print both the exact number 
// of seats left and the status message.

function ShowSeatsText(totalSeats,bookedSeats) {
    availableSeats = totalSeats-bookedSeats;
    switch (true) {
        case (availableSeats<20):
            console.log(`Available Seats ${availableSeats} `,"Almost Full");
            break;
        case (availableSeats>=20 && availableSeats<60):
            console.log(`Available Seats ${availableSeats} `,"Moderate Availability");
            break;
        case (availableSeats>=60):
            console.log(`Available Seats ${availableSeats} `,"Plenty of Seats Available");
            break;
        default:
            console.log(`Available Seats ${availableSeats} `,"Fatal Error!!!");
            break;
    }
}

ShowSeatsText(120,110)
ShowSeatsText(120,61)
ShowSeatsText(120,20)