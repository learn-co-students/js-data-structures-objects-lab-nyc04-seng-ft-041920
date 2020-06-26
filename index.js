// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driverObj, key, value){
    return Object.assign({}, driverObj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
    driverObj[key] = value;

    return driverObj;
}

function deleteFromDriverByKey(driverObj, key) {
    const newDriverObj = Object.assign({}, driverObj);
    delete newDriverObj[key];
    return newDriverObj;
}

function destructivelyDeleteFromDriverByKey(driverObj, key) {
    delete driverObj[key];
    return driverObj;
}