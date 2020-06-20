// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, val) {

    let obj1 = Object.assign({}, driver)
    obj1[key] = val
    return obj1
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
    driver[key] = val
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let obj2 = Object.assign({}, driver)
    delete obj2[key]
    return obj2
}


function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
