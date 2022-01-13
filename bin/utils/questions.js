
const { yellow, italic } = require('colorette');

// This question would be shown at the starting
const QNS_1 = [
    {
        type: "input",
        message: "Input message to translate:",
        name: "text"
    }
]

const QNS_2 = [
    {
        type: "list", 
        message: `Pick language to translate to:`,
        name: "language", 
        choices: ["English [en]", "Japanese [ja]", "Frence [fr]", "Italian [it]"
        , "...search for language"]
    },
];

const QNS_3 = [
    {
        type: "input",
        message: `What language you wanted to search ${italic(yellow("(iso2 format)"))}:`,
        name: "language"
    }
]



module.exports.QNS_1 = QNS_1;
module.exports.QNS_2 = QNS_2;
module.exports.QNS_3 = QNS_3;