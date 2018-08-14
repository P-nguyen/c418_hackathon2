<?php
require '../backend/build_database/mysql_connect.php';

$output = [
    'success' => false,
    'error' => []
];

$countryCode = $_GET['countryCode'];

$query = "SELECT `name`, `food1`, `food2`, `food3`, `food4`, `food5` FROM `country` WHERE `abbreviation`='{$countryCode}'";
$result = mysqli_query($conn,$query);

$row = mysqli_fetch_row($result);
print_r($row);
$countryName = $row[0];

//Pick a random foodId
$foodId = '0';
while($foodId === '0'){
    $foodId = $row[rand(1,5)];
}

$query = "SELECT `name`, `image`, `video1`, `video2`, `video3` FROM `food` WHERE `id`=$foodId";
$result = mysqli_query($conn,$query);

//Return image and videos
// 
// 
// 


