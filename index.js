const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newDriver = Object.assign({}, obj, {[key]: value})
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromDriverByKey(obj, key) {
    const newDriver = Object.assign({}, obj)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}