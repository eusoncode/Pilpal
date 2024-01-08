import '../styles/supplementlist.scss';
import SupplementListCard from '../components/SupplementListCard';

export default function SupplementList({userSupplements}) {
  
  return (
    <>
      <main className="supplementlist-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Supplement List<span>✷</span>
          </h1>
        </section>
        <section className="container-bottom">
          <article>
            {userSupplements.map((supplement) => (
              <SupplementListCard key={supplement.id} {...supplement} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}

