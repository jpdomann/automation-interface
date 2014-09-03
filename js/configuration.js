define({

	version : "Insert Version Here",

	webServiceSettings : {
		"host:port" : {
			"WebServiceURL" : "URL"
		}
	},

	clientSettings : {
		"default" : {
			"RefreshInterval" : 5000,
			"RequestTimeout" : 10000,
			"TimezoneOffset" : "put an offset here"
		}
	},

	themesConfig : {
		"Classic" : {
			"css" : "bootstrap-classic.css",
			"post-css" : "none"
		},
		"Cerulean" : {
			"css" : "bootstrap-cerulean.css",
			"post-css" : "none"
		},
		"Cyborg" : {
			"css" : "bootstrap-cyborg.css",
			"post-css" : "none"
		},
		"Redy" : {
			"css" : "bootstrap-redy.css",
			"post-css" : "none"
		},
		"Journal" : {
			"css" : "bootstrap-journal.css",
			"post-css" : "none"
		},
		"Simplex" : {
			"css" : "bootstrap-simplex.css",
			"post-css" : "none"
		},
		"Slate" : {
			"css" : "bootstrap-slate.css",
			"post-css" : "none"
		},
		"Spacelab" : {
			"css" : "bootstrap-spacelab.css",
			"post-css" : "none"
		},
		"United" : {
			"css" : "bootstrap-united.css",
			"post-css" : "none"
		}

	},

	menuConfig : {
		"Thermometer" : [ {
			"name" : "Real Time",
			"link" : "thermometer.html",
			"icon" : "icon name"
		}, {
			"name" : "Historical",
			"link" : "hist-thermometer.html",
			"icon" : "icon name"
		} ],
		"Thermostat" : [ {
			"name" : "Real Time",
			"link" : "thermostat.html",
			"icon" : "icon name"
		}, {
			"name" : "Historical",
			"link" : "hist-thermostat.html",
			"icon" : "icon name"
		} ]
	}
});