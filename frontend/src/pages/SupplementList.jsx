import '../styles/supplementlist.scss';
import SupplementListCard from '../components/SupplementListCard';

export default function SupplementList({filteredUserSupplements, markAsDeleted}) {
  
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
            {filteredUserSupplements.map((supplement) => (
              <SupplementListCard key={supplement.id} {...supplement} markAsDeleted={markAsDeleted} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
