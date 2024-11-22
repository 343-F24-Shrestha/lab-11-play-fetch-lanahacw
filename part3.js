const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');
const wordInput = document.getElementById('word-input');

// Event listener for the Dictionary API button
document.getElementById('api-1-btn').addEventListener('click', async () => {
    try {
        const word = wordInput.value.trim() || "example";  // Trim spaces and default to "example"
        const url1 = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        const response1 = await fetch(url1);

        // Check if the response is okay (status code 200)
        if (!response1.ok) {
            output1.textContent = `Error: ${response1.status} - Word not found or invalid request.`;
        } else {
            const data1 = await response1.json();  // Directly parse the response as JSON
            console.log(data1);

            // Display the definitions from the API response
            if (data1[0] && data1[0].meanings) {
                const definitions = data1[0].meanings.map(meaning => meaning.definitions[0].definition);
                output1.textContent = `Definitions for "${word}":\n${definitions.join('\n')}`;
            } else {
                output1.textContent = `No definitions found for "${word}".`;
            }
        }
    } catch (error) {
        output1.textContent = `Error: ${error.message}`;
    }
});

// Event listener for the Dog Facts API button
document.getElementById('api-2-btn').addEventListener('click', async () => {
    try {
        const url2 = "https://corsproxy.io/?https://dog-api.kinduff.com/api/facts";

        const response2 = await fetch(url2);

        // Check if the response is okay (status code 200)
        if (!response2.ok) {
            output2.textContent = `Error: ${response2.status} - Failed to fetch dog facts.`;
        } else {
            const data2 = await response2.json();  // Parse the response as JSON
            console.log(data2);

            // Get the dog fact from the response
            const randomFact = data2.facts[0];  // The API returns an array under "facts"
            output2.textContent = `Random Dog Fact:\n${randomFact}`;
        }
    } catch (error) {
        output2.textContent = `Error: ${error.message}`;
    }
});