AOS.init();

$(document).ready(function () {
    $("#registerForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        let email = $('#email').val();
        let phone = $('#phone').val();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let password = $('#password').val();

        // Validation patterns
        let nameCheck = /^[a-z\s]{3,}$/i;
        let emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let pwdpattern = /(?=.*[A-Z])(?=.*\d)(?=.*\W)/;

        // Validation checks
        if (email === '' || phone === '' || firstName === '' || lastName === '' || password === '') {
            alert('Please fill all required fields');
        } else if (!nameCheck.test(firstName)) {
            alert('Please Enter a valid First Name');
        } else if (!nameCheck.test(lastName)) {
            alert('Please Enter a valid Last Name');
        } else if (!emailCheck.test(email)) {
            alert('Please Enter a Valid Email');
        } else if (!pwdpattern.test(password)) {
            alert('Please Choose a Strong Password');
        } else {
            // AJAX request to submit form data
            $.ajax({
                url: 'https://9vxx3c4m-8000.euw.devtunnels.ms/api/auth/signup',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    email: email,
                    phoneNumber: phone,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }),
                success: function (response) {
                    // Handle success response
                    console.log("Signup successful:", response);
                    alert("Signup successful!");
                },
                error: function (error) {
                    // Handle error response
                    console.error("Error during signup:", error);
                    alert("An error occurred during signup. Please try again.");
                }
            });
        }
    });
});
