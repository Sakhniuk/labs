function fn() {
    const constObject = { name: "Julia" };
    let varObject = { name: "Sakhniuk" };
  
    constObject.name = "Jane"; 
    varObject.name = "Canny";

    varObject = { name: "Changed" }; 
  
    console.log(constObject, varObject);
  }
  
  function createUser(name, city) {
    return { name, city };
  }

  fn();
  console.log(createUser("Anna Duktry", "Ukraine"));