import fs from "fs";
import parseMD from "parse-md";
import path from 'path'
import axios from "axios";

// this function returns state of an issue
export const getIssueState = async (issueUrl) => {
  try{
    const response = await axios.get(issueUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        // done with personal GitHub token
        Authorization: "token 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"
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
