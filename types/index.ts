interface ITabs {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface IData {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  uri: string;
}

export { ITabs,IData };
