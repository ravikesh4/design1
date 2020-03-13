<?php
error_reporting(-1);

$name=$_POST['name'];
$email=$_POST['email'];
$mobile=$_POST['mobile'];
$message=$_POST['message'];
$where=$_POST['where'];
$message=$_POST['message'];

if(isset($_POST['submit']))
{
$from_add = "vishnudas@fastracktechnologies.in";
$to_add = "sales@fastracktechnologies.in";
$subject = "Enquiry from $name";
$msg = "<table style='border: 1px solid #ccc' cellpadding='10' border='0'>".
"<tr><th style='background: #000; color: #fff;'>ENQUIRY</th></tr>".
"<tr><td style='border-bottom: 1px solid #ccc'><label style='display: block; font-size: 12px; font-weight: bold;'>Name</label><span style='font-size: 16px;'>$name </span></td></tr>".
"<tr><td style='border-bottom: 1px solid #ccc'><label style='display: block; font-size: 12px; font-weight: bold;'>Email Address</label><span style='font-size: 16px;'>$email</span></td></tr>".
"<tr><td style='border-bottom: 1px solid #ccc'><label style='display: block; font-size: 12px; font-weight: bold;'>Mobile Number</label><span style='font-size: 16px;'>$mobile</span></td></tr>".
"<tr><td style='border-bottom: 1px solid #ccc'><label style='display: block; font-size: 12px; font-weight: bold;'>Message</label><span style='font-size: 16px;'>$message</span></td></tr>".
"</table>";

$headers = 'From: vishnudas@fastracktechnologies.in' . "\r\n" .
'Reply-To: sales@fastracktechnologies.in' . "\r\n" .
'Cc: sales@fastracktechnologies.in' . "\r\n" .
'MIME-Version: 1.0' . "\r\n".
'Content-type: text/html; charset=UTF-8' . "\r\n";

if(mail($to_add,$subject,$msg,$headers))
{
    echo "<body style='font-family: Georgia, serif; margin: 0;position: fixed; width: 100%; height: 100%;'>".
    "<center>".
    "<div style='background: #88ee99; width:auto; display: inline-block; text-align: left;margin: 25px; padding: 15px;box-shadow: 1px 1px 2px rgba(0,0,0,0.5)'>".
    "<center><label><b>Success</b></label></center><hr size='1' color='#000' />".
    "<p>Your message is successfully sent<br />Thank You!</p>".
    "<p>Redirecting back to <a href='http://www.fastracktechnologies.in/'>Fastracktechnologies</a>...".
    "</div>".
    "</center>".
    "</body>";
    echo "<meta http-equiv='refresh' content='3;URL=http://www.fastracktechnologies.in/contact.html' />";
}else{
    echo "<body style='font-family: Georgia, serif; margin: 0;position: fixed; width: 100%; height: 100%;'>".
    "<center>".
    "<div style='background: #ee8899; width:auto; display: inline-block; text-align: left;margin: 25px; padding: 15px;box-shadow: 1px 1px 2px rgba(0,0,0,0.5)'>".
    "<center><label><b>Failed</b></label></center><hr size='1' color='#000' />".
    "<p>Your message could not be sent.<br />Please try again!</p>".
    "<p>Redirecting back to <a href='http://www.fastracktechnologies.in/'>Fastracktechnologies</a>...".
    "</div>".
    "</center>".
    "</body>";
    echo "<meta http-equiv='refresh' content='3;URL=http://www.fastracktechnologies.in/contact.html' />";
}
}
?>