const months=document.getElementById('month');
const days=document.getElementById('day');
const dates=document.getElementById('date');
const years=document.getElementById('year');

const today=new Date();

const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const Month=["january","February","March","April","May","June","July","August","September","October","November","December"]
months.innerHTML=Month[today.getMonth()];
days.innerHTML=weekdays[today.getDay()];
dates.innerHTML=today.getDate();
years.innerHTML=today.getFullYear();
