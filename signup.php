<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = $_POST['name'] ?? '';
    $email    = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Basic sanitization
    $name     = htmlspecialchars(trim($name));
    $email    = htmlspecialchars(trim($email));
    $password = password_hash($password, PASSWORD_DEFAULT); // Secure password hash

    $file = fopen("users.csv", "a");
    fputcsv($file, [$name, $email, $password]);
    fclose($file);

    echo "<script>alert('Registration successful!'); window.location.href='index.html';</script>";
}
?>
