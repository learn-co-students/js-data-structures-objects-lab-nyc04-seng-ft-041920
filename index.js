// Write your solution in this file!
const driver = { hello: "world" };
// driver["hello"] = "world";

function updateDriverWithKeyAndValue(driverObject, key, value) {
  const newDriver = Object.assign({}, driverObject, { [key]: value });
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
  const newDriver = Object.assign(driverObject, { [key]: value });
  return newDriver;
}

function deleteFromDriverByKey(driverObject, key) {
  //   const newDriver = Object.assign({}, driverObject, key);
  const newDriver = { ...driverObject };
  console.log(newDriver);
  //   delete driverObject.key;
  delete newDriver[key];
  //   console.log(newDriver);
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
  const newDriver = Object.assign(driverObject);
  delete newDriver[key];
  return newDriver;
}
