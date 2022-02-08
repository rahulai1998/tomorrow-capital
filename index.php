<?php 
 include_once("index.html");
 $to_email = "rahulchavan.rc1998@gmail.com";
   $subject = "Simple Email Test via PHP";
   $body = "Hi, This is test email send by PHP Script";
   $headers = "From: kamblepramod806@gmail.com";

   if (mail($to_email, $subject, $body, $headers)) {
      echo '<script>alert("Welcome to Geeks for Geeks")</script>';
   } else {
     echo '<script>alert("Welcome to Geeks for Geeks")</script>';
   }
?>
