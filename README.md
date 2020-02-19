# sqlcipher-test

MacOS:

```bash
$ LDFLAGS="-L`brew --prefix`/opt/sqlcipher/lib" \
  CPPFLAGS="-I`brew --prefix`/opt/sqlcipher/include -I/usr/local/opt/sqlite/include" \
  npm i sqlite3 --build-from-source \
  --sqlite_libname=sqlcipher --sqlite=`brew --prefix`
```

Electron in Docker:

```bash
$ docker run --rm -ti --env ELECTRON_CACHE="/root/.cache/electron" --env \
  ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
  -v ${PWD}:/project \
  -v ~/.cache/electron:/root/.cache/electron \
  -v ~/.cache/electron-builder:/root/.cache/electron-builder \
  electronuserland/builder:wine

$ ./node_modules/.bin/electron-rebuild -f -w sqlite3

$ ls -l ./node_modules/sqlite3/lib/binding
```