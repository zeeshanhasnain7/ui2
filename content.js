(function() {
    'use strict';

    // Function to toggle between "old ui" and "new ui" and update the button text accordingly
    function toggleUI() {
        var iframe = document.getElementsByTagName('iframe')[0];
        if (iframe) {
            // Get the current URL of the iframe
            var currentUrl = iframe.src;

            // Check if the current URL contains "uiVersion=v1" or "uiVersion=v2"
            if (currentUrl.includes('uiVersion=v1')) {
                // Replace "uiVersion=v1" with "uiVersion=v2" in the URL
                var newUrl = currentUrl.replace('uiVersion=v1', 'uiVersion=v2');

                // Load the new URL in the iframe
                iframe.src = newUrl;

                // Change the button text to "old ui"
                button.innerHTML = 'old ui';
            } else if (currentUrl.includes('uiVersion=v2')) {
                // Replace "uiVersion=v2" with "uiVersion=v1" in the URL
                var newUrl = currentUrl.replace('uiVersion=v2', 'uiVersion=v1');

                // Load the new URL in the iframe
                iframe.src = newUrl;

                // Change the button text to "new ui"
                button.innerHTML = 'new ui';
            }
        }
    }

    // Function to add the "old ui" button
    function addButton() {
        var headerTag = document.getElementsByTagName('header')[0];
        if (headerTag) {
            var button = document.createElement('button');
            button.innerHTML = 'old ui';
            headerTag.appendChild(button);

            // Add event listener to the button
            button.addEventListener('click', toggleUI);
        }
    }

    // Delay execution by 3 seconds using setTimeout
    setTimeout(addButton, 3000);
})();
