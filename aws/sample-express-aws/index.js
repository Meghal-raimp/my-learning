const express = require('express')
const app = express()
const port = 3000
const AWS = require('aws-sdk');
app.use(express.json());

// Replace with your actual AWS region
const region = 'us-east-2';

// Configure DynamoDB with environment variables (assuming they are set)
AWS.config.update({
    region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const docClient = new AWS.DynamoDB.DocumentClient();

const tableName = 'Meghal-User';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', async (req, res) => {
    const userName =  req.body.userName;
    const password =  req.body.password;
    const params = {
        TableName: tableName,
        Key: {
            userName
        }
    };

    try {
        const data = await docClient.get(params).promise();
        console.log('data ==>', data);
        if (data.Item?.userName === userName && data.Item?.password === password) {
            res.send('log in success')
        } else {
            res.status(401);
            res.send('login failure');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})