<?php
cors();

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


if (empty($_POST['first_nameabcdefgjk']) && empty($_POST['emailabcdefgjk'])) die();

/*
 *  CONFIGURE EVERYTHING HERE
 */

// an email address that will be in the From field of the email.
$from = 'tours@active-escapes.co.za';

// an email address that will receive the email with the output of the form
$sendTo = 'tours@active-escapes.co.za';

// subject of the email
$subject = 'Active Escapes Website - Tour Enquiry';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array(
    'first_nameabcdefgjk' => 'First Name', 
    'last_nameabcdefgjk' => 'Last Name', 
    'ageabcdefgjk' => 'Age', 
    'emailabcdefgjk' => 'Email',
    'phoneabcdefgjk' => 'Phone',
    'group_sizeabcdefgjk' => 'Group Size',
    'no_adultsabcdefgjk' => 'Number of Adults',
    'no_childrenabcdefgjk' => 'Number of Children',
    'preferred_toursabcdefgjk' => 'Interested in Tour',
    'arrival_dateabcdefgjk' => 'Arrival date',
    'no_daysabcdefgjk' => 'Number of Days',
    'alternative_start_dateabcdefgjk' => 'Alternative Start Date',
    'referral_sourceabcdefgjk' => 'Referral Source',
    'newsletterabcdefgjk' => 'Newsletter?'
); 


// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try
{
    if(count($_POST) == 0) throw new \Exception('Form is empty');
    
    // Change the email message here      
    $emailText = "
    <html>
    <head>
    <title>HTML email</title>
    <style>
    table {
      border-collapse: collapse;
    }
    table, td, th {
      border: 1px solid black;
      padding: 5px 10px;
    }
    </style>
    </head>
    <body>
    <p>You have a tour enquiry:</p>
    <table>
    ";

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            $emailText .= "<tr><td>"."$fields[$key]"."</td><td>"."$value"."</td></tr>";
        }
    }
    $emailText .= "
    </table>
    </body>
    </html>
    ";
    // All the neccessary headers for the email.
    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    // Send email
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
// else just display the message
else {
    echo $responseArray['message'];
}

function cors() {

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

}
?>