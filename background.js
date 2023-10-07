// background.js

chrome.action.onClicked.addListener(function (tab) {
    console.log('Extension icon clicked');
    
    if (tab.url.includes('linkedin.com')) {
        console.log('Tab is on LinkedIn');

        // Inject content script when the tab is fully loaded
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                // Function to perform the desired actions with delays
                function performActionsWithDelays() {
                    console.log('Performing actions...');
                    
                    // Delay before clicking the delete button
                    setTimeout(() => {
                        const deleteButton = document.querySelector('button:contains("Delete from profile")');
                        if (deleteButton) {
                            deleteButton.click();
                            console.log('Clicked the delete button');
                        }
                    
                        // Delay before clicking the confirm delete button
                        setTimeout(() => {
                            const confirmDeleteButton = document.querySelector('button:contains("Delete")');
                            if (confirmDeleteButton) {
                                confirmDeleteButton.click();
                                console.log('Clicked the confirm delete button');
                            }
                        
                            // Reload the page
                            location.reload();
                            console.log('Page reloaded');
                        }, 1000); // Adjust this delay as needed
                    }, 1000); // Adjust this delay as needed
                }
                
                // Execute the actions with delays when the extension is clicked
                chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
                    if (message.action === 'performActions') {
                        console.log('Received message from background script');
                        performActionsWithDelays();
                    }
                });
            },
        }, function () {
            // Send a message to the content script with a delay
            setTimeout(function () {
                const message = { action: 'performActions' };
                chrome.scripting.sendMessage({
                    target: { tabId: tab.id },
                    message: message,
                });
            }, 2000); // Adjust this delay as needed
        });
    } else {
        console.log('Tab is not on LinkedIn');
    }
});
