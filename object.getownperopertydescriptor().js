// const object1 = {
//     property1: 42
//   };
  
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
//   console.log(descriptor1.configurable);
//   console.log(descriptor1.value);
  
  const obj ={
      prop1: 1,
      prop2: 2,
      prop3: 3
  };
  const desc = Object.getOwnPropertyDescriptor(obj, 'prop1');
  console.log(desc.value)