<?php
$data = $_POST['jsonString'];
//set mode of file to writable.
chmod("writearray.txt",0777);
$f = fopen("writearray.txt", "w+") or die("fopen failed");
fwrite($f, $data);
fclose($f);
?>