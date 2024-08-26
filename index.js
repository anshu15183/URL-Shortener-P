async function shortenUrl() {
    // Get the long URL from the input field
    const longUrl = document.getElementById("longUrl").value;

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    const body = {
        url: longUrl,
        domain: "tiny.one", // Change to your preferred domain if necessary
    };

    try {
        // Send POST request to TinyURL API
        const response = await fetch(
            "https://api.tinyurl.com/create?api_token=ixGSvugG5NP8egFv4JVG7YIvq2UFNCB6Alq1xVLQxFmEQXNMB44Zx6jln9xE",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        );

        // Parse the JSON response
        const jsonResponse = await response.json();
        const tinyUrl = jsonResponse.data.tiny_url;
        const fullUrl = jsonResponse.data.url;

        // Display the banner and output
        document.getElementById("result").innerHTML = `
        
        <p>Hey, your Long Boi URL: ${fullUrl}</p>
        <p>Now Shortboi URL: ${tinyUrl}</p>
    `;
    } catch (error) {
        console.error("Error shortening the URL:", error);
        document.getElementById("result").textContent = "Error shortening the URL. Please try again.";
    }
}