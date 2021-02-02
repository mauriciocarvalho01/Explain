const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const handler = async (req, res) => {

    try {


        // If modifying these scopes, delete token.json.
        const SCOPES = process.env.SCOPES;
        // The file token.json stores the user's access and refresh tokens, and is
        // created automatically when the authorization flow completes for the first
        // time.


        const TOKEN_PATH = 'src/pages/api/config/google/token.json';
        const PATH_CREDENTIALS = 'src/pages/api/config/google/credentials.json'

        // Load client secrets from a local file.
        fs.readFile(PATH_CREDENTIALS, (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Classroom API.
            authorize(JSON.parse(content), listCourses);

        });

        /**
         * Create an OAuth2 client with the given credentials, and then execute the
         * given callback function.
         * @param {Object} credentials The authorization client credentials.
         * @param {function} callback The callback to call with the authorized client.
         */
        function authorize(credentials, callback) {

            const { client_secret, client_id, redirect_uris } = credentials.web;

            const oAuth2Client = new google.auth.OAuth2(
                client_id, client_secret, redirect_uris[0]);

            // //Check if we have previously stored a token.
            fs.readFile(TOKEN_PATH, (err, token) => {
                if (err) return getNewToken(oAuth2Client, callback);
                oAuth2Client.setCredentials(JSON.parse(token));
                callback(oAuth2Client);
            });
        }

        /**
         * Get and store new token after prompting for user authorization, and then
         * execute the given callback with the authorized OAuth2 client.
         * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
         * @param {getEventsCallback} callback The callback for the authorized client.
         */
        function getNewToken(oAuth2Client, callback) {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                oAuth2Client.getToken(code, (err, token) => {
                    if (err) return console.error('Error retrieving access token', err);
                    oAuth2Client.setCredentials(token);
                    //  Store the token to disk for later program executions
                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                        if (err) return console.error(err);
                        console.log('Token stored to', TOKEN_PATH);
                    });
                    callback(oAuth2Client);
                });
            });
        }

        /**
         * Lists the first 10 courses the user has access to.
         *
         * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
         */
        function listCourses(auth) {
            const classroom = google.classroom({ version: 'v1', auth });
            classroom.courses.courseWork.list({
                courseId: 74347591179,
                pageSize: 10,
            }, (err, res) => {
                if (err) return console.error('The API returned an error: ' + err);
                const courses = res.data.courses;
                if (courses && courses.length) {
                    console.log('Courses:');
                    courses.forEach((course) => {
                        console.log(`${course.name} (${course.id})`);
                    });
                } else {
                    console.log('No courses found.');
                }

                console.log(res.data);
            });
        }

    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}

export default handler;
