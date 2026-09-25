export type StateCode =
  | "ct"
  | "rj"
  | "mp"
  | "up"
  | "mh"
  | "jh"
  | "sk"
  | "wb"
  | "hr"
  | "gj";

export const STATE_NAMES: Record<StateCode, string> = {
  ct: "Chhattisgarh",
  rj: "Rajasthan",
  mp: "Madhya Pradesh",
  up: "Uttar Pradesh",
  mh: "Maharashtra",
  jh: "Jharkhand",
  sk: "Sikkim",
  wb: "West Bengal",
  hr: "Haryana",
  gj: "Gujarat",
};

export type MahaYagyaEntry = {
  sno: number;
  year: number;
  location: string;
  state: StateCode;
};

export const mahaYagyaData: MahaYagyaEntry[] = [
  { sno: 62, year: 2005, location: "Kapileshwar Mahadev Mandir, Korwa (C.G.)", state: "ct" },
  { sno: 63, year: 2005, location: "Bharat Sanchar Nigam Colony, Lodhi Nagar, Sikar (Rajasthan)", state: "rj" },
  { sno: 64, year: 2005, location: "Maidamil Parisar, Dehat Thane ke paas, Vidisha (M.P.)", state: "mp" },
  { sno: 65, year: 2005, location: "Stadium Rampur, Nainik, Distt. Sidhi (M.P.)", state: "mp" },
  { sno: 66, year: 2006, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 67, year: 2006, location: "Nehru Nagar Park, Rewa (M.P.)", state: "mp" },
  { sno: 68, year: 2006, location: "Gram Masoi, Post Amitiya, Distt. Chandauli (U.P.)", state: "up" },
  { sno: 69, year: 2006, location: "Chaturipur Chakiya, Chandauli (U.P.)", state: "up" },
  { sno: 70, year: 2006, location: "Ramleela Maidan Hindalco, Renukoot, Sonbhadra (U.P.)", state: "up" },
  { sno: 71, year: 2006, location: "Near Maa Mahamaya Mandir, Ramanujganj, Distt. Surguja (C.G.)", state: "ct" },
  { sno: 72, year: 2006, location: "Shri Hanuman Mandir, Hanumana, Distt. Rewa (M.P.)", state: "mp" },
  { sno: 73, year: 2006, location: "Near High School, Wadrafnagar, Surguja (C.G.)", state: "ct" },
  { sno: 74, year: 2007, location: "Bhagwan Shri Kalbhairav Mandir, Jabalpur (M.P.)", state: "mp" },
  { sno: 75, year: 2007, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 76, year: 2007, location: "Shaa. Uc. Ma. Vidyalaya, Devtalab, Rewa (M.P.)", state: "mp" },
  { sno: 77, year: 2007, location: "Saheb Singh Uc. Ma. Vi. Poorab-Patai, Mau, Chitrakoot (U.P.)", state: "up" },
  { sno: 78, year: 2007, location: "Near Langda Mod, Bari Dala, Sonbhadra (U.P.)", state: "up" },
  { sno: 79, year: 2008, location: "Geeta Hall, Madhav Baug, Mumbai (Maharashtra)", state: "mh" },
  { sno: 80, year: 2008, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 81, year: 2008, location: "K.B. High School Maidan, Dumri (Jharkhand)", state: "jh" },
  { sno: 82, year: 2008, location: "Dhori Staff Quarter, Berma, Bokaro (Jharkhand)", state: "jh" },
  { sno: 83, year: 2008, location: "Suraj, Distt. Surguja (C.G.)", state: "ct" },
  { sno: 84, year: 2008, location: "Old Pooja Pandal, J.P. Colony, Korba (C.G.)", state: "ct" },
  { sno: 85, year: 2008, location: "J.P. Cement, Chunar (U.P.)", state: "up" },
  { sno: 86, year: 2009, location: "Sikkim Kalyan Ashram, Marchak Raniwul, Gangtok (Sikkim)", state: "sk" },
  { sno: 87, year: 2009, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 88, year: 2009, location: "Ramleela Maidan Hindalco, Sonbhadra (U.P.)", state: "up" },
  { sno: 89, year: 2009, location: "Near High School, Wadrafnagar (C.G.)", state: "ct" },
  { sno: 90, year: 2009, location: "Bansagar Colony, Rewa (M.P.)", state: "mp" },
  { sno: 91, year: 2010, location: "Maa Chinnamastika Mandir, Rajrappa, Distt. Ramgarh (Jharkhand)", state: "jh" },
  { sno: 92, year: 2010, location: "Prayagraj (Magh Mela), Allahabad (U.P.)", state: "up" },
  { sno: 93, year: 2010, location: "Shri Bhairon Baba ka Bagicha, New Colony, Haripura, Vidisha (M.P.)", state: "mp" },
  { sno: 94, year: 2010, location: "Central Colony, Radha Krishna Mandir, Makoli, Bokaro (Jharkhand)", state: "jh" },
  { sno: 95, year: 2010, location: "Near Shri Kriti Bhawan, Kaju Road, Dharajaygarh (C.G.)", state: "ct" },
  { sno: 96, year: 2010, location: "Durvasa Dham Ashram, Azamgarh (U.P.)", state: "up" },
  { sno: 97, year: 2011, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 98, year: 2011, location: "Shri Bhairon Baba ka Bagicha, New Colony, Haripura, Vidisha (M.P.)", state: "mp" },
  { sno: 99, year: 2011, location: "Sector 11, M.I.G. Park, Agra (U.P.)", state: "up" },
  { sno: 100, year: 2011, location: "Shri Ram Mandir Prangan, Kobra, Sonbhadra (U.P.)", state: "up" },
  { sno: 101, year: 2011, location: "Gayatri Yagya Shala Parisar, Ramanujganj, Distt. Surguja (C.G.)", state: "ct" },
  { sno: 102, year: 2012, location: "P.W.D. Parisar, Wadrafnagar (C.G.)", state: "ct" },
  { sno: 103, year: 2012, location: "Ramleela Maidan Hindalco, Renukoot, Sonbhadra (U.P.)", state: "up" },
  { sno: 104, year: 2012, location: "Bhakti Dham Shri Mahavir (Hanuman) Mandir, Azad Chowk, Sadar, Nagpur (Maharashtra)", state: "mh" },
  { sno: 105, year: 2012, location: "Shri Hanuman Bhakt Mandal Bhawan, Liluah, Howrah", state: "wb" },
  { sno: 106, year: 2013, location: "Shri Ram Maruti Dham Ashram, Sagar (M.P.)", state: "mp" },
  { sno: 107, year: 2013, location: "Ramleela Maidan Hindalco, Renukoot (U.P.)", state: "up" },
  { sno: 108, year: 2013, location: "Shri Kanchi Koti Kama Shiv Panchayat Mandir, Nandok Sirmala (Jalipul), Sikkim", state: "sk" },
  { sno: 109, year: 2013, location: "Pratap Vihar Sector No. 11, Ghaziabad (U.P.)", state: "up" },
  { sno: 110, year: 2013, location: "Doodhnath Chungi, Doodheshwar Nath Mandir, Vindhyachal, Mirzapur", state: "up" },
  { sno: 111, year: 2015, location: "Robertsganj, Sonbhadra", state: "up" },
  { sno: 112, year: 2015, location: "Bermo Fusera, Distt. Bokaro", state: "jh" },
  { sno: 113, year: 2015, location: "Anpara, Sonbhadra (U.P.)", state: "up" },
  { sno: 114, year: 2016, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 115, year: 2016, location: "Simhasth Kumbh Mela, Ujjain (M.P.)", state: "mp" },
  { sno: 116, year: 2016, location: "Ram Janki Mandir, Korba (C.G.)", state: "ct" },
  { sno: 117, year: 2017, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 118, year: 2018, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 119, year: 2018, location: "Jhamal Ganj (Uttar Pradesh)", state: "up" },
  { sno: 120, year: 2018, location: "Bhimani Ram Kunj, Hisar (Haryana)", state: "hr" },
  { sno: 121, year: 2018, location: "Panchkula (Haryana), Shri Ram Kunj Satsang Dham, Bhiwani", state: "hr" },
  { sno: 122, year: 2018, location: "Madiyahun, Jaunpur (U.P.)", state: "up" },
  { sno: 123, year: 2018, location: "Sikkim", state: "sk" },
  { sno: 124, year: 2018, location: "Shri Ram Maruti Dham Ashram, Varanasi (U.P.)", state: "up" },
  { sno: 125, year: 2019, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 126, year: 2019, location: "Agrawal Dharamshala, Alwar (Rajasthan)", state: "rj" },
  { sno: 127, year: 2019, location: "Sikkim", state: "sk" },
  { sno: 128, year: 2019, location: "Wadrafnagar (C.G.)", state: "ct" },
  { sno: 129, year: 2019, location: "Raipur (C.G.)", state: "ct" },
  { sno: 130, year: 2020, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 131, year: 2020, location: "Ghaziabad (U.P.)", state: "up" },
  { sno: 132, year: 2021, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 133, year: 2021, location: "Gram Lauhar, Distt. Panna (M.P.)", state: "mp" },
  { sno: 134, year: 2021, location: "Wadrafnagar (C.G.)", state: "ct" },
  { sno: 135, year: 2021, location: "Bhonna, Distt. Prayagraj (U.P.)", state: "up" },
  { sno: 136, year: 2022, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 137, year: 2022, location: "Ghaziabad (U.P.)", state: "up" },
  { sno: 138, year: 2022, location: "Dala, Sonbhadra (U.P.)", state: "up" },
  { sno: 139, year: 2022, location: "Jabalpur (M.P.)", state: "mp" },
  { sno: 140, year: 2023, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 141, year: 2023, location: "Ghaziabad (U.P.)", state: "up" },
  { sno: 142, year: 2023, location: "Laxmi Narayan Mandir, Panchkula (Chandigarh)", state: "hr" },
  { sno: 143, year: 2023, location: "Sankat Mochan Bala Ji Dham, Panchkula", state: "hr" },
  { sno: 144, year: 2024, location: "Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 145, year: 2024, location: "Bermo Dhori, Bokaro (Jharkhand)", state: "jh" },
  { sno: 146, year: 2024, location: "Pratap Vihar Colony, Ghaziabad (U.P.)", state: "up" },
  { sno: 147, year: 2025, location: "Mahakumbh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 148, year: 2025, location: "Vapi, Gujarat", state: "gj" },
  { sno: 149, year: 2025, location: "Paat Baba, Jabalpur (M.P.)", state: "mp" },
  { sno: 150, year: 2026, location: "Maha Magh Mela, Prayagraj (U.P.)", state: "up" },
  { sno: 151, year: 2026, location: "Shri Ram Bhawan, Ukhri Road, Baldev Bagh, Jabalpur", state: "mp" },
];
