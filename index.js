// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    let b = Object.assign({}, driver)
    // Object.assign(empty Object, obects that you want to copy separated by commas)
      
    
      b[key] = value
      console.log(b)
      console.log(driver)
    
    driver;
    return b
}

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
     driver[key] = value
     return driver
 }

 function deleteFromDriverByKey(driver, key) {
     let a = Object.assign({}, driver)

     console.log(a)
     delete a[key]
     console.log(a)
     return a
 }

 function destructivelyDeleteFromDriverByKey(driver, key) {
     delete driver[key]
     return driver
     
 }