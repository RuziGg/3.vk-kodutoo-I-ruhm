var str = events.join('%20');   // URL encoded spaces separating array entries
var params = "array=" + str;
var http = new XMLHttpRequest();
http.open("POST", "writearray.php", true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");

http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        // Do something on success?
    }
}
http.send(params);