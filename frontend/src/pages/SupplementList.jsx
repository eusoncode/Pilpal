import '../styles/supplementlist.scss';
import Header from '../components/Header';
import SupplementListCard from '../components/SupplementListCard';
import mockReminder from '../data/mocks/mockReminder';

export default function SupplementList() {
  return (
    <>
      <Header />
      <main className="supplementlist-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Supplement List<span>✷</span>
          </h1>
        </section>
        <section className="container-bottom">
          <article>
            {mockReminder.map((supplement) => (
              <SupplementListCard key={supplement.id} {...supplement} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
