import {text, select} from "@clack/prompts";
import {parse} from "path"

import {main} from "../main.js"

export async function convIdade(){

    console.log("Seja bem vindo ao conversor de idade!!")

    console.log("/n O sistema consiste em converter a idade em meses. (EX.: João tem 2 anos, então joão tem 24 meses");

    const idade = Number(await text({
        message:"Qual é a idade que você deseja converter?"
    }));

    const resultConv = idade * 12;

    parseInt(resultConv)

    if(idade >= 80){
            console.log(`${idade}, tudo isso? Deve ter muita história pra contar`);
        } else if (idade >= 30){
            console.log(`${idade}, ainda é jovem..`);
        } else if (idade >= 18){
            console.log(`${idade}, boas vindas à vida adulta!`)
        } else if (idade <= 5){
            console.log(`${idade}, vivendo o melhor que a vida tem a orefecer, a  infancia!`);
        }


    console.log(`A idade ${idade} em meses é igual a ${resultConv}`)

    const otherConv = await select({
        message:"Você deseja realizar outra conversão?",
        options:[
            {value: "sim", label:"Sim"},
            {value: "nao", label:"Não"}
        ]
    });

    if(otherConv=== "sim"){
        console.log("Você será redirecionado, aguarde!")
        setTimeout(convIdade, 3000)
    } else if(otherConv === "nao"){
        
        const comeBack = await select({
            message:"Selecione qual será seu próximo caminho:",
            options:[
                {value:"main", label:"Voltar ao inicio do sistema e escolher outra atividade"},
                {value:"exit", label:"Sair do sistema"}
            ]
        });

        switch(comeBack){

            case "main":{
                console.log("Você está voltando para o menu principal, enjoy!!");
                setTimeout(main, 3000);
                break
            };

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
        };// fim do switch comeBack

    };
};



