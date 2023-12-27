import '../styles/dashboard.scss';
import Header from '../components/Header';
import SupplementCard from '../components/SupplementCard';
import mockReminder from '../data/mocks/mockReminder';

export default function SupplementList({ logout, user, handleAddNew }) {

  return (
    <>
      <Header logout={logout} handleAddNew={handleAddNew} />
      <main className="dashboard-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Supplement List<span>✷</span>
          </h1>
         
        </section>
        <section className="container-bottom">
          <article className="container-left">
           
            {mockReminder.map((reminder) => (
              <SupplementCard key={reminder.id} {...reminder}/>
            ))}
          </article>
          <article className="container-right">
            <div className="container-right--box">
              <h3>News</h3>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
