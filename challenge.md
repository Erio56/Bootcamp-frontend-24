# What is npm uninstall
Its a NPM command to remove a package from the project's dependencies 

this command completly removes a package from the `node_modules` directory. It also removes the package from the dependencies, devDependencies, optionalDependencies, and peerDependencies objects in your `package.json`.

if there is a `npm-shrinkwrap.json` or `package-lock.json` present, it will update these files too.

## Unscoped package
`npm uninstall <package_name>`
## Scoped package
`npm uninstall <@scope/package_name>`

## Removing a local package without removing it from package.json
To remove a package without updating any dependency file use `--no-save` alongside with npm uninstall. For example:
`npm uninstall --no-save react`

## Removing a global package
To remove a global package use `-g` alongside npm uninstall. For example:
`npm uninstall -g react`