export default function AddNew() {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <>
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
              <div className="form-group">
                <label htmlFor="productUrl">Img URL</label>
                <span class="prefix">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-photo-plus"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    stroke-width="2.0"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 8h.01" />
                    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
                    <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                </span>
                <input
                  type="url"
                  id="productUrl"
                  name="productUrl"
                  placeholder="https://google.ca/img.jpg"
                />
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
