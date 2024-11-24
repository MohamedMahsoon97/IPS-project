import {
  deleteResource,
  getResource,
  postResource,
  putResource,
} from './network';

export function Edit(path, data, success, fail) {
  putResource(path, data, success, fail);
}

export function Delete(path, success, fail, data) {
  deleteResource(path, success, fail, data);
}
export function Create(path, data, success, fail) {
  postResource(path, data, success, fail);
}

export function get(path, success, fail) {
  getResource(path, success, fail);
}
