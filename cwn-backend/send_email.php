<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/codesair/public_html/PHPMailer/src/Exception.php';
require '/home/codesair/public_html/PHPMailer/src/PHPMailer.php';
require '/home/codesair/public_html/PHPMailer/src/SMTP.php';


require 'vendor/autoload.php';

header('Content-Type: application/json');

 
$data = json_decode(file_get_contents("php://input"), true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON: " . json_last_error_msg()
    ]);
    exit;
}

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "No data received or decoding failed."
    ]);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone_no'] ?? '';
$message = $data['contact_message'] ?? '';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'codewithnaqvi@gmail.com';  // Replace with your email
    $mail->Password = 'qzzlwydrnocptevu';  // Replace with your generated App Password

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('codewithnaqvi@gmail.com', 'code with naqvi');
    $mail->addAddress('codewithnaqvi@gmail.com');  // Your destination email

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "Name: $name<br>Email: $email<br>Phone: $phone<br><br>Message: $message";
    $mail->AltBody = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage: $message";
    $mail->SMTPDebug = 2; // Set debug output level to show messages during the SMTP process

    if(!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        echo "Message has been sent successfully";
    }

    echo json_encode(["success" => true, "message" => "Email sent successfully."]);
    exit;
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: " . $mail->ErrorInfo]);
}
?>
