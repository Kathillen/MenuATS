import {text, select} from "@clack/prompts";
import {parse} from "path"

import {main} from "../main.js"
import {mainCalculator} from "./mainCalculator.js"

export async function div(){

    console.log("Seja bem vindo ao sistema de divisão de valores");

    const num1 = Number (await text({
        message:"Insira o primeiro número:"
    }));
    parseFloat(num1)

    console.log(`O primeiro número digitado foi ${num1}`);

    console.log(`Por Quantas vezes você quer dividir o valor: ${num1}`);

    const num2 = Number(await text({
        message:"Digite o proximo número:"
    }));
    parseFloat(num2)

    const resultDiv = num1 / num2;

    console.log(`O resultado da divisão entre ${num1} e ${num2} é ${resultDiv}`);

    const otherDiv = await select({
        message:"Você deseja realizar outra divisão?",
        options:[
            {value: "sim", label:"Sim"},
            {value: "nao", label:"Não"}
        ]
    });

    if(otherDiv === "sim"){
        console.log("Você será redirecionado, aguarde!")
        setTimeout(div, 3000)
    } else if(otherDiv === "nao"){
        
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