// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, val){

    const newDriver = Object.assign({}, driver, {[key]: val}) 
    //Object.assign(target, source, source)
    //{} create empty {} then driver, new [key]:val pair will be stored in the empty {}.
    //console.log(`:::key${key}:: val${val}::::newDriver${newDriver}`)
    return newDriver
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, val){
  driver[key] = val
  return driver
}

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver)
    newDriver[key] = undefined
    return newDriver

}

function destructivelyDeleteFromDriverByKey(driver, key){

    newDriver = Object.assign({}, driver)
    console.log(`:::::newDriver ${newDriver}:::`)
    driver[key] = undefined
    
    return newDriver
}