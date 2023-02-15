export const getErrorText = (errorObject) => {
  if (!errorObject) return '';

  return Array.isArray(errorObject?.data?.detail)
    ? errorObject?.data?.detail[0].msg
    : errorObject?.data?.detail;
};
