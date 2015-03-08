Tinytest.add('sqlite3 - defined', function (test) {
  var isDefined = false;
  try {
    sqlite3;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "sqlite3 is not defined");
  test.isTrue(Package['peerlibrary:sqlite3'].sqlite3, "Package.peerlibrary:sqlite3.sqlite3 is not defined");
});
