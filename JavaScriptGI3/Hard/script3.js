//a variable that takes in a function with 2 parameters
const personDetails = function (personName, personSsn){
    //has an object holding the two parameters
    let pii = {
    name:personName,
    ssn:personSsn
    }
    //function returns an object that holds 2 methods
    return {
    getName : () => {
        return pii.name
    },

    getSsn : () => {
    return pii.ssn
    }
}
}
    
    const patientOne = personDetails ( 'Breana', 7897834344)
    
    
    //when calling on a method, you need () to let iavascript know vou're callina on a method which is a funtion within an obiect


    console. log(patientOne.getName())
    console. log(patientOne.getSsn())
    
    //undefined
    console.log(patientOne.name)
    //undefined
    console.log(patientOne.ssn)