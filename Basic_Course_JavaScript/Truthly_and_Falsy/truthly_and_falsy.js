
/*  FALSY   */
console.log(Boolean(0));

console.log(Boolean(null));

console.log(Boolean(NaN));  // NOT A NUMBER -> NaN

console.log(Boolean(undefined));

console.log(Boolean(!false));

console.log(Boolean(""));


/*  TRUTHLY  */
console.log(Boolean("a"));

console.log(Boolean(1));

console.log(Boolean([]));

console.log(Boolean({}));

console.log(Boolean(function(){}));

console.log(Boolean(true));