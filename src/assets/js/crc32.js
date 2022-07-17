// 한글 입력하면 에러 발생
function crc32(
    s /*, polynomial = 0x04C11DB7, initialValue = 0xFFFFFFFF, finalXORValue = 0xFFFFFFFF*/
  ) {
    s = String(s);
    var polynomial = arguments.length < 2 ? 0x04c11db7 : arguments[1],
      initialValue = arguments.length < 3 ? 0xffffffff : arguments[2],
      finalXORValue = arguments.length < 4 ? 0xffffffff : arguments[3],
      crc = initialValue,
      table = [],
      i,
      j,
      c;
  
    function reverse(x, n) {
      var b = 0;
      while (n) {
        b = b * 2 + (x % 2);
        x /= 2;
        x -= x % 1;
        n--;
      }
      return b;
    }
  
    for (i = 255; i >= 0; i--) {
      c = reverse(i, 32);
  
      for (j = 0; j < 8; j++) {
        c = ((c * 2) ^ (((c >>> 31) % 2) * polynomial)) >>> 0;
      }
  
      table[i] = reverse(c, 32);
    }
  
    for (i = 0; i < s.length; i++) {
      c = s.charCodeAt(i);
      if (c > 255) {
        throw new RangeError();
      }
      j = crc % 256 ^ c;
      crc = ((crc / 256) ^ table[j]) >>> 0;
    }
  
    return ((crc ^ finalXORValue) >>> 0).toString(16);
  }
  
  function crc32UUID() {
    // 연속으로 호출했을때도 유니크한 값을 리턴하기 위해서
    // 10 밀리세컨드 대기
    const wakeUpTime = Date.now() + 10;
    var count = 0;
    while (Date.now() < wakeUpTime) {
      count += 1;
    }
    console.log(count);
  
    return crc32(String(Date.now())).toUpperCase();
  }
  
  export { crc32UUID };
  