function currentTime(){
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var session = "AM"

    
    if(h == 0){
        h = 12
    }
    if(h > 12){
        h = h-12
        session = "PM"

    }

    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s

    var time = h + ":" + m + ":" + s + ":" + " " + session;

    document.getElementById('display-clock').innerHTML = time
    document.getElementById('display-clock').textContent = time

    setTimeout(currentTime,1000)

}

currentTime();

function curDate(){
    var today = new Date()
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    var curWeekDay = days[today.getDay()]
    var day = today.getDate()
    var curMonth = months[today.getMonth()]
    var curYear = today.getFullYear()
    var date = curWeekDay +","+day+ " "+curMonth+" "+curYear;
    document.getElementById('display-date').innerHTML = date
}
curDate();


