/*
  # Seed Major Cities - Batch 2
  
  Seeds major cities for:
  - Florida (top cities)
  - Illinois (top cities)
  - Pennsylvania (top cities)
  - Arizona (top cities)
  - Georgia (top cities)
*/

-- Florida Cities
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('florida', 'Miami', 'miami', 'Miami Metro', '470K', 'Medical Billing Services in Miami, FL | Medtransic', 'Miami''s premier medical billing and RCM services. Expert revenue cycle management for South Florida healthcare providers with bilingual support.', 
'[{"icon":"Globe","title":"Bilingual Support","description":"English & Spanish billing specialists"},{"icon":"DollarSign","title":"FL Medicaid Experts","description":"Specialized in Florida Medicaid and Medicare"},{"icon":"TrendingUp","title":"Revenue Growth","description":"30% average revenue increase"}]'::jsonb,
ARRAY['Miami Beach', 'Coral Gables', 'Hialeah', 'Fort Lauderdale', 'Hollywood'],
'Medical Billing Company Miami | South Florida RCM | Medtransic',
'Top medical billing services in Miami, FL. Bilingual support. Florida Medicaid & Medicare experts. 98% collection rate. Free consultation.'),

('florida', 'Tampa', 'tampa', 'Tampa Bay Area', '400K', 'Medical Billing Services in Tampa, FL | Medtransic', 'Tampa Bay''s trusted medical billing partner. Expert RCM services for Central Florida healthcare providers.', 
'[{"icon":"Anchor","title":"Tampa Bay Experts","description":"Deep Tampa healthcare market knowledge"},{"icon":"Clock","title":"Fast Claims","description":"23-day average processing time"},{"icon":"Shield","title":"Compliance","description":"Florida healthcare regulations expert"}]'::jsonb,
ARRAY['St. Petersburg', 'Clearwater', 'Brandon', 'Largo', 'Palm Harbor'],
'Medical Billing Company Tampa | Central FL RCM | Medtransic',
'Expert medical billing in Tampa, FL. Tampa Bay RCM specialists. Florida Medicaid experts. Boost your practice revenue today.'),

('florida', 'Orlando', 'orlando', 'Greater Orlando', '310K', 'Medical Billing Services in Orlando, FL | Medtransic', 'Orlando''s innovative medical billing solution. Expert RCM services for Central Florida''s growing healthcare market.', 
'[{"icon":"Zap","title":"Growing Market","description":"Expertise in Orlando''s dynamic healthcare"},{"icon":"Users","title":"Tourist Medicine","description":"Specialized in urgent care & ER billing"},{"icon":"TrendingUp","title":"Revenue Boost","description":"Average 28% increase"}]'::jsonb,
ARRAY['Kissimmee', 'Winter Park', 'Ocoee', 'Altamonte Springs', 'Lake Mary'],
'Medical Billing Company Orlando | Central FL RCM | Medtransic',
'Premier medical billing in Orlando, FL. Central Florida RCM experts. FL Medicaid specialists. Free consultation for Orlando healthcare providers.'),

('florida', 'Jacksonville', 'jacksonville', 'Greater Jacksonville', '950K', 'Medical Billing Services in Jacksonville, FL | Medtransic', 'Jacksonville''s most trusted medical billing partner. Expert RCM services for Northeast Florida healthcare providers.', 
'[{"icon":"Anchor","title":"Northeast FL Experts","description":"Deep Jacksonville market knowledge"},{"icon":"Users","title":"Military Medicine","description":"TRICARE and VA billing specialists"},{"icon":"Target","title":"High Collections","description":"98%+ collection rate"}]'::jsonb,
ARRAY['Jacksonville Beach', 'Orange Park', 'Ponte Vedra', 'St. Augustine', 'Fleming Island'],
'Medical Billing Company Jacksonville | NE Florida RCM | Medtransic',
'Top medical billing in Jacksonville, FL. Northeast Florida RCM specialists. TRICARE & FL Medicaid experts. Boost your practice revenue.');

-- Illinois Cities
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('illinois', 'Chicago', 'chicago', 'Chicagoland', '2.7M', 'Medical Billing Services in Chicago, IL | Medtransic', 'Chicago''s premier medical billing and RCM services. Expert revenue cycle management for Chicagoland healthcare providers.', 
'[{"icon":"Building","title":"Chicagoland Experts","description":"Deep knowledge of Chicago healthcare market"},{"icon":"DollarSign","title":"IL Medicaid Specialists","description":"Expert in Illinois Medicaid and Medicare"},{"icon":"TrendingUp","title":"Revenue Growth","description":"30% average revenue increase"}]'::jsonb,
ARRAY['Naperville', 'Aurora', 'Joliet', 'Evanston', 'Schaumburg'],
'Medical Billing Company Chicago | Chicagoland RCM | Medtransic',
'Top medical billing services in Chicago, IL. Chicagoland RCM experts. IL Medicaid billing specialists. 98% collection rate. Call today.'),

('illinois', 'Springfield', 'springfield', 'Greater Springfield', '115K', 'Medical Billing Services in Springfield, IL | Medtransic', 'Illinois capital''s trusted medical billing partner. Expert RCM services for Central Illinois healthcare providers.', 
'[{"icon":"Building","title":"Capital City Experts","description":"Deep Springfield market knowledge"},{"icon":"Clock","title":"Fast Processing","description":"23-day average claim turnaround"},{"icon":"Shield","title":"Compliance","description":"IL regulations expert"}]'::jsonb,
ARRAY['Decatur', 'Champaign', 'Bloomington', 'Peoria', 'Normal'],
'Medical Billing Company Springfield | Central IL RCM | Medtransic',
'Expert medical billing in Springfield, IL. Central Illinois RCM specialists. IL Medicaid experts. Boost your Springfield practice revenue.');

-- Pennsylvania Cities  
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('pennsylvania', 'Philadelphia', 'philadelphia', 'Greater Philadelphia', '1.6M', 'Medical Billing Services in Philadelphia, PA | Medtransic', 'Philadelphia''s premier medical billing and RCM services. Expert revenue cycle management for Philly-area healthcare providers.', 
'[{"icon":"Building","title":"Philly Specialists","description":"Deep Philadelphia healthcare expertise"},{"icon":"DollarSign","title":"PA Medicaid Experts","description":"Specialized in PA Medicaid and Medicare"},{"icon":"TrendingUp","title":"Revenue Growth","description":"30% average increase"}]'::jsonb,
ARRAY['Camden', 'Chester', 'Wilmington', 'King of Prussia', 'Norristown'],
'Medical Billing Company Philadelphia | Philly RCM Services | Medtransic',
'Top medical billing services in Philadelphia, PA. Philly RCM experts. PA Medicaid specialists. 98% collection rate. Free consultation.'),

('pennsylvania', 'Pittsburgh', 'pittsburgh', 'Greater Pittsburgh', '305K', 'Medical Billing Services in Pittsburgh, PA | Medtransic', 'Pittsburgh''s trusted medical billing partner. Expert RCM services for Western Pennsylvania healthcare providers.', 
'[{"icon":"Heart","title":"Western PA Experts","description":"Deep Pittsburgh market knowledge"},{"icon":"Users","title":"Academic Medicine","description":"UPMC and hospital billing specialists"},{"icon":"Target","title":"High Collections","description":"98%+ collection rate"}]'::jsonb,
ARRAY['Monroeville', 'Cranberry Township', 'Bethel Park', 'Mt. Lebanon', 'Ross Township'],
'Medical Billing Company Pittsburgh | Western PA RCM | Medtransic',
'Expert medical billing in Pittsburgh, PA. Western Pennsylvania RCM specialists. PA Medicaid experts. Boost your practice revenue.');

-- Arizona Cities
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('arizona', 'Phoenix', 'phoenix', 'Greater Phoenix', '1.7M', 'Medical Billing Services in Phoenix, AZ | Medtransic', 'Phoenix''s premier medical billing and RCM services. Expert revenue cycle management for Valley of the Sun healthcare providers.', 
'[{"icon":"Sun","title":"Valley Experts","description":"Deep Phoenix metro area knowledge"},{"icon":"DollarSign","title":"AHCCCS Specialists","description":"Arizona Medicaid (AHCCCS) experts"},{"icon":"TrendingUp","title":"Revenue Growth","description":"30% average increase"}]'::jsonb,
ARRAY['Scottsdale', 'Mesa', 'Tempe', 'Chandler', 'Glendale'],
'Medical Billing Company Phoenix | Valley RCM Services | Medtransic',
'Top medical billing services in Phoenix, AZ. Valley RCM experts. AHCCCS Medicaid specialists. 98% collection rate. Free consultation.'),

('arizona', 'Tucson', 'tucson', 'Greater Tucson', '545K', 'Medical Billing Services in Tucson, AZ | Medtransic', 'Southern Arizona''s trusted medical billing partner. Expert RCM services for Tucson healthcare providers.', 
'[{"icon":"Cactus","title":"Southern AZ Experts","description":"Deep Tucson healthcare knowledge"},{"icon":"Clock","title":"Fast Processing","description":"23-day average claim turnaround"},{"icon":"Shield","title":"AHCCCS Compliance","description":"Arizona Medicaid expert"}]'::jsonb,
ARRAY['Oro Valley', 'Marana', 'Sahuarita', 'Catalina', 'Green Valley'],
'Medical Billing Company Tucson | Southern AZ RCM | Medtransic',
'Expert medical billing in Tucson, AZ. Southern Arizona RCM specialists. AHCCCS experts. Boost your Tucson practice revenue today.');

-- Georgia Cities
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('georgia', 'Atlanta', 'atlanta', 'Metro Atlanta', '500K', 'Medical Billing Services in Atlanta, GA | Medtransic', 'Atlanta''s premier medical billing and RCM services. Expert revenue cycle management for Metro Atlanta healthcare providers.', 
'[{"icon":"Peach","title":"Metro Atlanta Experts","description":"Deep Atlanta healthcare market knowledge"},{"icon":"DollarSign","title":"GA Medicaid Specialists","description":"Georgia Medicaid and PeachCare experts"},{"icon":"TrendingUp","title":"Revenue Growth","description":"30% average increase"}]'::jsonb,
ARRAY['Sandy Springs', 'Marietta', 'Roswell', 'Johns Creek', 'Alpharetta'],
'Medical Billing Company Atlanta | Metro ATL RCM Services | Medtransic',
'Top medical billing services in Atlanta, GA. Metro Atlanta RCM experts. GA Medicaid specialists. 98% collection rate. Call today.');

SELECT 1;
