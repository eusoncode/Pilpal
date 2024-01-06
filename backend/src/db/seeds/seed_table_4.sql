
-- INSERT INTO users (username, email, password, created_at, updated_at) VALUES
-- ('user1', 'user1@example.com', 'password1', NOW(), NOW()),
-- ('user2', 'user2@example.com', 'password2', NOW(), NOW()),
-- ('user3', 'user3@example.com', 'password3', NOW(), NOW()),
-- ('user4', 'user4@example.com', 'password4', NOW(), NOW()),
-- ('user5', 'user5@example.com', 'password5', NOW(), NOW()),
-- ('user6', 'user6@example.com', 'password6', NOW(), NOW()),
-- ('user7', 'user7@example.com', 'password7', NOW(), NOW()),
-- ('user8', 'user8@example.com', 'password8', NOW(), NOW()),
-- ('user9', 'user9@example.com', 'password9', NOW(), NOW()),
-- ('user10', 'user10@example.com', 'password10', NOW(), NOW());

-- Inserting values into the supplements table

INSERT INTO supplements (name, description, manufacturer, images, created_at, updated_at, deleted_at) VALUES
('SLIN', 'SLIN is a revolutionary insulin mimetic that transports the carbohydrates you eat into your muscles rather than storing them as fat! But to really understand how SLIN works, you must first understand insulin as a hormone, which we continue to fully grasp and utilize.', 'Enhanced', '{"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvujYN4Bn21JkS7qKMNEwI2kqFqfdJ2UdA-g&usqp=CAU"}', NOW(), NOW(), NULL),
('Women Daily Multi Vitamins', 'Iron Supplements Multivitamins for Women | 90 Whole Food Blood Builder Iron Pills Tablets with Vitamin C Vitamin B12 Folate Rice Beets Root | Fatigue Anemia Hair Loss Iron & Ferritin Deficiency', 'MegaFood', '{"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ_Zb_LhwLl4g7TREEKERFBY9_3X-0QIDoVEYKASXlf025NAgSnqboE3TPTJWUJARLyo&usqp=CAU"}', NOW(), NOW(), NULL),
('Essential Vegan Multivitamin', 'Essential Vegan Multivitamin for Plant-Based Diets - 90 Veg Tablets with B12, D3, Calcium, Iron, Zinc & More. VEGANLY Vitamins Canada', 'VEGANLY Vitamins', '{"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTOBLjwQOhfp2IiFIGCZeCZei56daAt54GA&usqp=CAU"}', NOW(), NOW(), NULL),
('Men’s Multi', 'Men’s Multi – Daily Multivitamins For Men - 60 Vegan', 'NuBest', '{"src": "https://www.nubest.com/cdn/shop/files/mensmulti-avatar.png?v=1700881339"}', NOW(), NOW(), NULL),
('NATURELO One Daily Multivitamin for Women', 'NATURELO One Daily Multivitamin for Women - Energy Support - Whole Food Supplement to Nourish Hair, Skin, Nails - Non-GMO - No Soy - Gluten Free - 120 Capsules | 4 Month Supply', 'NATURELO', '{"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UBFLGyl5psO4OrgKiYZafBfkiavKXOMPoA&usqp=CAU"}', NOW(), NOW(), NULL),
('womens multi', 'Womens Multi (18+) – Vitality & Beauty Formula, Boosts Energy, Immunity & Overall Health With Essential Vitamins, Minerals, Antioxidants, Fruit & Herbal Blends - 60 Vegan Capsules', 'NuBest', '{"src": "https://www.nubest.com/cdn/shop/files/womensmulti-avatar.png?v=1700881139&width=1946"}', NOW(), NOW(), NULL),
('NUTRAMIN', 'NUTRACELLE NUTRAMIN Daily Vegan Keto Multivitamin Gummies Vitamin C, D2, and Zinc for Immunity, Plant-Based, Sugar-Free, Nut-Free, Gluten-Free, Vitamin A, B, B6, B12 & More 90 Count, 45 Day Supply', 'Nutracelle', '{"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatarULJ4JbsmhN-wFslOKoJznJ_JgLSN2AzOdaOToZH69mgg47sqpgDbdjlniOf4YDf4&usqp=CAU"}', NOW(), NOW(), NULL),
('Creatine Monohydrate', 'Creatine Monohydrate 1000 mg Capsules by Nutritionn - 3-5 g Serving, 150 Capsules - Increases Lean Muscle Mass - Premium Bodybuilding and Sports Supplement', 'Nutritionn', '{"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8KHpUL5uQh0SOttICOoBtIY2x4rBMvOsGg&usqp=CAU"}', NOW(), NOW(), NULL),
('Essentials', 'Essentials is packed with natural antioxidants from organic whole foods, to help you look and feel better from the inside out. All ingredients are harvested at the peak of nutrition, and cold-processed to capture all of earth’s bounty.', 'touchstone', '{"src": "https://assets.thegoodinside.com/shop/uploads/e974c051a3d8f396d7ecae0bea4260e2.jpg?_gl=1*1g4atc1*_gcl_aw*R0NMLjE3MDI5ODI5MzcuQ2owS0NRaUFtNFdzQmhDaUFSSXNBRUpJRXpWcG81MXNfTHJHQkdZT2ZKSGxjYW14NFlzX25BS1JOOHRSdXpQckpFTXdnZlJVT1lKQi1Zd2FBc2p1RUFMd193Y0I.*_gcl_au*MjIwMzI5MDM4LjE3MDI5ODI5Mzc.*FPAU*MjA5NDI5MjE0OC4xNzAyOTgyOTI2"}', NOW(), NOW(), NULL),
('probiotic', 'Crafted with natural ingredients, Cymbiotikas Probiotic restores and maintains healthy gut function. This proprietary formula includes 19 probiotic strains, plant-based prebiotics, and a unique blend of herbal alchemy and amino acids. Our formula helps balance your gut microbiome, boost energy levels, lower stress and reduce digestive issues.', 'YMbiotika', '{"src": "https://cymbiotika.ca/cdn/shop/files/SproutPDP__Zinccopy_1_2560x.png?v=1688661378"}', NOW(), NOW(), NULL);

-- Inserting values into the supplement_lineitem table

INSERT INTO supplement_lineitem (supplementId, quantity, type, supplementType, status, statusReason, startDate, endDate, purchasedFrom, price, created_at, updated_at, deleted_at) VALUES
(1, 60, 'intake', 'capsule', 'active', NULL, '2023-12-31', '2025-07-31', 'iHerb', 49.99, NOW(), NOW(), NULL),
(2, 30, 'intake', 'tablet', 'active', NULL, '2023-12-31', '2024-02-12', 'Amazon', 60.99, NOW(), NOW(), NULL),
(3, 60, 'intake', 'tablet', 'active', NULL, '2023-12-31', '2024-09-24', 'Alive Health', 60.74, NOW(), NOW(), NULL),
(4, 90, 'intake', 'softgel', 'active', NULL, '2023-12-31', '2025-10-02', 'iHerb', 49.95, NOW(), NOW(), NULL),
(5, 60, 'restock', 'capsule', 'active', NULL, '2023-12-31', '2025-07-31', 'iHerb', 53.99, NOW(), NOW(), NULL),
(6, 30, 'intake', 'capsule', 'active', NULL, '2023-12-31', '2024-05-16', 'Alive Health', 60.99, NOW(), NOW(), NULL),
(7, 60, 'intake', 'capsule', 'active', NULL, '2023-12-31', '2024-08-25', 'Amazon', 34.99, NOW(), NOW(), NULL),
(8, 30, 'restock', 'capsule', 'active', NULL, '2023-12-31', '2025-06-29', 'iHerb', 40.99, NOW(), NOW(), NULL),
(9, 60, 'intake', 'softgel', 'active', NULL, '2023-12-31', '2025-03-21', 'Alive Health', 56.99, NOW(), NOW(), NULL),
(10, 120, 'intake', 'capsule', 'active', NULL, '2023-12-31', '2025-04-10', 'iHerb', 77.99, NOW(), NOW(), NULL);

-- Inserting values into the user_supplements table

INSERT INTO user_supplements (userId, supplementId, dosage_per_intake, time_taken, effectiveness, additionalNotes) VALUES
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

INSERT INTO supplement_usage (userSupplementId, time_to_be_taken, intakeFrequency, stocklevel, refillLevel, updated_at)
VALUES
  (1, '2023-12-31 08:00:00', 'Everyday', 20, 6, NOW()),
  (2, '2023-12-31 08:00:00', 'Everyday', 15, 3, NOW()),
  (3, '2023-12-31 21:00:00', 'Specific days of the week', 25, 9, NOW()),
  (4, '2023-12-31 12:00:00', 'Everyday', 18, 6, NOW()),
  (5, '2023-12-31 04:00:00', 'Everyday', 3, 3, NOW()),
  (6, '2023-12-31 15:00:00', 'Everyday', 22, 6, NOW()),
  (7, '2023-12-31 09:00:00', 'Everyday', 28, 9, NOW()),
  (8, '2023-12-31 22:00:00', 'Specific days of the week', 2, 6, NOW()),
  (9, '2023-12-31 14:00:00', 'Everyday', 26, 3, NOW()),
  (10, '2023-12-31 08:00:00', 'Everyday', 19, 6, NOW());
  