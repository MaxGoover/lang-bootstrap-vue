export default {
  isEmptyObject: obj => Object.keys(obj).length,
  isNumber: value => typeof value === 'number' && isFinite(value)
}
