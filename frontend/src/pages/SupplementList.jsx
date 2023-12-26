import '../styles/supplementlist.scss';
import Header from '../components/Header';
import SupplementListCard from '../components/SupplementListCard';
import mockReminder from '../data/mocks/mockReminder';

export default function SupplementList({ logout, user, handleAddNew, userSupplements, handleShowSupplementList, goBackToDashboard, setEditClicked }) {
  
  return (
    <>
      <Header logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} handleShowSupplementList={handleShowSupplementList}/>
      <main className="supplementlist-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Supplement List<span>✷</span>
          </h1>
        </section>
        <section className="container-bottom">
          <article>
            {mockReminder.map((supplement) => (
              <SupplementListCard key={supplement.id} {...supplement} setEditClicked={setEditClicked} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
