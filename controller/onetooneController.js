const carRepo = require("../repository/otoRepo")
// console.log(oto_repo_car.car_create_query)

const adddata = async (req, res) => {
  let data = await carRepo.car_create_query()
  console.log(data);
  res.json(data);
};


module.exports = {adddata} ;
