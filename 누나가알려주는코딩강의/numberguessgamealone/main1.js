// 구현할 기능
// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

//변수 만들고 가져옴
let PlayButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let ResultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let resetButton = document.getElementById("chance-area");
let chance = 5;
let gameOver = false;

// 이벤트 주기
PlayButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

//랜덤 숫자 만들기
let computerNumber = 0;

function RandomNumber() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log(computerNumber);
}
RandomNumber();

// play 함수 만들기 : 연결해줘야함
function play() {
  let InputValue = userInput.value;

  //찬스 부분
  chance--;
  chanceArea.textContent = `남은기회 ${chance}번입니다.`;
  console.log("chance", chance);

  if (InputValue < computerNumber) {
    ResultArea.textContent = "Up!!";
  } else if (InputValue > computerNumber) {
    ResultArea.textContent = "Down";
  } else {
    ResultArea.textContent = "That's right!";
    gameOver = true;
  }
  //chance 부분
  if (chance < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}
//리셋 버튼과 연결
function reset() {
  userInput.value = "";
  pickRandomNum();
  ResultArea.textContent = "새로운 값을 입력하세요 ";
}

RandomNumber();
