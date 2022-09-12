import * as core from "@actions/core";
// get state of each issue
import {
    getIssueState,
    getAllAvailableGithubIssueLinks,
    getAllExpectedToFailureFiles,
    notifyToRocketChat
} from "./scripthelper.js";
import 'dotenv/config'

const apiURL = {
  githubBaseApiURL:
    "https://api.github.com/repos/owncloud/",
  commonEntryPoint: 'https://github.com/owncloud/',
};


const mdFiles = getAllExpectedToFailureFiles(process.env.PATH_TO_EXPECTED_TO_FAILURE || './expectedToFailure')

let hasClosedIssue = false;

async function apiReq(fullApiURL, link) {
    const state = await getIssueState(fullApiURL);
    if (state === "closed") {
        hasClosedIssue = true;
        console.log('\x1b[0m', '\x1b[33m', 'Warning !!' +  ' This ocis issue ' + link + ' has been closed. Please Open it and Update Expected to failure File')
    }
}

const checkExpectedToFailureFiles = async () => {
    for (const mdFile of mdFiles){
        const requests = []
        const ocisIssuesLink = getAllAvailableGithubIssueLinks(mdFile);
        ocisIssuesLink.forEach((link) => {
            const endPoint = link.replace(apiURL.commonEntryPoint, "")
            const fullApiURL = apiURL.githubBaseApiURL + endPoint;
            requests.push(apiReq(fullApiURL, link))
        });
        await Promise.all(requests);
    }
}

async function main (){
    await checkExpectedToFailureFiles();
    await notifyToRocketChat(hasClosedIssue);
}

main();

