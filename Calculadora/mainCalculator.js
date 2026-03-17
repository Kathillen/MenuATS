import {text, select, isCancel} from "@clack/prompts";

import {sum} from "./soma.js";
import {sub} from "./sub.js";
import {div} from "./div.js";
import {mut} from "./mut.js";
import {dobro} from "./dobro.js";
import {area} from "./area.js";
import {media} from "./media.js"

export async function mainCalculator(){
    console.log("Bem-vindo a calculadora TOP TECH ");

    const activity = await select({
        message:"Escolha a equação que você deseja realizar:",
        options:[
            {value:"sum", label:"Somando valores"},
            {value:"sub", label:"Subtraindo valores"},
            {value:"div", label:"Divisão de valores"},
            {value: "mut", label:"Mutiplicação de valores"},
            {value:"dobro", label:"Calcular o dobro do número"},
            {value:"area", label:"Calcular a área do quadrado"},
            {value:"media", label:"Calcular a média de notas"}
        ]
    }); // fim do select

    switch(activity){
        case "sum":{
            console.log("Você escolheu a soma de valores!");
            await sum();
            break;
        };
        case "sub":{
            console.log("Você escolheu subtração de valores!");
            await sub();
            break;
        };

        case "div":{
            console.log("Você escolheu divisão de valores!");
            await div();
            break
        };

        case "mut":{
            console.log("Você escolheu mutiplicar valores");
                await mut();
                break;
        };

        case "dobro":{
            console.log("Você escolheu calcular o dobro de um valor");
            await dobro();
            break;
        };

        case "area":{
            console.log("Você escolheu calcular a area do quadrado");
            await area();
            break;
        };

        case "media":{
            console.log("Você escolheu calcular a média");
            await media();
            break
        }

        case isCancel(activity):{
            console.log("Ops, parece que algo deu errado");
            setTimeout(main, 2500)
        }

    }
};
