// 今日の日付を宣言する
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

// 今日の日付を出力する関数を定義する
const outputDate = () => {
  console.log(year + '年' + month + '月' + date + '日')
}

// 今日の日付を出力する
outputDate();


