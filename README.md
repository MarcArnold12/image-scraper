<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Scraper Script</title>
</head>
<body>
    <h1>Image Scraper Script</h1>
    <p>This repository contains a JavaScript script designed to extract image information from a webpage.</p>
    
    <h2>Features</h2>
    <ul>
        <li>Simulates scrolling to the bottom of the page to trigger lazy-loaded images.</li>
        <li>Extracts image <code>src</code> and <code>alt</code> attributes from specified <code>div</code> elements.</li>
        <li>Changes the image URL parameters to a fixed width and height, and quality setting.</li>
        <li>Clicks the "Next" button to navigate through paginated content.</li>
        <li>Waits for 10 seconds to ensure all elements are loaded before processing.</li>
        <li>Downloads the extracted data as a CSV file.</li>
    </ul>

    <h2>Usage</h2>
    <ol>
        <li>Open the web page with the desired content.</li>
        <li>Open the browser's console (usually by pressing <code>F12</code> or <code>Ctrl+Shift+I</code> and navigating to the Console tab).</li>
        <li>Copy and paste the contents of <code>script.js</code> into the console and press Enter.</li>
    </ol>

    <h2>Script Details</h2>
    <p>The script performs the following steps:</p>
    <ol>
        <li>Scrolls to the bottom of the page to load all images.</li>
        <li>Waits for 10 seconds to ensure that all images are loaded.</li>
        <li>Extracts image information and saves it in a CSV format.</li>
        <li>Clicks the "Next" button to load additional pages and repeats the process.</li>
        <li>Once all pages are processed, the CSV file is downloaded automatically.</li>
    </ol>

    <h2>Notes</h2>
    <p>Make sure to update the script with the correct class names that match your webpage's structure. The provided script uses placeholder class names like <code>random-class</code> and <code>random-next-button</code> that should be replaced with actual class names from your webpage.</p>
</body>
</html>
