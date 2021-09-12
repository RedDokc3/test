


const scriptsInEvents = {

		async EventSheet1_Event1(runtime, localVars)
		{
			src="/vkbridge.js"
			bridge.send("VKWebAppInit");
			bridge.send("VKWebAppGetUserInfo");
			bridge.subscribe((e) => {
			if(e.type == "VKWebAppGetUserInfoResult") {
			   console.log(e.data.status);
			}});
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

