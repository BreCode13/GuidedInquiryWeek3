class Person {}
constructor(name, job, age) {
this.name = name
this.job = job
this.age =age
}
exercise () {
console.log("Running is fun! - said no one ever")
}

fetchJob () {
console.log('${this.name} is a ${this. job}')
}


class Programmer extends Person {
constructor (name,job, age,language =[]) {
super(name, job, age)
this.language = language
this.isBusy = true
}

completeTask() {
this.isBusy = false
}

acceptNewTask () {
this.isBusy = true
}


offerNewTask() {
this.isBusy === true ? console. log('${this.name]can't accept any new tasks right now') :   console.log('${this.name} would love to accept any new tasks right now')
}

learnLanguage(lanquageBeingLearned) {
this.language.push(languageBeingLearned)
}

listLanguages(){
console. log(this. language)
}

 const manny = new Programmer("Manny",
"Software Engineer, 23, ["javscript"])

const breana = new Programmer( "Breana", "Software Enaineer Apprentice", 26. ["javscript"])

manny.completeTask()
manny.offerNewTask()
manny.listLanguages()
manny.learnLanguage("java")
manny.listLanguages()


breana.completeTask()
breana.offerNewTask()
breana.listLanguages()
breana.learnLanguage ("java")
breana.learnLanguage("python")
breana.listLanguages()