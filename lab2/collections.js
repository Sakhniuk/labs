const phoneBookArray = [
    { name: "Anna Duktry", phone: "+380445554433" },
    { name: "Jane Canny", phone: "+123456789" },
    { name: "Julia Sakhniuk", phone: "+987654321" },
  ];
  const phoneBookHash = {
    "Anna Duktry": "+380445554433",
    "Jane Canny": "+123456789",
    "Julia Sakhniuk": "+987654321",
  };

  function findPhoneByNameArray(name) {
    for (const contact of phoneBookArray) {
      if (contact.name === name) {
        return contact.phone;
      }
    }
    return "Not found";
  }

  function findPhoneByNameHash(name) {
    return phoneBookHash[name] || "Not found";
  }
  
  // Примеры вызовов
  console.log("Пошук в масиві об'єктів:");
  console.log(findPhoneByNameArray("Anna Duktry")); 
  console.log(findPhoneByNameArray("Unknown")); 
  
  console.log("\nПошук в хещ-таблиці:");
  console.log(findPhoneByNameHash("Jane Smith"));
  console.log(findPhoneByNameHash("Unknown"));