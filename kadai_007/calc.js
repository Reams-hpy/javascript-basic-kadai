//変数numにランダムな整数を代入する（自由）
let num = Math.floor(Math.random()*30);

console.log(num);

//numが3の倍数であれば、「3の倍数です」という文字列を出力する
if (num % 3 === 0) {
  console.log('3の倍数です');
}

//numが5の倍数であれば、「5の倍数です」という文字列を出力する
  else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//numが3または5の倍数であれば、「3と5の倍数です」という文字列を出力する
  else if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}

//それ以外の時は、変数numを出力する
  else {
    console.log(num);
  }

