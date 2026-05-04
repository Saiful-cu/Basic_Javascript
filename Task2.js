function main() {
    const celsius = 25;
    const fahrenheit = (celsius * 9) / 5 + 32;

    const kilometers = 10;
    const miles = kilometers * 0.621371;

    console.log(`${celsius.toFixed(2)}C = ${fahrenheit.toFixed(2)}F`);
    console.log(`${kilometers.toFixed(2)} km = ${miles.toFixed(2)} miles`);
}

main();
