const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>AWS Elastic Beanstalk Lab</title>
            </head>

            <body style="font-family: Arial; text-align: center; margin-top: 100px;">
                <h1>🚀 AWS Elastic Beanstalk</h1>

                <h2>Node.js Application</h2>

                <p>Application deployed successfully!</p>

                <p>
                    GitHub → Elastic Beanstalk → EC2
                </p>

                <p>
                    <strong>Status:</strong> 
                    <span style="color: green;">Healthy</span>
                </p>
            </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "elastic-beanstalk-nodejs"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});git add .
git commit -m "Create Node.js Elastic Beanstalk application"
git push