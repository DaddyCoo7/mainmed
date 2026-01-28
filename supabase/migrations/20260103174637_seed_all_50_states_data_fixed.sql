/*
  # Seed All 50 States Landing Page Data

  1. Data Population
    - Insert comprehensive data for all 50 US states
    - Each state includes: name, code, slug, hero content, cities, benefits, stats, SEO meta
    - Tailored content for medical billing/RCM services per state
*/

INSERT INTO state_pages (state_name, state_code, slug, hero_title, hero_description, major_cities, key_benefits, stats, meta_title, meta_description) VALUES
('Alabama', 'AL', 'alabama', 
  'Medical Billing Services in Alabama | Medtransic',
  'Leading revenue cycle management and medical billing solutions for healthcare providers across Alabama. Maximize reimbursements and reduce administrative burden.',
  ARRAY['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa'],
  '[
    {"icon": "DollarSign", "title": "Maximize Alabama Claims", "description": "Expert handling of Blue Cross Blue Shield of Alabama, UnitedHealthcare, and Medicaid claims"},
    {"icon": "Shield", "title": "HIPAA Compliant", "description": "Full compliance with Alabama state regulations and federal healthcare standards"},
    {"icon": "TrendingUp", "title": "Increase Collections", "description": "Average 25% revenue increase for Alabama healthcare practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Alabama | RCM Services | Medtransic',
  'Top-rated medical billing services in Alabama. Serving Birmingham, Montgomery, Mobile & statewide. Boost revenue, reduce denials. Free consultation available.'
),

('Alaska', 'AK', 'alaska',
  'Medical Billing Services in Alaska | Medtransic',
  'Specialized medical billing and RCM services for Alaska healthcare providers. Navigate unique Alaska Medicaid and remote healthcare challenges.',
  ARRAY['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Wasilla'],
  '[
    {"icon": "DollarSign", "title": "Alaska-Specific Expertise", "description": "Navigate unique Alaska Medicaid, tribal health, and remote healthcare billing"},
    {"icon": "Clock", "title": "Extended Support Hours", "description": "Coverage across Alaska time zones for seamless operations"},
    {"icon": "TrendingUp", "title": "Telehealth Billing", "description": "Expert handling of Alaska''s extensive telehealth and remote care billing"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Alaska | RCM Services | Medtransic',
  'Expert medical billing services in Alaska. Specializing in Anchorage, Fairbanks, Juneau. Handle Alaska Medicaid, tribal health & telehealth billing.'
),

('Arizona', 'AZ', 'arizona',
  'Medical Billing Services in Arizona | Medtransic',
  'Comprehensive medical billing and revenue cycle management for Arizona healthcare providers. Serving Phoenix, Tucson, and communities statewide.',
  ARRAY['Phoenix', 'Tucson', 'Mesa', 'Scottsdale', 'Chandler', 'Tempe'],
  '[
    {"icon": "DollarSign", "title": "Arizona Payer Expertise", "description": "Specialized in AHCCCS, Blue Cross Blue Shield Arizona, and major insurers"},
    {"icon": "Users", "title": "Multi-Specialty Support", "description": "Serving urgent care, family medicine, cardiology, and specialty practices"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 28% revenue increase for Arizona medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Arizona | RCM Services Phoenix | Medtransic',
  'Leading medical billing services in Arizona. Phoenix, Tucson, Mesa & statewide coverage. AHCCCS experts. Increase revenue 25%+. Call today!'
),

('Arkansas', 'AR', 'arkansas',
  'Medical Billing Services in Arkansas | Medtransic',
  'Trusted medical billing and RCM solutions for Arkansas healthcare providers. Maximize revenue and streamline operations across the state.',
  ARRAY['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'],
  '[
    {"icon": "DollarSign", "title": "Arkansas Medicaid Expert", "description": "Navigate Arkansas Medicaid fee schedules and prior authorization requirements"},
    {"icon": "FileText", "title": "Rural Health Focus", "description": "Specialized support for rural health clinics and critical access hospitals"},
    {"icon": "TrendingUp", "title": "Proven Results", "description": "Reduce claim denials by 40% on average for Arkansas providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Arkansas | RCM Services | Medtransic',
  'Professional medical billing in Arkansas. Little Rock, Fort Smith, Fayetteville. Arkansas Medicaid specialists. Rural health clinic experts.'
),

('California', 'CA', 'california',
  'Medical Billing Services in California | Medtransic',
  'Premier medical billing and revenue cycle management for California healthcare providers. Serving Los Angeles, San Francisco, San Diego, and statewide.',
  ARRAY['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Fresno', 'Oakland'],
  '[
    {"icon": "DollarSign", "title": "Medi-Cal Experts", "description": "Navigate complex Medi-Cal managed care plans and fee-for-service billing"},
    {"icon": "Scale", "title": "California Compliance", "description": "Full compliance with California''s strict healthcare billing regulations"},
    {"icon": "TrendingUp", "title": "Maximize Revenue", "description": "Average 30% revenue increase for California medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company California | RCM Services LA, SF | Medtransic',
  'Top medical billing services in California. Los Angeles, San Francisco, San Diego & statewide. Medi-Cal experts. Boost revenue 25-30%.'
),

('Colorado', 'CO', 'colorado',
  'Medical Billing Services in Colorado | Medtransic',
  'Expert medical billing and RCM services for Colorado healthcare providers. Serving Denver, Colorado Springs, Aurora, and throughout the state.',
  ARRAY['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Boulder'],
  '[
    {"icon": "DollarSign", "title": "Colorado Medicaid Pro", "description": "Expert handling of Health First Colorado and PEAK enrollment billing"},
    {"icon": "Mountain", "title": "Altitude Adjustment", "description": "Understand Colorado''s unique payer landscape and reimbursement models"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Increase collections by 27% for Colorado healthcare practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Colorado | RCM Denver | Medtransic',
  'Professional medical billing in Colorado. Denver, Colorado Springs, Aurora. Health First Colorado experts. Maximize practice revenue.'
),

('Connecticut', 'CT', 'connecticut',
  'Medical Billing Services in Connecticut | Medtransic',
  'Comprehensive medical billing and revenue cycle management for Connecticut healthcare providers. Serving Hartford, New Haven, Stamford, and statewide.',
  ARRAY['Hartford', 'New Haven', 'Stamford', 'Bridgeport', 'Waterbury'],
  '[
    {"icon": "DollarSign", "title": "CT Medicaid Specialist", "description": "Navigate HUSKY Health and Connecticut Medicaid billing complexities"},
    {"icon": "Building2", "title": "Multi-Practice Support", "description": "Serving independent practices, clinics, and healthcare systems"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 26% revenue increase for Connecticut providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Connecticut | RCM Hartford | Medtransic',
  'Expert medical billing services in Connecticut. Hartford, New Haven, Stamford. HUSKY Health specialists. Increase practice revenue today.'
),

('Delaware', 'DE', 'delaware',
  'Medical Billing Services in Delaware | Medtransic',
  'Specialized medical billing and RCM solutions for Delaware healthcare providers. Maximize revenue and reduce administrative burden statewide.',
  ARRAY['Wilmington', 'Dover', 'Newark', 'Middletown', 'Bear'],
  '[
    {"icon": "DollarSign", "title": "Delaware Medicaid Expert", "description": "Navigate Delaware Medicaid MCO billing and fee schedules"},
    {"icon": "Shield", "title": "Compliance Guaranteed", "description": "Full compliance with Delaware healthcare regulations"},
    {"icon": "TrendingUp", "title": "Fast Collections", "description": "Reduce days in A/R to under 25 days for Delaware practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Delaware | RCM Services | Medtransic',
  'Professional medical billing in Delaware. Wilmington, Dover, Newark. Delaware Medicaid experts. Reduce denials, increase collections.'
),

('Florida', 'FL', 'florida',
  'Medical Billing Services in Florida | Medtransic',
  'Leading medical billing and revenue cycle management for Florida healthcare providers. Serving Miami, Orlando, Tampa, Jacksonville, and statewide.',
  ARRAY['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale', 'Tallahassee', 'Naples'],
  '[
    {"icon": "DollarSign", "title": "Florida Medicaid Pro", "description": "Expert in Florida Medicaid managed care and fee-for-service billing"},
    {"icon": "Users", "title": "Senior Care Specialist", "description": "Medicare Advantage and dual-eligible billing expertise for Florida''s senior population"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Increase revenue by 29% for Florida medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Florida | RCM Miami, Orlando, Tampa | Medtransic',
  'Top medical billing services in Florida. Miami, Orlando, Tampa, Jacksonville. Florida Medicaid & Medicare experts. Boost revenue 25%+.'
),

('Georgia', 'GA', 'georgia',
  'Medical Billing Services in Georgia | Medtransic',
  'Expert medical billing and RCM services for Georgia healthcare providers. Serving Atlanta, Savannah, Augusta, and communities across Georgia.',
  ARRAY['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens', 'Macon'],
  '[
    {"icon": "DollarSign", "title": "Georgia Medicaid Expert", "description": "Navigate Georgia Medicaid/PeachCare for Kids billing requirements"},
    {"icon": "Building2", "title": "Multi-Specialty Support", "description": "Cardiology, orthopedics, primary care, and specialty billing"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 28% revenue increase for Georgia medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Georgia | RCM Atlanta | Medtransic',
  'Leading medical billing in Georgia. Atlanta, Augusta, Savannah & statewide. Georgia Medicaid specialists. Maximize your practice revenue.'
),

('Hawaii', 'HI', 'hawaii',
  'Medical Billing Services in Hawaii | Medtransic',
  'Specialized medical billing and RCM for Hawaii healthcare providers. Navigate unique island healthcare challenges across all islands.',
  ARRAY['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kaneohe'],
  '[
    {"icon": "DollarSign", "title": "Hawaii-Specific Billing", "description": "Expert in HMSA, Med-QUEST, and Hawaii''s unique insurance landscape"},
    {"icon": "Clock", "title": "Island Time Coverage", "description": "Support across Hawaii time zone for seamless operations"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Maximize reimbursements for Hawaii''s high-cost healthcare market"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Hawaii | RCM Honolulu | Medtransic',
  'Expert medical billing in Hawaii. Honolulu, Hilo & all islands. HMSA & Med-QUEST specialists. Navigate island healthcare billing.'
),

('Idaho', 'ID', 'idaho',
  'Medical Billing Services in Idaho | Medtransic',
  'Trusted medical billing and RCM solutions for Idaho healthcare providers. Serving Boise, Meridian, Nampa, and across the state.',
  ARRAY['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Caldwell'],
  '[
    {"icon": "DollarSign", "title": "Idaho Medicaid Expert", "description": "Navigate Idaho Medicaid managed care and fee schedules"},
    {"icon": "Mountain", "title": "Rural Practice Support", "description": "Specialized billing for rural clinics and critical access hospitals"},
    {"icon": "TrendingUp", "title": "Collections Boost", "description": "Increase revenue by 26% for Idaho healthcare providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Idaho | RCM Boise | Medtransic',
  'Professional medical billing in Idaho. Boise, Meridian, Nampa. Idaho Medicaid experts. Rural health billing specialists.'
),

('Illinois', 'IL', 'illinois',
  'Medical Billing Services in Illinois | Medtransic',
  'Premier medical billing and revenue cycle management for Illinois healthcare providers. Serving Chicago, Springfield, Naperville, and statewide.',
  ARRAY['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield'],
  '[
    {"icon": "DollarSign", "title": "Illinois Medicaid Pro", "description": "Expert handling of Illinois Medicaid HFS billing and managed care"},
    {"icon": "Building2", "title": "Chicago Metro Specialist", "description": "Deep understanding of Chicago''s complex healthcare market"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Average 29% revenue increase for Illinois practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Illinois | RCM Chicago | Medtransic',
  'Top medical billing services in Illinois. Chicago, Aurora, Naperville. Illinois Medicaid/HFS experts. Boost practice revenue 25%+.'
),

('Indiana', 'IN', 'indiana',
  'Medical Billing Services in Indiana | Medtransic',
  'Comprehensive medical billing and RCM for Indiana healthcare providers. Serving Indianapolis, Fort Wayne, Evansville, and across Indiana.',
  ARRAY['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Bloomington'],
  '[
    {"icon": "DollarSign", "title": "Indiana Medicaid Expert", "description": "Navigate Hoosier Healthwise and HIP billing requirements"},
    {"icon": "Users", "title": "Multi-Specialty Billing", "description": "Family medicine, cardiology, orthopedics, and specialty care"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Increase collections by 27% for Indiana medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Indiana | RCM Indianapolis | Medtransic',
  'Expert medical billing in Indiana. Indianapolis, Fort Wayne, Evansville. Hoosier Healthwise specialists. Maximize practice revenue.'
),

('Iowa', 'IA', 'iowa',
  'Medical Billing Services in Iowa | Medtransic',
  'Trusted medical billing and revenue cycle management for Iowa healthcare providers. Serving Des Moines, Cedar Rapids, Davenport, and statewide.',
  ARRAY['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo'],
  '[
    {"icon": "DollarSign", "title": "Iowa Medicaid Specialist", "description": "Expert in Iowa Medicaid managed care and IowaCare billing"},
    {"icon": "FileText", "title": "Rural Health Focus", "description": "Specialized support for Iowa''s rural healthcare providers"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Reduce denials by 38% for Iowa medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Iowa | RCM Des Moines | Medtransic',
  'Professional medical billing in Iowa. Des Moines, Cedar Rapids, Davenport. Iowa Medicaid experts. Rural health specialists.'
),

('Kansas', 'KS', 'kansas',
  'Medical Billing Services in Kansas | Medtransic',
  'Expert medical billing and RCM services for Kansas healthcare providers. Serving Wichita, Overland Park, Kansas City, and throughout Kansas.',
  ARRAY['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka', 'Lawrence'],
  '[
    {"icon": "DollarSign", "title": "Kansas Medicaid Pro", "description": "Navigate KanCare managed care and traditional Medicaid billing"},
    {"icon": "Shield", "title": "Compliance Focused", "description": "Full adherence to Kansas healthcare billing regulations"},
    {"icon": "TrendingUp", "title": "Collections Growth", "description": "Average 27% revenue increase for Kansas providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Kansas | RCM Wichita | Medtransic',
  'Leading medical billing in Kansas. Wichita, Overland Park, Kansas City. KanCare specialists. Boost your practice revenue today.'
),

('Kentucky', 'KY', 'kentucky',
  'Medical Billing Services in Kentucky | Medtransic',
  'Comprehensive medical billing and revenue cycle management for Kentucky healthcare providers. Serving Louisville, Lexington, Bowling Green, and statewide.',
  ARRAY['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Frankfort'],
  '[
    {"icon": "DollarSign", "title": "Kentucky Medicaid Expert", "description": "Navigate Kentucky Medicaid MCO billing and Passport Health Plan"},
    {"icon": "Users", "title": "Multi-Practice Support", "description": "Independent practices, clinics, and healthcare systems"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Increase revenue by 28% for Kentucky medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Kentucky | RCM Louisville | Medtransic',
  'Expert medical billing in Kentucky. Louisville, Lexington, Bowling Green. Kentucky Medicaid MCO specialists. Maximize collections.'
),

('Louisiana', 'LA', 'louisiana',
  'Medical Billing Services in Louisiana | Medtransic',
  'Premier medical billing and RCM for Louisiana healthcare providers. Serving New Orleans, Baton Rouge, Shreveport, and across the state.',
  ARRAY['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles', 'Metairie'],
  '[
    {"icon": "DollarSign", "title": "Louisiana Medicaid Pro", "description": "Expert in Louisiana Medicaid managed care and Bayou Health billing"},
    {"icon": "Shield", "title": "Hurricane Preparedness", "description": "Business continuity planning for Louisiana''s weather challenges"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 29% revenue increase for Louisiana practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Louisiana | RCM New Orleans | Medtransic',
  'Top medical billing in Louisiana. New Orleans, Baton Rouge, Shreveport. Bayou Health experts. Increase practice revenue 25%+.'
),

('Maine', 'ME', 'maine',
  'Medical Billing Services in Maine | Medtransic',
  'Specialized medical billing and RCM solutions for Maine healthcare providers. Serving Portland, Lewiston, Bangor, and throughout Maine.',
  ARRAY['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Biddeford'],
  '[
    {"icon": "DollarSign", "title": "MaineCare Specialist", "description": "Navigate MaineCare fee schedules and managed care billing"},
    {"icon": "FileText", "title": "Rural Health Expert", "description": "Specialized support for Maine''s rural healthcare providers"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Reduce claim denials by 40% for Maine practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Maine | RCM Portland | Medtransic',
  'Professional medical billing in Maine. Portland, Lewiston, Bangor. MaineCare billing experts. Rural health specialists.'
),

('Maryland', 'MD', 'maryland',
  'Medical Billing Services in Maryland | Medtransic',
  'Expert medical billing and revenue cycle management for Maryland healthcare providers. Serving Baltimore, Rockville, Frederick, and statewide.',
  ARRAY['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Annapolis'],
  '[
    {"icon": "DollarSign", "title": "Maryland Medicaid Pro", "description": "Expert in Maryland Medicaid MCO and HealthChoice billing"},
    {"icon": "Building2", "title": "Baltimore-DC Metro", "description": "Deep understanding of Maryland''s complex healthcare market"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 27% revenue increase for Maryland providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Maryland | RCM Baltimore | Medtransic',
  'Leading medical billing in Maryland. Baltimore, Rockville, Annapolis. HealthChoice specialists. Maximize practice revenue today.'
),

('Massachusetts', 'MA', 'massachusetts',
  'Medical Billing Services in Massachusetts | Medtransic',
  'Premier medical billing and RCM for Massachusetts healthcare providers. Serving Boston, Worcester, Springfield, Cambridge, and statewide.',
  ARRAY['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton'],
  '[
    {"icon": "DollarSign", "title": "MassHealth Expert", "description": "Navigate MassHealth MCO billing and ACO models"},
    {"icon": "GraduationCap", "title": "Academic Medical Centers", "description": "Specialized billing for teaching hospitals and research institutions"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Increase collections by 30% for Massachusetts practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Massachusetts | RCM Boston | Medtransic',
  'Top medical billing in Massachusetts. Boston, Worcester, Springfield. MassHealth MCO experts. Boost revenue 25-30%.'
),

('Michigan', 'MI', 'michigan',
  'Medical Billing Services in Michigan | Medtransic',
  'Comprehensive medical billing and revenue cycle management for Michigan healthcare providers. Serving Detroit, Grand Rapids, Ann Arbor, and statewide.',
  ARRAY['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing'],
  '[
    {"icon": "DollarSign", "title": "Michigan Medicaid Pro", "description": "Expert in Michigan Medicaid HMO and Healthy Michigan Plan billing"},
    {"icon": "Building2", "title": "Metro Detroit Specialist", "description": "Deep knowledge of Michigan''s diverse healthcare landscape"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 28% revenue increase for Michigan medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Michigan | RCM Detroit | Medtransic',
  'Expert medical billing in Michigan. Detroit, Grand Rapids, Ann Arbor. Healthy Michigan Plan specialists. Maximize revenue.'
),

('Minnesota', 'MN', 'minnesota',
  'Medical Billing Services in Minnesota | Medtransic',
  'Trusted medical billing and RCM solutions for Minnesota healthcare providers. Serving Minneapolis, St. Paul, Rochester, and across Minnesota.',
  ARRAY['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park'],
  '[
    {"icon": "DollarSign", "title": "Minnesota Medicaid Expert", "description": "Navigate Medical Assistance and MinnesotaCare billing"},
    {"icon": "Hospital", "title": "Mayo Clinic Ecosystem", "description": "Experience with Minnesota''s sophisticated healthcare systems"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Increase revenue by 27% for Minnesota providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Minnesota | RCM Minneapolis | Medtransic',
  'Professional medical billing in Minnesota. Minneapolis, St. Paul, Rochester. Medical Assistance experts. Boost collections.'
),

('Mississippi', 'MS', 'mississippi',
  'Medical Billing Services in Mississippi | Medtransic',
  'Expert medical billing and revenue cycle management for Mississippi healthcare providers. Serving Jackson, Gulfport, Southaven, and statewide.',
  ARRAY['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi', 'Meridian'],
  '[
    {"icon": "DollarSign", "title": "Mississippi Medicaid Pro", "description": "Navigate Mississippi Medicaid managed care and fee-for-service"},
    {"icon": "FileText", "title": "Rural Health Focus", "description": "Specialized support for rural and critical access hospitals"},
    {"icon": "TrendingUp", "title": "Collections Growth", "description": "Reduce denials by 42% for Mississippi practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Mississippi | RCM Jackson | Medtransic',
  'Leading medical billing in Mississippi. Jackson, Gulfport, Biloxi. Mississippi Medicaid specialists. Rural health experts.'
),

('Missouri', 'MO', 'missouri',
  'Medical Billing Services in Missouri | Medtransic',
  'Comprehensive medical billing and RCM for Missouri healthcare providers. Serving Kansas City, St. Louis, Springfield, and across the state.',
  ARRAY['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence', 'Lee Summit'],
  '[
    {"icon": "DollarSign", "title": "Missouri Medicaid Expert", "description": "Navigate MO HealthNet managed care and traditional billing"},
    {"icon": "Building2", "title": "KC & STL Markets", "description": "Deep understanding of Missouri''s major metro healthcare markets"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Average 28% revenue increase for Missouri practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Missouri | RCM Kansas City, St. Louis | Medtransic',
  'Top medical billing in Missouri. Kansas City, St. Louis, Springfield. MO HealthNet experts. Boost practice revenue 25%+.'
),

('Montana', 'MT', 'montana',
  'Medical Billing Services in Montana | Medtransic',
  'Specialized medical billing and RCM for Montana healthcare providers. Serving Billings, Missoula, Great Falls, and throughout Montana.',
  ARRAY['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Helena'],
  '[
    {"icon": "DollarSign", "title": "Montana Medicaid Pro", "description": "Expert in Montana Medicaid and Indian Health Service billing"},
    {"icon": "Mountain", "title": "Rural Practice Expert", "description": "Specialized support for Montana''s rural and frontier healthcare"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Increase collections by 26% for Montana providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Montana | RCM Billings | Medtransic',
  'Expert medical billing in Montana. Billings, Missoula, Bozeman. Montana Medicaid & IHS specialists. Rural health billing.'
),

('Nebraska', 'NE', 'nebraska',
  'Medical Billing Services in Nebraska | Medtransic',
  'Trusted medical billing and revenue cycle management for Nebraska healthcare providers. Serving Omaha, Lincoln, Bellevue, and statewide.',
  ARRAY['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont'],
  '[
    {"icon": "DollarSign", "title": "Nebraska Medicaid Expert", "description": "Navigate Nebraska Medicaid Heritage Health billing"},
    {"icon": "Users", "title": "Multi-Specialty Support", "description": "Primary care, cardiology, orthopedics, and specialty billing"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Average 27% revenue increase for Nebraska practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Nebraska | RCM Omaha | Medtransic',
  'Professional medical billing in Nebraska. Omaha, Lincoln, Bellevue. Heritage Health specialists. Maximize practice revenue.'
),

('Nevada', 'NV', 'nevada',
  'Medical Billing Services in Nevada | Medtransic',
  'Premier medical billing and RCM for Nevada healthcare providers. Serving Las Vegas, Henderson, Reno, and communities across Nevada.',
  ARRAY['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City'],
  '[
    {"icon": "DollarSign", "title": "Nevada Medicaid Pro", "description": "Expert in Nevada Medicaid MCO and Silver State Health Insurance Exchange"},
    {"icon": "Clock", "title": "24/7 Las Vegas Support", "description": "Round-the-clock billing support for Nevada''s 24-hour healthcare needs"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Increase revenue by 29% for Nevada medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Nevada | RCM Las Vegas | Medtransic',
  'Leading medical billing in Nevada. Las Vegas, Henderson, Reno. Nevada Medicaid MCO experts. 24/7 billing support available.'
),

('New Hampshire', 'NH', 'new-hampshire',
  'Medical Billing Services in New Hampshire | Medtransic',
  'Expert medical billing and revenue cycle management for New Hampshire healthcare providers. Serving Manchester, Nashua, Concord, and statewide.',
  ARRAY['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover', 'Rochester'],
  '[
    {"icon": "DollarSign", "title": "NH Medicaid Specialist", "description": "Navigate New Hampshire Medicaid MCO and managed care plans"},
    {"icon": "Shield", "title": "Compliance Focused", "description": "Full adherence to New Hampshire healthcare billing regulations"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Average 26% revenue increase for NH providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company New Hampshire | RCM Manchester | Medtransic',
  'Professional medical billing in New Hampshire. Manchester, Nashua, Concord. NH Medicaid MCO specialists. Boost revenue.'
),

('New Jersey', 'NJ', 'new-jersey',
  'Medical Billing Services in New Jersey | Medtransic',
  'Comprehensive medical billing and RCM for New Jersey healthcare providers. Serving Newark, Jersey City, Paterson, and across the state.',
  ARRAY['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Trenton'],
  '[
    {"icon": "DollarSign", "title": "NJ Medicaid Expert", "description": "Navigate NJ FamilyCare and Medicaid managed care organizations"},
    {"icon": "Building2", "title": "NYC Metro Access", "description": "Understanding of New Jersey''s connection to NYC healthcare market"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Increase collections by 28% for New Jersey practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company New Jersey | RCM Newark | Medtransic',
  'Expert medical billing in New Jersey. Newark, Jersey City, Edison. NJ FamilyCare specialists. Maximize practice revenue.'
),

('New Mexico', 'NM', 'new-mexico',
  'Medical Billing Services in New Mexico | Medtransic',
  'Specialized medical billing and RCM for New Mexico healthcare providers. Serving Albuquerque, Las Cruces, Santa Fe, and statewide.',
  ARRAY['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell', 'Farmington'],
  '[
    {"icon": "DollarSign", "title": "NM Medicaid Specialist", "description": "Expert in New Mexico Medicaid Centennial Care and IHS billing"},
    {"icon": "Users", "title": "Tribal Health Expert", "description": "Specialized Indian Health Service and tribal facility billing"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Average 27% revenue increase for New Mexico providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company New Mexico | RCM Albuquerque | Medtransic',
  'Professional medical billing in New Mexico. Albuquerque, Las Cruces, Santa Fe. Centennial Care & IHS specialists.'
),

('New York', 'NY', 'new-york',
  'Medical Billing Services in New York | Medtransic',
  'Premier medical billing and revenue cycle management for New York healthcare providers. Serving NYC, Buffalo, Rochester, Albany, and statewide.',
  ARRAY['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'Brooklyn', 'Queens'],
  '[
    {"icon": "DollarSign", "title": "NY Medicaid Expert", "description": "Navigate NY Medicaid managed care and eMedNY billing systems"},
    {"icon": "Building2", "title": "NYC Metro Specialist", "description": "Deep understanding of New York''s complex healthcare landscape"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Increase revenue by 30% for New York medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company New York | RCM NYC | Medtransic',
  'Top medical billing in New York. NYC, Buffalo, Rochester, Albany. eMedNY & Medicaid MCO experts. Boost revenue 25-30%.'
),

('North Carolina', 'NC', 'north-carolina',
  'Medical Billing Services in North Carolina | Medtransic',
  'Comprehensive medical billing and RCM for North Carolina healthcare providers. Serving Charlotte, Raleigh, Greensboro, Durham, and statewide.',
  ARRAY['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville'],
  '[
    {"icon": "DollarSign", "title": "NC Medicaid Pro", "description": "Expert in NC Medicaid transformation and managed care billing"},
    {"icon": "GraduationCap", "title": "Research Triangle", "description": "Experience with academic medical centers and research billing"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 28% revenue increase for North Carolina practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company North Carolina | RCM Charlotte | Medtransic',
  'Leading medical billing in North Carolina. Charlotte, Raleigh, Durham. NC Medicaid transformation experts. Maximize revenue.'
),

('North Dakota', 'ND', 'north-dakota',
  'Medical Billing Services in North Dakota | Medtransic',
  'Expert medical billing and revenue cycle management for North Dakota healthcare providers. Serving Fargo, Bismarck, Grand Forks, and statewide.',
  ARRAY['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Williston'],
  '[
    {"icon": "DollarSign", "title": "ND Medicaid Expert", "description": "Navigate North Dakota Medicaid and tribal health billing"},
    {"icon": "FileText", "title": "Rural Practice Focus", "description": "Specialized support for North Dakota''s rural healthcare providers"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Reduce claim denials by 40% for North Dakota practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company North Dakota | RCM Fargo | Medtransic',
  'Professional medical billing in North Dakota. Fargo, Bismarck, Grand Forks. ND Medicaid & rural health specialists.'
),

('Ohio', 'OH', 'ohio',
  'Medical Billing Services in Ohio | Medtransic',
  'Trusted medical billing and RCM solutions for Ohio healthcare providers. Serving Columbus, Cleveland, Cincinnati, and across the state.',
  ARRAY['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton'],
  '[
    {"icon": "DollarSign", "title": "Ohio Medicaid Pro", "description": "Expert in Ohio Medicaid managed care and CareSource billing"},
    {"icon": "Building2", "title": "Three Cs Expert", "description": "Deep knowledge of Columbus, Cleveland, Cincinnati healthcare markets"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 28% revenue increase for Ohio medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Ohio | RCM Columbus, Cleveland | Medtransic',
  'Expert medical billing in Ohio. Columbus, Cleveland, Cincinnati. Ohio Medicaid & CareSource specialists. Boost revenue.'
),

('Oklahoma', 'OK', 'oklahoma',
  'Medical Billing Services in Oklahoma | Medtransic',
  'Comprehensive medical billing and revenue cycle management for Oklahoma healthcare providers. Serving Oklahoma City, Tulsa, Norman, and statewide.',
  ARRAY['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Edmond', 'Lawton'],
  '[
    {"icon": "DollarSign", "title": "OK Medicaid Specialist", "description": "Navigate Oklahoma Medicaid SoonerCare and managed care"},
    {"icon": "Users", "title": "Tribal Health Expert", "description": "Specialized Indian Health Service and tribal facility billing"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Increase revenue by 27% for Oklahoma practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Oklahoma | RCM OKC, Tulsa | Medtransic',
  'Leading medical billing in Oklahoma. Oklahoma City, Tulsa, Norman. SoonerCare & IHS specialists. Maximize collections.'
),

('Oregon', 'OR', 'oregon',
  'Medical Billing Services in Oregon | Medtransic',
  'Premier medical billing and RCM for Oregon healthcare providers. Serving Portland, Eugene, Salem, Gresham, and across Oregon.',
  ARRAY['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro', 'Beaverton'],
  '[
    {"icon": "DollarSign", "title": "Oregon Health Plan Pro", "description": "Expert in OHP coordinated care organizations and fee-for-service"},
    {"icon": "Leaf", "title": "CCO Specialist", "description": "Deep understanding of Oregon''s unique CCO healthcare model"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 28% revenue increase for Oregon medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Oregon | RCM Portland | Medtransic',
  'Top medical billing in Oregon. Portland, Eugene, Salem. Oregon Health Plan & CCO experts. Boost practice revenue.'
),

('Pennsylvania', 'PA', 'pennsylvania',
  'Medical Billing Services in Pennsylvania | Medtransic',
  'Expert medical billing and revenue cycle management for Pennsylvania healthcare providers. Serving Philadelphia, Pittsburgh, Allentown, and statewide.',
  ARRAY['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton'],
  '[
    {"icon": "DollarSign", "title": "PA Medicaid Expert", "description": "Navigate Pennsylvania Medicaid managed care and fee-for-service"},
    {"icon": "Building2", "title": "Philly & Pittsburgh", "description": "Deep knowledge of Pennsylvania''s major metro healthcare markets"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Increase collections by 29% for Pennsylvania practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Pennsylvania | RCM Philadelphia | Medtransic',
  'Leading medical billing in Pennsylvania. Philadelphia, Pittsburgh, Allentown. PA Medicaid MCO specialists. Maximize revenue.'
),

('Rhode Island', 'RI', 'rhode-island',
  'Medical Billing Services in Rhode Island | Medtransic',
  'Comprehensive medical billing and RCM for Rhode Island healthcare providers. Serving Providence, Warwick, Cranston, and throughout the state.',
  ARRAY['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence', 'Woonsocket'],
  '[
    {"icon": "DollarSign", "title": "RI Medicaid Specialist", "description": "Navigate Rhode Island Medicaid managed care billing"},
    {"icon": "Shield", "title": "Compliance Focused", "description": "Full adherence to Rhode Island healthcare regulations"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 26% revenue increase for Rhode Island providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Rhode Island | RCM Providence | Medtransic',
  'Professional medical billing in Rhode Island. Providence, Warwick, Cranston. RI Medicaid specialists. Boost collections.'
),

('South Carolina', 'SC', 'south-carolina',
  'Medical Billing Services in South Carolina | Medtransic',
  'Trusted medical billing and revenue cycle management for South Carolina healthcare providers. Serving Columbia, Charleston, North Charleston, and statewide.',
  ARRAY['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant', 'Rock Hill', 'Greenville'],
  '[
    {"icon": "DollarSign", "title": "SC Medicaid Expert", "description": "Navigate South Carolina Medicaid managed care and Healthy Connections"},
    {"icon": "Users", "title": "Multi-Specialty Support", "description": "Primary care, cardiology, orthopedics, and specialty billing"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Increase revenue by 27% for South Carolina practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company South Carolina | RCM Columbia | Medtransic',
  'Expert medical billing in South Carolina. Columbia, Charleston, Greenville. Healthy Connections specialists. Maximize revenue.'
),

('South Dakota', 'SD', 'south-dakota',
  'Medical Billing Services in South Dakota | Medtransic',
  'Specialized medical billing and RCM for South Dakota healthcare providers. Serving Sioux Falls, Rapid City, Aberdeen, and across the state.',
  ARRAY['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell'],
  '[
    {"icon": "DollarSign", "title": "SD Medicaid Pro", "description": "Expert in South Dakota Medicaid and Indian Health Service billing"},
    {"icon": "FileText", "title": "Rural Practice Expert", "description": "Specialized support for South Dakota''s rural healthcare providers"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Reduce denials by 38% for South Dakota practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company South Dakota | RCM Sioux Falls | Medtransic',
  'Professional medical billing in South Dakota. Sioux Falls, Rapid City. SD Medicaid & IHS specialists. Rural health experts.'
),

('Tennessee', 'TN', 'tennessee',
  'Medical Billing Services in Tennessee | Medtransic',
  'Premier medical billing and revenue cycle management for Tennessee healthcare providers. Serving Nashville, Memphis, Knoxville, Chattanooga, and statewide.',
  ARRAY['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro'],
  '[
    {"icon": "DollarSign", "title": "TennCare Specialist", "description": "Navigate TennCare managed care organizations and billing"},
    {"icon": "Music", "title": "Music City Healthcare", "description": "Deep understanding of Tennessee''s diverse healthcare markets"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Average 28% revenue increase for Tennessee practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Tennessee | RCM Nashville | Medtransic',
  'Leading medical billing in Tennessee. Nashville, Memphis, Knoxville. TennCare MCO experts. Boost practice revenue 25%+.'
),

('Texas', 'TX', 'texas',
  'Medical Billing Services in Texas | Medtransic',
  'Comprehensive medical billing and revenue cycle management for Texas healthcare providers. Serving Houston, Dallas, Austin, San Antonio, and statewide.',
  ARRAY['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi'],
  '[
    {"icon": "DollarSign", "title": "Texas Medicaid Pro", "description": "Expert in Texas Medicaid managed care and CHIP billing"},
    {"icon": "Star", "title": "Lone Star Specialist", "description": "Deep understanding of Texas''s massive and diverse healthcare market"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 29% revenue increase for Texas medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Texas | RCM Houston, Dallas, Austin | Medtransic',
  'Top medical billing in Texas. Houston, Dallas, Austin, San Antonio. Texas Medicaid & CHIP experts. Maximize revenue 25%+.'
),

('Utah', 'UT', 'utah',
  'Medical Billing Services in Utah | Medtransic',
  'Expert medical billing and RCM services for Utah healthcare providers. Serving Salt Lake City, West Valley City, Provo, and across Utah.',
  ARRAY['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Sandy'],
  '[
    {"icon": "DollarSign", "title": "Utah Medicaid Expert", "description": "Navigate Utah Medicaid managed care and ACO billing models"},
    {"icon": "Mountain", "title": "Intermountain Health", "description": "Experience with Utah''s integrated healthcare systems"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Increase collections by 27% for Utah medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Utah | RCM Salt Lake City | Medtransic',
  'Professional medical billing in Utah. Salt Lake City, Provo, Orem. Utah Medicaid MCO specialists. Maximize practice revenue.'
),

('Vermont', 'VT', 'vermont',
  'Medical Billing Services in Vermont | Medtransic',
  'Specialized medical billing and RCM for Vermont healthcare providers. Serving Burlington, South Burlington, Rutland, and throughout Vermont.',
  ARRAY['Burlington', 'South Burlington', 'Rutland', 'Essex', 'Colchester', 'Bennington'],
  '[
    {"icon": "DollarSign", "title": "Vermont Medicaid Pro", "description": "Expert in Green Mountain Care and Vermont Medicaid billing"},
    {"icon": "FileText", "title": "ACO Specialist", "description": "Navigate Vermont''s unique accountable care organization models"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 26% revenue increase for Vermont providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Vermont | RCM Burlington | Medtransic',
  'Expert medical billing in Vermont. Burlington, Rutland. Green Mountain Care specialists. ACO billing expertise.'
),

('Virginia', 'VA', 'virginia',
  'Medical Billing Services in Virginia | Medtransic',
  'Comprehensive medical billing and revenue cycle management for Virginia healthcare providers. Serving Virginia Beach, Norfolk, Richmond, and statewide.',
  ARRAY['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria'],
  '[
    {"icon": "DollarSign", "title": "Virginia Medicaid Expert", "description": "Navigate Virginia Medicaid managed care and fee-for-service"},
    {"icon": "Building2", "title": "DC Metro Access", "description": "Understanding of Virginia''s connection to DC healthcare market"},
    {"icon": "TrendingUp", "title": "Revenue Maximization", "description": "Increase revenue by 28% for Virginia medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Virginia | RCM Virginia Beach | Medtransic',
  'Leading medical billing in Virginia. Virginia Beach, Norfolk, Richmond. VA Medicaid MCO specialists. Boost revenue.'
),

('Washington', 'WA', 'washington',
  'Medical Billing Services in Washington | Medtransic',
  'Premier medical billing and RCM for Washington healthcare providers. Serving Seattle, Spokane, Tacoma, Vancouver, and across the state.',
  ARRAY['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent'],
  '[
    {"icon": "DollarSign", "title": "Apple Health Pro", "description": "Expert in Washington Apple Health (Medicaid) managed care billing"},
    {"icon": "Coffee", "title": "Pacific Northwest", "description": "Deep understanding of Washington''s progressive healthcare landscape"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 29% revenue increase for Washington practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Washington | RCM Seattle | Medtransic',
  'Top medical billing in Washington. Seattle, Spokane, Tacoma. Apple Health (Medicaid) specialists. Maximize revenue 25%+.'
),

('West Virginia', 'WV', 'west-virginia',
  'Medical Billing Services in West Virginia | Medtransic',
  'Trusted medical billing and revenue cycle management for West Virginia healthcare providers. Serving Charleston, Huntington, Morgantown, and statewide.',
  ARRAY['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling', 'Weirton'],
  '[
    {"icon": "DollarSign", "title": "WV Medicaid Specialist", "description": "Navigate West Virginia Medicaid managed care billing"},
    {"icon": "FileText", "title": "Rural Health Focus", "description": "Specialized support for rural and critical access hospitals"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Reduce claim denials by 42% for West Virginia practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company West Virginia | RCM Charleston | Medtransic',
  'Professional medical billing in West Virginia. Charleston, Huntington, Morgantown. WV Medicaid specialists. Rural health experts.'
),

('Wisconsin', 'WI', 'wisconsin',
  'Medical Billing Services in Wisconsin | Medtransic',
  'Expert medical billing and RCM services for Wisconsin healthcare providers. Serving Milwaukee, Madison, Green Bay, and across the state.',
  ARRAY['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton'],
  '[
    {"icon": "DollarSign", "title": "Wisconsin Medicaid Pro", "description": "Expert in BadgerCare Plus and Wisconsin Medicaid billing"},
    {"icon": "Users", "title": "Multi-Specialty Billing", "description": "Primary care, specialty, and hospital billing expertise"},
    {"icon": "TrendingUp", "title": "Revenue Growth", "description": "Average 27% revenue increase for Wisconsin medical practices"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Wisconsin | RCM Milwaukee | Medtransic',
  'Leading medical billing in Wisconsin. Milwaukee, Madison, Green Bay. BadgerCare Plus specialists. Maximize practice revenue.'
),

('Wyoming', 'WY', 'wyoming',
  'Medical Billing Services in Wyoming | Medtransic',
  'Specialized medical billing and RCM for Wyoming healthcare providers. Serving Cheyenne, Casper, Laramie, and throughout Wyoming.',
  ARRAY['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan'],
  '[
    {"icon": "DollarSign", "title": "Wyoming Medicaid Expert", "description": "Navigate Wyoming Medicaid and rural healthcare billing"},
    {"icon": "Mountain", "title": "Frontier Healthcare", "description": "Specialized support for Wyoming''s frontier healthcare challenges"},
    {"icon": "TrendingUp", "title": "Revenue Optimization", "description": "Increase collections by 26% for Wyoming providers"}
  ]'::jsonb,
  '{"practices": "2000+", "states": "50", "collections": "98%", "days": "23"}'::jsonb,
  'Medical Billing Company Wyoming | RCM Cheyenne | Medtransic',
  'Expert medical billing in Wyoming. Cheyenne, Casper, Laramie. Wyoming Medicaid specialists. Frontier healthcare billing.'
);