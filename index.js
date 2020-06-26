// Write your solution in this file!

const driver = {};
function updateDriverWithKeyAndValue(driverObj,key, value ){

    let newDriver = Object.assign({}, driverObj, {[key]: value});
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value){

    return Object.assign(driverObj, {[key]: value})
}

function deleteFromDriverByKey(driverObj, key){
    const newDriver = Object.assign({}, driverObj)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driverObj, key){
    const newDriver = Object.assign(driverObj, key);
    delete newDriver[key];
    return newDriver;


}