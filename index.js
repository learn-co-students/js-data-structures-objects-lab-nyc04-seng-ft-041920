// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, val) {
  const newDriver = {...driver}
  newDriver[key] = val
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  driver[key] = val
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver}
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key, val) {
  delete driver[key]
  return driver
}