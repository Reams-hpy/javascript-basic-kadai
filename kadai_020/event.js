// textというidを持ったHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持ったHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');


// 要素をクリックされたときに、イベント処理を実行する
btn.addEventListener('click', () => {
  // text要素の文字列を変更する
  text.textContent = 'ボタンをクリックしました';
});

