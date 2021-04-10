const csv = require("csv-parser");
const fs = require("fs");

const readCSVFile = () => {
	var dataArray = [];
	return new Promise((resolve, reject) => {
		fs.createReadStream(__dirname + "/data.csv")
			.pipe(csv(["Names"]))
			.on("data", (row) => {
				dataArray.push(row[0]);
			})
			.on("end", () => {
				fs.unlink(__dirname + "/data.csv", (err) => {
					return;
				});
				resolve(dataArray);
			});
	});
};

const readFile = async () => {
	const data = await readCSVFile();
	var cleanarray = [];
	var rollno = [];

	var array = await data;

	array.forEach((row) => {
		if (row) {
			let r = row.match(/^\d/g);
			if (r) {
				cleanarray.push(row.split(/[//._-\s]/g));
			}
		}
	});

	rollno = cleanarray.map((ele) => ele[2]);
	rollno = [...new Set(rollno)];
	return rollno;
};

module.exports = { readFile };
