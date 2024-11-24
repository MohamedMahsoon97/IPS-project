import apiClient from './axiosClientApiInstance';
import Cookies from 'js-cookie';

let token = '';
const tokenString = Cookies.get('oboor_admin');
if (tokenString) {
  token = JSON.parse(tokenString).token;
} else {
  token = '';
}
export function getResource(path, onSuccess, onFail, reqAuth = true) {
  let requestData = {
    method: 'get',
    url: path,
  };

  if (reqAuth) {
    requestData.headers = {
      ...requestData.headers,
      Authorization: token,
    };
  } else {
    requestData.headers = {
      ...requestData.headers,
    };
  }

  apiClient(requestData)
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((fail) => {
      onFail(fail.data);
    });
}

export function postResource(
  path,
  data,
  onSuccess,
  onFail,
  reqAuth = true,
  multiPart = true
) {
  let requestData = {
    method: 'post',
    url: path,
    data,
  };

  if (token && reqAuth) {
    requestData.headers = {
      ...requestData.headers,
      Authorization: token,
    };
  } else {
    requestData.headers = {
      ...requestData.headers,
    };
  }

  if (multiPart) {
    requestData.headers = {
      ...requestData.headers,
      'content-type': 'multipart/form-data',
    };
  }

  apiClient(requestData)
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((fail) => {
      onFail(fail.data);
    });
}

export function putResource(
  path,
  data,
  onSuccess,
  onFail,
  reqAuth = true,
  multipart = true,
  customUrl = false
) {
  let requestData = {
    method: 'put',
    url: path,
    data,
  };
  if (customUrl) {
    requestData = {
      method: 'put',
      url: path,
      headers: { 'Content-Type': 'video/mp4' },
      data,
    };
  }

  if (token && reqAuth) {
    requestData.headers = {
      ...requestData.headers,
      Authorization: token,
    };
  } else {
    requestData.headers = {
      ...requestData.headers,
    };
  }

  if (multipart) {
    requestData.headers = {
      ...requestData.headers,
      'content-type': 'multipart/form-data',
    };
  }

  apiClient(requestData).then(
    (res) => {
      onSuccess(res.data);
    },
    (fail) => {
      onFail(fail.data);
    }
  );
}

export function deleteResource(
  path,
  onSuccess = () => {},
  onFail = () => {},
  data,
  reqAuth = true
) {
  let requestData = {
    method: 'delete',
    url: path,
  };
  if (data) requestData.data = data;

  if (token && reqAuth) {
    requestData.headers = {
      ...requestData.headers,
      Authorization: token,
    };
  } else {
    requestData.headers = {
      ...requestData.headers,
    };
  }

  apiClient(requestData)
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((fail) => {
      onFail(fail.data);
    });
}
