import { createContext, useState } from 'react';

import { useQuery } from 'react-query';
import apiClient from '../http-common';

type Prop = {
  children?: JSX.Element;
};

type Product = {
  id: string;
  sku: string;
  description: string;
  catalog: string;
  discount: number;
  images: string[];
  price: number;
  title: string;
};
const ProductsContext = createContext({
  products: [] as Product[],
  isFetchingProducts: true as boolean,
});

export function ProductsContextProvider(props: Prop) {
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);

  const { isFetching } = useQuery(
    'query-products',
    async () => {
      return await apiClient.get('/product.json');
    },
    {
      enabled: true,
      onSuccess: (res: {
        status: string;
        statusText: string;
        headers: any;
        data: any;
      }) => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        const products: any[] = [];

        for (const key in result.data) {
          const product = {
            id: key,
            ...result.data[key],
          };
          products.push(product);
          setLoadedProducts(products);
        }
      },
      onError: (err: { response: { data: any } }) => {
        console.log(err.response?.data || err);
      },
    }
  );
  const context = {
    products: loadedProducts,
    isFetchingProducts: isFetching,
  };
  return (
    <ProductsContext.Provider value={context}>
      {props.children}
    </ProductsContext.Provider>
  );
}
export default ProductsContext;
