import fs from 'fs';
import Client from 'ssh2-sftp-client';

const sftp = new Client();
function uploadDataToClient(){
  try {
    await this.sftp.connect({
      host: String(process.env.HOST),
      password: password,
      port: port,
      username: username,
    });

    //example of csv
    const remote = `./path/filename.csv`;
    const fileName = yourname.csv
    
    //1st way
    // /tmp is for aws-lambda
    const writerStream = fs.createWriteStream(`/tmp/${fileName}`);
    
    //your csv file
    writerStream.write(csv);
    
    // /tmp is for aws-lambda
    const reader = fs.createReadStream(`/tmp/${fileName}`);

    await this.sftp.put(reader, remote);
    //1st way end
    
    
    //2nd way with buffer
    const csvToPass = Buffer.from(fileName, 'utf-8');
    await this.sftp.put(csvToPass, remote);
    
    return this.sftp;
  } catch (err) {
    utilLogger.error({ err });
    throw new Error('Unexcepted execption');
  }
}
