import '../styles/addnew.scss';
import Header from '../components/Header';
import Image from '../assets/image-07.png';

export default function AddNew({logout, handleAddNew, goBackToDashboard}) {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <>
      <Header logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} />
      <main className="supplement-details-container container">
        <section className="container-top">
          <h1 className="accent">
            Add New<span>✷</span>
          </h1>
        </section>
        <section className="container-bottom">
          <article className="container-left"></article>
          <article className="container-right">
            <form onSubmit={handleSubmit} className="supplement-form">
              <div className="form-group image-upload">
                <label htmlFor="image">Image:</label>
                <img src={Image} alt="User Uploaded" />
                <input type="file" id="image" name="image" accept="image/*" />
              </div>
              <div className="flex-container">
                <div className="container-left">
                  <div className="form-group">
                    <label htmlFor="supplementName">Supplement Name:</label>
                    <input
                      type="text"
                      id="supplementName"
                      name="supplementName"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="brandName">Brand Name:</label>
                    <input type="text" id="brandName" name="brandName" />
                  </div>

                  <div className="flex-container--row">
                    <div className="form-group">
                      <label htmlFor="startingDate">Starting Date:</label>
                      <input
                        type="date"
                        id="startingDate"
                        name="startingDate"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endingDate">Ending Date:</label>
                      <input type="date" id="endingDate" name="endingDate" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reminderTime">Reminder Time:</label>
                    <input type="time" id="reminderTime" name="reminderTime" />
                    <label htmlFor="intakeFrequency">Intake Frequency:</label>
                    <select id="intakeFrequency" name="intakeFrequency">
                      <option value="Everyday">Everyday</option>
                      <option value="Everyday">
                        Specific days of the week
                      </option>
                    </select>
                  </div>
                  <div className="flex-container--row">
                    <div className="form-group">
                      <label htmlFor="dosagePerIntake">
                        Dosage per Intake:
                      </label>
                      <input
                        type="number"
                        id="dosagePerIntake"
                        name="dosagePerIntake"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="type">Type:</label>
                      <select id="type" name="type">
                        <option value="Capsule">Capsule</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Spray">Spray</option>
                        <option value="Drop">Drop</option>
                        <option value="Softgel">Softgel</option>
                        <option value="mg">mg</option>
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="L">L</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="currentQuantity">Current Quantity:</label>
                    <input
                      type="number"
                      id="currentQuantity"
                      name="currentQuantity"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notifyToReorderAt">
                      Notify to Reorder At:
                    </label>
                    <input
                      type="number"
                      id="notifyToReorderAt"
                      name="notifyToReorderAt"
                      defaultValue={10}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="autoConsume">Auto Consume:</label>
                    <input
                      type="checkbox"
                      id="autoConsume"
                      name="autoConsume"
                    />
                  </div>
                </div>

                <div className="container-right">
                  <div className="form-group">
                    <label htmlFor="purchasedFrom">Purchased From:</label>
                    <input
                      type="text"
                      id="purchasedFrom"
                      name="purchasedFrom"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pricePaid">Price Paid:</label>
                    <span class="prefix">$</span>
                    <input type="text" id="pricePaid" name="pricePaid" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="productUrl">Product URL (Optional):</label>
                    <input type="url" id="productUrl" name="productUrl" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="effectiveness">Effectiveness:</label>
                    <select id="effectiveness" name="effectiveness">
                      <option value="Needs More Time To Evaluate">
                        Needs More Time To Evaluate
                      </option>
                      <option value="Not Effective">Not Effective</option>
                      <option value="Slightly Effective">
                        Slightly Effective
                      </option>
                      <option value="Moderately Effective">
                        Moderately Effective
                      </option>
                      <option value="Highly Effective">Highly Effective</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="btn-container">
                <button type="submit">Save Details</button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </>
  );
}
