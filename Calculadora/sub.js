import {text, select} from "@clack/prompts";
import { parse } from "path";

import {main} from "../main.js"
import { mainCalculator } from "./mainCalculator.js";

export async function sub(){

    console.log("Bem-vindo ao programa de subtração!");

    console.log("O sistema de subtração é simples, você irá digitar os números que você deseja subtrair, e o sistema vai te retornar o resultado da subtração");

    let numbers = [];

    const first = await text({
        message:"Digite um número:"
    });

    numbers.push(parseFloat(first));

    console.log(`O número digitado foi: ${first}`);

    async function moreNumbersf(numbers){
        const moreNumbers = await select({
            message:"Deseja adicionar mais um número?",
            options:[
                {value:"yes", label:"Sim"},
                {value:"no", label:"Não"}
            ]
        });
    
    if(moreNumbers === "yes"){
        const newNumber = await text({
            message:"Digite um número:"
        });
        
        numbers.push(parseFloat(newNumber));

        console.log(`O número digitado foi: ${newNumber}`);

        return moreNumbersf(numbers); // para voltar a perguntar se o usuário deseja adicionar mais números
    };

    if(moreNumbers === "no"){

        console.log("Você escolheu nao adicionar mais números");

        const result = numbers.reduce((acc,n) => acc - n); // reduce reduz varios valores de um array a um unico valor, ele percorre o array elemento pot elemento
        // acc : acumulador ( onde vai guardando o resultado)
        // n : número atual do array
        // 0: é o valor inicial do acumulador, ou seja, acc começa em 0
        
        console.log(`O resultado da subtração dos numeros é: ${result}`);
    };

}; // final da function moreNumbers
await moreNumbersf(numbers);
async function moreSub(){
    const moreFunction = await select({
        message:"Deseja realizar outra subtração?",
        options:[
            {value:"yes", label:"Sim"},
            {value:"no", label:"Não"}
        ]
    });
    if(moreFunction === "yes"){
        setTimeout(sub, 1000) // para voltar a função sub e realizar outra subtração
    } else if(moreFunction === "no"){
        console.log("Você escolheu não realizar outra subtração, obrigado por usar o programa!");
        
        
                const comeBack = await select({
                    message:"Selecione qual será seu próximo caminho:",
                    options:[
                        {value:"main", label:"Voltar ao inicio do sistema e escolher outra atividade"},
                        {value:"mainCalculator", label:"Voltar ao menu principal da calculadora"},
                        {value:"exit", label:"Sair do sistema"}
                    ]
                });
        
                switch(comeBack){
        
                    case "main":{
                        console.log("Você está voltando para o menu principal, enjoy!!");
                        setTimeout(main, 3000);
                        break
                    };
        
                    case "mainCalculator":{
                        console.log("Você será redirecionado para o menu da Calculadora TOP TECH");
                        setTimeout(mainCalculator, 3000)
                        break
                    }
                    
                    case "exit":{
                        console.log("Poxa, uma pena você querer sair desse lindo sistema....")
                        console.log("Adeus👋🏽")
        
                        process.exit(3000)
                        break
                    };

                    case isCancel(comeBack):{
                        console.log("Ops, parece que algo deu errado");
                        setTimeout(main, 2500)
                    }
                }// fim do switch comeBack
    }
};
moreSub();
}; // fim da função principal sub
