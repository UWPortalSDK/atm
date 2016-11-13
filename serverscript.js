var uwBase= "https://api.uwaterloo.ca/v2";
function getATMs() {
    // Paste your API key here. IMPORTANT: DO NOT PUSH THIS TO GITHUB, STORE KEY IN DB
	// (See documentation on "Managing Private Data" on the "SDK Document" documentation page)
	return getEndpoint(uwBase + '/poi/atms.json?key=');
}

function getFoodServiceLoc(){
    return getEndpoint(uwBase + '/foodservices/locations.json?key=');
}

function getFedLoc() {
    return getEndpoint(uwBase + '/feds/locations.json?key=');
}

function getEndpoint( url ) {
    // Paste your API key here. IMPORTANT: DO NOT PUSH THIS TO GITHUB, STORE KEY IN DB
	// (See documentation on "Managing Private Data" on the "SDK Document" documentation page)
    var apiKey = privateDataService.Get('apiKey');
    if (apiKey == "")
        return '{"error":"No Api Key! Add your key in the server script file."}';
    return proxy.GetProxy( url + apiKey);
}
