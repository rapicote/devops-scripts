const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileSync = promisify(fs.readFileSync);
const writeFileSync = promisify(fs.writeFileSync);

const parser = {
  readFileSync: async (filePath) => {
    const fileBuffer = await readFileSync(filePath);
    return fileBuffer.toString();
  },

  writeFileSync: async (filePath, content) => {
    await writeFileSync(filePath, content);
  },

  readJsonFile: async (filePath) => {
    const fileBuffer = await readFileSync(filePath);
    return JSON.parse(fileBuffer);
  },

  writeJsonFile: async (filePath, data) => {
    await writeFileSync(filePath, JSON.stringify(data, null, 2));
  },

  readJsonFileWithOptions: async (filePath, options) => {
    const fileBuffer = await readFileSync(filePath);
    return JSON.parse(fileBuffer, options);
  },

  writeJsonFileWithOptions: async (filePath, data, options) => {
    await writeFileSync(filePath, JSON.stringify(data, options, 2));
  },

  readJsonFileWithOptionsSync: async (filePath, options) => {
    const fileBuffer = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(fileBuffer, options);
  },

  writeJsonFileWithOptionsSync: async (filePath, data, options) => {
    await fs.promises.writeFile(filePath, JSON.stringify(data, options, 2));
  },
};

module.exports = parser;