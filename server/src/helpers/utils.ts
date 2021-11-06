interface IResponseStatus {
  status_code: number;
  success: boolean;
  data: any;
  error: any;
}

const initStatus: IResponseStatus = {
  status_code: 404,
  success: false,
  data: null,
  error: null,
};

const makeResJson = (data: any, success = true): IResponseStatus => {
  return {
    ...initStatus,
    status_code: 200,
    success,
    data,
  };
};

export { makeResJson };
