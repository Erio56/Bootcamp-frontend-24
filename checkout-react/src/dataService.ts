export type APIResult = {
  products: Product[];
}

export type Product = {
  id: string;
  name: string;
  price: number;
  availableCount: number;
}

export function getProducts(): Promise<Product[]> {
  return getData('/products.json')
      .then(result => result.products);
}

function getData(endpoint: string): Promise<APIResult> {
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise((resolve) => {
      setTimeout(function () {
          fetch(endpoint)
              .then(res => {
                  resolve(res.json())
              });
      }, delay);
  });
}