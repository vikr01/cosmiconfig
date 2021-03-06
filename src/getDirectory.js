// @flow
'use strict';

const path = require('path');
const isDirectory = require('is-directory');

function getDirectory(filepath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    return isDirectory(filepath, (err, filepathIsDirectory) => {
      if (err) {
        return reject(err);
      }
      return resolve(filepathIsDirectory ? filepath : path.dirname(filepath));
    });
  });
}

getDirectory.sync = function getDirectorySync(filepath: string): string {
  return isDirectory.sync(filepath) ? filepath : path.dirname(filepath);
};

module.exports = getDirectory;
