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
      case 'v1/items':
        return Promise.resolve({ data: {data: []} });
      default:
        return Promise.resolve({ data: {} });
    }
  }),
  post: jest.fn((url) => {
    switch (url) {
      case 'v1/items':
        return Promise.resolve({ data: { data:{ id:'01', attributes: {category: 'category', name: 'name', price: 1} } } });
      case 'v1/fiscal_identities':
        return Promise.resolve({ data: {} });
      default:
        return Promise.resolve({ data: {data:{}} });
    }
  }), 
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