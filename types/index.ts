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

export { ITabs, IData }; 
// the naming convention of ITabs is sometimes considered redundant and unnecessary but this is a matter of preference 
