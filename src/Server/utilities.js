
const axios = require('axios');
const {MongoClient} = require('mongodb');




//send email acknowledging interest function
/*
This function was created using the microsoftgraphAPI, 
the code below allows you to send emails from a outlook email address that you own without a user being signed in, on a server
check out the following documnetation for any questions on how it works, or contact me at: troycampbell11@aol.com

to get your tenant id, client_id and client_secret sign in at https://azure.microsoft.com/en-us/products/active-directory/ register an app. 
for further instructions take a look through the following documentation: 
https://learn.microsoft.com/en-us/graph/auth-v2-service



*/
const sendMail = async({name, email, message,}) =>{
    // gain access to the access token 
    const token_url = 'https://login.microsoftonline.com/[insert your tenant id here]/oauth2/v2.0/token';
    const token_data= new URLSearchParams({
                client_id:'[insert your client id here]',
                scope:'https://graph.microsoft.com/.default',
                client_secret:'[insert your client secret here]',
                grant_type:'client_credentials'
            });

            const token_config ={
                method:'post', 
                url: token_url, 
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: token_data,

            }
            try{
                const {data} = await axios(token_config);
                const token= data.access_token
              

                const mail_config ={
                    method:'post', 
                    url:'https://graph.microsoft.com/v1.0/users/[user principla name (this will probably be the email address that you wish to send from)]/sendMail',
                    headers:{
                        'Authorization': `Bearer ${token}`,
                         'Content-Type': 'application/json',
                    },
                    data: { message:{
                        subject:'Thanks for registering interest',
                        body:{
                            contentType:'Text', 
                            content:`Hi ${name}, Thanks for registering interest, [add more messages here and maybe a ternary operator or something to resend the message they sent and let them know that you've recieved it if the message parameter is truthy] `
                        }, 
                        toRecipients: [
                            {
                              emailAddress: {
                                address: email
                              }
                            }
                          ],
                        }
                    
                    }
                   
                }
                const response = await axios(mail_config);
                const result = response.data
                console.log(result)
            } catch(error){
                console.log(error.message)
            }
}

/* 
While requesting a new access token for every API call will work, it is not the most efficient way to handle authentication. Continuously requesting new access tokens may add unnecessary overhead and delays to your requests, as well as put extra load on the authentication server.

Instead, you should request an access token once and reuse it for subsequent API calls until it expires. Access tokens typically have an expiration time (e.g., 1 hour), which should be provided in the authentication response.

To improve your code, you can follow these steps:

Request an access token and store it in a variable (e.g., access_token).
Store the expiration time (usually provided in the authentication response) in another variable (e.g., expiration_time).
Before making an API call, check if the current time is close to or past the expiration time. If it is, request a new access token and update the access_token and expiration_time variables.
Use the access_token variable for your API calls.
*/


//Function setting up database --> This code is meant to be used with mongodb, but you can use any db you please 

const db = async(connectionString, app) =>{
    const client = new MongoClient(connectionString);

    try{
        await client.connect();
        // connect to app.locals object for easy access
        app.locals.db = client.db('{input database name}')
        console.log("++database Connected")
    } catch(error){
        await client.close();
        throw new Error('Database connection error')
    }
}







module.exports.db = db;
module.exports.sendMail = sendMail;





