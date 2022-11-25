---
title: Changing Git’s default branch name of new repositories
date: 2021-02-20 21:09:57
metatags: git
description: Learn how to change git's default branch name
cover: posts/changing-git-s-default-branch-name-cc-by-paul-downey.jpg
isPublished: true
isArchive: false
---

With Git's default configuration every time you create a new repository the initial branch will be set to `master` , this has been the unchangeable rule ever since.

![changing default branch's name](/posts/new-repo.gif)

## Changing to another name

<p>To update this configuration globally, you will need to type the following instructions into your terminal:

```bash
git config --global init.defaultBranch new_default_branch_name
```

![changing default branch's name](/posts/set-git-default-branch.gif)

That's all you need. Happy coding!
