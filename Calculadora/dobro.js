import {text, select} from "@clack/prompts";
import {parse} from "path"

import {main} from "../main.js"
import {mainCalculator} from "./mainCalculator.js"

export async function dobro(){

    console.log("Seja bem vindo ao sistema cálculo de dobro de valores");

    const valor = Number(await text({
        message:"Insira o valor que você deseja calcular:"
    }));

    parseFloat(valor)
    
    console.log(`O número digitado foi ${valor}`);

    const resultDobro = valor * 2;

    console.log(`O dobro de ${valor} é ${resultDobro}`);

    const otherDobro = await select({
        message:"Você deseja realizar outro cálculo?",
        options:[
            {value: "sim", label:"Sim"},
            {value: "nao", label:"Não"}
        ]
    });

    if(otherDobro === "sim"){
        console.log("Você será redirecionado, aguarde!")
        setTimeout(dobro, 3000)
    } else if(otherDobro === "nao"){
        
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
}