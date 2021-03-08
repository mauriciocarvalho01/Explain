const fs = require('fs');
const { google } = require('googleapis');
import getCourses from '../actions/getCourses';
import environmentsVar from '../../config/env/next.config';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const handler = async (req, res) => {
    if (req) { var { code } = req.body };

    console.log(`*************${code}*****************`)

    try {


        const SCOPES = environmentsVar.SCOPES;/* [
        //     'https://www.googleapis.com/auth/classroom.courses',
        //     'https://www.googleapis.com/auth/classroom.courses.readonly',

        // ];*/
        // The file token.json stores the user's access and refresh tokens, and is
        // created automatically when the authorization flow completes for the first
        // time.

        // If modifying these scopes, delete token.json.
        const TOKEN_PATH = 'src/pages/api/config/google/token/sinchro_tkn.json';
        const PATH_CREDENTIALS = 'src/pages/api/config/google/credentials/credentials.json';

        if (!code) {
            // Especificamos o nome e extensão do arquivo a ser deletado
            fs.unlink(TOKEN_PATH, function (err) {
                if (err) {
                    console.log(`Arquivo [${TOKEN_PATH}] não encontrado!`);
                } else {
                    console.log(`Arquivo [${TOKEN_PATH}] deletado!`);
                }
            })

        }

        // Load client secrets from a local file.
        fs.readFile(PATH_CREDENTIALS, (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Classroom API.
            authorize(JSON.parse(content), sincronize);
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
            !code && authUrl ? res.send({ status: 200, url: authUrl }) : res.send({ status: 200 });
            // const rl = readline.createInterface({
            //     input: process.stdin,
            //     output: process.stdout,
            // });
            const insertCode = ((code) => {
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

            code ? insertCode(code) : false;
        }

        /**
     * Lists the first 10 courses the user has access to.
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
        //PRECISO INSERIR AS INFORMAÇÕES DO CURSO NO BANCO
        async function sincronize(auth) {
            const classroom = google.classroom({ version: 'v1', auth });
            const coursesIds = await getCourses(classroom);
            console.log(coursesIds);
        }

    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }

}







export default handler;
