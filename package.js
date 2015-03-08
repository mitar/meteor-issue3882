Package.describe({
  summary: "Meteor sqlite3 package",
  version: '0.1.0',
  name: 'peerlibrary:sqlite3'
});

Npm.depends({
  'sqlite3': '3.0.2'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.3.2');

  api.export('sqlite3');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.onTest(function (api) {
  api.use(['peerlibrary:sqlite3', 'tinytest', 'test-helpers'], 'server');

  api.add_files([
    'tests_defined.js'
  ], 'server');
});

