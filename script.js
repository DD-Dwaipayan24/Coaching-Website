const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const text = await response.text();
        message.textContent = text;
        form.reset();
    } catch (error) {
        message.textContent = 'Error: ' + error.message;
    }
    app.post('/register', (req, res) => {
  console.log('REQ.BODY:', req.body);
  res.send('Check your console log');
});
});
