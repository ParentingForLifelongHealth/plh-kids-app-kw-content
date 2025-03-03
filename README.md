# plh-kids-app-kw-content
This package contains data used in the Kuwait version of the PLH Kids app

Linked directly to PLH Kids https://github.com/IDEMSInternational/plh-kids-app-content

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
