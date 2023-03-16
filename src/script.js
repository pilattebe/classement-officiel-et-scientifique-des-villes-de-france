// // take assets/cities.json and map every key-value pair to a new structure
// // /assets/cities/<city>.json with the value being the content of the file

// const fs = require("fs");
// const path = require("path");

// const cities = require("./assets/cities.json");

// const citiesPath = path.join(__dirname, "assets", "cities");

// if (!fs.existsSync(citiesPath)) {
// 	fs.mkdirSync(citiesPath);
// } else {
// 	// delete all files in the directory
// 	const files = fs.readdirSync(citiesPath);
// 	for (const file of files) {
// 		fs.unlinkSync(path.join(citiesPath, file));
// 	}
// }

// for (const [city, content] of Object.entries(cities)) {
// 	const cityPath = path.join(citiesPath, city + ".json");
// 	fs.writeFileSync(cityPath, JSON.stringify(content));
// }

// PART 2

// Take the citiesMetadata.json and create a new file called citiesData.json
// The current structure is an objects with the following structure:
// "Tarbes": {
//     "nhits": 1,
//     "parameters": {
//         "dataset": [
//             "georef-france-commune"
//         ],
//         "rows": 10,
//         "start": 0,
//         "refine": {
//             "com_name": "Tarbes",
//             "year": "2022"
//         },
//         "format": "json",
//         "timezone": "UTC"
//     },
//     "records": [
//         {
//             "datasetid": "georef-france-commune",
//             "recordid": "39c53f67cddd0bf603325faa18af1feadf937c12",
//             "fields": {
//                 "geo_point_2d": [
//                     43.23466017940348,
//                     0.06615139825056372
//                 ],
//                 "com_in_ctu": "Non",
//                 "com_siren_code": "216504407",
//                 "arrdep_code": "653",
//                 "com_uu2020_code": "65501",
//                 "dep_name": "Hautes-Pyrénées",
//                 "ze2020_name": "Tarbes-Lourdes",
//                 "arrdep_name": "Tarbes",
//                 "dep_code": "65",
//                 "com_cv_code": "6599",
//                 "bv2012_code": "65440",
//                 "year": "2022",
//                 "com_name_lower": "tarbes",
//                 "reg_name": "Occitanie",
//                 "com_cateaav2020_code": "11",
//                 "com_code": "65440",
//                 "com_name": "Tarbes",
//                 "epci_code": "200069300",
//                 "bv2012_name": "Tarbes",
//                 "ze2020_code": "7624",
//                 "com_aav2020_code": "085",
//                 "com_area_code": "FXX",
//                 "reg_code": "76",
//                 "com_type": "commune",
//                 "epci_name": "CA Tarbes-Lourdes-Pyrénées",
//                 "com_current_code": "65440",
//                 "com_name_upper": "TARBES",
//                 "com_cateaav2020_name": "Commune-centre",
//                 "com_uu2020_status": "unité urbaine",
//                 "com_is_mountain_area": "Non"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [
//                     0.06615139825056372,
//                     43.23466017940348
//                 ]
//             },
//             "record_timestamp": "2022-09-26T15:23:00Z"
//         }
//     ],
//     "facet_groups": [
//         {
//             "name": "com_name",
//             "facets": [
//                 {
//                     "name": "Tarbes",
//                     "count": 1,
//                     "state": "refined",
//                     "path": "Tarbes"
//                 }
//             ]
//         },
//         {
//             "name": "year",
//             "facets": [
//                 {
//                     "name": "2022",
//                     "count": 1,
//                     "state": "refined",
//                     "path": "2022"
//                 }
//             ]
//         }
//     ]
// },

// The new structure should be an array of objects with the following structure:

// {
// 	Tarbes: {
// 		geo_point_2d: [43.23466017940348, 0.06615139825056372],
// 		dep_name: "Hautes-Pyrénées",
// 		arrdep_name: "Tarbes",
// 		dep_code: "65",
// 		reg_name: "Occitanie",
// 		com_code: "65440",
// 		com_name: "Tarbes",
// 	},
// };

// const fs = require("fs");
// const path = require("path");

// const citiesMetadata = require("./assets/citiesMetadata.json");

// const citiesData = {};

// for (const [city, content] of Object.entries(citiesMetadata)) {
// 	const cityData = content.records?.[0]?.fields;
// 	if (cityData) {
// 		citiesData[city] = {
// 			geo_point_2d: cityData.geo_point_2d,
// 			dep_name: cityData.dep_name,
// 			arrdep_name: cityData.arrdep_name,
// 			dep_code: cityData.dep_code,
// 			reg_name: cityData.reg_name,
// 			com_code: cityData.com_code,
// 			com_name: cityData.com_name,
// 		};
// 	} else {
// 		citiesData[city] = {};
// 	}
// }

// fs.writeFileSync(
// 	path.join(__dirname, "assets", "citiesData.json"),
// 	JSON.stringify(citiesData, null, 2)
// );
