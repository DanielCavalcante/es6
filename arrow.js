const brazil = ["João Pessoa", "Conde", "Curitiba", "Recife", "Rio de Janeiro"]

const love = brazil.map(function(city) {
    return "I love " + city + "!";
});

console.log(love);

const loveArrow = brazil.map((city) => {
    return "I love " + city + "!";
});

console.log(loveArrow);

const loveArrowSingle = brazil.map(city => {
    return "I love " + city + "!";
});

console.log(loveArrowSingle);

const loveArrowOneLine = brazil.map(city => "I love " + city + "!");

console.log(loveArrowOneLine);

const loveChain = brazil
                    .filter(city => city === "Rio de Janeiro")
                    .map(city => "I love " + city + "!");

console.log(loveChain);
