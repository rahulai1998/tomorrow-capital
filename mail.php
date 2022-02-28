<?php
//get data from form  
$userName = $_POST['company-name'];
$website = $_POST['website'];
$message = $_POST['message'];
$industry1 = $_POST['industry-ategory1'];
$industry2 = $_POST['industry-ategory2'];
$email = $_POST['company-email'];
$number = $_POST['company-number'];
$attachment = $_POST['attachment'];
$attachlink = $_POST['attach-link'];

$to = "rahulchavan.rc1998@gmail.com
$subject = "Mail From website";
$txt ="COMPANY NAME = ". $userName . "\r\n  WEBSITE = " . $website . "\r\n ABOUT THE COMPANY =" . $message . "\r\n INDUSTRY CATEGORY =" . $industry1 . "\r\n INDUSTRY CATEGORY =" . $industry2 . "\r\n COMPANY EMAIL =" . $email . "\r\n COMPANY NUMBER =" . $number . "\r\n ATTACH A FILE =" . $attachment . "\r\n ATTACH A LINK =" . $attachlink;

$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: rahulchavan.rc1998@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:contact-us.html");
?>

