import { useState } from 'react';
import SupplementListCard from '../components/SupplementListCard';
import mockReminder from '../data/mocks/mockReminder';

export default function SupplementList() {
  const totalSupplements = mockReminder.length;
  const [supplements, setSupplements] = useState(mockReminder);

  const toggleActiveStatus = (id) => {
    const updatedSupplements = supplements.map((supplement) => {
      if (supplement.id === id) {
        return { ...supplement, isActive: !supplement.isActive };
      }
      return supplement;
    });

    setSupplements(updatedSupplements);
  };

  const handleDelete = (id) => {
    const updatedSupplements = supplements.filter(
      (supplement) => supplement.id !== id
    );
    setSupplements(updatedSupplements);
    // backend: request to delete here!
  };

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
            {supplements.map((supplement, index) => (
              <SupplementListCard
                key={supplement.id}
                number={index + 1}
                {...supplement}
                onToggleActive={toggleActiveStatus}
                onDelete={handleDelete}
              />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
