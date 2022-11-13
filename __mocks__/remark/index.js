const mod = {
  use: () => mod,
  process: () => ({ toString: () => "" }),
};

module.exports.remark = () => mod;
