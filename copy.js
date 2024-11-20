function copyPromptText() {
    // Select the text from the paragraph
    const promptText = document.getElementById("promptText").innerText;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(promptText)
        .then(() => {
            console.log('Text copied to clipboard');
            // alert('Prompt copied to clipboard!'); // Optional: Notify user
        })
        .catch(err => {
            console.error('Error copying text: ', err);
            alert('Failed to copy text'); // Optional: Notify user of failure
        });
}