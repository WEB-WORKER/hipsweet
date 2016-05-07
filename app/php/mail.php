<?php

$frm_name  = "Youname";
$recepient = "webworker100@gmail.com";
$sitename  = "Hipsweet";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
// $message = trim($_POST["message"]);
$message = "E-mail: $email \nИмя: $name \nТелефон: $phone;
mail($recepient, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
