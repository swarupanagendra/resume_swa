XMLHttprequest
function json(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
    	if(xhr.readyState=="4" && xhr.status=="200") {
    		callback(xhr.responseText);
    }
}
    xhr.send(null);
}
json("data.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	carr(d.carrier);
	edu(d.education);
	techskills(d.skills);
	achi(d.Achivements);
	de(d.Description);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);

function basics(basic){
var i=document.createElement("img");
	i.src=basic.image;
	i.alt="profilephoto";
	l.appendChild(i);
var nam=document.createElement("h3");
	nam.textContent=basic.name;
	l.appendChild(nam);
var phon=document.createElement("h3");
     phon.textContent=basic.phone;
     l.appendChild(phon);
 var addres=document.createElement("h3");
     addres.textContent=basic.address;
     l.appendChild(addres);

 }
 var r=document.createElement("div");
 r.classList.add("right");
 main.appendChild(r);
 function edu(e){
 var e1=document.createElement("div");
     e1.classList.add("educa");
     r.appendChild(e1);
 var head=document.createElement("h1");
     head.textContent="Educational Details";
     e1.appendChild(head);
     head.appendChild(document.createElement("HR"));
     for (var i=0;i<e.length;i++) {
 var h=document.createElement("h2");
     h.textContent=e[i].course;
     e1.appendChild(h);
 var u=document.createElement("u1");
     e1.appendChild(u);
 var list=document.createElement("li");
   list.textContent=e[i].college;
     u.appendChild(list);
 var list1=document.createElement("li");
     list1.textContent=e[i].percentage;
     list.appendChild(list1);
 }
}
function techskills(s){
	var d=document.createElement("div");
	d.textcontent="skills set";
	r.appendChild(d);
	d.appendChild(document.createElement("HR"));
	var tab=document.createElement("table");
	var row="";
	for(var i=0;i<s.length;i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carr(car){
var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrier objective";
     	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
    para.textContent=car.ca;
     c1.appendChild(para);
   }
   function achi(ach){
   	var d=document.createElement("div");
   	r.appendChild(d);
   	var h=document.createElement("h1");
   	h.textcontent="Achivments";
   	d.appendChild(h);
   	h.appendChild(document.createElement("HR"));
   	for(i in ach){
   		var u=document.createElement("ul");
   		d.appendChild(u);
   		var list=document.createElement("li");
   		list.textcontent=ach[i];
   		u.appendChild(list);
   	}
   }
function de(Desc)
{(
var d1=document.createElement("div");
	r.appendChild(d1);
var h2=document.createElement("h2");
   h2.textContent="Description";
   d1.appendChild(h2);
   h2.appendChild(document.createElement("HR"));
var para=document.createElement("h3");
	para.textcontent=Desc.des;
	d1.appendChild(para);
 })
//Fetch API
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	carr(d.carrier);
	edu(d.education);
	techskills(d.skills);
	achi(d.Achivements);
	de(d.Description);
})