module.exports = (arr) => {
  return  '(###) ###-###'.replace(/#/g, (match) => arr.shift());
}
