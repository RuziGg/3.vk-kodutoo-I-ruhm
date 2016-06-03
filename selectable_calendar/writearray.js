function saveToFile(data){
  jsonString = JSON.stringify(data);
  $.ajax({
    url: 'writearray.php',
    data : {'jsonString':jsonString},
    type: 'POST'
  });
}