let a = 10;
{
  // console.log(a);  // It gives ReferenceError. Since "a" is in Temporal Dead Zone.
  let a = 20;
  console.log(a);
}
console.log(a);
