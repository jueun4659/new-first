//랜덤 번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 생각하자 버튼을 누를려면 어떻게 해야할까?
//만약에 유저가 random 번호를 맞추면, 맞췄습니다!
//랜덤 번호가 < 유저 번호 down
//랜덤 번호가 > 유저 번호 up
//reset 번호를 누루면 게임이 리셋이 된다
// 5번의 기회를 다 쓰면 게임이 끝! => 더 이상 추측불가 , 버튼 disable
//유저가 1과 100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지는 않을 것
// 유저가 이미 입력한 숫자를 또 입력하면 , 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

// 클릭 이벤트 추가
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
//유저벨류의 포커스를 사라지게 하겠다.
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

//랜덤 번호 생성
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}
pickRandomNum();

//go와 연결하는 함수
function play() {
  let userValue = userInput.value;

  //범위 밖의 숫자 알려주기
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 :${chances}번`;
  console.log("chance", chances);
  // 정답 넣는 부분
  if (userValue < computerNum) {
    resultArea.textContent = "Up!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!!";
  } else {
    resultArea.textContent = "정답입니다!";
    gameOver = true;
  }
  //유저가 이미 입력한 숫자를 또 입력하면 알려주기
  history.push(userValue);
  console.log(history);

  //chance 부분
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

//리셋버튼과 연결하는 함수
function reset() {
  //user input 창 정리
  userInput.value = "";
  // 새로운 번호 생성
  pickRandomNum();
  resultArea.textContent = "새로운 값을 입력하세요.";
}

pickRandomNum();
