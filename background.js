// background.js

chrome.action.onClicked.addListener(function (tab) {
    console.log('Extension icon clicked');
    
    if (tab.url.includes('linkedin.com')) {
        console.log('Tab is on LinkedIn');

        // Navigate to the specified URL
        chrome.tabs.update(tab.id, { url: 'https://www.linkedin.com/in/deanofwalls/opportunities/job-opportunities/edit/?jobOpportunitiesOrigin=SELF_VIEW_EDIT&trackingCode=opento_sprofile_details' }, function() {
            console.log('Navigated to URL');

            // Inject content script when the tab is fully loaded
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: () => {
                    // Function to perform the desired actions with delays
                    function performActionsWithDelays() {
                        console.log('Performing actions...');
                        
                        // Delay before clicking the delete button
                        setTimeout(() => {
                            const deleteButton = document.querySelector('#ember95');
                            if (deleteButton) {
                                deleteButton.click();
                                console.log('Clicked the delete button');
                            }
                        
                            // Delay before clicking the confirm delete button
                            setTimeout(() => {
                                const confirmDeleteButton = document.querySelector('#ember246');
                                if (confirmDeleteButton) {
                                    confirmDeleteButton.click();
                                    console.log('Clicked the confirm delete button');
                                }
                            
                                // Delay before replacing content
                                setTimeout(() => {
                                    const customHTML = `
                                        <!-- Your custom HTML code here -->
                                    `;
                                    const contentToReplace = document.querySelector('#ember598 > div');
                                    if (contentToReplace) {
                                        contentToReplace.innerHTML = customHTML;
                                        console.log('Replaced content with custom HTML');
                                    }
                                    
                                    // Delay before clicking the save button
                                    setTimeout(() => {
                                        const saveButton = document.querySelector('#ember86');
                                        if (saveButton) {
                                            saveButton.click();
                                            console.log('Clicked the save button');
                                        }
                                    }, 3000); // Adjust this delay as needed
                                }, 3000); // Adjust this delay as needed
                            }, 3000); // Adjust this delay as needed
                        }, 3000); // Adjust this delay as needed

                        // Post a message to the background script when actions are completed
                        window.postMessage({ action: 'completedActions' }, '*');
                    }
                    
                    // Execute the actions with delays when the extension is clicked
                    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
                        if (message.action === 'performActions') {
                            console.log('Received message from background script');
                            performActionsWithDelays();
                        }
                    });
                },
            });
        });
    } else {
        console.log('Tab is not on LinkedIn');
    }
});
