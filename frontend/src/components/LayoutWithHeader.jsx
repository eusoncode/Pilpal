import Header from './Header';

const LayoutWithHeader = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default LayoutWithHeader;
