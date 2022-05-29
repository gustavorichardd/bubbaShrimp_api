const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { S3Client } = require("@aws-sdk/client-s3");
require("dotenv").config();

const s3Client = new S3Client({ region: process.env.AWS_BUCKET_REGION });

const uploadFile = async (filename, filecontent) => {
   try {
      const results = await s3Client.send(new PutObjectCommand({
         Bucket: process.env.AWS_BUCKET_NAME,
         Key: filename,
         Body: filecontent
      }));

      return results;
   } catch (err) {
      console.log("Error", err);
   }
};


module.exports = uploadFile