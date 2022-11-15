function showtime()
{
    var timename = document.getElementById("pole").value;
    var czas = document.getElementById("czas").innerHTML;
    var offset;
    if(timename == "warszawa")
    {
        var offset = 1;
        var b = new Date()
		var utc = b.getTime()+(b.getTimezoneOffset()*60000);
		var nd = new Date(utc+(3600000*offset));
        document.getElementById("czas").innerHTML = nd;
    }//4.5 np
    else if(timename == "londyn")
    {
        var offset = 0;
        var b = new Date()
		var utc = b.getTime()+(b.getTimezoneOffset()*60000);
		var nd = new Date(utc+(3600000*offset));
        document.getElementById("czas").innerHTML = nd;
    }
    else if(timename == "moskwa")
    {
        var offset = 3;
        var b = new Date()
		var utc = b.getTime()+(b.getTimezoneOffset()*60000);
		var nd = new Date(utc+(3600000*offset));
        document.getElementById("czas").innerHTML = nd;
    }
    else if(timename == "kijów")
    {
        var offset = 2;
        var b = new Date()
		var utc = b.getTime()+(b.getTimezoneOffset()*60000);
		var nd = new Date(utc+(3600000*offset));
        document.getElementById("czas").innerHTML = nd;
    }
    else if(timename == "nowyjork")
    {
        var offset = -5;
        var b = new Date()
		var utc = b.getTime()+(b.getTimezoneOffset()*60000);
		var nd = new Date(utc+(3600000*offset));
        document.getElementById("czas").innerHTML = nd;
    }
    else if(timename == "paryż")
    {
        var offset = 1;
        var b = new Date()
		var utc = b.getTime()+(b.getTimezoneOffset()*60000);
		var nd = new Date(utc+(3600000*offset));
        document.getElementById("czas").innerHTML = nd;
    }
    else
    {
        document.getElementById("czas").innerHTML = "czas sie pojawi jak wpiszesz nazwe miasta!";
    }
    setTimeout("showtime()",1000);
}