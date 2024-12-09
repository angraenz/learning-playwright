# Learning Playwright

Start automation testing using Playwright.

## Automation Testing

Scripts for automation testing using Playwright with TypeScript.

---

## Installation

1. Install an IDE such as [Visual Studio Code](https://code.visualstudio.com/download).
2. Install [Git Bash](https://git-scm.com/downloads).
3. Install [Node.js](https://nodejs.org/en).
4. Restart your machine.

---

## Project Setup

1. Clone the repository:
  ```bash
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
  ```
  yarn playwright codegen (url)
  ```
7. Start the playwright test with UI.
  ```
  yarn playwright test --ui
  ```
## Creating a Pull Request (PR) in GitHub

### [First]
a. to check the current status on branch main
  ```
  git status
  ```
b. to donwload the latest status of remote repos to the local repos, always do this before merge
  ```
  git fetch origin
  ```
c. to combine the changes between branch
  ```
  git merge origin/main 
  ```

### [Second]
a. Go to Github

b. Create an issue using 'Issue' menu, then assign yourself on right panel

c. Create branch on right panel

### [Third]
a. git fetch origin

b. git checkout (the new branch's name) --> for moving/switching to the new branch

### [Fourth]
a. git add . --> for adding all the new file from local repos

b. git add nama file --> for adding specific new file from local repos, choose between a. & b.

c. git commit -m (message: 'Nomor Tiket  nama branch', ex: '#3 Changed faker script') --> to save the changes in local repos

d. git push origin nama branch --> to upload the local repos to remote repos

### [Fifth]
a. Go to Github 

b. Create Pull Request

c. Add description

d. Add reviewer on right panel

e. Create pull request

f. After create the PR, send the request to the group to get review

g. As reviewer, check file changed, then add comment
