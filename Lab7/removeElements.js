function removeElements(array, ...items) {
    for (const item of items) {
        const index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}

const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 4, 1, 2);
console.log(array3);

const array4 = ['Kiev', 'Kharkiv', 'Donetsk', 'Lviv'];
removeElements(array4, 'Lviv', 'Kharkiv', 'Kiev');
console.log(array4);