---
order: 3
---

# Contribution Guide

## Clone

```bash
git clone git@github.com:GuoXiCheng/TinyCRUD.git
```

## Install Dependencies

```bash
cd TinyCRUD

npm install
```

## Run Tests

```bash 
npm run test
```

By default, in order to ensure that the test is not affected by the test environment, the test will be performed in a simulated environment. If you need to use the real network request API to perform the test, you need to create a .env file in the project root directory with the following content:

```bash
USE_API=true # Whether to use a real network environment
TEST_ENCRYPT_KEY=YourEncryptKey

# Gitee
TEST_GITEE_TOKEN=Your Gitee Token
TEST_GITEE_OWNER=Your Gitee Owner
TEST_GITEE_REPO=Your Gitee Repo
TEST_GITEE_NUMBER=Your Gitee Issue Number

# Github
TEST_GITHUB_TOKEN=Your Github Token
TEST_GITHUB_OWNER=Your Github Owner
TEST_GITHUB_REPO=Your Github Repo
TEST_GITHUB_NUMBER=Your Github Issue Number

# Gitlab
TEST_GITLAB_TOKEN=Your Gitlab Token
TEST_GITLAB_PROJECT_ID=Your Gitlab Project ID
TEST_GITLAB_NUMBER=Your Gitlab Issue Number
```

> [!tip]
> If USE_API is set to true, a real network request will be made during the test, so whether the test passes depends not only on whether the code is correct, but also on whether your network environment is normal and the configuration is correct.