import Image from '../assets/image-07.png';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditSupplement({ editSupplement, getSupplementById }) { 
  
  const { id } = useParams();

  // console.log({
  //   supplementId: id
  // });
  
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    startingDate: '',
    endingDate: '',
    reminderTime: '',
    intakeFrequency: '',
    dosagePerIntake: '',
    dosageType: '',
    quantity: '',
    refillLevel: '',
    purchasedFrom: '',
    price: '',
    // productUrl: '',
    effectiveness: '',
    description: '',
    additionalNotes: ''
  });

  // const {    
  //   name,
  //   manufacturer,
  //   startingDate,
  //   endingDate,
  //   reminderTime,
  //   intakeFrequency,
  //   dosagePerIntake,
  //   dosageType,
  //   quantity,
  //   refillLevel,
  //   purchasedFrom,
  //   price,
  //   productUrl,
  //   effectiveness,
  //   description,
  //   additionalNotes
  // } = supplementToBeEdited;
  

  useEffect(() => {
    // console.log({
    //   supplementId: id
    // });
    const supplementToBeEdited = getSupplementById(id);
    
    console.log({
      supplementToBeEdited: supplementToBeEdited
    });

    if (supplementToBeEdited) {
      setFormData({
        ...supplementToBeEdited,
      });
    }
  }, [id, getSupplementById])

  
  // const { saveImage, setSaveImage } = useState({image: ''});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    editSupplement(formData);
    navigate('/supplement-list'); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  
  // const productUrl = formData.image.src;

  console.log({
    // productUrl: productUrl,
    formData: formData
  });


  // console.log({
  //   productUrl: productUrl
  // });

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
                <img src={/**saveImage.image ? URL.createObjectURL(saveImage.image) : **/Image} alt="User Uploaded"/>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleInputChange}/>
              </div>
              <div className="flex-container">
                <div className="container-left">
                  <div className="form-group">
                    <label htmlFor="name">Supplement Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="brandName">Manufacturer:</label>
                    <input
                      type="text"
                      id="manufacturer"
                      name="manufacturer" 
                      value={formData.manufacturer}
                      onChange={handleInputChange} />
                  </div>

                  <div className="flex-container--row">
                    <div className="form-group">
                      <label htmlFor="startingDate">Starting Date:</label>
                      <input
                        type="date"
                        id="startingDate"
                        name="startingDate"
                        value={formData.startingDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endingDate">Ending Date:</label>
                      <input
                        type="date"
                        id="endingDate"
                        name="endingDate" 
                        value={formData.endingDate}
                        onChange={handleInputChange}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reminderTime">Reminder Time:</label>
                    <input
                      type="time"
                      id="reminderTime"
                      name="reminderTime" 
                      value={formData.reminderTime}
                      onChange={handleInputChange}/>
                    <label htmlFor="intakeFrequency">Intake Frequency:</label>
                    <select
                      id="intakeFrequency"
                      name="intakeFrequency" 
                      value={formData.intakefrequency}
                      onChange={handleInputChange}>
                      <option value="Everyday">Everyday</option>
                      <option value="Specific days of the week">Specific days of the week</option>
                    </select>
                  </div>
                  <div className="flex-container--row">
                    <div className="form-group">
                      <label htmlFor="dosagePerIntake">Dosage per Intake:</label>
                      <input
                        type="number"
                        id="dosagePerIntake"
                        name="dosagePerIntake"
                        value={formData.intakequantity}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dosageType">Dosage Type:</label>
                      <select
                        id="dosageType"
                        name="dosageType"
                        value={formData.dosagetype}
                        onChange={handleInputChange}>
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
                    <label htmlFor="currentQuantity">Quantity:</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="refillLevel">Refill Level:</label>
                    <input
                      type="number"
                      id="refillLevel"
                      name="refillLevel"
                      value={formData.refilllevel}
                      onChange={handleInputChange}
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
                      value={formData.purchasedfrom}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <span className="prefix">$</span>
                    <input
                      type="text"
                      id="price"
                      name="price" 
                      value={formData.price}
                      onChange={handleInputChange}/>
                  </div>

                  {/* <div className="form-group">
                    <label htmlFor="productUrl">Product URL (Optional):</label>
                    <input
                      type="url"
                      id="productUrl"
                      name="productUrl"
                      value={productUrl}
                      onChange={handleInputChange} />
                  </div> */}

                  <div className="form-group">
                    <label htmlFor="effectiveness">Effectiveness:</label>
                    <select
                      id="effectiveness"
                      name="effectiveness"
                      value={formData.effectiveness}
                      onChange={handleInputChange}> 
                      <option value="Needs More Time To Evaluate">Needs More Time To Evaluate</option>
                      <option value="Not Effective">Not Effective</option>
                      <option value="Slightly Effective">Slightly Effective</option>
                      <option value="Moderately Effective">Moderately Effective</option>
                      <option value="Highly Effective">Highly Effective</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>                    
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows="4"
                      value={formData.additionalnotes}
                      onChange={handleInputChange}
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
        {/* <section className="container-bottom">
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
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="manufacturer">Brand Name:</label>
                    <input
                      type="text"
                      id="manufacturer"
                      name="manufacturer"
                      value={formData.manufacturer}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex-container--row">
                    <div className="form-group">
                      <label htmlFor="startingDate">Starting Date:</label>
                      <input
                        type="date"
                        id="startingDate"
                        name="startingDate"
                        value={formData.startdate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endingDate">Ending Date:</label>
                      <input
                        type="date"
                        id="endingDate"
                        name="endingDate"
                        value={formData.enddate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reminderTime">Reminder Time:</label>
                    <input
                      type="time"
                      id="reminderTime"
                      name="reminderTime"
                      value={formData.time}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="intakeFrequency">Intake Frequency:</label>
                    <select
                      id="intakeFrequency"
                      name="intakeFrequency"
                      value={formData.intakefrequency}
                      onChange={handleInputChange}
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
                        value={formData.intakequantity}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="type">Type:</label>
                      <select
                        id="type"
                        name="type"
                        value={formData.dosagetype}
                        onChange={handleInputChange}
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
                      value={formData.quantity}
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notifyToReorderAt">
                      Refill Level:
                    </label>
                    <input
                      type="number"
                      id="notifyToReorderAt"
                      name="notifyToReorderAt"
                      value={formData.refillLevel}
                      onChange={handleInputChange}
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
                      value={formData.purchasedFrom}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pricePaid">Price Paid:</label>
                    <span class="prefix">$</span>
                    <input
                      type="text"
                      id="pricePaid"
                      name="pricePaid"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="productUrl">Product URL (Optional):</label>
                    <input
                      type="url"
                      id="productUrl"
                      name="productUrl"
                      value={formData.image.src}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="effectiveness">Effectiveness:</label>
                    <select
                      id="effectiveness"
                      name="effectiveness"
                      value={formData.effectiveness}
                      onChange={handleInputChange}
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
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>   
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows="4"
                      value={formData.additionalnotes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="btn-container">
                <button type="submit">Save Details</button>
              </div>
            </form>
          </article>
        </section> */}
      </main>
    </>
  );
}