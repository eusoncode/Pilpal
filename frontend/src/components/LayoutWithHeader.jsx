import Header from './Header';

const LayoutWithHeader = ({
  children,
  logout,
  handleAddNew,
  handleShowSupplementList
}) => {

  return (
    <>
      <Header  logout={logout} handleAddNew={handleAddNew} handleShowSupplementList={handleShowSupplementList}/>
      <main>{children}</main>
    </>
  );
};

export default LayoutWithHeader;