#! /usr/bin/env node

const inquirer = require("inquirer");
const { QNS_1, QNS_2, QNS_3 } = require("./utils/questions.js");
const { searchLanguage } = require("./utils/search.js")
const { translateText } = require("./utils/translate.js")
const { gray, green, magentaBright, yellow, italic, bold, whiteBright, red } = require('colorette');

function FinalCheck(message, language, registerText) {
    searchLanguage(language, (res) => {
        if(res.error !== undefined) return console.log(bold(red(res.error)));

        console.log(gray(registerText), italic(yellow(res.country)));

        translateText(message, res.iso2.toLowerCase(), (result) => 
        {
            if(result.error !== undefined) return console.log(bold(red(`! Sorry, The language '${language}' is not supported`)));

            console.log(italic(whiteBright(`${green("✔ ")} Translated: \n`)) 
            + "\t" + bold(yellow(result.translated))
            + magentaBright(`\n\`---------------------'`))
        })

    });
}

inquirer.prompt(QNS_1).then((answers => {
    const inputMessage = answers.text;

    inquirer.prompt(QNS_2).then((answers) => 
    {
        switch(answers.language)
        {
            case "...search for language":
            {
                inquirer.prompt(QNS_3).then(answers => 
                {
                    console.log(`${gray("... searching for ")}`, italic(green(answers.language)))
    
                    FinalCheck(inputMessage, answers.language, "searched country: ");
                });
                break;
            }

            case "English [en]":
            {
                console.log(`${gray("... searching for ")}`, italic(green(answers.language)))

                FinalCheck(inputMessage, "en", "Picked the country: ");
    
                break;
            }

            case "Japanese [ja]":
            {
                console.log(`${gray("... searching for ")}`, italic(green(answers.language)))

                FinalCheck(inputMessage, "ja", "Picked the country: ");
             
                break;
            }

            case "Frence [fr]":
            {
             
                console.log(`${gray("... searching for ")}`, italic(green(answers.language)))

                FinalCheck(inputMessage, "fr", "Picked the country: ");
            
                break;
            }

            case "Italian [it]":
            {
                console.log(`${gray("... searching for ")}`, italic(green(answers.language)))

                FinalCheck(inputMessage, "it", "Picked the country: ");
            
                break;
            }
            
            default:
            {
                console.log(bold(red(`! Sorry, Something went wrong! please try again`)))
                break;
            }
            
        }


    });

}))

/*
.---------------------.
| .-----------------. |
| |                 | |
| `-----------------' |
`---------------------'
*/

