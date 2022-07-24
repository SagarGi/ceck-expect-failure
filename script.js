import * as core from "@actions/core";
// get state of each issue
import {
  getIssueState,
  getIssueNumber,
  getAllAvailableGithubIssueLinks,
} from "./scripthelper.js";
const apiURL = {
  urlWithoutIssueNumberForOcis:
    "https://api.github.com/repos/owncloud/ocis/issues/",
};
const mdFiles = ["./expectedToFailure/expec-failure.md"];

const ocisIssuesLink = getAllAvailableGithubIssueLinks(mdFiles[0]);

ocisIssuesLink.forEach(async (link) => {
  const issueNumber = getIssueNumber(link);
  const fullApiURL = apiURL.urlWithoutIssueNumberForOcis + issueNumber;
  const state = await getIssueState(fullApiURL);
  if (state === "closed") {
    core.setFailed(`Issue is already closed`);
  }
});
