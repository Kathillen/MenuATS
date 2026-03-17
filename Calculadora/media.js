import {text, select} from "@clack/prompts";
import {parse} from "path"

import {main} from "../main.js"
import {mainCalculator} from "./mainCalculator.js"


export async function media(){

    console.log("Você escolheu calcualar a média de um valor");

    let values = []

    const value1 = Number(await text({
        message:"Digite o primeiro valor"
    }));
    values.push(parseFloat(value1));

    const value2 = Number(await text({
        message:"Digite o segundo valor"
    }));
    values.push(parseFloat(value2));

    console.log(`Você digitou os valores ${values}`);

    async function moreValues(values){
        const moreValues = await select({
            message:"Deseja adicionar mais um valor?",
            options:[
                {value:"yes", label:"Sim"},
                {value:"no", label:"Não"}
            ]
        });
    
    if(moreValues === "yes"){
        const newValue = await text({
            message:"Digite um número:"
        });
        
        values.push(parseFloat(newValue));

        console.log(`O número digitado foi: ${newValue}`);

        return moreValues(values); // para voltar a perguntar se o usuário deseja adicionar mais números
    
    }else if (moreValues === "no"){

        console.log("Você escolheu nao adicionar mais números");

        const result = values.reduce((acc,n) => acc / n ); // reduce reduz varios valores de um array a um unico valor, ele percorre o array elemento pot elemento
        // acc : acumulador ( onde vai guardando o resultado)
        // n : número atual do array
        // 0: é o valor inicial do acumulador, ou seja, acc começa em 0
        
        console.log(`O resultado da soma dos numeros é: ${result}`);
    };

}; // final da function moreValues
await moreValues(values);

    const otherMedia = await select({
        message:"Você deseja calcular outra média?",
        options:[
            {value: "sim", label:"Sim"},
            {value: "nao", label:"Não"}
        ]
    });

    if(otherMedia === "sim"){
        console.log("Você será redirecionado, aguarde!")
        setTimeout(media, 3000)
    } else if(otherMedia === "nao"){
        
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