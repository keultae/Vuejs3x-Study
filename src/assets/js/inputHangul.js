// _args 배열 갯수를 최대 5개까지만 지원
// function inputHangul(event, _args) {
//   this.msg = _args;

//   if(_args.length == 2) {
//       this[_args[0]][_args[1]] = event.target.value;
//   }
//   if(_args.length == 3) {
//       this[_args[0]][_args[1]][_args[2]] = event.target.value;
//   }
//   if(_args.length == 4) {
//       this[_args[0]][_args[1]][_args[2]][_args[3]] = event.target.value;
//   }
//   if(_args.length == 5) {
//       this[_args[0]][_args[1]][_args[2]][_args[3]][_args[4]] = event.target.value;
//   }
// }

/*
 * v-model 속성은 v-bind와 v-on의 기능의 조합으로 동작하는데,
 * <input v-model="name" /> 처럼 v-model을 사용하면 IME 입력(한국어, 일본어, 중국어) 입력시
 * 한 글자에 대한 입력이 끝나야 동기화가 되는 문제가 있어서, IME 입력시에는 v-bind와 v-on을 사용해야 합니다.
 * 변수마다 @input 이벤트 함수를 만들기 번거러워서 함수 하나로 사용하기 위해 만든 함수입니다.
 * 단, 변수는 객채형 일때만 사용 가능 합니다.
 */
function inputHangul(event, valueStr) {
  let argArr = valueStr.split('.');
  var regx = /[a-zA-Z_0-9]+|\[[0-9]+\]/g
  let _args = [];

  for(let i = 0; i < argArr.length; i++) {
      let arg = argArr[i].match(regx);
      if(arg != null) {
          arg.forEach(element => {
              if(element[0] == '[') {
                  _args.push(Number(element.slice(1,-1)));
              } else {
                  _args.push(element);
              }
          });
      } else {
          _args.push(argArr[i]);
      }
  }
  this.msg = _args

  let obj = this[_args[0]];
  for(let i = 1; i < _args.length; i++) {
      if(i == (_args.length - 1)) {
          obj[ _args[i] ] = event.target.value;
      } else {
          obj = obj[ _args[i] ]
      }
  }
}

export {inputHangul}