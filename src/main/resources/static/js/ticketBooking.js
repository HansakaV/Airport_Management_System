// Generate a random seat number like "12C"
function generateSeatNumber() {
    const row = Math.floor(Math.random() * 30) + 1;
    const seatLetter = String.fromCharCode(65 + Math.floor(Math.random() * 6)); // A to F
    return `${row}${seatLetter}`;
}

// When 'Book Now' is clicked
$(document).on('click', '.edit-btn', function () {
    const flightId = $(this).data('id');
    $('#bookingForm').data('flight-id', flightId); // Store flight ID

    $('#seatNumber').val(generateSeatNumber());
    $('#bookingDate').val(new Date().toISOString().split('T')[0]); // today's date

    $('#bookingModal').modal('show');
});

// Handle form submission
$('#bookingForm').on('submit', function (e) {
    e.preventDefault();

    const booking = {
        flightId: $(this).data('flight-id'),
        bookingDate: $('#bookingDate').val(),
        flightClass: $('#flightClass').val(),
        paymentMethod: $('#paymentMethod').val(),
        seatNumber: $('#seatNumber').val()
    };

    console.log('Booking data:', booking);

    // TODO: Add AJAX POST request here to send booking to backend
    // $.post('/api/booking', booking, function(response) {
    //     alert('Booking successful!');
    //     $('#bookingModal').modal('hide');
    // });

    alert('Booking confirmed!');
    $('#bookingModal').modal('hide');
});
