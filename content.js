// content.js

// Function to perform the desired actions
function performActions() {
    console.log('Performing actions...');

    // Function to wait for specific text to appear
    function waitForText(text, callback) {
        const observer = new MutationObserver(function (mutations, observer) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes) {
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        const node = mutation.addedNodes[i];
                        if (node.textContent.includes(text)) {
                            observer.disconnect();
                            callback(node);
                        }
                    }
                }
            });
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }

    // Wait for the text "Delete from profile" to appear
    waitForText("Delete from profile", function () {
        const deleteButton = document.querySelector('button:contains("Delete from profile")');
        if (deleteButton) {
            deleteButton.click();
            console.log('Clicked "Delete from profile" button');
            
            // Wait for the text "Delete" to appear
            waitForText("Delete", function () {
                const confirmDeleteButton = document.querySelector('button:contains("Delete")');
                if (confirmDeleteButton) {
                    confirmDeleteButton.click();
                    console.log('Clicked "Delete" button');

                    // Delay before replacing content
                    setTimeout(() => {
                        const customHTML = `
                            <!-- Your custom HTML code here -->
                        `;
                        const contentToReplace = document.querySelector('#ember598 > div');
                        if (contentToReplace) {
                            contentToReplace.innerHTML = customHTML;
                            console.log('Replaced content with custom HTML');

                            // Wait for the text "Save" to appear
                            waitForText("Save", function () {
                                const saveButton = document.querySelector('button:contains("Save")');
                                if (saveButton) {
                                    saveButton.click();
                                    console.log('Clicked "Save" button');
                                } else {
                                    console.log('No "Save" button found');
                                }
                            });
                        } else {
                            console.log('Content element not found for replacing');
                        }
                    }, 3000); // Adjust this delay as needed
                } else {
                    console.log('No "Delete" button found');
                }
            });
        } else {
            console.log('No "Delete from profile" button found');
        }
    });
}

// Execute the actions when the extension is clicked
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'performActions') {
        console.log('Received message from background script');
        performActions();
    }
});
