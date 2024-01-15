import Image from '../assets/image-07.png';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditSupplement({ getSupplementById }) {
  const handleSubmit = (e) => e.preventDefault();
  const { id } = useParams();

  // States for form fields
  const [name, setName] = useState('');
  const [manufacturerName, setManufacturerName] = useState('');
  const [time, setTime] = useState('');
  const [intakeFrequency, setIntakeFrequency] = useState('');
  const [intakeQuantity, setIntakeQuantity] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState('');
  const [notifyToReorderAt, setNotifyToReorderAt] = useState(0);
  const [autoConsume, setAutoConsume] = useState(false);
  const [purchasedFrom, setPurchasedFrom] = useState('');
  const [pricePaid, setPricePaid] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [effectiveness, setEffectiveness] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  useEffect(() => {
    const supplementData = getSupplementById(id);
    if (supplementData) {
      setName(supplementData.name);
      setManufacturerName(supplementData.manufacturer);
      setTime(supplementData.time);
      setIntakeFrequency(supplementData.intakeFrequency);
      setIntakeQuantity(supplementData.intakeQuantity);
      setStockQuantity(supplementData.stockQuantity);
      setStartDate(supplementData.startDate);
      setEndDate(supplementData.endDate);
      setType(supplementData.dosageType);
      setNotifyToReorderAt(supplementData.reorderLevel);
      setAutoConsume(supplementData.autoConsume);
      setPurchasedFrom(supplementData.purchasedFrom);
      setPricePaid(supplementData.price);
      setProductUrl(supplementData.productUrl);
      setEffectiveness(supplementData.effectiveness);
      setAdditionalNotes(supplementData.additionalNotes);
    }
  }, [id, getSupplementById]);

  return (
    <>
      <main className="supplement-details-container container">
        <section className="container-top">
          <h1 className="accent">
            Edit<span>✷</span>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="brandName">Brand Name:</label>
                    <input
                      type="text"
                      id="brandName"
                      name="brandName"
                      value={manufacturerName}
                      onChange={(e) => setManufacturerName(e.target.value)}
                    />
                  </div>

                  <div className="flex-container--row">
                    <div className="form-group">
                      <label htmlFor="startingDate">Starting Date:</label>
                      <input
                        type="date"
                        id="startingDate"
                        name="startingDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endingDate">Ending Date:</label>
                      <input
                        type="date"
                        id="endingDate"
                        name="endingDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reminderTime">Reminder Time:</label>
                    <input
                      type="time"
                      id="reminderTime"
                      name="reminderTime"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                    <label htmlFor="intakeFrequency">Intake Frequency:</label>
                    <select
                      id="intakeFrequency"
                      name="intakeFrequency"
                      value={intakeFrequency}
                      onChange={(e) => setIntakeFrequency(e.target.value)}
                    >
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
                        value={intakeQuantity}
                        onChange={(e) => setIntakeQuantity(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="type">Type:</label>
                      <select
                        id="type"
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
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
                      value={stockQuantity}
                      disabled
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
                      value={notifyToReorderAt}
                      onChange={(e) => setNotifyToReorderAt(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="autoConsume">Auto Consume:</label>
                    <input
                      type="checkbox"
                      id="autoConsume"
                      name="autoConsume"
                      checked={autoConsume}
                      onChange={(e) => setAutoConsume(e.target.checked)}
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
                      value={purchasedFrom}
                      onChange={(e) => setPurchasedFrom(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pricePaid">Price Paid:</label>
                    <span class="prefix">$</span>
                    <input
                      type="text"
                      id="pricePaid"
                      name="pricePaid"
                      value={pricePaid}
                      onChange={(e) => setPricePaid(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="productUrl">Product URL (Optional):</label>
                    <input
                      type="url"
                      id="productUrl"
                      name="productUrl"
                      value={productUrl}
                      onChange={(e) => setProductUrl(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="effectiveness">Effectiveness:</label>
                    <select
                      id="effectiveness"
                      name="effectiveness"
                      value={effectiveness}
                      onChange={(e) => setEffectiveness(e.target.value)}
                    >
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
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
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
