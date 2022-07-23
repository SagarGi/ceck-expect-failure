import fetch from "node-fetch";

// this function returns state of an issue
export const getIssueState = (issueUrl) => {
  return fetch(issueUrl, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      token: "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",
    },
  }).then((response) => {
    return response
      .json()
      .then((data) => {
        // console.log(data);
        return data.state;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// this function change the issue URL to github api URL
export const getIssueNumber = (link) => {
  // console.log(toBeChangeURL)
  const regex = /\d+/g;
  const issueNumber = link.match(regex);
  return issueNumber[0];
};
