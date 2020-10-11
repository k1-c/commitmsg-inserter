import * as fs from 'fs';

// get 1st argument
const msgFilePath: string = process.argv[2];
insertGitMessage(msgFilePath);

function insertGitMessage(msgFilePath: string): void {
  const message = fs.readFileSync(msgFilePath, 'utf-8');
  console.log('received message: ' + message);
}
