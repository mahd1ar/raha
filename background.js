chrome.tabs.onActivated.addListener(function(activeInfo) {

});

chrome.extension.onMessage.addListener(function(myMessage, sender, sendResponse){
    //do something that only the extension has privileges here
    console.log(myMessage)
})