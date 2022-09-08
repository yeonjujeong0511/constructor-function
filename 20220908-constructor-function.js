// 먼저 배웠던 생성자함수 - old로 구분
function OldConstructor(id,name,type) {
  this.id = id;
  this.name = name;
  this.type = type;
}
// OldConstructor라는 이름의 생성자함수를 선언


const OldInstance = new OldConstructor(1,"이상해씨","풀");
  // 1. new라는 빈 객체를 생성 -->  { }
  // 2. OldConstructor : 빈 객체에 생성할 프로퍼티를 정의
  // 3. OldConstructor함수의 인수들을 프로퍼티에 할당
  // 4. 위에 과정들로 생성된 객체들을 OldInstance에 할당

console.log(OldInstance); 
// OldConstructor { id: 1, name: '이상해씨', type: '풀' }


// class --> 함수의 한 종류
// class문법으로 생성자함수를 생성
class NewConstructor{
  constructor(id,name,type){
    this.id = id;
    this.name = name;
    this.type = type;
  }
}
// NewConstructor라는 이름의 생성자함수 선언

const newInstance = new NewConstructor(4,"파이리","불");
console.log(newInstance);


// 실습 

// 배운 내용을 토대로 class문법으로 생성자함수를 생성
class Capsule{
  constructor(name,roasting,number){
    this.name = name;
    this.roasting = roasting;
    this.number = number;
  }
}

const starbucks = new Capsule("starbucks",6,10);
const illy = new Capsule("illy",7,10);
const dolcegusto = new Capsule("dolcegusto",4,16);
const kimbo = new Capsule ("kimbo",5,10);

console.log(starbucks);
console.log(illy);
console.log(dolcegusto);
console.log(kimbo.name);
