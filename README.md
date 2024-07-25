# Image Scraper Script

This repository contains a JavaScript script designed to extract image information from a webpage.

## Features

- Simulates scrolling to the bottom of the page to trigger lazy-loaded images.
- Extracts image `src` and `alt` attributes from specified `div` elements.
- Changes the image URL parameters to a fixed width and height, and quality setting.
- Clicks the "Next" button to navigate through paginated content.
- Waits for 10 seconds to ensure all elements are loaded before processing.
- Downloads the extracted data as a CSV file.

## Usage

1. Open the web page with the desired content.
2. Open the browser's console (usually by pressing `F12` or `Ctrl+Shift+I` and navigating to the Console tab).
3. Copy and paste the contents of `script.js` into the console and press Enter.

## Script Details

The script performs the following steps:

1. Scrolls to the bottom of the page to load all images.
2. Waits for 10 seconds to ensure that all images are loaded.
3. Extracts image information and saves it in a CSV format.
4. Clicks the "Next" button to load additional pages and repeats the process.
5. Once all pages are processed, the CSV file is downloaded automatically.

## Notes

Make sure to update the script with the correct class names that match your webpage's structure. The provided script uses placeholder class names like `random-class` and `random-next-button` that should be replaced with actual class names from your webpage.
