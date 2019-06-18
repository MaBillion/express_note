const fs = require('fs');
const path = require('path');

function _readFile(str) {
    return new Promise((resolve, reject) => {
        fs.readFile(str, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

module.exports = {
    _readFile
}