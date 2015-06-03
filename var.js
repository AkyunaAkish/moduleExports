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
};
