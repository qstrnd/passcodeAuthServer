import { generateRegistrationOptions } from '@simplewebauthn/server';
import { isoUint8Array } from '@simplewebauthn/server/helpers'; 

interface User {
    id: string;
    username: string;
    credentials: any[];
}
  
  // In-memory database
const userDB: Record<string, User> = {};

// Function to generate registration options
function generateUserRegistrationOptions(username: string) {
  // Check if user already exists
  const existingUser = userDB[username];
  if (!existingUser) {
    // Create a new user if it doesn't exist
    const userId = crypto.randomUUID();
    userDB[username] = {
      id: userId,
      username: username,
      credentials: [],
    };
  }

  const user = userDB[username];

  // Generate registration options for the user
  const options = generateRegistrationOptions({
    rpName: 'Example App',
    rpID: 'localhost',
    userName: user.username,
    attestationType: 'none',
    authenticatorSelection: {
      residentKey: 'required',
      userVerification: 'preferred',
    }
  });

  return options;
}