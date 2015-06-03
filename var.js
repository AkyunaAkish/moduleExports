module.exports = {
  four: (function(){
    return 2+2;
  }()),
  zero: (function(){
    return 2-2;
  }()),
  prime: function(i){
    var c = 2;
    var result = true;
    if(i < 0){
      return false;
    }
    while(c < i){
    if( i%c === 0){
      result = false;
      break;
    }
    c++;
   }
   return result;
  },
  findVowels:  function(str){
  var arr = [];
   if(str.indexOf('a') > -1){
      arr.push("a");
    }
     if(str.indexOf('e') > -1){
      arr.push("e");
    }
    if(str.indexOf('i') > -1){
      arr.push("i");
    }
     if(str.indexOf('o') > -1){
      arr.push("o");
    }
   if(str.indexOf('u') > -1){
      arr.push("u");
    }
    if(str.indexOf('A') > -1){
      arr.push("A");
    }
     if(str.indexOf('E') > -1){
      arr.push("E");
    }
    if(str.indexOf('I') > -1){
      arr.push("I");
    }
     if(str.indexOf('O') > -1){
      arr.push("O");
    }
   if(str.indexOf('U') > -1){
      arr.push("U");
    }

    arr += "," + arr.length + " vowels";
    return arr.split(",");
},
};
