import * as core from "@actions/core";
// get state of each issue
import {
  getIssueState,
  getAllAvailableGithubIssueLinks,
  getAllExpectedToFailureFiles
} from "./scripthelper.js";
import 'dotenv/config'
const apiURL = {
  githubBaseApiURL:
    "https://api.github.com/repos/owncloud/",
  commonEntryPoint: 'https://github.com/owncloud/',
};

const mdFiles = getAllExpectedToFailureFiles(process.env.PATH_TO_EXPECTED_TO_FAILURE || './expectedToFailure')
//
mdFiles.forEach((mdFile) => {
  const ocisIssuesLink = getAllAvailableGithubIssueLinks(mdFile);
  ocisIssuesLink.forEach(async (link) => {
      const endPoint = link.replace(apiURL.commonEntryPoint,"")
      const fullApiURL = apiURL.githubBaseApiURL + endPoint;
      const state = await getIssueState(fullApiURL);
      if (state === "closed") {
          console.log('\x1b[0m', '\x1b[33m', 'Warning !!' +  ' This ocis issue ' + link + ' has been closed. Please Open it and Update Expected to failure File')
      }
  });
});

