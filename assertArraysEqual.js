const eqArrays = function(a1, a2){
  let l = a2.length;
  if (a1.length > a2.length) l = a1.length; 
  for (let i = 0; i < l; i++){
    if (a1[i] !== a2[i]) return false;
  }
  return true
}
const assertArrayEqual = function(a1, a2){
  let v = eqArrays(a1,a2);
  v? console.log('✅✅✅ arrays are equal') : console.log('🛑🛑🛑 arrays are different');
}