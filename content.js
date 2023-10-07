// content.js

// Function to perform the desired actions
function performActions() {
    console.log('Performing actions...');

    // Delay before looking for elements
    setTimeout(() => {
        // Find all buttons with the text "Delete from profile"
        const deleteButtons = [...document.querySelectorAll('button')].filter(button => button.textContent.includes('Delete from profile'));

        if (deleteButtons.length > 0) {
            // Click the first "Delete from profile" button found
            deleteButtons[0].click();
            console.log('Clicked "Delete from profile" button');

            // Delay before confirming deletion
            setTimeout(() => {
                // Find all buttons with the text "Delete"
                const confirmDeleteButtons = [...document.querySelectorAll('button')].filter(button => button.textContent.includes('Delete'));

                if (confirmDeleteButtons.length > 0) {
                    // Click the first "Delete" button found
                    confirmDeleteButtons[0].click();
                    console.log('Clicked "Delete" button');

                    // Reload the page
                    location.reload();
                    console.log('Page reloaded');
                } else {
                    console.log('No "Delete" button found');
                }
            }, 1000); // Adjust this delay as needed
        } else {
            console.log('No "Delete from profile" button found');
        }
    }, 1000); // Adjust this delay as needed
}

// Execute the actions when the extension is clicked
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'performActions') {
        console.log('Received message from background script');
        performActions();
    }
});