let todayDiv = document.getElementById("today");
let timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDay();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // 삼항 연산자 사용
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  todayDiv.textContent = `${year}년 ${month}월 ${day}일`;
  timeDiv.textContent = `${hour}:${minute}:${second}`;
}
// setInterval 메소드
getTime();
setInterval(getTime, 1000);
