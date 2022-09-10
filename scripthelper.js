import fs from "fs";
import parseMD from "parse-md";
import path from 'path'
import axios from "axios";
import 'dotenv/config'

// this function returns state of an issue
export const getIssueState = async (issueUrl) => {
  try{
    const response = await axios.get(issueUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        // done with personal GitHub token
        Authorization: `token ${process.env.ACCESS_TOKEN}`
      },
    })
    if(response !== null){
      return response.data.state;
    }
  }
  catch (err){
    console.log(err)
  }
};

// this function change the issue URL to GitHub api URL
export const getIssueNumber = (link) => {
  const regex = /\d+/g;
  const issueNumber = link.match(regex);
  return issueNumber[0];
};

export const getAllAvailableGithubIssueLinks = (mdFile) => {
  const fileContents = fs.readFileSync(mdFile, "utf8");
  const { content } = parseMD(fileContents);
  const regex = /https?:\/\/github\.com\/(?:[^\/\s]+\/)+(issues\/\d+)/g;
  return content.match(regex);
};

export const getAllExpectedToFailureFiles = (folderPath) => {
  let expectedToFailureFiles = [];
  fs.readdirSync(folderPath).filter(function(file) {
    if(file.indexOf(".md")>-1){
      expectedToFailureFiles.push(file)
    }
  })
  let result = [];
  expectedToFailureFiles.forEach(
      function (file) {
        result.push(path.join(folderPath,file));
      }
  )
  return result;
}

export const notifyToRocketChat = async (serverURL, access_token, user_id, hasClosedIssue) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": access_token,
      "X-User-Id": user_id,
    }
  }
  let data = {
    "channel": "Test-Channel",
    "text": (hasClosedIssue)? "Warning !!! There are some issue that has been closed but still in Expected to Failure" : "Bravo!!! All the expected to failures files are upto date."
}
  const response = await axios.post(serverURL, data, config);
  console.log(response.data.success)
}
