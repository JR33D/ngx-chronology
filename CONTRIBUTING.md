# Contributing to Project Guidelines

## Developing

### Built With

The project was initial stood up using `Angular/cli@6.0.3` and their `generate library` command.

### Prerequisites

Node and NPM are the only items needed to get started developing on this package.

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/jr33d/ngx-chronology.git
cd ngx-chronology/
npm install
```

## Tests

To run the unit test of the library run the command

```shell
npm test or ng test
```

This will run all test and make sure functionality is still in a working order. Three is a travis build in place that will validate each PR has passing unit test.

## Demo site and documentation

All built documentation and the demo site are under the `./docs` folder. This is to take advantage of github pages for hosting. The source code to update these are under the `./ngx-chronology-demo` folder path. The documentation site is a full blown angular site to demonstrait the abilities of this library.

## Style guide

Coding style and formatting is controlled by prettier for this library. Please make sure to install the plugin for your respective IDE if needed. Avoid making changes to the .prettierrc file unless agreed upon by the development team.

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
