const { countries } = require("../data/countries.js")


const searchLanguage = async (text, callback) => 
{
    // console.log(countries[0]);
    let success = false
    countries.forEach((element) => {
        if(text.toLowerCase() === element.ISO2.toLowerCase())
        {
            success = true;
            return callback({
                country: element.Country,
                slug: element.Slug,
                iso2: element.ISO2
            });
        }
    })
    if(!success)
    {
        return callback({
        error: `! Sorry, Cannot find the country "${text}"`
        });
    }
}

module.exports.searchLanguage = searchLanguage;