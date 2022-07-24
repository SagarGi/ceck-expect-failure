## Scenarios from ownCloud10 core API tests that are expected to fail with OCIS storage while running with the Graph API

The expected failures in this file are from features in the owncloud/core repo.

### File

Basic file management like up and download, move, copy, properties, trash, versions and chunking.

#### [Getting information about a folder overwritten by a file gives 500 error instead of 404](https://github.com/owncloud/ocis/issues/1239)

- [apiWebdavProperties1/copyFile.feature:286](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/copyFile.feature#L286)
- [apiWebdavProperties1/copyFile.feature:287](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/copyFile.feature#L287)
- [apiWebdavProperties1/copyFile.feature:309](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/copyFile.feature#L309)
- [apiWebdavProperties1/copyFile.feature:310](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/copyFile.feature#L310)

#### [Custom dav properties with namespaces are rendered incorrectly](https://github.com/owncloud/ocis/issues/2140)

_ocdav: double check the webdav property parsing when custom namespaces are used_

- [apiWebdavProperties1/setFileProperties.feature:37](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/setFileProperties.feature#L37)
- [apiWebdavProperties1/setFileProperties.feature:38](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/setFileProperties.feature#L38)
- [apiWebdavProperties1/setFileProperties.feature:43](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/setFileProperties.feature#L43)
- [apiWebdavProperties1/setFileProperties.feature:78](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/setFileProperties.feature#L78)
- [apiWebdavProperties1/setFileProperties.feature:79](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/setFileProperties.feature#L79)
- [apiWebdavProperties1/setFileProperties.feature:84](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiWebdavProperties1/setFileProperties.feature#L84)

#### [Downloading the older version of shared file gives 404](https://github.com/owncloud/ocis/issues/3868)

- [apiVersions/fileVersionsSharingToShares.feature:306](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionsSharingToShares.feature#L306)

#### [file versions do not report the version author](https://github.com/owncloud/ocis/issues/2914)

- [apiVersions/fileVersionAuthor.feature:14](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L14)
- [apiVersions/fileVersionAuthor.feature:37](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L37)
- [apiVersions/fileVersionAuthor.feature:58](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L58)
- [apiVersions/fileVersionAuthor.feature:78](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L78)
- [apiVersions/fileVersionAuthor.feature:104](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L104)
- [apiVersions/fileVersionAuthor.feature:129](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L129)
- [apiVersions/fileVersionAuthor.feature:154](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L154)
- [apiVersions/fileVersionAuthor.feature:180](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L180)
- [apiVersions/fileVersionAuthor.feature:223](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiVersions/fileVersionAuthor.feature#L223)

### Sync

Synchronization features like etag propagation, setting mtime and locking files

#### [Uploading an old method chunked file with checksum should fail using new DAV path](https://github.com/owncloud/ocis/issues/2323)

- [apiMain/checksums.feature:381](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiMain/checksums.feature#L381)
- [apiMain/checksums.feature:386](https://github.com/owncloud/core/blob/master/tests/acceptance/features/apiMain/checksums.feature#L386)

#### [Webdav LOCK operations](https://github.com/owncloud/ocis/issues/1284)
#### [User can move a file from a shared folder with role editor to shared folder with role viewer in Shares Jail](https://github.com/owncloud/ocis/issues/4192)
