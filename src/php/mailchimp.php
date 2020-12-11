<?php
cors();

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


if (empty($_POST['first_nameabcdefgjk']) && empty($_POST['emailabcdefgjk'])) die();

/*
 *  CONFIGURE EVERYTHING HERE
 */

// Wildcoast list
$list_id = "xxxxxxxxxxxxxxx";
$api_key = "xxxxxxxxxxxxxxxxxxxxxxxxxx";

$fields = array(
    'first_nameabcdefgjk' => 'Email',
    'last_nameabcdefgjk' => 'FNAME',
    'emailabcdefgjk' => 'LNAME'
);

// message that will be displayed when everything is OK :)
$okMessage = 'Thanks for subscribing to our quaterly newsletter!';

// If something goes wrong, we will display this message.
$errorMessage = "Unexpected error. You haven't been subscribed.";

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try
{
    if(count($_POST) == 0) throw new \Exception('Form is empty');
    
    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            if ($key == 'first_nameabcdefgjk') {
                $fname = $value;
            }
            if ($key == 'last_nameabcdefgjk') {
                $lname = $value;
            }
            if ($key == 'emailabcdefgjk') {
                $email = $value;
            }
        }
    }

    $data_center = substr($api_key,strpos($api_key,'-')+1);
 
    // WildCoast List
    $url = 'https://'. $data_center .'.api.mailchimp.com/3.0/lists/'. $list_id .'/members';
    
    $json = json_encode([
        'email_address' => $email,
        'status'        => 'subscribed', // "subscribed","unsubscribed","cleaned","pending"
        'merge_fields'  => [
            'FNAME'     => $fname,
            'LNAME'     => $lname
        ]
    ]);
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    $result = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($status == "200") {
        $messageSubscribe = "Thanks for subscribing to our quaterly newsletter!";
    
    } elseif ($status == "400") {
        $messageSubscribe = "Not to Worry! You are already subscribed!";
    } else {
        $messageSubscribe = "Unexpected error. You haven't been subscribed. ";
    }

    $responseArray = array('type' => 'success', 'message' => $messageSubscribe);
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