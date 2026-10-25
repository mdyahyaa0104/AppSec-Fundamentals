const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', async () => {
    const username = document.getElementById('userInput').value;
    const password = document.getElementById('passInput').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json()

        if(data.success) {
            document.getElementById('displayUserSpan').innerText = `${data.username}, ${data.email}`;
        }
    } catch (err) {
        console.error(err);
    }
});
