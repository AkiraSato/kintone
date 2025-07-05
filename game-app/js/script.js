let enemyHP = 20;
let playerName = sessionStorage.getItem("playerName") || "ゆうしゃ";
let enemyName = sessionStorage.getItem("enemyName") || "スライム";

const character = [
  {
    id: "player1",
    name: playerName,
    hp: 20,
    atkMin: 3,
    atkMax: 10,
  },
];

function startGame() {
  const nameInput = document.getElementById("player-name-input").value.trim();
  const enemyNameInput = document
    .getElementById("enemy-name-input")
    .value.trim();
  const enemyImageInput = document.getElementById("enemy-img-input");

  playerName = nameInput !== "" ? nameInput : "ゆうしゃ";
  enemyName = enemyNameInput !== "" ? enemyNameInput : "スライム";

  sessionStorage.setItem("playerName", playerName);
  sessionStorage.setItem("enemyName", enemyName);

  document.getElementById("player-name").innerText = playerName;

  // 敵画像の読み込み処理
  if (enemyImageInput.files.length > 0) {
    const file = enemyImageInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("enemy-image");
      img.src = e.target.result;
      img.style.display = "block"; // 表示
    };
    reader.readAsDataURL(file);
  }

  // 表示切り替え
  document.getElementById("name-screen").style.display = "none";
  document.getElementById("battle-screen").style.display = "block";
  document.getElementById("enemy-image").style.display = "block";

  document.getElementById(
    "message-box"
  ).innerText = `${enemyName}があらわれた！`;
}

function attack() {
  const damage = Math.floor(Math.random() * 8) + 3;
  enemyHP -= damage;
  if (enemyHP < 0) enemyHP = 0;

  document.getElementById(
    "message-box"
  ).innerText = `${playerName}のこうげき！ ${enemyName}に${damage}のダメージ！`;

  if (enemyHP === 0) {
    setTimeout(() => {
      document.getElementById("enemy-image").style.display = "none";
      document.getElementById(
        "message-box"
      ).innerText = `${enemyName}をたおした！`;
      document.querySelectorAll("#command-menu button").forEach((btn) => {
        btn.disabled = true;
      });
    }, 1000);

    setTimeout(() => {
      document.getElementById("battle-screen").style.display = "none";
      document.getElementById("end-screen").style.display = "block";
    }, 3000);
  }
}

function escape() {
  const success = Math.random() < 0.5;
  document.getElementById("message-box").innerText = success
    ? `${playerName}は にげだした！`
    : `${playerName}は にげられなかった！`;
}
