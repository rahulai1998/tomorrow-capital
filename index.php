<?php
if ($_SERVER['REQUEST_METHOD'] === "POST") {
	if (empty($_POST['email'])) {
		$emailError = 'Email is empty';
	} else {
		$email = $_POST['email'];

		// validating the email
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$emailError = 'Invalid email';
		}
	}
	if (empty($_POST['message'])) {
		$messageError = 'Message is empty';
	} else {
		$message = $_POST['message'];
	}
	if (empty($emailError) && empty($messageError)) {
		$date = date('j, F Y h:i A');

		$emailBody = "
			<html>
			<head>
				<title>$email is contacting you</title>
			</head>
			<body style=\"background-color:#fafafa;\">
				<div style=\"padding:20px;\">
					Date: <span style=\"color:#888\">$date</span>
					<br>
					Email: <span style=\"color:#888\">$email</span>
					<br>
					Message: <div style=\"color:#888\">$message</div>
				</div>
			</body>
			</html>
		";

		$headers = 	'From: Contact Form '<kamblepramod806@gmail.com>' . "\r\n" .
    				"Reply-To: $email" . "\r\n" .
    				"MIME-Version: 1.0\r\n" . 
					"Content-Type: text/html; charset=iso-8859-1\r\n";

		$to = 'kamblepramod806@gmail.com';
		$subject = 'Contacting you';

		if (mail($to, $subject, $emailBody, $headers)) {
			$sent = true;	
		}
	}
}
?>
<html>
<head>
	<title>PHP Contact Form - Email Method - Hyvor Developer</title>
	<style type="text/css">
		
		body {
			background-color:#fafafa;
		}
		form {
			width:50%;
			margin:auto;
		}
		.input-wrap {
			padding:20px 0;
		}
		.label {
			display:block;
			margin-bottom:2px;
		}
		input, textarea {
			border:1px solid #eee;
			padding:6px;
			border-radius:3px;
			width:100%;
		}
		textarea {
			height:200px;
			resize:none;
		}
		.submit-button {
			padding:10px;
		}
	</style>

</head>
<body>

<form method="POST" action=""> 
	<div class="input-wrap">
		<span class="label">Email:</span>
		<input type="text" name="email">
	</div>
	
	<div class="input-wrap">
		<span class="label">Message:</span>
		<textarea name="message"></textarea>
	</div>

	<div class="input-wrap">
		<input type="submit" name="submit" value="Submit" class="submit-button">
	</div>
</form>

<?php if (isset($emailError) || isset($messageError)) : ?> 
	<div id="error-message">
		<?php 
			echo isset($emailError) ? $emailError . '<br>' : ''; 
			echo isset($messageError) ? $messageError . '<br>' : ''; 
		?>
	</div>
<?php endif; ?>


<?php if (isset($sent) && $sent === true) : ?> 
	<div id="done-message">
		Your data was succesfully submitted
	</div>
<?php endif; ?>

</body>
</html>
