// Booking AJAX functionality
$(document).ready(function() {
    // Generate seat number when booking modal is opened
   /* $('#bookingModal').on('shown.bs.modal', function () {
        generateSeatNumber();
    });*/

    // Handle booking form submission
    $('#bookingForm').submit(function (event) {
        event.preventDefault();
        createBooking();
    });

    // Function to generate a seat number
    function generateSeatNumber() {
        $.ajax({
            url: '/api/bookings/generate-seat',
            type: 'GET',
            contentType: 'application/json',
            success: function (response) {
                $('#seatNumber').val(response.seatNumber);
            },
            error: function (xhr, status, error) {
                console.error('Error generating seat number:', error);
                alert('Failed to generate seat number. Please try again.');
            }
        });
    }

    // Function to create a booking
    function createBooking() {
        console.log('Creating booking...');
        // Collect form data
        const bookingData = {
            bookingDate: $('#bookingDate').val(),
            passengerName: $('#pasName').val(),
            flightClass: $('#flightClass').val(),
            paymentMethod: $('#paymentMethod').val(),
            seatNumber: $('#seatNumber').val()
        };

        $.ajax({
            url: 'http://localhost:8082/api/v1/bookings/create',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(bookingData),
            success: function (response) {
                // Close the modal
                $('#bookingModal').modal('hide');

                // Show success message
                showSuccessAlert('Booking created successfully! Booking ID: ' + response.id);

                // Optionally: Show booking details or redirect to booking details page
                showBookingDetails(response);

                // Reset the form
                $('#bookingForm')[0].reset();
            },
            error: function (xhr, status, error) {
                console.error('Error creating booking:', error);
                alert('Failed to create booking. Please try again.');
            }
        });
    }

    // Function to show success alert
    function showSuccessAlert(message) {
        const alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        // Insert alert before the content area
        $('#mainContent').prepend(alertHtml);

        // Auto dismiss after 5 seconds
        setTimeout(function () {
            $('.alert').alert('close');
        }, 5000);
    }

    // Function to show booking details (you can customize this based on your UI)
    function showBookingDetails(booking) {
        // This is a placeholder function - implement according to your UI needs
        console.log('Booking details:', booking);

        // Example: You could update a bookings table
        updateBookingsTable();

        // Or redirect to a booking details page
        // window.location.href = '/bookings/' + booking.id;
    }

    // Function to update bookings table (if you have one)
    function updateBookingsTable() {
        $.ajax({
            url: '/api/bookings',
            type: 'GET',
            contentType: 'application/json',
            success: function (bookings) {
                // Clear existing table rows except the header
                $('#bookingsTable tbody').empty();

                // Add new rows for each booking
                bookings.forEach(function (booking) {
                    const row = `
                        <tr>
                            <td>${booking.id}</td>
                            <td>${booking.bookingDate}</td>
                            <td>${booking.passengerName}</td>
                            <td>${booking.flightClass}</td>
                            <td>${booking.seatNumber}</td>
                            <td>${booking.bookingStatus}</td>
                            <td>
                                <button class="btn btn-sm btn-info view-booking" data-id="${booking.id}">View</button>
                                <button class="btn btn-sm btn-warning edit-booking" data-id="${booking.id}">Edit</button>
                                <button class="btn btn-sm btn-danger delete-booking" data-id="${booking.id}">Delete</button>
                            </td>
                        </tr>
                    `;
                    $('#bookingsTable tbody').append(row);
                });

                // Attach event handlers to new buttons
                attachButtonHandlers();
            },
            error: function (xhr, status, error) {
                console.error('Error fetching bookings:', error);
            }
        });
    }

    // Function to attach event handlers to booking table buttons
    function attachButtonHandlers() {
        // View booking details
        $('.view-booking').click(function () {
            const bookingId = $(this).data('id');
            viewBookingDetails(bookingId);
        });

        // Edit booking
        $('.edit-booking').click(function () {
            const bookingId = $(this).data('id');
            editBooking(bookingId);
        });

        // Delete booking
        $('.delete-booking').click(function () {
            const bookingId = $(this).data('id');
            deleteBooking(bookingId);
        });
    }
});

    // Function to view booking details
   /* function viewBookingDetails(bookingId) {
        $.ajax({
            url: '/api/bookings/' + bookingId,
            type: 'GET',
            contentType: 'application/json',
            success: function(booking) {};*/
// Show booking details in a modal or details panel
// This is a placeholder - implement according to your UI