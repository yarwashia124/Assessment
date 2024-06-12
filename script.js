function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice += 1;
        } else if (a[i] < b[i]) {
            bobScore += 1;
        }
    }
    return [alice, bob];
}

let a = [1,2,3];
let b = [3,2,1];
let result = compareTriplets(a, b);
console.log(result[0] + " " + result[1]);