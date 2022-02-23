function snapCrackle(maxValue) {
    var x = "";
    for (let i = 1; i <= maxValue; i++) {
        if (i == maxValue) {
            if (i % 5 == 0 && i % 2 != 0) {
                x += (['SnapCrackle']);
            }
            else if (i % 2 == 0 && i % 5 != 0) {
                x += ([`${i}`]);
            }
            else if (i % 2 != 0) {
                x += (['Snap']);
            }
            else if (i % 5 == 0) {
                x += (['Crackle']);
            }
        }
        else {
            if (i % 5 == 0 && i % 2 != 0) {
                x += (['SnapCrackle, ']);
            }
            else if (i % 2 == 0 && i % 5 != 0) {
                x += ([`${i}, `]);
            }
            else if (i % 2 != 0) {
                x += (['Snap, ']);
            }
            else if (i % 5 == 0) {
                x += (['Crackle, ']);
            }
        }
    }
    for (let j = 0; j < x.length; j++) {
        console.log(x[j]);
    }
    return x;
}