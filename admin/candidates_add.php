<?php
include "includes/session.php";

if (isset($_POST["add"])) {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $position = $_POST["position"];
    $filename = $_FILES["photo"]["name"];
    if (!empty($filename)) {
        move_uploaded_file(
            $_FILES["photo"]["tmp_name"],
            "../images/" . $filename
        );
    }

    $sql = "INSERT INTO candidates (position_id, firstname, lastname, photo) VALUES ('$position', '$firstname', '$lastname', '$filename')";
    if ($conn->query($sql)) {
        $_SESSION["success"] = "Candidate added successfully";
    } else {
        $_SESSION["error"] = $conn->error;
    }
} else {
    $_SESSION["error"] = "Fill up add form first";
}

header("location: candidates.php");
?>
