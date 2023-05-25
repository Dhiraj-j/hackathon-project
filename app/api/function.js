import { Client, Account, ID } from "appwrite";

export const signUp = () => {
    console.log("first");
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('646368b56575d97fc4b8');               // Your project ID

    const account = new Account(client);

    // Register User
    account.create(
        ID.unique(),
        'me@example.com',
        'password',
        'Jane Doe'
    ).then(response => {
        console.log(response);
    }, error => {
        console.log(error);
    });

}

