<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Get form fields
    $name    = trim($_POST['name']);
    $email   = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Validate email
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $to      = 'joelspcbuilds@gmail.com';
        $subject = 'New Contact Form Submission';
        $body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $name <$email>\r\n";

        // Send email
        if(mail($to, $subject, $body, $headers)){
            // Redirect to a thank-you page or display a success message
            echo 'Thank you for your message. I will get back to you soon.';
        } else {
            echo 'Sorry, something went wrong. Please try again later.';
        }
    } else {
        echo 'Invalid email address. Please go back and enter a valid email.';
    }
} else {
    // Redirect back to the contact form if the request method is not POST
    header('Location: index.html#contact');
    exit();
}
?>
