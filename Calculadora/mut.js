import {text, select} from "@clack/prompts";
import {parse} from "path"

import {main} from "../main.js"
import {mainCalculator} from "./mainCalculator.js"

export async function mut(){

    console.log("Seja bem vindo ao sistema de mutiplicação de valores");

    const num1 = Number(await text({
        message:"Insira o primeiro número:"
    }));

    parseFloat(num1)
    
    console.log(`O primeiro número digitado foi ${num1}`);

    console.log(`Em quantas vezes você quer mutiplicar o valor: ${num1}`);

    const num2 = Number (await text({
        message:"Digite o proximo número:"
    }));

    parseFloat(num2)
    
    const resultMut = num1 * num2;

    console.log(`O resultado da mutiplicação entre ${num1} e ${num2} é ${resultMut}`);

    const otherMut = await select({
        message:"Você deseja realizar outra Mutiplicação?",
        options:[
            {value: "sim", label:"Sim"},
            {value: "nao", label:"Não"}
        ]
    });

    if(otherMut === "sim"){
        console.log("Você será redirecionado, aguarde!")
        setTimeout(mut, 3000)
    } else if(otherMut === "nao"){
        
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
        };
        }// fim do switch comeBack

    }
};