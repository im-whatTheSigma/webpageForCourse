export default function handler(req, res) {
    // Only allow POST requests for the login form
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // The target credentials for the students to brute force
        const TARGET_USERNAME = 'admin';
        const TARGET_PASSWORD = 'avrillavigne'; // Change this to whatever password you want them to guess
        const FLAG = 'FLAG{brut3_f0rc3_m4st3r_2026}'; // Change this to your desired flag

        if (username === TARGET_USERNAME && password === TARGET_PASSWORD) {
            // Success response
            res.status(200).send(`
                <h2>Login Successful</h2>
                <p>Welcome back, admin.</p>
                <p><strong>${FLAG}</strong></p>
            `);
        } else {
            // Failure response
            res.status(401).send(`
                <h2>Login Failed</h2>
                <p>Invalid credentials. Please try again.</p>
            `);
        }
    } else {
        res.status(405).send('Method Not Allowed. Please use POST.');
    }
}
