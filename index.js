import {text} from "@clack/prompts";

async function sum2(){
const num1 = Number(await text({
    message:"Digite o primeiro número:"
}));

const num2 = Number(await text({
    message:"Digite o segundo número:"
}));

var result = num1 + num2;

console.log(` o resultado da soma entre ${num1} e  ${num2} é: ${result}`)
};
sum2()