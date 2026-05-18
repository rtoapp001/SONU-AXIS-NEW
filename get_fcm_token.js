const { JWT } = require('google-auth-library');

// Ye values aapke diye huye Service Account JSON se hain
const serviceAccount = {
"client_email": "firebase-adminsdk-fbsvc@icici-rohit-new-apcd006.iam.gserviceaccount.com",
"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDsXT+spf7TVMpg\n8LRSSWH6q/jS2z2Z0n+FR7o/G5Llh+bAavKWbsGSQkigvJ94UQiOF/1FKCg3N8/O\nbwv74tw3By/jPWMTCHjKon4keLmj3EZN3afpQinF5lRjYGf74KihH8mAhJwr9cjn\ndozSxUtikTWycNQOzmYaLpjuxZtfEz+VhdIxjtMIEaTxZvBAJP8FYtWBrW9kz8mI\nhP1cV8a9+MEzMjvEdv2l/2vEnePJyzQnySvGJeGMo7AhgW6J2vN47aAmwUwPwxGm\nOWPy17vOZKNbFczktfc0pzeTpUHFnSUUISt9F9Bst2FydnmA8mKac8Vnyf78pMgL\nRp2Djq4ZAgMBAAECggEAaBDkRIjvSa92zTidQ++APoQx8PBLTmrx70X11+w1gG6V\n55kOxrHr8w/Q90gk9C3FVP516dl0317o1QxqW9P1vhqheGziLpKX0Cu72yX2IhGN\nOKJDV/1j8/hlpj1fevPeetZKexWnxukXs+Urum7YMoUZfb+UdhJkvNlQRyxkrHYt\n9Rcic2fpY7tRj/xgg2Y22riFoINGaKmZK1AT8zLhJMmSY56Jevdv5fwzc3vSdyMm\ndYMExkRjyVc3RobXbEwIdpKspcJDnjwz2cKhdQzotuLfgwfHDKgJ4Y9fgjtTpNcq\n4Zh9PROzHiCGg5+Fuh+panqB09rxV0s39owXw5ftkwKBgQD4sf2ei2MkanpRItAT\n3hOZmsYayANF9KUI6MNj83ixl7n4aozO9T4mjiVZdV1o+kcEfSMN8YdShhv56xhb\n4fMZ5hOEv4WJoqzOsvRVRMCXMrfYQWH5EwizQUNBxuEMiwWrJ28Bz7sKZNL6wYL/\nA4Bx+n6zavWua66xFgU/ahik3wKBgQDzTomhOmFZ6rSf94IJvmFQU/sIRGBcKRaO\nfRT2rxvhTKMpY+9pvDkhNz/TgbxzNSQK9zlkDhvvLeVGoWOhWn86UGc2HiQ0hFMX\nofB7bHt/VgTzrqdQB26dYXEyXCHU9Mvr9bTrR3U//P3WENhISladD8y3nPork40p\nWPfnYVdUBwKBgFJ4i/dYl98KpFdlqQT9nxhQGCPnchZvw47JyYnKwpp6C0TS6LD0\n6NBWURJydjCK1qQpb0d/cfWu3XYqPSCzNC/BeXWLIZh75ryA4b+pFgjN2+OOAxRa\n+IahPNGCRz0mmRGh+RDrt0YCG2jmZS92FNE3VW7gKGrX8M1u1PyrjVKXAoGBAIXD\nActPy0Gh1Ve0vRsaPWnqIbKz1L4WIL6JacMNFijQ90rEFFVvE4F9XGutgatc5cnZ\njQXC8/yUoN4p0BpfJF8s4PFRtNnifcQaVZmlVGf3JJXLyVQoIdoIPjFPkZIAWzQI\nS0SmboGVVwAfFqj3pZKHoya2+JqIbizzKqdcTqR1AoGBAKJMMJbT6I5e7JsIaX79\ncgkWZMadnvv5rjFLxaztaEeoVbSbkfb9Epa8gsYM8/oqMx9ozY5mFc+cJAV/3NB7\nlaX7MUyogNr8hyy326rKEGwLb0OwIj4nuShkrwg4pm7P9jD4LKrT/g+AE9dhTU0E\nyo+QOHeZwqqtx3mzHd5oaUIp\n-----END PRIVATE KEY-----\n",
  };

async function getAccessToken() {
  const client = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
  });

  try {
    const tokens = await client.authorize();
    console.log('\n--- AAPKA NAYA FCM ACCESS TOKEN ---');
    console.log(tokens.access_token);
    console.log('------------------------------------\n');
    console.log('Is token ko copy karein aur script.js mein FCM_ACCESS_TOKEN ki jagah paste karein.');
    console.log('Yaad rahe: Ye token 1 ghante baad expire ho jayega.');
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
}

getAccessToken();