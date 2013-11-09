// chrome.tabs.insertCSS(tab.id, {file: 'css.css', "allFrames": true}, function() {
//     // console.log('css file has inserted.');
// });
// *************************************************
// * Chrome browserAction.onClicked Listener
// *************************************************
chrome.browserAction.onClicked.addListener(function(tab)
{
  alert("Backgournd.js running...");
	// console.log('InsertCSS browserAction click');
	// chrome.tabs.insertCSS(tab.id, {file: 'css.css', "allFrames": true}, function() {
	// 	// console.log('css file has inserted.');
	// });
});
