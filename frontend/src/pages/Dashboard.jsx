import '../styles/dashboard.scss';
import Header from '../components/Header';
import SupplementCard from '../components/SupplementCard';
import mockReminder from '../data/mocks/mockReminder';

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="dashboard-container container">
        <section className="container-top">
          <h1 className="accent">
            Pilpal Dashboard<span>✷</span>
          </h1>
          <h2>Hi, Luwam! Let’s make today a healthy one.</h2>
        </section>
        <section className="container-bottom">
          <article className="container-left">
            <h3>
              Reminders <span>***</span>
            </h3>
            {mockReminder.map((reminder) => (
              <SupplementCard key={reminder.id} {...reminder} />
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
