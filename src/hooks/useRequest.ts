import env from "@/config/env";
type Method = | 'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'
  | undefined


export const useRequest = (url, method: Method = "GET", param = {}) => {
  const loading = ref(true);
  const data = ref({});

  uni.request({
    method, param,
    url: env.baseUrl + url,
  })
    .then(res => {
      loading.value = false;
      data.value = res.data;
    })
    .catch(err => {

    })

  return {
    loading, data
  };
};
