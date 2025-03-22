$(document).ready(function() {
    // Load flights when page loads
    loadFlights();

    // Function to load all flights
    function loadFlights() {
        $.ajax({
            url: 'http://localhost:8082/api/v1/flight/getAll',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.log(response)
                    displayFlights(response.data);

            },
            error: function(xhr, status, error) {
                console.error('AJAX error:', error);
                alert('Error loading flights. Please try again later.');
            }
        });
    }

    // Function to display flights in the table
    function displayFlights(flights) {
        var tableBody = $('#flights');
        tableBody.empty();

        $.each(flights, function(i, flight) {
            var statusClass = flight.status === 'Active' ? 'success' :
                flight.status === 'Delayed' ? 'warning' :
                    flight.status === 'Cancelled' ? 'danger' : 'secondary';

            var row = `<tr>
                <td>${flight.flightNo}</td>
                <td>${flight.route}</td>
                <td>${flight.departure}</td>
                <td>${flight.arrival}</td>
                <td>${flight.days}</td>
                <td><span class="badge bg-${statusClass}">${flight.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary edit-btn" data-id="${flight.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${flight.id}">Delete</button>
                </td>
            </tr>`;

            tableBody.append(row);
        });

        // Add event listeners for edit and delete buttons
        attachEventListeners();
    }

    // Function to attach event listeners to buttons
    function attachEventListeners() {
        // Edit button click handler
        $('.edit-btn').click(function() {
            var flightId = $(this).data('id');
            // Add your edit logic here
            console.log('Edit flight with ID:', flightId);
        });

        // Delete button click handler
        $('.delete-btn').click(function() {
            var flightId = $(this).data('id');
            if (confirm('Are you sure you want to delete this flight?')) {
                deleteFlight(flightId);
            }
        });
    }

    // Function to delete a flight
    function deleteFlight(flightId) {
        $.ajax({
            url: 'http://localhost:8082/api/v1/flight/delete/' + flightId,
            type: 'DELETE',
            success: function(response) {
                if (response.code === "Success") {
                    alert('Flight deleted successfully!');
                    loadFlights(); // Reload the table
                } else {
                    alert('Error deleting flight: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('Delete error:', error);
                alert('Error deleting flight. Please try again.');
            }
        });
    }

    // Add form submission handler if you have a form
    $('#flightForm').submit(function(e) {
        e.preventDefault();

        var flightData = {
            ID: $('#flightId').val() || 0,
            FlightNo: $('#flightNo').val(),
            Route: $('#route').val(),
            Departure: $('#departure').val(),
            Arrival: $('#arrival').val(),
            Days: $('#days').val(),
            Status: $('#status').val()
        };

        $.ajax({
            url: 'http://localhost:8082/api/v1/flight/save',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(flightData),
            success: function(response) {
                if (response.code === "Created") {
                    alert('Flight saved successfully!');
                    $('#flightForm')[0].reset(); // Reset the form
                    loadFlights(); // Reload the table
                } else {
                    alert('Error saving flight: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('Save error:', error);
                alert('Error saving flight. Please try again.');
            }
        });
    });
});

//buttons
/*
// Get references to your elements
const addNewFlightBtn = document.getElementById('addNewFlightBtn');
const addFlightModal = document.getElementById('addFlightModal');
const modalCloseBtn = document.querySelector('.modal-close');

// Function to open the modal
function openAddModal() {
    addFlightModal.style.display = 'block';
}

// Function to close the modal
function closeAddModal() {
    addFlightModal.style.display = 'none';
}

// Add event listeners
addNewFlightBtn.addEventListener('click', openAddModal);
modalCloseBtn.addEventListener('click', closeAddModal);

// Close modal if clicked outside of modal content
window.addEventListener('click', function(event) {
    if (event.target === addFlightModal) {
        closeAddModal();
    }
});*/


// Get references to elements
const addFlightModal = document.getElementById('addFlightModal');
const addFlightForm = document.getElementById('addFlightForm');
const saveFlightBtn = document.getElementById('saveFlightBtn');
const modalCloseBtn = document.querySelector('.modal-close');
const modalCloseBtnFooter = document.querySelector('.modal-close-btn');

// Function to open the modal
function openAddModal() {
    addFlightModal.style.display = 'block';
}

// Function to close the modal
function closeAddModal() {
    addFlightModal.style.display = 'none';
    addFlightForm.reset(); // Reset the form when closing
}

// Function to collect form data
function collectFormData() {
    // Get all form fields
    const flightNumber = document.getElementById('flightNumber').value;
    const aircraft = document.getElementById('aircraft').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureTime = document.getElementById('departureTime').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const status = document.getElementById('status').value;

    // Get operating days
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const operatingDays = {};

    days.forEach(day => {
        operatingDays[day] = document.getElementById(day).checked;
    });

    // Return the form data as an object
    return {
        flightNumber,
        aircraft,
        origin,
        destination,
        departureTime,
        arrivalTime,
        operatingDays,
        status
    };
}

// Function to validate form data
function validateForm() {
    // Check if the form is valid using the built-in form validation
    return addFlightForm.checkValidity();
}
$('#saveFlightBtn').on('click',() => {
    addFlightModal.style.display = 'block';

    const flightNumber = $('#flightNumber').val();
    const aircraft = $('#aircraft').val();
    const origin = $('#origin').val();
    const destination = $('#destination').val();
    const departureTime = $('#departureTime').val();
    const arrivalTime = $('#arrivalTime').val();
    const status = $('#status').val();
    const day = "Monday";

    const days = [];
    $('.day-checkbox').each(function () {
        if ($(this).is(':checked')) {
            days.push($(this).attr('id'));
        }
    });

    $.ajax({
        url: `http://localhost:8082/api/v1/flight/save`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            flightNumber: flightNumber,
            aircraft: aircraft,
            origin: origin,
            destination: destination,
            departureTime: departureTime,
            arrivalTime: arrivalTime,
            status: status,
            days: day
        }),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt_token')

        },
        success: function (response) {
            alert('Flight added successfully');
            location.reload();
        },
        error: function (error) {
            alert('Error adding flight');
        }
    });
});
// Function to save flight using AJAX
/*function saveFlight() {
    // First validate the form
    if (!validateForm()) {
        alert('Please fill all required fields correctly.');
        return;
    }*/
/*
    // Collect form data
    const flightData = collectFormData();

    // Show loading state
    saveFlightBtn.textContent = 'Saving...';
    saveFlightBtn.disabled = true;
    const token = localStorage.getItem('jwt_token');
    console.log("token123",token)

    console.log("data",flightData)
    $.ajax({
        url: 'http://localhost:8082/api/v1/flight/save',
        type: 'POST',
        contentType: 'application/json',
        headers: {
            "Authorization": "Bearer " + token
        },
        data: JSON.stringify(flightData),
        success: function(response) {
            alert('Save Flight successfully!');

        },
        error: function(xhr, status, error) {
            alert('Error adding Flight: ' + error);
        }
    });*/
// }


// Add event listeners
document.getElementById('addNewFlightBtn').addEventListener('click', openAddModal);
modalCloseBtn.addEventListener('click', closeAddModal);
modalCloseBtnFooter.addEventListener('click', closeAddModal);
saveFlightBtn.addEventListener('click', saveFlight);

// Close modal if clicked outside of modal content
window.addEventListener('click', function(event) {
    if (event.target === addFlightModal) {
        closeAddModal();
    }
});

// Optional: Function to refresh flights list after adding a new flight
function refreshFlightsList() {
    // Fetch and display updated flights list
    fetch('http://localhost:8082/api/v1/flight/getAll')
        .then(response => response.json())
        .then(data => {
            // Update your flights table or list with the new data
            // Example: updateFlightsTable(data);
        })
        .catch(error => {
            console.error('Error fetching flights:', error);
        });
}