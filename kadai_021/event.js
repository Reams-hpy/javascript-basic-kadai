// textというidを持ったHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持ったHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// 要素をクリックされた2（2000ミリ）秒後にイベント処理を実行する
setTimeout(() => {
  
}, 2000);

btn.addEventListener('click', () => {
  // textの文字列を変更する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックされました';
  
  }, 2000);
  
});