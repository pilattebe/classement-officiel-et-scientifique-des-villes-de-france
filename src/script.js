// Open geojson file ../public/p-com2020.json
// Warning: This file is 11mb but it should be ok
// Open ../public/towns.json
// for every town in towns.json find the corresponding town in p-com2020.json
// example town:
// {
//     "geo_point_2d": [
//         43.34746712081693,
//         3.2308590445853773
//     ],
//     "dep_name": "Hérault",
//     "dep_code": "34",
//     "reg_name": "Occitanie",
//     "com_code": "34032",
//     "com_name": "Béziers"
// },
// For p-com2020, it will be in features, then properties, then codgeo (code of the town)
// match com_code and xcl3857, then replace the geo_point_2d with the coordinates of the town that are called "xcl3857" and "ycl3857" in the feature's properties
// then save the modified towns.json file in ../public/towns-bis.json

// Check in ../public/towns/ if there is a geojson file with the same name as the town
// If there is not, create it by calling getTownOutlineUpstream, the name looks like "Castres.json"

const fs = require("fs");
const path = require("path");

// const geojson = require("../public/p-com2020.json");
const towns = require("../public/towns.ARCHIVE.json");

let csvPopulation = fs.readFileSync(path.join(__dirname, "../public/Communes.csv"), "utf8");
csvPopulation = csvPopulation.split("\n");
csvPopulation = csvPopulation.map((line) => line.split(";"));

const townsBis = towns.map((town) => {
	// const townGeojson = geojson.features.find(
	// 	(feature) => feature.properties.codgeo === town.com_code
	// );
	// if (!townGeojson) {
	// 	console.log("town not found", town.com_code);
	// 	return town;
	// }
	// warn if the distance between the two coordinates is too big
	// if (
	// 	Math.abs(town.geo_point_2d[1] - townGeojson.properties.xcl4326) > 0.1 ||
	// 	Math.abs(town.geo_point_2d[0] - townGeojson.properties.ycl4326) > 0.15
	// ) {
	// 	console.log("town coordinates are too different", town.com_name, town.com_code);
	// 	console.log("old", town.geo_point_2d);
	// 	console.log("new", [townGeojson.properties.ycl4326, townGeojson.properties.xcl4326]);
	// 	return town;
	// }

	// Check in ../public/towns/ if there is a geojson file with the same name as the town
	// If there is not, create it by calling getTownOutlineUpstream, the name looks like "Castres.json"
	// const townGeojsonPath = "../public/towns/" + town.com_name + ".json";
	// if (fs.existsSync(townGeojsonPath)) {
	// } else {
	// 	console.log("town geojson does not exist", town.com_name);
	// 	getTownOutlineUpstream(town.com_code).then((geojson) => {
	// 		if (geojson) {
	// 			console.log("town found upstream", town.com_name);
	// 			fs.writeFileSync(
	// 				townGeojsonPath,
	// 				JSON.stringify({ type: "FeatureCollection", features: [geojson] })
	// 			);
	// 		} else {
	// 			console.log("-----------------------town not found upstream", town.com_name);
	// 		}
	// 	});
	// }

	// Load population data from ../public/Communes.csv
	// Match the town with the code in the csv file (first column)
	// Then replace the population with the population in the csv file (third column)
	let population = csvPopulation.find((line) => line[0] === town.com_code)?.[2];

	return {
		...town,
		population,
		// geo_point_2d: [townGeojson.properties.ycl4326, townGeojson.properties.xcl4326],
	};
});

fs.writeFileSync(path.join(__dirname, "../public/towns.json"), JSON.stringify(townsBis));

function getTownOutlineUpstream(town) {
	return new Promise((resolve, reject) => {
		// const params = { dataset: "georef-france-commune", q: `refine.com_name=${town}` };
		// const url = new URL("https://public.opendatasoft.com/api/records/1.0/search/");
		// url.search = new URLSearchParams(params).toString();
		const url =
			"https://public.opendatasoft.com" +
			"/api/records/1.0/search/?dataset=georef-france-commune&q=" +
			"&refine.com_code=" +
			encodeURIComponent(town);

		console.log(url);

		fetch(url.toString())
			.then((response) => response.json())
			.then((data) => {
				resolve(data.records[0]?.fields.geo_shape);
			});
	});
}
