const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');
const wordInput = document.getElementById('word-input');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.
    try {
        const word = wordInput.value.trim() || "example";  
        const url1 = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        const response1 = await fetch(url1);
        if (!response1.ok) {
            output1.textContent = `Error: ${response1.status} - Word not found or invalid request.`;
        } else {
            const data1 = await response1.json(); 
            console.log(data1);
            if (data1[0] && data1[0].meanings) {
                const definitions = data1[0].meanings.map(meaning => meaning.definitions[0].definition);
                output1.textContent = `Definition of "${word}":\n${definitions.join('\n')}`;
            } else {
                output1.textContent = `No definition found for "${word}".`;
            }
        }
    } catch (error) {
        output1.textContent = `Error: ${error.message}`;
    }
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    // Make a request to your second API here. Put the response's data in output-2.
    // If your response has no body, put the status code in output-2.
    try {
        const url2 = "https://dog-api.kinduff.com/api/facts";
        const response2 = await fetch(url2);
        if (!response2.ok) {
            output2.textContent = `Error: ${response2.status} - Failed to fetch.`;
        } else {
            const data2 = await response2.json();  
            console.log(data2);
            const randomFact = data2.facts[0];  
            output2.textContent = `Dog Fact:\n${randomFact}`;
        }
    } catch (error) {
        output2.textContent = `Error: ${error.message}`;
    }
});