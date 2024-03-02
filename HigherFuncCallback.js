


function higherOrderFunction(kampit){
    console.log("hey kampit");
    kampit();
}

function myCallback (){
  console.log("i am callback");
}

higherOrderFunction(myCallback);