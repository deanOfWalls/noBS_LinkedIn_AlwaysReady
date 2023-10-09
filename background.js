chrome.action.onClicked.addListener((tab) => {
    // Replace the alert with your desired action code
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        // This code will be executed in the active tab when the extension icon is clicked
        // Modify this code to perform the desired action on the LinkedIn page
        // Example: Click a button or interact with the page
        console.log("Extension icon clicked. Perform your action here.");
      },
    });
  });
  