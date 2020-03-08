import yaml from 'js-yaml';

export default (file, fileExtension) => {
  if (fileExtension === '.json') {
    return JSON.parse(file);
  }

  /* if (fileExtension === '.yaml') {
    return yaml.safeLoad(file);
  } */

  return yaml.safeLoad(file);
};
