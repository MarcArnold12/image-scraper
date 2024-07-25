// script.js

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function scrollToBottom(callback) {
    let totalHeight = 0;
    const distance = 100;

    const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            callback();
        }
    }, 100);
}

function extractImageInfo(csvData) {
    const divs = document.querySelectorAll('div[class*="random-class"]');
    
    divs.forEach(div => {
        const img = div.querySelector('img');
        if (img) {
            const randomString = generateRandomString(5);
            let src = img.src.replace('Flarger', 'Fmain');
            src = src.replace(/height=\d+/, 'height=2000').replace(/width=\d+/, 'width=2000').replace(/quality=\d+/, 'quality=100');
            const alt = img.alt.replace(/,/g, ''); // Remove commas from alt text to prevent CSV issues
            csvData.push(`${randomString},${src},${alt}`);
        }
    });
}

function clickNextButton(callback) {
    const nextButton = document.querySelector('a[class*="random-next-button"]');
    if (nextButton) {
        nextButton.click();
        setTimeout(callback, 10000); // Wait for 10 seconds for the next page to load
    } else {
        // No more next button, download CSV
        callback(null);
    }
}

function processPages(csvData) {
    scrollToBottom(() => {
        setTimeout(() => {
            extractImageInfo(csvData);
            clickNextButton((hasNextPage) => {
                if (hasNextPage !== null) {
                    processPages(csvData);
                } else {
                    downloadCSV(csvData.join('\n'), 'image_data.csv');
                }
            });
        }, 10000); // Wait for 10 seconds to ensure all images are loaded
    });
}

(function start() {
    const csvData = ['random_string,src,alt'];
    processPages(csvData);
})();
