module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const isEqual = (c) => {
    for (let b of bracketsConfig) {
      if (c === b[0] && c === b[1]) {
        return true;
      }
    }
    return false;
  };

  const isOpen = (c) => {
    for (let b of bracketsConfig) {
      if (b[0] === c) {
        return true;
      }
    }
    return false;
  };

  const getOpen = (c) => {
    for (let b of bracketsConfig) {
      if (b[1] === c) {
        return b[0];
      }
    }
  };

  let res = [];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (isEqual(c)) {
      res.includes(c) ? res.pop() : res.push(c);
    } else if (isOpen(c)) {
      res.push(c);
    } else if (getOpen(c) !== res.pop()) {
      return false;
    }
  }

  return res.length === 0;
};
