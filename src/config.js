const config = {
  port: process.env.PORT,
  pass: process.env.PASS,
  town: process.env.TOWN,
};
console.log('config ===', config);

module.exports = config;
