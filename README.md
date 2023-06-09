# GitHub Action for appending data to a file and opening a PR

This is a test repository for trying to build a GitHub Action workflow that on
the labelling of an issue with `new-event` it reads a for a yaml block in the
issue body. This yaml is appended to the `events.yaml` file and a new pull
request created to merge these changes to `main`.
