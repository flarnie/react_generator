var upper = function(chars) { return chars.match(/[a-zA-Z]/)[0].toUpperCase(); }

camelCase = function(name) {
  return name.replace(/([-|_|].)|(^.)/g, upper);
};

module.exports = camelCase;
