const driver = {}

function updateDriverWithKeyAndValue(driver, key, val) {
    //{} added in front of driver to create a new object
    //if we start with driver, we end up changing the original variable
    //run both this and the next function for the diff
   return Object.assign({}, driver, {[key] : val})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
   return Object.assign(driver, {[key] : val})
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}