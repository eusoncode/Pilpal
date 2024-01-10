import SupplementListCard from '../components/SupplementListCard';
import mockReminder from '../data/mocks/mockReminder';

export default function SupplementList() {
  const totalSupplements = mockReminder.length;
  return (
    <>
      <main className="supplementlist-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Supplement List<span>✷</span>
          </h1>
          <p className="info">
            You're Managing <span>{totalSupplements} Supplements</span>
          </p>
        </section>
        <section className="container-bottom">
          <article>
            {mockReminder.map((supplement, index) => (
              <SupplementListCard
                key={supplement.id}
                number={index + 1}
                {...supplement}
              />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
