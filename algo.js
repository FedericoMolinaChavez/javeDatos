var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost:3000", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() 
{
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);
        
};