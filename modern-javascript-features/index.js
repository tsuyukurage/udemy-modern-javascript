// var val = "string";
// var val = 5;
// console.log(val);

let val2 = "let変数";
console.log(val2);

val2 = "let上書き";
console.log(val2);

/** 再宣言 */
//let val2; // error

const val3 = "const変数";
console.log(val3);

//val3 = "const変数上書き"; // error
//const val3; // error

const val4 = {
  name: "Kurage",
  age: "18",
};
console.log(val4.name);

/** オブジェクト定義のプロパティは変更はできる */
val4.name = "Jellyfish";
console.log(val4.name);
val4.friend = "seaAnemone";

/** 配列のプロパティも変更できる */
const val5 = ['dog', 'cat'];
val5[1] = "monkey";
val5.push("pheasant");
console.log(val5);

/** テンプレート文字列 */
const name = "kurage";
const place = "sea";

const message = `${name}の家は${place}にあります。`
console.log(message);

/** アロー関数 */
const arrow = (str) => {
  return str;
};
console.log(arrow("アロー関数です"));

const plus = (a, b) => a + b; // 処理が1つの場合return省略可
console.log(plus(2, 3));

/** 分割代入 */
// オブジェクト
const profile = {
  myName: "kurage",
  myPlace: "sea",
};
const { myName, myPlace } = profile;
const message2 = `分割代入で名前は${myName}、家は${myPlace}です。`;
console.log(message2);

// 配列
const aryProfile = ["kurage", "sea"];
const [aryName, aryPlace] = aryProfile;
const message3 = `配列でも名前は${aryName}、家は${aryPlace}です。`;
console.log(message3);

/** デフォルト値 */
const sayHello = (name = "sekai") => console.log(`こんにちは、${name}`);
sayHello(); // デフォルト値が呼び出される

/** スプレット構文 ... */
// 配列の展開
const arr1 = [2, 27];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

// まとめる
const arr2 = [2, 3, 4, 5, 6];
const [num1, num2, ...arr3] = arr2;
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr6, ...arr5];
console.log(arr7)

// 配列のコピーの注意 
const arr8 = arr4; //　同じ参照になる
console.log("arr8:", arr8);
arr8[0] = 100;
console.log("arr4:", arr4);

/** map, filterでの配列処理 */
const nameArray = ["kurage", "penguin", "seal"];
nameArray.map((name) => {
  console.log("map:",name);
});

const nameArray2 = nameArray.map((name) => {
  return name;
});
console.log(nameArray2);

nameArray.map((name, index) => {
  console.log(`${index + 1}番目は${name}です`)
});

const numArray = [1, 2, 3, 4, 5];
const numArray2 = numArray.filter((num) => {
  return num % 2 === 1;
});
console.log(numArray2);

const newNameArray = nameArray.map((name) => {
  if (name == "kurage") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArray);

/** 三項演算子 ? : */
// 条件 ? true処理 : falseの処理

const val6 = 1 > 0 ? "true" : "false";
console.log(val6);

const num3 = 1300;
console.log(num3.toLocaleString()); // 数値をカンマ区切りにする
const formattedNum = typeof num3 === 'number' ? num3.toLocaleString : "数値を入力してください";

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "100以内です。";
};
console.log(checkSum(70, 20));

/** 論理演算子 && || */
// truthy falsyについて
// "ABC" 0 10 undefined null false NaN "" [] {}
const values = ["ABC", 0, 10, undefined, null, false, NaN, "", [], {}];
for (let val of values) {
  if (val) {
    console.log(val + "> truthyです")
  } else {
    console.log(val + "> falsyです")
  }
}

// || は最初にtruthyのものを返却する
const valued = false;
const fee = valued || "金額未設定です"
console.log(fee);

// && は左側がfalsyの時その時点で返却する
const valued2 = 100;
const fee2 = valued2 && "何か設定されました";
console.log(fee2);
