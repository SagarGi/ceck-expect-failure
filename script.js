import * as core from "@actions/core";
// get state of each issue
import {
  getIssueState,
  getIssueNumber,
  getAllAvailableGithubIssueLinks,
  getAllExpectedToFailureFiles
} from "./scripthelper.js";
const apiURL = {
  urlWithoutIssueNumberForOcis:
    "https://api.github.com/repos/owncloud/ocis/issues/",
};

const mdFiles = getAllExpectedToFailureFiles('./expectedToFailure')

mdFiles.forEach((mdFile) => {
  const ocisIssuesLink = getAllAvailableGithubIssueLinks(mdFile);
  ocisIssuesLink.forEach(async (link) => {
    const issueNumber = getIssueNumber(link);
    if(link.includes('ocis/issues')){
      const fullApiURL = apiURL.urlWithoutIssueNumberForOcis + issueNumber;
      const state = await getIssueState(fullApiURL);
      if (state === "closed") {
        core.setFailed("This ocis issue " + link + " has been closed. Please Open it and Update Expected to failure File");
      }
    }
  });
});

