import {text, select} from "@clack/prompts";

import {main} from "../main.js"

export async function convTemp(){
        console.log("Seja bem vindo ao sistema de Conversão de temperatura (Celsius para Fahrenheit)");
    
        const Celsius = Number(await text({
            message:"Qual é a tamperatura em Celsius que você deseja converter?"
        }));
        
        parseFloat(Celsius);
        
        console.log(`Você digitou ${Celsius}°C`);

        if(Celsius >= 35){
            console.log(`Vish ${Celsius}°C, tudo isso? É a temperatura do inferno?`);
        } else if (Celsius >= 22){
            console.log(`${Celsius}°C, ta esquentando ein`);
        } else if (Celsius <= 15){
            console.log(`${Celsius}°C Credo, ta frio demais, você ta no sul?`)
        } else if (Celsius <= 5){
            console.log(`${Celsius}°C Oi?`);
            console.log(" Estou falando com um cubo de gelo?")
        }


        const Fahreinheit = (Celsius * 1.8) + 32;
    
        console.log(`${Celsius}°C convertido para Fahrenheit é ${Fahreinheit}`);
    
        const otherConv = await select({
            message:"Você deseja realizar outra Conversão?",
            options:[
                {value: "sim", label:"Sim"},
                {value: "nao", label:"Não"}
            ]
        });
    
        if(otherConv === "sim"){
            console.log("Você será redirecionado, aguarde!");
            setTimeout(convTemp, 3000)
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
            }// fim do switch comeBack
    
        };
};