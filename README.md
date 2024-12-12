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
a. to check the current status on branch main.
  ```
  git status
  ```
b. to download the latest status of remote repos to the local repos, always do this before merge.
  ```
  git fetch origin
  ```
c. to combine the changes between branch.
  ```
  git merge origin/main 
  ```

### [Second]
a. Go to [Github](https://github.com/).

b. Create an issue using 'Issue' menu, then assign yourself on right panel.

c. Create branch on right panel.

### [Third]
a. Retrieves the latest changes from a remote repository without merging them into your local branch.
  ```
  git fetch origin 
  ```

b. For moving/switching to the new branch.
  ```
  git checkout (the new branch's name)
  ```

### [Fourth]
a. For adding all the new file from local repos.
  ```
  git add .
  ```

b. For adding specific new file from local repos, choose between a or b.
  ```
  git add file_name
  ```

c. To save the changes in local repos.
  ```
  git commit -m (message: 'Nomor Tiket  nama branch', ex: '#3 Changed faker script')
  ```

d. To upload the local repos to remote repos
  ```
  git push origin branch_name
  ```

### [Fifth]
a. Go to [Github](https://github.com/).

b. Create Pull Request.

c. Add description.

d. Add reviewer on right panel.

e. Create pull request.

f. After create the PR, send the request to the group to get review.

g. As reviewer, check file changed, then add comment.
