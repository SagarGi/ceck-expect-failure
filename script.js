const links = [
  "https://github.com/owncloud/ocis/issues/2768",
  "https://github.com/owncloud/ocis/issues/4188",
];

const fullURl = "https://api.github.com/repos/owncloud/core/issues/40227";

// get state of each issue
import { getIssueState } from "./scripthelper.js";

console.log(await getIssueState(fullURl));
