class MyClass {
  // 'customField'의 setter
  set customField(value){
    this._customField = value;
  }
  // 'customField'의 getter
  get customField(){
    return this._customField;
  }

  constructor(value){
    this._customField = value;
  }
}

const myInstance = new MyClass();

myInstance.customField = 20; // 값을 대입
console.log(myInstance.customField); // 20

// ! myInstance.customField = 20; 값 대입방식만 가능