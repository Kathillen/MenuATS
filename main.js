import {text, select} from "@clack/prompts";

import { mainCalculator} from "./Calculadora/mainCalculator.js";
import { convIdade } from "./Conversores/convIdade.js";
import { convTemp } from "./Conversores/convTemp.js"

export async function main(){
    console.log("Bem-vindo ao programa de atividades de lógica de programação!");

    const activity = await select({
        message:"Escolha a atividade que deseja executar:",
        options:[
            {value:"calculator", label:"Calculadora TOP TECH"},
            {value:"convIdade", label:"Conversor de idade( de ano para meses )"},
            {value:"convTemp", label:"Conversor de temperatura( Celsius para Fahrenheit )"},
            {value: "exit", label:"Sair do programa"}
            
        ]
    }); // fim do select

    switch(activity){
        case "calculator":{
            console.log("Você escolheu a Calculadora TOP TECH");
            await mainCalculator();
            break;
        };
        case "convIdade":{
            console.log("Você escolheu a ativiade 'Conversor de idade' ");
            setTimeout(convIdade, 2500);
            break
        };

        case "convTemp":{
            console.log("Você escolheu a ativiade 'Conversor de temperatura (Celsius pra Fahrenheit' ");
            setTimeout(convTemp, 2500);
            break
        }
        case "exit":{
            console.log("Poxa, uma pena você querer sair desse lindo sistema....")
            console.log("Adeus👋🏽")

            process.exit(1000)
            break
        }
    }
};
main();