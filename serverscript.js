function getATMs() {
    // Paste your API key here. IMPORTANT: DO NOT PUSH THIS TO GITHUB, STORE KEY IN DB
	// (See documentation on "Managing Private Data" on the "SDK Document" documentation page)
    var apiKey = privateDataService.Get('apiKey');
    if (apiKey == "")
        return '{"error":"No Api Key! Add your key in the server script file."}';

    return proxy.GetProxy('https://api.uwaterloo.ca/v2/poi/atms.json?key=' + apiKey);
}