type TypeDummyComponent = {
  text: string;
};

const DummyComponent = ({ text }: TypeDummyComponent) => {
  return <h1 className="">{text}</h1>;
};

export default DummyComponent;
