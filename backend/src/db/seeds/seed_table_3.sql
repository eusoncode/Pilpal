INSERT INTO supplements (name, description, manufacturer, cost, quantity, images, created_at, updated_at, deleted_at, dosageType, StartDate, EndDate, purchasedFrom, price) VALUES
('SLIN', 'SLIN is a revolutionary insulin mimetic that transports the carbohydrates you eat into your muscles rather than storing them as fat! But to really understand how SLIN works, you must first understand insulin as a hormone, which we continue to fully grasp and utilize.', 'Enhanced', 49.99, 10, '{"image1": "https://enhancedlabs.com/products/slin?variant=40776813379641&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gc_id=18806800271&h_ad_id=647844093059&gad_source=1&gclid=Cj0KCQiAm4WsBhCiARIsAEJIEzXC8u_Ke_xOCLArjPz_J3jIts-lxOn49V9tKtj1bMAejiEsv8e_dFcaAscnEALw_wcB#mz-expanded-view-932786072569"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('Women Daily Multi Vitamins', 'Iron Supplements Multivitamins for Women | 90 Whole Food Blood Builder Iron Pills Tablets with Vitamin C Vitamin B12 Folate Rice Beets Root | Fatigue Anemia Hair Loss Iron & Ferritin Deficiency', 'MegaFood', 60.74, 90, '{"image2": "https://m.media-amazon.com/images/I/61EuYVGALRL._AC_SL1000_.jpg"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('Essential Vegan Multivitamin', 'Essential Vegan Multivitamin for Plant-Based Diets - 90 Veg Tablets with B12, D3, Calcium, Iron, Zinc & More. VEGANLY Vitamins Canada', 'VEGANLY Vitamins', 53.99, 90, '{"image3": "https://m.media-amazon.com/images/I/61mYKPeNbxL._AC_SL1500_.jpg"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('Men’s Multi', 'Men’s Multi – Daily Multivitamins For Men - 60 Vegan', 'NuBest', 60.99, 60, '{"image4": "https://www.nubest.com/cdn/shop/files/mensmulti-avatar.png?v=1700881339"}', NOW(), NOW(), NULL),
('NATURELO One Daily Multivitamin for Women', 'NATURELO One Daily Multivitamin for Women - Energy Support - Whole Food Supplement to Nourish Hair, Skin, Nails - Non-GMO - No Soy - Gluten Free - 120 Capsules | 4 Month Supply', 'NATURELO', 46.95, 120, '{"image5": "https://m.media-amazon.com/images/I/71XN3Lm6-CL._AC_SL1500_.jpg"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('womens multi', 'Womens Multi (18+) – Vitality & Beauty Formula, Boosts Energy, Immunity & Overall Health With Essential Vitamins, Minerals, Antioxidants, Fruit & Herbal Blends - 60 Vegan Capsules', 'NuBest', 45.55, 60, '{"image6": "https://www.nubest.com/cdn/shop/files/womensmulti-avatar.png?v=1700881139&width=1946"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('NUTRAMIN', 'NUTRACELLE NUTRAMIN Daily Vegan Keto Multivitamin Gummies Vitamin C, D2, and Zinc for Immunity, Plant-Based, Sugar-Free, Nut-Free, Gluten-Free, Vitamin A, B, B6, B12 & More 90 Count, 45 Day Supply', 'Nutracelle', 23.39, 90, '{"image7": "https://m.media-amazon.com/images/I/81NMqZpNSnL._AC_SL1500_.jpg"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('Creatine Monohydrate', 'Creatine Monohydrate 1000 mg Capsules by Nutritionn - 3-5 g Serving, 150 Capsules - Increases Lean Muscle Mass - Premium Bodybuilding and Sports Supplement', 'Nutritionn', 24.99, 150, '{"image8": "https://m.media-amazon.com/images/I/61wYwNV6-YL._AC_SL1500_.jpg"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('Essentials', 'Essentials is packed with natural antioxidants from organic whole foods, to help you look and feel better from the inside out. All ingredients are harvested at the peak of nutrition, and cold-processed to capture all of earth’s bounty.', 'touchstone', 81.00, 90, '{"image9": "https://assets.thegoodinside.com/shop/uploads/e974c051a3d8f396d7ecae0bea4260e2.jpg?_gl=1*1g4atc1*_gcl_aw*R0NMLjE3MDI5ODI5MzcuQ2owS0NRaUFtNFdzQmhDaUFSSXNBRUpJRXpWcG81MXNfTHJHQkdZT2ZKSGxjYW14NFlzX25BS1JOOHRSdXpQckpFTXdnZlJVT1lKQi1Zd2FBc2p1RUFMd193Y0I.*_gcl_au*MjIwMzI5MDM4LjE3MDI5ODI5Mzc.*FPAU*MjA5NDI5MjE0OC4xNzAyOTgyOTI2"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL),
('probiotic', 'Crafted with natural ingredients, Cymbiotikas Probiotic restores and maintains healthy gut function. This proprietary formula includes 19 probiotic strains, plant-based prebiotics, and a unique blend of herbal alchemy and amino acids. Our formula helps balance your gut microbiome, boost energy levels, lower stress and reduce digestive issues.', 'YMbiotika', 104.40, 90, '{"image10": "https://cymbiotika.ca/cdn/shop/files/SproutPDP__Zinccopy_1_2560x.png?v=1688661378"}', NOW(), NOW(), NULL, NULL, NULL, NULL, NULL, NULL);

-- Inserting values into the user_supplements table

INSERT INTO user_supplements (userId, supplementId, number_of_pills_taken, time_taken, effectiveness, additionalNotes) VALUES
(1, 1, 2, NOW(), 'Effective', NULL),
(2, 3, 1, NOW(), 'Moderate', NULL),
(1, 2, 3, NOW(), 'Very Effective', NULL),
(3, 4, 2, NOW(), 'Effective', NULL),
(2, 5, 1, NOW(), 'Moderate', NULL),
(3, 6, 2, NOW(), 'Effective', NULL),
(1, 7, 3, NOW(), 'Very Effective', NULL),
(2, 8, 2, NOW(), 'Effective', NULL),
(3, 9, 1, NOW(), 'Moderate', NULL),
(1, 10, 2, NOW(), 'Very Effective', NULL);

-- Inserting values into the supplement_usage table

INSERT INTO supplement_usage (userSupplementId, time_to_be_taken, stocklevel, updated_at, reorderLevel)
VALUES
  (1, '2023-12-31 08:00:00', 20, NOW(), NULL),
  (2, '2023-12-31 08:00:00', 15, NOW(), NULL),
  (3, '2023-12-31 21:00:00', 25, NOW(), NULL),
  (4, '2023-12-31 12:00:00', 18, NOW(), NULL),
  (5, '2023-12-31 04:00:00', 30, NOW(), NULL),
  (6, '2023-12-31 15:00:00', 22, NOW(), NULL),
  (7, '2023-12-31 09:00:00', 28, NOW(), NULL),
  (8, '2023-12-31 22:00:00', 12, NOW(), NULL),
  (9, '2023-12-31 14:00:00', 26, NOW(), NULL),
  (10, '2023-12-31 08:00:00', 19, NOW(), NULL);