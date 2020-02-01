module.exports.Log = function Log(text)
{
	var today = new Date();
	var formattedDate = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	console.log("[" + formattedDate + "]", text);
}
