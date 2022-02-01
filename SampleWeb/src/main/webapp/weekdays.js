const weekdays=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
function display(){
var p=parseInt(document.getElementById("weekdays").value);
//document.getElementById("result").innerHTML=weekdays[p-1];
var text="";
for(var i=0;i<p;i++){
text=text+weekdays[i]+ " ";
}
alert(text);
}
document.write(weekdays.length);