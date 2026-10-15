function factorial() {
    let n = Number(document.getElementById("num").value);
    let fact = 1;

    while (n > 0) {
        fact = fact * n;
        n--;
    }

    console.log(fact);
}