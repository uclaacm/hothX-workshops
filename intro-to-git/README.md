# HOTH X - Git

**Date**: February 24, 2023

**Teacher**: [Jenna Wang](https://github.com/ariyin)

## Resources
- [Slides](https://docs.google.com/presentation/d/1kzZsZGdJ4h_GscDhjbLPs4L3j0XPIpE1-F_w2_zc6N4/edit?usp=sharing)
- [Workshop Recording](TBD)

## Table of Contents
- [What is Git?](#what-is-git)
- [Benefits](#benefits)
- [Terminology](#terminology)
- [Basic Git Workflow](#basic-git-workflow)
- [Installing Git](#installing-git)
- [Configuring Git](#configuring-git)
- [GitHub](#github)
- [Walkthrough](#walkthrough)
- [Git Commands](#git-commands)
- [Extra Resources](#extra-resources)

## What is Git?

Git is a **distributed version control system**. But what exactly does that mean? In simple terms, it's a kind of system that brings a local copy of the complete repository to every team member’s computer so they can commit, branch, and merge locally. (Don’t worry if you don’t quite understand what committing, branching, and merging mean yet.) 

But what else can Git do? Let’s think of the history feature available in Google Docs. Ever wanted to see who was contributing to the group assignment, when they edited the document, and what changes were made? Git provides such benefits.

Just like how anyone can open the same Google document on their laptop, multiple people can gain access to the same repository with Git. However, unlike Google Docs, you can’t see changes being made instantaneously. Instead, you can only see the changes made after pulling, and you can only let other people see your changes after making a commit. 

## Benefits

Now, why would you want to use Git?

**Flexibility to work offline**

Most operations, except pushing and pulling, need only local files and resources to operate, so they can be done while traveling or away from home or an office. Contributors can view the running history on their hard drive, so any changes will be made in their own repository. 

**Reliable backup copies**

When a team member clones a repository, they essentially create an offsite backup, so if something catastrophic happens, like a server crash, every team member’s local copy becomes a backup.

**Fast merging and flexible branching**

Because systems don’t require remote server communication, code can be quickly merged. A distributed version control also allows software development teams to use different branching strategies, a feature that isn’t possible with a centralized system. 

**Rapid feedback and fewer merge conflicts**

A distributed version control system makes branching easy because having an entire repository’s history on their local workstation ensures that they can quickly experiment and request a code review. Merge conflicts are less likely because contributors focus on their own piece of code. Furthermore, having easy access to the full local history helps developers identify bugs, track changes, and revert to previous versions.

**Available support**

In addition to its core functionality, Git also provides a number of tools and integrations that make it easier to use in the development process. For example, many code editors and IDEs have built-in support for Git, allowing developers to easily view and manage their Git repositories from within their development environment. Git also integrates with a number of popular code hosting services, such as GitHub and GitLab. These services provide additional features for managing Git repositories, such as issue tracking, code reviews, and collaboration tools.

Since you understand what the benefits of using Git are, let’s talk about the terminology we’ve come across (pull, commit, branch, merge) that you might not understand just yet.

## Terminology

A Git **repository** is a directory where all of the files and folders for a project are stored, along with their entire history of changes. There are two kinds of repositories: a local and a remote repository. A local repository is a copy of the Git repository stored on your local machine, while a remote repository is a copy of the Git repository stored on a remote server. The local repository is where you make changes to the project and commit them to the repository's history, while the remote repository is where you push those changes so that other developers can access them. The repository is also the /.git folder inside a project. It tracks all changes made to files in your project, building a history over time. Meaning, if you delete the /.git folder, then you delete your project’s history. 

Within the repository, there are **branches**. Branches allow developers to work on different features or aspects of a project independently of each other, without affecting the main branch of the project. Think of a trunk as the main line of code and branches as independent lines based on the same source code. Every single repository has a main branch, aka the "trunk". The main branch is the branch that contains the latest working version of the project. You can add feature branches, aka the individual "branches," to your repository in order to develop new features for your program. A branch titled “messaging” would include code for a messaging feature not yet vetted to run on live servers (but maybe your branch’s name can be more descriptive). 

You must **pull** from the main branch to update your local repository and see other people’s code. Pulling changes from the central repository involves downloading the changes that other developers have made to the central repository and incorporating them into the local copy of the repository. This allows developers to keep their local copy of the repository up-to-date with the latest changes.

After making changes on a branch, developers must **commit** their code. With every commit, Git takes a picture of what all your files look like at that moment and stores a reference to that snapshot. A commit is created every time work is saved. If a file hasn’t changed from one commit to the next, Git uses the previously stored file. Commits provide a way to track the progress of a project over time and to easily revert to an earlier version of the project if necessary.

To allow other people to see your updated code, you must **push** your code to the central repository. Pushing changes to the central repository involves uploading the committed changes from the local repository to the central repository. This allows other developers to access the changes and incorporate them into their own local copy of the repository.

After you push your code from the branch you have created, you must **merge** the branches. Merging, as the name suggests, is the process of combining changes from two different branches into a single branch. This is necessary when multiple developers are working on the same project and have made changes to different parts of the code. Git provides tools for automatically merging changes, but conflicts can arise when two developers have made conflicting changes to the same file. In these cases, Git provides tools for resolving conflicts and manually merging changes.

## Basic Git Workflow

Maybe you kind of understand the workflow from reading the definitions of the terminology. But let’s go over it again in a simple, clear manner.

Git has three main states that your files can reside in: modified, staged, and committed. 
- **Modified** means that you have changed the file but have not committed it to your local repository yet.
- **Staged** means that you have marked a modified file in its current version to go into your next commit; this modified file goes into the staging area, which holds all the changes you've made to your files that you want Git to include in your next commit.
- **Committed** means that the data is safely stored in your local repository.

So a typical work process might look like this:
1. Pull from the main branch
2. Create a branch
3. Do some work
4. Add
5. Commit 
6. Push
7. Pull request (we’ll talk about these three later)
8. Fix merge conflicts
9. Merge

## Installing Git

Now that you somewhat understand what Git exactly is, let’s download it! 

**Note**: The commands listed will start with a `$`, but when typing the actual code, do not include the `$`. 

Open the Terminal / Command Prompt. 

**macOS:**

Install [Homebrew](https://brew.sh/) and type: 
``` git
$ brew install git
```

**Linux:**

Type: 
``` git
$ sudo apt-get install git-all
```

**Windows:**

Follow this [link](https://github.com/git-for-windows/git/releases/download/v2.39.1.windows.1/Git-2.39.1-64-bit.exe) and download Git. In case you're reading this a long time after HOTH X has happened, use this [link](https://gitforwindows.org/) to find the latest release.

**Other:**

For more detailed instructions or other options, please refer to this [page](https://git-scm.com/downloads).

## Configuring Git

Once you have installed Git, you must configure Git so it knows some things about you. If you work in a repository with others, Git can use the information to list who created what changes at what time and how to get in contact with them.

To set your name in Git, use the command:
``` git
$ git config --global user.name "John Smith"
```

To set your email in Git, use the command:
``` git
$ git config --global user.email johnsmith@example.com
```

To check your name and email in Git, use the command:
``` git
$ git config --list
```

## GitHub

So we know that you can collaborate with others using Git. But how exactly do we go about doing that? The answer is simple: GitHub.

What is GitHub? GitHub is an Internet hosting service that uses Git for software development and version control and is commonly used to host open-source software development projects. Essentially, you use GitHub to create online repositories so that you can save your commit history and share your repositories with others. GitHub provides useful features including bug tracking, software feature requests, and task management.

How do we set up GitHub? Everyone on your team has to create a GitHub account. You may sign up for a new account on their [website](https://github.com), preferably using the email you used to configure Git. 

One person on your team has to create a local repository and a GitHub repository and link the two repositories together. To do this, follow these steps:

1. Create a [GitHub repository](https://github.com/new)
    1. Make sure this repository is public
    2.  Do not touch the other settings
2. Create a repository on your personal device in the folder of your choice
    1. `$ git init`
3. Create a commit in this repository
    1. Add your changes `$ git add .`
        - Note: There are different `$ git add` commands that do different things.
        1. `$ git add .` adds all files in the directory
        2. `$ git add *` adds all files in the directory, except for files whose name begin with a dot
        3. `$ git add [file name]` adds a specific file
    2. Commit the files `$ git commit -m “[message]”`
4. Bind and sync the GitHub repository to your local repository
    1. Add a new remote connection to our local repository: `$ git remote add origin [GitHub repository link]`
    2. Rename the master branch to main: `$ git branch -M main`
    3. Create an upstream tracking branch with a lasting relationship to our main branch: `$ git push -u origin main`

Everyone else on the team now has to get a copy of the repository on GitHub onto their own personal devices now. You can do this with the `$ git clone [GitHub repository link]` command. The url is the same one used in the `$ git remote add origin [GitHub repository link]` command.

You’re all set now!

## Walkthrough

Once you've set up your repository, you may want to start making changes to the project. We've gone over the process in [Basic Git Workflow](#basic-git-workflow), but now let's add some git commands to the process. Before committing any changes, make sure your local repository is up to date by doing a pull on the main branch:

1. Make sure you're on the main branch with: `$ git checkout main`
2. Then pull: `$ git pull`
3. You'll want to make your changes on a **separate branch** instead of the main branch. This is to prevent you from introducing any bugs straight onto the main branch. Create a branch using: `$ git checkout -b “[branch name]”`
4. Once you've made some changes and decide you want to add your changes to the staging area, type `$git add .`
4. To commit your changes, type: `$ git commit -m "[message]"`
5. You'll then push your commit by typing: `$ git push -u origin [branch name]`
6. The terminal will then spit out some information with a link that looks something like this: github.com/[username]/[repository-name]/pull/new/[branch-name]. You'll want to open this link in a browser window to create a **pull request**. A pull request, also known as a merge request, is an event that takes place when a developer is ready to begin the process of merging new code changes with the main project repository. In the comment box, write a more thorough description of the changes you've made. 
7. GitHub will let you know if there are any merge conflicts. If there are, fix the merge conflicts through GitHub by pressing "Resolve Conflicts" and editing the file as you deem necessary. 
8. When you're done, you'll finally be able to merge your pull request. All done!


## Git Commands

Here are some basic commands for Git which may be useful to know, summarized all in one section. More commands for specific functions can be found [here](https://git-scm.com/docs/git).

Verify if Git is installed: `$ git --version`

Show the changes made since the last commit: `$ git status`

Create repositories: `$ git init`

Create and switch to new branch: `$ git checkout -b “[name]”`

Switch to an existing branch: `$ git checkout “[name]”`

Add file contents to the index: `$ git add .`

Commit changes: `$ git commit -m “[message]”`

Push: `$ git push -u origin [branch name]`

Pull: `$ git pull`

## Extra Resources
- [Git Documentation](https://git-scm.com/docs/git)
- [Git Cheat Sheet](https://www.git-tower.com/blog/git-cheat-sheet/)
- [Git Textbook](https://git-scm.com/book/en/v2)
- ACM Hack Officers! We don't bite >:3c