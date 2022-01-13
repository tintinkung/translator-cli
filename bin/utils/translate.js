const translate = require('@vitalets/google-translate-api');


const translateText = (text, language, callback) => 
{
    let result;
    translate(text, {to: language})
    .then((res) => {
        result = {
            translated: res.text, // result 
            from: res.from.language.iso // translated from
        };
    }).catch((err) => {
        // console.error(err);
        result = {
            error: err
        };
    }).finally(() => {

        return callback(result);
    });
}


module.exports.translateText = translateText;