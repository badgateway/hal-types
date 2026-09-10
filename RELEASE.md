1. Do a git diff from the previous release and get a last look on everything that changed and make sure that CHANGELOG.md is updated with those changes.
2. Once that list is complete, do a final pull request that has the `changelog.md` changes and also updates all npm dependencies. This means we get a final CI run.
3. The last commit is made with `npx changelog-tool release` which sets the date in the changelog and creates a npm tag.
4. Once that's merged into main, create a release using the GitHub releases features from the tag that was created. This is a manual process.
5. When the GitHub release is created, this should automatically trigger a GitHub Action that does the publish operation.