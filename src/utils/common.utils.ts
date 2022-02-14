import camelCase from 'lodash-es/camelCase';
import startCase from 'lodash-es/startCase';

export const pascalCase = (str: string) => startCase(camelCase(str)).replace(/ /g, '');
