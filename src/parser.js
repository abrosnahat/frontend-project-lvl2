import yaml from 'js-yaml';
import ini from 'ini';

export default (file, fileExtension) => {
  if (fileExtension === '.json') {
    return JSON.parse(file);
  }

  if (fileExtension === '.yaml') {
    return yaml.safeLoad(file);
  }

  return ini.parse(file);
};
