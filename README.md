# sqlcipher-test

```bash
$ LDFLAGS="-L`brew --prefix`/opt/sqlcipher/lib" \
  CPPFLAGS="-I`brew --prefix`/opt/sqlcipher/include -I/usr/local/opt/sqlite/include" \
  npm i sqlite3 --build-from-source \
  --sqlite_libname=sqlcipher --sqlite=`brew --prefix`
```