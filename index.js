const driver = {};

function updateDriverWithKeyAndValue(driver, key, val) {
  return Object.assign({}, driver, {[key]: val});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  driver[key] = val;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let obj = Object.assign({}, driver);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
