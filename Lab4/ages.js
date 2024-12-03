
function ages(persons) {
    const result = {};
    for (let person in persons) {
      result[person] = persons[person].died - persons[person].born;
    } 
    return result;
  }
  const persons = {
    Maks: { born: 1976, died: 2004 },
    Sarah: { born: 1893, died: 1976 },
    Tom: { born: 1969, died: 1999 },
    hirohito: { born: 2001, died: 2078 },
  };
  console.log(ages(persons));