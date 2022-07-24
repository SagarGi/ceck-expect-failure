import fetch from "node-fetch";
import fs from "fs";
import parseMD from "parse-md";
import path from 'path'

// this function returns state of an issue
export const getIssueState = (issueUrl) => {
  return fetch(issueUrl, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      // done with personal github token
      Authorization: "token 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"
    },
  }).then((response) => {
    return response
      .json()
      .then((data) => {
        return data.state;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// this function change the issue URL to github api URL
export const getIssueNumber = (link) => {
  const regex = /\d+/g;
  const issueNumber = link.match(regex);
  return issueNumber[0];
};

export const getAllAvailableGithubIssueLinks = (mdFile) => {
  const fileContents = fs.readFileSync(mdFile, "utf8");
  const { content } = parseMD(fileContents);
  const regex = /https?:\/\/github\.com\/(?:[^\/\s]+\/)+(issues\/\d+)/g;
  const issueLinkMatched = content.match(regex);
  return issueLinkMatched;
};

export const getAllExpectedToFailureFiles = (folderPath) => {
  var files = fs.readdirSync(folderPath);
  var result = [];
  const extension = "md"
  files.forEach(
      function (file) {
        var newbase = path.join(folderPath,file);
        if ( fs.statSync(newbase).isDirectory() ){
          result = findFileByExt(newbase,extension,fs.readdirSync(newbase),result);
        } else             {
          if ( file.substr(-1*(extension.length+1)) == '.' + extension ){
            result.push(newbase);
          }
        }
      }
  )
  return result;
}
