type ApiResponse = {
  [key: string]: any;
};

type ApiError = {
  code: number;
  message: string;
};

type ApiResult = [data?: ApiResponse, error?: ApiError];

const fetchApi = async (url: string, method: 'GET' | 'POST', data?: any) => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apiKey: '37cc84f5d24d8d56d38e89881d2a2930',
      'X-Shopify-Access-Token': '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',
      storename: 'rk-bazar-grocery',
    };
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined,
    });

    console.log('calling', response);

    const json = await response.json();

    return json as ApiResult;
  } catch (e) {
    console.error('Error:', e);

    return [undefined, {code: 500, message: e.message}] as ApiResult;
  }
};

export const getApi = async (url: string) => {
  return await fetchApi(url, 'GET');
};

export const postApi = async (url: string, data: any) => {
  return await fetchApi(url, 'POST', data);
};
