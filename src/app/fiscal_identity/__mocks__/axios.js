const responseFiscalIdentity = {
  attributes: {
    category: 'monotributo',
    name: 'martin',
    identification: '20363095721'
  },
  id: '004',
  type: 'fiscal_identity'
}

const axios = {
  get: jest.fn((url) => {
    switch (url) {
      case 'v1/invoices':
        return Promise.resolve({ data: {data: []} });
      case 'v1/invoices/123':
        return Promise.resolve({ data: {data: {}} });
      case '/v1/my/fiscal_identity':
        return Promise.resolve({data: {data: responseFiscalIdentity }});
      default:
        return Promise.resolve({ data: {} });
    }
  }),
  post: jest.fn(() => Promise.resolve({ data: {data:{}} })),
  put: jest.fn((url) => {
    switch (url) {
      case 'v1/invoices/123':
        return Promise.resolve({ data: {data:{}} });
      default:
        return Promise.resolve({ data: {} });
    }
  }), 
  create: () => axios,
    defaults: {
      adapter: {},
    },
};

export default axios;