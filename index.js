setInterval(()=>{
let d= new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d. getSeconds();
console.log(h,m,s)
hrotate=30*h+(m/2);
mrotate=6*m+(s/10);
srotate=6*s;
document.getElementById('hr').style.transform=`rotate(${hrotate}deg)`;
document.getElementById('min').style.transform=`rotate(${mrotate}deg)`;
document.getElementById('ss').style.transform=`rotate(${srotate}deg)`;
},1000);

