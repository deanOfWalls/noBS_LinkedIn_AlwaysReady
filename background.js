// background.js

chrome.action.onClicked.addListener(function (tab) {
    console.log('Extension icon clicked');
    
    if (tab.url.includes('linkedin.com')) {
        console.log('Tab is on LinkedIn');

        // Send a message to the content script to perform actions
        chrome.scripting.sendMessage({ tabId: tab.id, action: 'performActions' }, function(response) {
            if (chrome.runtime.lastError) {
                console.error('Error while sending message to content script:', chrome.runtime.lastError);
            } else {
                console.log('Message sent to content script');
            }
        });
    } else {
        console.log('Tab is not on LinkedIn');
    }
});
