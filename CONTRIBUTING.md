# Contributing to Pennywise Macrosystem

To retain the sanity of our team members, and optimize our workflow, we've decided to adopt a lean version of `git-flow` (ref. https://nvie.com/posts/a-successful-git-branching-model/). Our version works as following.

## General info when working with the repo

To keep track of who's doing what, it is very helpful to create issues for whatever you're doing, moving it to "In progress" in the kanban board (project board), and assigning yourself.
This way, we can easily see what is being done, and by who.

If possible, tag it with a milestone as well, so we know when we can expect it to be done.

## Starting the development of a new feature

To start working on a new feature, checkout to a new branch with a name following the template of `feature/<name of feature>`. This makes it easy to distinguish branches related to features/hotfixes/etc. from one another.

If the branch is to fall out of sync with `master`, please update it before merging into `master`.

When you are done working on your feature, and you deem it apt for merging into master, create a pull request requesting your branch to be merged into `master`.

After doing this, we say that your branch is in _review stage_. When it is in this state, try your best to refrain from pushing more changes.
Now, you wait for someone to review your code, and either request changes, or approve.

When your PR (pull request) has been approved, merge it into master, and delete the feature branch you worked on (this is to avoid a situation where you have potentially hundreds of inactive branches laying around).

## Fixing something (hotfix)

Do the exact same as when developing a new feature, except name the branch `hotfix/<short description>`.

These PRs should preferrably be rather short.

## Incorporating others' changes (in their branch) into your feature

If you are developing a feature, and you rely on changes someone made in another branch, try your best to avoid merging their entire branch into yours, as that will essentially make the other PR redundant.

If you simply need one commit, you can use `git cherry-pick`.

## Git messages

Try your best to give a proper description of the changes made in the commit.

If relevant, link to the issue relevant to your changes by typing a # followed by the issue number. GitHub will pick up on this, and create a hotlink to the issue page, and vice-versa.

That means no commit messages like:

- `filename.ts`
- `edited filename.ts`

etc.

The reasoning for this is that it makes it very hard for others to know what changes have been made without digging through each commit.

## Creating the PR

When you are creating a PR, you will be prompted with several options, and you're supposed to fill it out like this;

- Set the assignee to yourself
- Set the milestone to the relevant milestone if that exists, and if not, either
  create it yourself, or ask someone else to create it, but if you do not do
  it yourself, it is your responsibility to update the milestone when it is
  created
- Tick "Delete source branch when merge requests is accepted."

## Style guide

This is a very lean style guide - meaning that there is still a lot of decisions you will have to make yourself.
The reason this document exists is to maintain a unified coding style, which makes it easier for everyone to work on the same codebase.

The basics are taken from [here](https://google.github.io/styleguide/tsguide.html)
(which is Googles official styleguide).

### Method declaration

Methods should follow `camelCase` capitalization, and should never have an uppercase first character. except for tsx methods

### Function Declarations

Arrowhead functions ar preferred over pre-ES6 functions

```typescript
const foo = () => {
  // do something
};

// over
function foo() {
  // do something
}
```

### Spacing between methods

There should only be one newline between method declarations.

### Comments

Comments are encouraged, but should not be abused; comments like

```typescript
//username
let username;
```

do not contribute to the legibility of the code, they only waste space.

The comment itself should always be preceeded by a space. E.g.

```typescript
// like this, and not
//like this
```
