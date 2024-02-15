// 今日の日付を宣言する
const today = new Date();

// 今日の日付を出力する関数を定義する
const outputDate = () => {
  console.log(today.getFullYear() + '年' + today.getMonth() + '月' + today.getDay() + '日')
}

// 今日の日付を出力する
outputDate();