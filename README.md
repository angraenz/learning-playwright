# learningplaywright
start automation using Playwright

#Automation Testing

Scripts Automation to test using Playwright - Typescript

## Installation

1. Install IDE https://code.visualstudio.com/download 
2. Install gitbash https://git-scm.com/downloads/win
3. Install node.js  https://nodejs.org/en
4. Restart your machine

## Project Setup
1. Git clone the repository.
```
git clone https://github.com/angraenz/learningplaywright.git
```
2. Navigate into the repository.
```
cd learningplaywright
```
4. Install Yarn.
```
npm install -g yarn
```
5. Install Playwright.
```
yarn create playwright
```
6. Auto generate tests with Codegen.
yarn playwright codegen (url)
```
7. Start the playwright test with UI.
yarn playwright test --ui

8. Step for create PR (Pull Request) in Github
[First]
a. git status --> to check the current status on branch main
b. git fetch origin --> to donwload the latest status of remote repos to the local repos, always do this before merge
c. git merge origin/main --> to combine the changes between branch

[Second]
a. Go to Github
b. Create an issue using 'Issue' menu, then assign yourself on right panel
c. Create branch on right panel

[Third]
a. git fetch origin
b. git checkout (the new branch's name) --> for moving/switching to the new branch

[Fourth]
a. git add . --> for adding all the new file from local repos
b. git add nama file --> for adding specific new file from local repos, choose between a. & b.
c. git commit -m (message: 'Nomor Tiket  nama branch', ex: '#3 Changed faker script') --> to save the changes in local repos
d. git push origin nama branch --> to upload the local repos to remote repos

[Fifth]
a. Go to Github 
b. Create Pull Request
c. Add description
d. Add reviewer on right panel
e. Create pull request
f. After create the PR, send the request to the group to get review
g. As reviewer, check file changed, then add comment