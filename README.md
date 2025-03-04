# plh-kids-app-kw-content
This package contains data used in the Kuwait version of the PLH Kids app

Linked directly to: [PLH Kids deployment](https://github.com/IDEMSInternational/plh-kids-app-content)

Description of postgres data variables: [PLH Kids KW Codebook](https://docs.google.com/spreadsheets/d/1fr172q1HW5IZU7-j4ICaiHpZBYSIHlcBzMHxOQnE5cs/edit?gid=0#gid=0)

## App Preview
UAT: https://plh-kids-kw-uat1.web.app/

Released: https://plh-kids-kw1.web.app/

## Syncing data updates (automatic)
A pull request syncing all spreadsheets and assets can be created automatically by running the following GitHub workflow: [Sync Content](https://github.com/ParentingForLifelongHealth/plh-kids-app-kw-content/actions/workflows/content-sync.yml)

## Syncing data updates (manual)
Data can be synced from corresponding google drive folders via the script
```
yarn workflow sync
```
after which a PR can be created via the script
```
yarn workflow repo publish
```
