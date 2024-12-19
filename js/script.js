var dt=new Date();

function RenderDate(){
// dt.setMonth(1);
// var d=new Date();
dt.setDate(1);
var day=dt.getDay();
console.log(dt.getDay());

var endDate=new Date(
    dt.getFullYear(),
    dt.getMonth()+1,
    0
).getDate();
// console.log(endDate);

var prevDate=new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

// var today = new Date().getDate();
var today = new Date();
console.log(today);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(dt.getMonth());
// console.log(months[dt.getMonth()])
document.getElementById("month").innerHTML=months[dt.getMonth()] + " " + dt.getFullYear();
document.getElementById("date").innerHTML=dt.toDateString();


var dy = "";

for(x=day; x>0; x--){
    dy+= "<div class='prev_date'>" + (prevDate-x+1) + "</div>";
}

for(i = 1; i<=endDate; i++){

    if(i==today.getDate() && dt.getMonth() ==today.getMonth()){
        dy+= "<div class='today'>" + i + "</div>";
    }else{
        dy+= "<div>" + i + "</div>";
    }

} 
document.getElementsByClassName("days")[0].innerHTML=dy;

}

function moveDate(para){
    console.log(para);
    if(para == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
        RenderDate();
    }
    else if(para == 'next'){
        dt.setMonth(dt.getMonth() + 1);
        RenderDate();
    }
}