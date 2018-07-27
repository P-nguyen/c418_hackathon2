<?php 
require('yelp_key.php');

extract($_POST);

$query = "?latitude={$latitude}&longitude={$longitude}&term={$term}&sort_by={$sort_by}&limit={$limit}";
// print($query);
// exit();

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.yelp.com/v3/businesses/search{$query}",
    CURLOPT_HTTPHEADER => array($authorization),
    CURLOPT_RETURNTRANSFER => true,
    // CURLOPT_ENCODING => "",
    // CURLOPT_MAXREDIRS => 10,
    // CURLOPT_TIMEOUT => 30,
    // CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    // CURLOPT_CUSTOMREQUEST => "GET",
    // CURLOPT_SSL_VERIFYPEER => false

));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

print($response);