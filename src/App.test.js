

const {like, like2, like3} = require ('./App');

describe ('todos los valores al renderizar 1era vez', ()=> {
  it ('like No1',()=>{
    expect (like ()).toBe(25);
  })

  it ('like No2',()=>{
    expect (like2 ()).toBe(0);
  })  

  it ('like No3',()=>{
    expect (like3 ()).toBe(10);
  })
});