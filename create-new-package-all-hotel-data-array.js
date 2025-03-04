let allHotelDataArray=[{hotelName:"Avista Grande Phuket Karon",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Family","Premier Room","Premier Family","Deluxe Suite","Deluxe Suite Pool Access"]},{hotelName:"Avista Hideaway Phuket Patong",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Family","Executive Room","Santi Deluxe Suite","Santi Deluxe Plunge Pool Suite"]},{hotelName:"Diamond Cliff Resort",hotelLocation:"Phuket",hotelRoomTypes:["Super Deluxe","Grand Jacuzzi Suite","Ocean Jacuzzi Suite"]},{hotelName:"Holiday Inn Express Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Standard Room"]},{hotelName:"Homm Bliss Southbeach Patong",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Deluxe Room","One BR Superior Suite","One BR Deluxe Suite","One BR Suite"]},{hotelName:"Indigo Phuket Patong",hotelLocation:"Phuket",hotelRoomTypes:["Standard Room","Junior Suite","One BR Suite"]},{hotelName:"Kalima Resort Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Honeymoon Room","Grand Deluxe Room","Romance Room","Family Room","Junior Suite","Double Pool Access","Duplex Villa","One BR Villa","Two BR Villa"]},{hotelName:"Keemala Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Clay Pool Cottage","Tent Pool Villa","Tree Pool House","Birds Nest Pool Villa"]},{hotelName:"Movenpick Myth Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Pool Access"]},{hotelName:"Movenpick Bangtao Beach Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Residence One BR","Residence Two BR","One BR Suite","Two BR Suite","Residence Three BR","Three BR Penthouse","Three BR Royal Penthouse"]},{hotelName:"Noku Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Studio Loft","Private Loft","Tree Villa","Hill Villa","Three BR Grand Villa","Three BR Penthouse"]},{hotelName:"Novotel Phuket Kata Avista",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Deluxe Room","Family Room"]},{hotelName:"Oceanfront Beach Resort Pkuket",hotelLocation:"Phuket",hotelRoomTypes:["Premier Comfy","Ocean Room","Grand Ocean Room","Ocean Comfy","Pool Access Comfy","Grand Ocean Suite"]},{hotelName:"Saii Laguna Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Lagoon View","Ocean View Balcony","Ocean View Terrace","Ocean Front Balcony","Club Lagoon View","Club Ocean View","Club Ocean Front","Lagoon View One BR Suite","Ocean View One BR Suite","Ocean Front One BR Suite"]},{hotelName:"Sinae Phuket Luxury",hotelLocation:"Phuket",hotelRoomTypes:["Studio Villa","Studio Room","Sinae Sea Sai","Sinae Premier Suite","Sky Villa","Duplex Villa"]},{hotelName:"Sri Panwa Phuket",hotelLocation:"Phuket",hotelRoomTypes:["YAYA Suite","Suite (West)","Suite (East)","Penthouse","One BR Family Suite","One BR Villa","One BR Luxury Residential Villa","One BR Luxury Villa","Two BR Family Suite","Ywo BR Villa","2 BR Luxury Villa","Three BR Residence Villa","Four BR Residence Villa","Four BR Luxury Residence Villa","Five BR Residence Villa"]},{hotelName:"The Kee Resort",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Jacuzzi","Deluxe Pool Access"]},{hotelName:"The Nai Harn Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Mountain View Room","Deluxe Room","Grand Room","Ocean Suite","Royal Ocean Suite"]},{hotelName:"The Naka Island Luxury Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Naka Guest Room","One BR Villa"]},{hotelName:"The Naka Hotels Phuket",hotelLocation:"Phuket",hotelRoomTypes:["One BR Villa","One BR Villa Deluxe","One BR Villa High Bay","One BR Beachfront Villa","One BR Villa High Bay Signature"]},{hotelName:"The Nature SHA Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Pool Access","Deluxe Private Jacuzzi","Junior Suite","TWo BR Grand Suite"]},{hotelName:"The SIS Kata Resort",hotelLocation:"Phuket",hotelRoomTypes:["SIS On The Hill","SIS Over The Stella Pool","SIS Over The Garden","SIS Jacuzzi Pool","SIS Over The Sea","SIS Studio","The SIS Suite"]},{hotelName:"Glow Mira Karon Beach",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Deluxe Room","Family Two BR"]},{hotelName:"Dinso Resort Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Premium Room","One BR Suite","Dino Suite","Penthouse With Terrace","Two BR Corner Suite","Two BR Family Suite","Two BR Suite","Duplex Villa"]},{hotelName:"Grand Mercure Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Deluxe Pool Access","Superior Suite","One BR Villa","Two BR Villa"]},{hotelName:"Msocial Hotel Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Social Room","Social Cozy Room","","","","","","",""]},{hotelName:"Ayara Kamala Resort",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Grand Thai","Deluxe Pool Access","Grand Thai With Spa Bath","Family With Pool Access Two BR Suite","Grand Villa","Three BR Villa"]},{hotelName:"Centara Karon Resort Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Deluxe Room","Premium Deluxe","Deluxe Family Studio","One BR Garden Villa","One BR Villa","Two BR Villa","Three BR Villa"]},{hotelName:"Crest Resort Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Pool Access","Deluxe Villa","Premier Villa","Two BR Family Villa"]},{hotelName:"The Royal Paradise Hotel",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Paradise Wing (Low Floor)","Deluxe Paradise Wing (High Floor)","Premier Deluxe","Deluxe Royal Wing","Premier Deluxe Royal Wing"]},{hotelName:"Wyndham Bangkok Queen Centre",hotelLocation:"Phuket",hotelRoomTypes:["Studio King","Studio Executive","Two BR Suite"]},{hotelName:"Wyndham Garden Bangkok 42",hotelLocation:"Phuket",hotelRoomTypes:["One BR Suite","One BR Duplex Suite","Two BR Suite"]},{hotelName:"Ramada Plaza Bangkok 48",hotelLocation:"Phuket",hotelRoomTypes:["Premier Room","One BR Premier Suite Queen"]},{hotelName:"Ramada Wyndham Bangkok 87",hotelLocation:"Phuket",hotelRoomTypes:["Studio Duplex Queen","Studio Executive Duplex"]},{hotelName:"Rawayana Central Park Villas",hotelLocation:"Phuket",hotelRoomTypes:["Two BR Family Deluxe Villa","Three BR Grand Deluxe Villa"]},{hotelName:"Hyatt Regency Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Garden View Room","Ocean View Room","King Bed Plunge Pool","Two BR Family Room","Two BR Family Bunk Bed","Ocean View Club Access","King Bed Terrace Whirlpool","Two BR Regency Suite","King Bed Hilltop Ocean View Suite"]},{hotelName:"Namaka Resort Kamala",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Room","Premier Room","Villa"]},{hotelName:"Phuket Emerald Beach Resort",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Family Room","Deluxe Pool Access","Family Pool Access","Grand Family Two BR Connecting"]},{hotelName:"Dusit Thani Laguna Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Premier Ocean Front","Dusit Club Room","Landmark Suite Room","Two BR Laguna Villa"]},{hotelName:"Bandara Pool Villas Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Ocean  Pool Villa","Panoramic Pool Villa","Panoramic Duplex Pool Villa"]},{hotelName:"Bandara Beach Resort Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Balcony Room"]},{hotelName:"Sunsuri Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Superior Family Triple Room","Deluxe Room","Premium Deluxe Room","Grand Deluxe Room","Grand Deluxe Family Room","Ocean View Family Suite","Grand View Pool Villa","Ocean View One BR Pool Villa","Ocean View Two BR Pool Villa"]},{hotelName:"Marina Gallery Patong",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Pool Access ","Family Suite "]},{hotelName:"Katathani Phuket Beach Resort",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Grand Deluxe","Pool Access","Junior Suite","Junior Suite Oceanfront","Grand Suite"]},{hotelName:"The Shore Katathani Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Villa","Villa Romance","Villa In Love","Two BR Villa"]},{hotelName:"Marina Gallery KACHA Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Pool Access","Family Suite"]},{hotelName:"Sugar Marina Art Karon Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Inner","Artsy Deluxe","Deluxe Pool Access","Family Room","Quad Pool Access"]},{hotelName:"Sugar Marina Fashion Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Chic Deluxe Room","Deluxe Pool Access"]},{hotelName:"Sugar Marina SURF Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Pool Access"]},{hotelName:"Sugar Marina POP Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Deluxe Room","Superior Pool Access","Deluxe Pool Access","Family Cozy","Family Roomy","Family Pool Access","Family Biggy","Signature QUAD Room","Family Two BR Suite"]},{hotelName:"Sugar Marina Villas Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Superior Room","Deluxe Room","Superior Pool Access","Deluxe Pool Access","Family Cozy","Family Roomy","Family Pool Access","Family Biggy","Signature QUAD Room","Family Two BR Suite"]},{hotelName:"Sugar Marina Hotel AVIATOR Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Room","Deluxe Pool Access"]},{hotelName:"Marina MUAYTHAI Ta-iad Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Standard Room","One BR Suite Pool Facing","One BR Suite Pool Access"]},{hotelName:"Amari Phuket",hotelLocation:"Phuket",hotelRoomTypes:["Superior Balcony","Superior Ocean Front Balcony","Deluxe Ocean Front Balcony","One BR Suite Ocean Coral Lounge ","One BR Suite Ocean View Coral Lounge"]},{hotelName:"Anantara Mai Khao Phuket Villas",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Mai Khao Suite","Two BR Mai Khao Suite","Pavilion","Villa ","Two BR Suite","Lagoon Villa","Sala Villa","Two BR Pavilion","Two BR Family Villa","Two BR Connecting Double Pool Villa "]},{hotelName:"Tantawan Villa Resort Phuket",hotelLocation:"Phuket",hotelRoomTypes:["One BR Villa","Two BR Villa","Three BR Villa"]},{hotelName:"Anantara Layan Phuket Resort",hotelLocation:"Phuket",hotelRoomTypes:["Deluxe Layan Suite","Deluxe Villa","Sala Villa","Two BR Residence","Three BR Residence"]},{hotelName:"lyf Sukhumvit 8 Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["One of A Kind"]},{hotelName:"Oakwood Studios Sukhumvit",hotelLocation:"Bangkok",hotelRoomTypes:["Superior Room","Studio Deluxe","Studio Executive","Studio Premier"]},{hotelName:"Sindhorn Midtown Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["Standard Room","Premium Room","Sky Suite","One BR Suite","Two BR Suite","Two BR Corner Suite","Studio","One BR Urban Studio"]},{hotelName:"Ascott Thonglor Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["Deluxe Room","Studio Executive","One BR Premier ","One BR Executive","Two BR Executive","Three BR Executive"]},{hotelName:"Valia Hotel Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["Premier Room","Deluxe Suite","Two Deluxe Suites Connected","Family Suite","Junior Suite","Executive Suite","Valia Suite","Deluxe Suite Club"]},{hotelName:"Hilton Garden Inn Bangkok Silom",hotelLocation:"Bangkok",hotelRoomTypes:["Guest Room","Deluxe Room"]},{hotelName:"Hotel Indigo Bangkok Wireless Road",hotelLocation:"Bangkok",hotelRoomTypes:["Standard Room","Standard Balcony Room","Premium Balcony"]},{hotelName:"Bandara Silom Suites Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["One BR Suite","Two BR Suite"]},{hotelName:"Amari Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["Deluxe Room","Grand Deluxe","Premier Room","Club Premier","Club One BR Corner Suite","Club One BR Executive Suite","Club Two BR Corner Suite"]},{hotelName:"Ascott Embassy Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["Deluxe Room","Studio Executive","One BR Premier","Two BR Executive","Two BR Premier","Three BR Executive "]},{hotelName:"Nysa Hotel Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["Deluxe Room","Executive Room","Premier Room","One BR Suite","One BR Residence Suite","Deluxe Connecting Deluxe","Executive Connecting Executive","Premier Connecting Premier","One BR Residence Suite Connecting Premier"]},{hotelName:"Innside By Melia Bangkok",hotelLocation:"Bangkok",hotelRoomTypes:["The Inside Room","The Inside Corner Room","The Townhouse","The Townhouse Two BR"]},{hotelName:"Avani Ao Nang Krabi",hotelLocation:"Krabi",hotelRoomTypes:["Avani Room","Avani Superior Room","Avani Family Suite","Avani Villa"]},{hotelName:"Adam Krabi",hotelLocation:"Krabi",hotelRoomTypes:["Deluxe Suite"]},{hotelName:"Panan Krabi Resort",hotelLocation:"Krabi",hotelRoomTypes:["Deluxe Room"]},{hotelName:"Sea Seeker Krabi Resort",hotelLocation:"Krabi",hotelRoomTypes:["Deluxe Room","Deluxe Limestone"]},{hotelName:"Sugar Marina Hotel CLIFFHANGER Krabi",hotelLocation:"Krabi",hotelRoomTypes:["Superior Room","Deluxe Room","Superior Pool Access","Deluxe Pool Access","Deluxe Triple","Deluxe Queens"]},{hotelName:"Marina Express Fisherman Aonang Krabi",hotelLocation:"Krabi",hotelRoomTypes:["Deluxe Room"]},{hotelName:"",hotelLocation:"Pattaya",hotelRoomTypes:[""]},{hotelName:"Melia Chiang Mai",hotelLocation:"Pattaya",hotelRoomTypes:["Melia Room","Premium Room","The Level Premium Room"]},{hotelName:"Melia Koh Samui",hotelLocation:"Pattaya",hotelRoomTypes:["Deluxe Room","Premium Room","Duplex Boat Suite","The Level Pool Access","The Level Grand Suite"]}];
