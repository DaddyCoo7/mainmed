/*
  # Seed Major Cities - Batch 1
  
  Seeds major cities for:
  - California (remaining cities)
  - Texas (top cities)
  - New York (top cities)
  - Florida (top cities)
  - Illinois (top cities)
*/

-- California (remaining)
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('california', 'San Diego', 'san-diego', 'San Diego Metro', '1.4M', 'Medical Billing Services in San Diego, CA | Medtransic', 'Professional medical billing and RCM services for San Diego healthcare providers. Maximize revenue with expert Medi-Cal billing and coding.', 
'[{"icon":"DollarSign","title":"San Diego Experts","description":"Specialized in San Diego healthcare market"},{"icon":"Clock","title":"Fast Turnaround","description":"Average 23-day claim processing"},{"icon":"TrendingUp","title":"Revenue Growth","description":"30% average increase for SD practices"}]'::jsonb,
ARRAY['La Jolla', 'Chula Vista', 'Carlsbad', 'Oceanside', 'El Cajon'],
'Medical Billing Company San Diego | RCM Services SD | Medtransic',
'Expert medical billing in San Diego, CA. Medi-Cal specialists, AR management & RCM. 98% collection rate. Free consultation for SD healthcare providers.'),

('california', 'San Jose', 'san-jose', 'Silicon Valley', '1.0M', 'Medical Billing Services in San Jose, CA | Medtransic', 'Silicon Valley''s trusted medical billing partner. Expert RCM services for San Jose healthcare providers with cutting-edge technology.', 
'[{"icon":"Zap","title":"Tech-Enabled RCM","description":"Advanced automation for Silicon Valley practices"},{"icon":"DollarSign","title":"Maximize Revenue","description":"Industry-leading collection rates"},{"icon":"Shield","title":"HIPAA Compliant","description":"Enterprise-grade data security"}]'::jsonb,
ARRAY['Santa Clara', 'Sunnyvale', 'Milpitas', 'Cupertino', 'Mountain View'],
'Medical Billing Company San Jose | Silicon Valley RCM | Medtransic',
'Top medical billing services in San Jose, CA. Silicon Valley RCM experts. Medi-Cal billing specialists. Boost revenue by 30%. Call today.'),

('california', 'Sacramento', 'sacramento', 'Greater Sacramento', '525K', 'Medical Billing Services in Sacramento, CA | Medtransic', 'California''s capital deserves capital-level medical billing services. Expert RCM for Sacramento healthcare providers.', 
'[{"icon":"Building","title":"Capital Region Experts","description":"Deep Sacramento market knowledge"},{"icon":"Target","title":"98% Clean Claims","description":"Industry-leading first-pass acceptance"},{"icon":"Clock","title":"Quick Setup","description":"Start in 48 hours"}]'::jsonb,
ARRAY['Elk Grove', 'Roseville', 'Folsom', 'Davis', 'Rancho Cordova'],
'Medical Billing Company Sacramento | CA Capital RCM | Medtransic',
'Premier medical billing in Sacramento, CA. Expert Medi-Cal billing, coding & RCM. Serve the capital region. Free consultation for Sacramento practices.')
ON CONFLICT (state_slug, city_slug) DO NOTHING;

-- Texas Cities
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('texas', 'Houston', 'houston', 'Greater Houston', '2.3M', 'Medical Billing Services in Houston, TX | Medtransic', 'Houston''s premier medical billing and RCM services. Expert revenue cycle management for Texas healthcare providers with deep Medicaid knowledge.', 
'[{"icon":"DollarSign","title":"Texas Medicaid Experts","description":"Specialized in TX Medicaid and CHIP programs"},{"icon":"Users","title":"Houston Healthcare","description":"Serving 2000+ Houston-area providers"},{"icon":"TrendingUp","title":"Revenue Growth","description":"Average 28% revenue increase"}]'::jsonb,
ARRAY['Sugar Land', 'The Woodlands', 'Pearland', 'Pasadena', 'League City'],
'Medical Billing Company Houston | Texas RCM Services | Medtransic',
'Top medical billing services in Houston, TX. Expert Texas Medicaid billing, AR management & RCM. 98% collection rate. Free consultation for Houston practices.'),

('texas', 'Dallas', 'dallas', 'Dallas-Fort Worth Metroplex', '1.3M', 'Medical Billing Services in Dallas, TX | Medtransic', 'Dallas-Fort Worth''s trusted medical billing partner. Expert RCM services for DFW healthcare providers with proven results.', 
'[{"icon":"Building","title":"DFW Specialists","description":"Deep knowledge of Dallas healthcare market"},{"icon":"Clock","title":"Fast Claims","description":"23-day average claim turnaround"},{"icon":"Shield","title":"Compliance Experts","description":"TX Board of Medical Examiners compliant"}]'::jsonb,
ARRAY['Fort Worth', 'Plano', 'Irving', 'Arlington', 'Frisco'],
'Medical Billing Company Dallas | DFW RCM Services | Medtransic',
'Premier medical billing in Dallas, TX. DFW RCM experts. Texas Medicaid specialists. 98% collection rate. Boost your Dallas practice revenue.'),

('texas', 'Austin', 'austin', 'Greater Austin', '978K', 'Medical Billing Services in Austin, TX | Medtransic', 'Austin''s innovative medical billing solution. Tech-forward RCM services for the capital city''s healthcare providers.', 
'[{"icon":"Zap","title":"Tech-Forward RCM","description":"Modern solutions for Austin practices"},{"icon":"DollarSign","title":"Capital City Experts","description":"Specialized in Austin market"},{"icon":"TrendingUp","title":"Revenue Boost","description":"30% average revenue increase"}]'::jsonb,
ARRAY['Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Kyle'],
'Medical Billing Company Austin | TX Capital RCM | Medtransic',
'Top medical billing services in Austin, TX. Tech-forward RCM for the capital. Texas Medicaid experts. Free consultation for Austin healthcare providers.'),

('texas', 'San Antonio', 'san-antonio', 'Greater San Antonio', '1.5M', 'Medical Billing Services in San Antonio, TX | Medtransic', 'San Antonio''s most trusted medical billing partner. Expert RCM services for South Texas healthcare providers.', 
'[{"icon":"Heart","title":"South Texas Experts","description":"Deep San Antonio healthcare knowledge"},{"icon":"Users","title":"Military Medicine","description":"TRICARE and VA billing specialists"},{"icon":"Target","title":"High Collections","description":"98%+ collection rate"}]'::jsonb,
ARRAY['New Braunfels', 'Schertz', 'Universal City', 'Seguin', 'Boerne'],
'Medical Billing Company San Antonio | South TX RCM | Medtransic',
'Expert medical billing in San Antonio, TX. South Texas RCM specialists. TRICARE & Texas Medicaid experts. Boost your SA practice revenue today.')
ON CONFLICT (state_slug, city_slug) DO NOTHING;

-- New York Cities
INSERT INTO city_pages (state_slug, city_name, city_slug, metro_area, population, hero_title, hero_description, key_benefits, nearby_cities, meta_title, meta_description) VALUES
('new-york', 'New York City', 'new-york-city', 'New York Metro', '8.3M', 'Medical Billing Services in New York City | Medtransic', 'NYC''s premier medical billing and RCM services. Expert revenue cycle management for Manhattan, Brooklyn, Queens, Bronx & Staten Island healthcare providers.', 
'[{"icon":"Building","title":"NYC Specialists","description":"Expert in all 5 boroughs and NYC Medicaid"},{"icon":"DollarSign","title":"Maximize Revenue","description":"Average 30% revenue increase for NYC practices"},{"icon":"Shield","title":"HIPAA Compliant","description":"Enterprise-grade security for NYC providers"}]'::jsonb,
ARRAY['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
'Medical Billing Company NYC | New York City RCM | Medtransic',
'Top medical billing services in New York City. Expert NYC Medicaid billing, AR management & RCM. 98% collection rate. Serve all 5 boroughs.'),

('new-york', 'Buffalo', 'buffalo', 'Buffalo-Niagara', '278K', 'Medical Billing Services in Buffalo, NY | Medtransic', 'Western New York''s trusted medical billing partner. Expert RCM services for Buffalo and Niagara region healthcare providers.', 
'[{"icon":"Heart","title":"WNY Experts","description":"Deep Western NY healthcare knowledge"},{"icon":"Clock","title":"Fast Processing","description":"23-day average claim turnaround"},{"icon":"TrendingUp","title":"Revenue Growth","description":"28% average increase"}]'::jsonb,
ARRAY['Amherst', 'Cheektowaga', 'West Seneca', 'Tonawanda', 'Niagara Falls'],
'Medical Billing Company Buffalo | Western NY RCM | Medtransic',
'Expert medical billing in Buffalo, NY. Western New York RCM specialists. NY Medicaid experts. Boost your Buffalo practice revenue today.');

SELECT 1;
