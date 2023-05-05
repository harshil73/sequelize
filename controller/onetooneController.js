const oto_repo_car = require("../repository/otoRepo").car_create_query
const oto_repo_emp = require("../repository/otoRepo").employee_create_query
const oto_repo_read = require('../repository/otoRepo').read_query

const adddata = async (req, res) => {
  let car = await oto_repo_car({car_name:'land Rover'});
  console.log(car);

  let empl = await oto_repo_emp(car.id);
  console.log(empl);
  res.json(empl);
};

const readdata = async (req, res) => {
  // let data = await employee.findAll({include:car,});
  let data = await oto_repo_read();
  //   console.log(data);
  res.send(data);
};

module.exports = { adddata, readdata };
