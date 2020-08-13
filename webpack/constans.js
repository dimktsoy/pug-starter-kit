import { resolve } from 'path';
import { path as PROJECT_ROOT } from 'app-root-path';

export { PROJECT_ROOT };
export const BUILD_DIRECTORY = resolve(PROJECT_ROOT, './dist');
export const SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './src');
export const SOURCE_DIRECTORY_PAGES = resolve(PROJECT_ROOT, './src/pages');

export const PORT = 9000;
