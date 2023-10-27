function introduction(firstname) {
    return `Hi, my name is ${firstname}.`;
}
console.log(introduction("Aki"));
function introductionWithLanguage (firstname, language) {
    return `Hi, my name is ${firstname} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Aki", "Ember.js"));
function introductionWithLanguageOptional (name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie"));