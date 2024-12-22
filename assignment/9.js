let errorhandling = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
        if (!response.ok) {
            throw new Error("Network problem: Unable to fetch data.");
        }
        let data = await response.json();
        console.log("Data retrieved:", data);
    } catch (error) {
        // Display error message on the webpage
        console.error("Error occurred:", error.message);
        document.body.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
};

errorhandling();
