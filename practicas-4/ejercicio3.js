let i = 1;

while (i <= 30) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('GOLAZOOO')
        i++;
    } else if (i % 3 === 0) {
        console.log('GOL')
        i++;
    } else if (i % 5 === 0) {
        console.log('PENAL')
        i++;
    } else {
        console.log(i);
        i++;
    }
}