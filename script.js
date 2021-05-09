
let hr = document.querySelector(".hr");
let mn =  document.querySelector(    ".mn");
let sc =  document.querySelector(".sc");

 setInterval(() => {
     let day = new Date();
  let hh = day.getHours() * 30;
  let menit = day.getMinutes() * 6;
  let detik = day.getSeconds() * 6;
  

  hr.style.transform = `rotate(${
    (hh)+(menit/12)}deg)`;
  mn.style.transform = `rotate(${menit}deg)`;
  sc.style.transform = `rotate(${detik}deg)`;
 });