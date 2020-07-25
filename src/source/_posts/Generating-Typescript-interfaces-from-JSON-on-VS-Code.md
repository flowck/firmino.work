---
title: Generating Typescript interfaces from JSON on VS Code
cover: blog-images/typescript.jpg
date: 2020-07-25 18:11:59
metatags: typescript
description: Learn how you can generate Typescript interefaces from JSON on VS Code
---

If you caught yourself setting variables using the **[any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)** type from typescript to declare variables that will hold the response object coming from an HTTP operation, then this article may help you to tackle that in the future.

## Table of contents

* [The problem that's not exactly a problem](#the-problem-thats-not-exactly-a-problem)
* [Generating interfaces from JSON objects](#Generating-interfaces-from-JSON-objects)
* [What can you do if you use another editor](#What-can-you-do-if-you-use-another-editor)
* [Conclusion](#Conclusion)
* [References](#References)

<h2 id="the-problem-thats-not-exactly-a-problem">The problem that's not exactly a problem</h2>

Let's suppose you're building a web application that has the requirement of fetching the information regarding all the repositories of a specific user on Github. Knowing Github large payload, you might try to define a constant like this:

```typescript
// ...
const response = await fetch(`https://api.github.com/users/${user}/repos`);
const userRepositories: any = await response;
// ...
```

Whilst this is a valid approach, you'd lose Typescript's type safety and predictability since `userRepositories` type was set to `any`. 

One quick way to tackle this is by defining an interface beforehand. However here comes the problem: who likes to manually define the interface our interfaces of a response payload as large as this:

 ```json
{
  "id": 178168699,
  "node_id": "MDEwOlJlcG9zaXRvcnkxNzgxNjg2OTk=",
  "name": "all-contributors",
  "full_name": "flowck/all-contributors",
  "private": false,
  "owner": {
      "login": "flowck",
      "id": 1679333,
      "node_id": "MDQ6VXNlcjE2NzkzMzM=",
      "avatar_url": "https://avatars1.githubusercontent.com/u/1679333?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/flowck",
      "html_url": "https://github.com/flowck",
      "followers_url": "https://api.github.com/users/flowck/followers",
      "following_url": "https://api.github.com/users/flowck/following{/other_user}",
      "gists_url": "https://api.github.com/users/flowck/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/flowck/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/flowck/subscriptions",
      "organizations_url": "https://api.github.com/users/flowck/orgs",
      "repos_url": "https://api.github.com/users/flowck/repos",
      "events_url": "https://api.github.com/users/flowck/events{/privacy}",
      "received_events_url": "https://api.github.com/users/flowck/received_events",
      "type": "User",
      "site_admin": false
  },
  "html_url": "https://github.com/flowck/all-contributors",
  "description": "✨ Recognize all contributors, not just the ones who push code ✨",
  "fork": true,
  "url": "https://api.github.com/repos/flowck/all-contributors",
  "forks_url": "https://api.github.com/repos/flowck/all-contributors/forks",
  "keys_url": "https://api.github.com/repos/flowck/all-contributors/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/flowck/all-contributors/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/flowck/all-contributors/teams",
  "hooks_url": "https://api.github.com/repos/flowck/all-contributors/hooks",
  "issue_events_url": "https://api.github.com/repos/flowck/all-contributors/issues/events{/number}",
  "events_url": "https://api.github.com/repos/flowck/all-contributors/events",
  "assignees_url": "https://api.github.com/repos/flowck/all-contributors/assignees{/user}",
  "branches_url": "https://api.github.com/repos/flowck/all-contributors/branches{/branch}",
  "tags_url": "https://api.github.com/repos/flowck/all-contributors/tags",
  "blobs_url": "https://api.github.com/repos/flowck/all-contributors/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/flowck/all-contributors/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/flowck/all-contributors/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/flowck/all-contributors/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/flowck/all-contributors/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/flowck/all-contributors/languages",
  "stargazers_url": "https://api.github.com/repos/flowck/all-contributors/stargazers",
  "contributors_url": "https://api.github.com/repos/flowck/all-contributors/contributors",
  "subscribers_url": "https://api.github.com/repos/flowck/all-contributors/subscribers",
  "subscription_url": "https://api.github.com/repos/flowck/all-contributors/subscription",
  "commits_url": "https://api.github.com/repos/flowck/all-contributors/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/flowck/all-contributors/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/flowck/all-contributors/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/flowck/all-contributors/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/flowck/all-contributors/contents/{+path}",
  "compare_url": "https://api.github.com/repos/flowck/all-contributors/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/flowck/all-contributors/merges",
  "archive_url": "https://api.github.com/repos/flowck/all-contributors/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/flowck/all-contributors/downloads",
  "issues_url": "https://api.github.com/repos/flowck/all-contributors/issues{/number}",
  "pulls_url": "https://api.github.com/repos/flowck/all-contributors/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/flowck/all-contributors/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/flowck/all-contributors/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/flowck/all-contributors/labels{/name}",
  "releases_url": "https://api.github.com/repos/flowck/all-contributors/releases{/id}",
  "deployments_url": "https://api.github.com/repos/flowck/all-contributors/deployments",
  "created_at": "2019-03-28T09:20:02Z",
  "updated_at": "2019-03-28T09:20:04Z",
  "pushed_at": "2019-03-25T21:08:05Z",
  "git_url": "git://github.com/flowck/all-contributors.git",
  "ssh_url": "git@github.com:flowck/all-contributors.git",
  "clone_url": "https://github.com/flowck/all-contributors.git",
  "svn_url": "https://github.com/flowck/all-contributors",
  "homepage": "https://allcontributors.org",
  "size": 15873,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "HTML",
  "has_issues": false,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": false,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
  },
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "master"
}
```

Challenging isn't it? Manually? No!



<h2 id="Generating-interfaces-from-JSON-objects">Generating interfaces from JSON objects</h2>

On VS Code, I use the extension **[Paste JSON as CODE](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)**, and it enables me to paste JSON as an interface, even one as large as the described above. 

After you've installed it in your VS Code, follow the steps below:

* Open the desired **.ts** where you would like to paste the interface;
* Type the combination: `CMD + SHIFT + P` (macOS) or `CTRL + SHIFT + P` (Windows and Linux);
* Search for `Paste JSON as CODE` and press `ENTER`;
* A new input field will be displayed, paste the JSON code on it and press `ENTER`;
* The last step is to review and edit the names of the generated interfaces according to your needs;

![VS Code](/blog/blog-images/pasting-json-as-interfaces.gif)

<h2 id="What-can-you-do-if-you-use-another-editor">What can you do if you use another editor</h2>

I did a quick search for editors like Webstorm and Sublime Text, and unfortunately didn't find an extension that does the same. Maybe I didn't put enough effort into my search, however, the creators of `Past JSON as CODE` created an [online editor](https://app.quicktype.io/) where you can paste JSON code and get the equivalent interface. 

![Quicktype](/blog/blog-images/Instantly_parse_JSON_in_any_language___quicktype.png)

<h2 id="Conclusion">Conclusion</h2>

I've been using `Past JSON as CODE` extension for a while, and one thing that saves me time is the fact that it generates the interfaces recursively on nested JSON objects, giving me access to its child interfaces on a single operation.

To close this post, I'd say:

> Automate whenever you can, your mind should busy with non-trivial thoughts and decisions



<h2 id="References">References</h2>

* [Quicktype](https://quicktype.io/)