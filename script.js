const links = [
  "https://github.com/owncloud/ocis/issues/2768",
  "https://github.com/owncloud/ocis/issues/4188",
];

const apiURL = {
  urlWithoutIssueNumber: "https://api.github.com/repos/owncloud/ocis/issues/",
};

// get state of each issue
import { getIssueState, getIssueNumber } from "./scripthelper.js";

links.forEach(async (link) => {
  const issueNumber = getIssueNumber(link);
  const fullApiURL = apiURL.urlWithoutIssueNumber + issueNumber;
  const state = await getIssueState(fullApiURL);
  console.log(state);
});
