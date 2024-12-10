const shops = [['Scyzoryki.net', 'pl'],['LEMONE', 'pl'],['Happytel.pl', 'pl'],['Kaja Sport', 'pl'],['STYLION', 'pl'],['Good Sport', 'pl'],['Monarti', 'pl'],['UnicornBeauty', 'pl'],['Kraina Doznań', 'pl'],['PheroStrong', 'pl'],['Sekrecik', 'pl'],['Helion', 'pl'],['HORYZONT ', 'pl'],['Braccatta', 'pl'],['Eta-Sklep', 'pl'],['Dobre Konopie', 'pl'],['SklepFC', 'pl'],['Keen', 'pl'],['Elektro Guru', 'pl'],['Black Tree', 'pl'],['MM Sport', 'pl'],['OCTO Chocolate', 'pl'],['Facetaria', 'pl'],['Polskie Centrum Kolagenu ', 'pl'],['Cup&You', 'pl'],['Fajna-Biżuteria', 'pl'],['Sportroom', 'pl'],['Royal Shop', 'pl'],['ORGANIQUE', 'pl'],['Cannabis Spot', 'pl'],['Sexshop112', 'pl'],['Medica-Group', 'pl'],['Eropteka', 'pl'],['Costway', 'pl'],['Ostre Dzieje', 'pl'],['Bee.pl', 'pl'],['RoboJet', 'pl'],['Konopteka', 'pl'],['La beauté naturelle', 'pl'],['OkapyKuchenne.pl', 'pl'],['Pro Rowery ', 'pl'],['LAWAIIA', 'pl'],['Limonka Shop', 'pl'],['Fit Juice', 'pl'],['Tania Ksiazka', 'pl'],['HILLARY', 'pl'],['Kocham Zabawki', 'pl'],['Halfprice PL', 'pl'],['Planteon PL', 'pl'],['Sports Events 365 PL', 'pl'],['Bielenda', 'pl'],['Songea', 'pl'],['INSIGHT', 'pl'],['SEGAFREDO ', 'pl'],['Fonia Premium PL', 'pl'],['4TOYS', 'pl'],['TechSat24', 'pl'],['GaPa Fashion ', 'pl'],['ChocoBox', 'pl'],['D’ALCHÉMY', 'pl'],['NOX Nails', 'pl'],['Burak dieta', 'pl'],['Charaktery', 'pl'],['euroshop24h.pl', 'pl'],['Evgkey', 'pl'],['Sigma ', 'pl'],['redarena PL', 'pl'],['Puderikrem PL', 'pl'],['Fashion Place', 'pl'],['Motolak', 'pl'],['LOVA', 'pl'],['Silveris.pl', 'pl'],['Moja Walizka', 'pl'],['bianko.pl', 'pl'],['HelpVit', 'pl'],['Klasykami.pl', 'pl'],['Store.Godox', 'pl'],['Laurastar.pl', 'pl'],['Pro Foto Sklep ', 'pl'],['Mountblanc.pl', 'pl'],['Stadler Form', 'pl'],['Petit Deko ', 'pl'],['FoodSaver', 'pl'],['Breville', 'pl'],['Crock - Pot', 'pl'],['SilverBeads', 'pl'],['YourSkin Shop', 'pl'],['e-catwalk', 'pl'],['Snailmed', 'pl'],['Jestem w Bajce', 'pl'],['Herbario', 'pl'],['BARPAGO', 'pl'],['LARIKO STUDIO', 'pl'],['Modern-Decor', 'pl'],['AuraHerbals', 'pl'],['tyletegotu.pl', 'pl'],['2407.PL', 'pl'],['BIO PREMIUM FOOD', 'pl'],['Italian Fashion', 'pl'],['Colibra', 'pl'],['Tołpa', 'pl'],['Twoje Hybrydy', 'pl'],['SWISO.pl', 'pl'],['Iglaco', 'pl'],['DlaBrodacza', 'pl'],['lunzo PL', 'pl'],['Mr. Gugu & Miss Go', 'pl'],['Ebookeo', 'pl'],['Zakupto.pl', 'pl'],['Pearlani', 'pl'],['Giacomo Conti', 'pl'],['Laroma', 'pl'],['Świadectwa Online', 'pl'],['Loberon', 'pl'],['Briju', 'pl'],['Dietly', 'pl'],['Ubierz Swoje Ściany', 'pl'],['Lounalie ', 'pl'],['BETTER YOU', 'pl'],['SPApower Cosmetics', 'pl'],['Lancome', 'pl'],['PsychoPark', 'pl'],['Dekoracja Domu', 'pl'],['GetYourGuide', 'pl'],['Avans', 'pl'],['Lidl winnica', 'pl'],['Protektor', 'pl'],['FEDUA B2C', 'pl'],['Beauty Booster Premium Collagen', 'pl'],['Christian Laurent', 'pl'],['Sexshop24', 'pl'],['Nordictest', 'pl'],['outletmeblowy48.pl', 'pl'],['Kohersen', 'pl'],['MikeSport', 'pl'],['Trec.pl', 'pl'],['Catering Cebulka', 'pl'],['SPIDWELD', 'pl'],['Love Catering', 'pl'],['Pomadziarz', 'pl'],['Leroy Merlin', 'pl'],['CzaryMary.pl', 'pl'],['AliExpress', 'pl'],['Volcano', 'pl'],['Laboratorium Zielarza', 'pl'],['Sportservice ', 'pl'],['NIMBALA', 'pl'],['Julka i Szpulka', 'pl'],['Shelbi', 'pl'],['hdwr.pl', 'pl'],['RajOgrodnika.pl', 'pl'],['T-shirt Gallery', 'pl'],['ReformA', 'pl'],['Shoperly ', 'pl'],['SECURITY BEZ TABU', 'pl'],['Novakid', 'pl'],['Yoga Bazar', 'pl'],['Sky Showtime PL', 'pl'],['6paknutrition', 'pl'],['Drewniany Wiking', 'pl'],['outshopping.pl', 'pl'],['Republic of Ties', 'pl'],['ELORI Jewellery', 'pl'],['Reqube.pl', 'pl'],['TOOLES.PL', 'pl'],['EKOTEKA', 'pl'],['The Body Shop', 'pl'],['9design', 'pl'],['Quiosque', 'pl'],['Pyszne PL', 'pl'],['Crispy Natural', 'pl'],['winoszarnia', 'pl'],['Akatja', 'pl'],['Livco Corsetti Fashion', 'pl'],['Broń.pl', 'pl'],['ORIENTANA', 'pl'],['Paryskie.pl', 'pl'],['OCLEAN', 'pl'],['Sklep Julia', 'pl'],['KUCHCIKOWO', 'pl'],['Pomalunki.pl', 'pl'],['Ale Pióro', 'pl'],['Meble Pumo', 'pl'],['Ale upominek ', 'pl'],['CHRISSIE Cosmetics by Vivipharma', 'pl'],['Sprint-rowery', 'pl'],['Bitdefender', 'pl'],['HelloDogs', 'pl'],['DECORATORE', 'pl'],['Godre.pl', 'pl'],['Dystryktzero.pl', 'pl'],['SpinEdu', 'pl'],['KaszmirowySen.pl', 'pl'],['FoodPatka', 'pl'],['Dobre Ziele', 'pl'],['sweetsen.pl', 'pl'],['Oslo Skin Lab', 'pl'],['e okulary ', 'pl'],['Sensus', 'pl'],['krem de la krem ', 'pl'],['Planeta Klocków® ', 'pl'],['Zarapharm', 'pl'],['Modern Classic Home', 'pl'],['Sotho', 'pl'],['Change Into Colours', 'pl'],['PortrAID.online', 'pl'],['PsychoBoost Academy', 'pl'],['Wood from Love', 'pl'],['AMUMU', 'pl'],['MARSALA', 'pl'],['Najs', 'pl'],['BOTANIC', 'pl'],['Monasou', 'pl'],['auna', 'pl'],['MATLINGERIE', 'pl'],['tovevintage.pl', 'pl'],['AromaCraft', 'pl'],['Demar24', 'pl'],['IAMED', 'pl'],['Blue Drop', 'pl'],['Cafes Guilis', 'pl'],['Kiwi Garden', 'pl'],['Koci Catering', 'pl'],['seomaker.ai', 'pl'],['Mulinek', 'pl'],['Pakuten.pl', 'pl'],['ErgoEden Sp. z o.o.', 'pl'],['TGhome', 'pl'],['PARISO', 'pl'],['SpiroPrint', 'pl'],['FAYREN', 'pl'],['Ekskluzywna.pl', 'pl'],['KingSzop24.pl', 'pl'],['Cavaccino', 'pl'],['Radamed', 'pl'],['Pogotowiebhp.com.pl', 'pl'],['Smart Blinds', 'pl'],['irobot.pl', 'pl'],['PiękneSny', 'pl'],['Bowl&Bone Republic', 'pl'],['Debrande', 'pl'],['Czajownia', 'pl'],['BRODRENE', 'pl'],['Regdos', 'pl'],['Softimi', 'pl'],['Tv Okazje', 'pl'],['WYDRUKUJEMY.TO', 'pl'],['Molly.pl', 'pl'],['GAIA', 'pl'],['WebePartners', 'pl'],['centersport.pl', 'pl'],['biurowe-szkolne.pl', 'pl'],['TopSilver', 'pl'],['Inter4U', 'pl'],['Lincoln PetFood', 'pl'],['ŚwietyMarek', 'pl'],['Tanie Gadżety', 'pl'],['David K ', 'pl'],['Qstyle', 'pl'],['Nie daj sie okraść', 'pl'],['PÜR Cosmetics', 'pl'],['Lapis Gold', 'pl'],['Leifheit', 'pl'],['PaczkaMeble', 'pl'],['Galante.pl', 'pl'],['Pokój Rozkoszy', 'pl'],['MAXY - dropshipping', 'pl'],['biuronimo.pl', 'pl'],['Dr Bacty', 'pl'],['MARBO-SPORT', 'pl'],['SportRecovery', 'pl'],['wec.com.pl', 'pl'],['Strefa Motocykli', 'pl'],['AVG i AVAST', 'pl'],['Lian Art', 'pl'],['Ogrodzenia24', 'pl'],['Rojam Store', 'pl'],['WyprzedażRTVAGD.pl', 'pl'],['Skin79', 'pl'],['Deco-Wall', 'pl'],['NEXUS', 'pl'],['Pasieka z Pasją', 'pl'],['Męska Rzecz ', 'pl'],['Bazylia.pl', 'pl'],['moi-mili.pl', 'pl'],['Venus Galeria', 'pl'],['Biovenahealth', 'pl'],['Twojlunchbox.pl', 'pl'],['badamHPV.pl', 'pl'],['domodeo24', 'pl'],['Magrami', 'pl'],['Classbach', 'pl'],['Piri', 'pl'],['Hempking', 'pl'],['Bizon Mobile', 'pl'],['CLINEO', 'pl'],['Borgio', 'pl'],['Zwegrodzki', 'pl'],['Biogo.pl', 'pl'],['Koh-i-noor.pl', 'pl'],['Bolero ', 'pl'],['Irbis.style', 'pl'],['MamaGama', 'pl'],['DrTusz', 'pl'],['Decofire.pl', 'pl'],['Magmac.pl', 'pl'],['SklepAsgard.pl', 'pl'],['Forhim.pl', 'pl'],['Zabierz Koniecznie', 'pl'],['From Nord', 'pl'],['Goldenmark', 'pl'],['Sklep Salvatti.pl', 'pl'],['HelloSmart', 'pl'],['BINGOSPA', 'pl'],['Merg.pl', 'pl'],['Sapphire-Fashion', 'pl'],['BestLighting.pl', 'pl'],['Bursztyn.pl', 'pl'],['Life Architect', 'pl'],['Luna Market', 'pl'],['Aluppi', 'pl'],['Tutlo', 'pl'],['Roidmi', 'pl'],['adidas.pl', 'pl'],['W Projekty', 'pl'],['262.pl', 'pl'],['Lavmag', 'pl'],['timeforf.pl', 'pl'],['Sixseconds.pl', 'pl'],['AnkaBizuteria.pl', 'pl'],['SZUMISIE', 'pl'],['Sklep dla Ogrodu', 'pl'],['Ameco Home', 'pl'],['Lacoste', 'pl'],['OutletRTVAGD.pl', 'pl'],['iloko.pl', 'pl'],['WeLoveBeds', 'pl'],['Sklep Kamil', 'pl'],['MACROVITA.pl', 'pl'],['Baby&Travel', 'pl'],['Kryształy3D.pl', 'pl'],['ALE.pl', 'pl'],['Lejdi.pl', 'pl'],['MAGANDA.PL', 'pl'],['Akademia Analiz', 'pl'],['Sin Fashion', 'pl'],['NINJA INK', 'pl'],['Ale chrzest', 'pl'],['gadzetyrajdowe.pl', 'pl'],['Tania-Bielizna.pl', 'pl'],['Gobli.pl', 'pl'],['Cosmetin.pl', 'pl'],['Kinderkraft', 'pl'],['Paluszkami.pl', 'pl'],['Jagadżet.pl', 'pl'],['Onepress', 'pl'],['Dekorujsciany', 'pl'],['Deco-Strefa', 'pl'],['Truthofoils.com', 'pl'],['Biore.pl', 'pl'],['Galeria Plakatu', 'pl'],['KubekTermiczny.pl', 'pl'],['Ragaba.pl', 'pl'],['KOSME.PL', 'pl'],['Kostki Rubika', 'pl'],['GodStoys.pl', 'pl'],['puroBIO cosmetics', 'pl'],['Jubilea.pl', 'pl'],['MamyToMy', 'pl'],['Butterlondon.pl', 'pl'],['Sięgaj po Zdrowie', 'pl'],['WALLY', 'pl'],['Dorjan', 'pl'],['Nove Food', 'pl'],['Pandora', 'pl'],['Luminis', 'pl'],['booktime', 'pl'],['Moya Matcha', 'pl'],['Pethomer', 'pl'],['Bershka', 'pl'],['Ministerstwo Gadżetów', 'pl'],['Feromony.pl', 'pl'],['DURASHOP', 'pl'],['Callusan.sklep.pl', 'pl'],['ALFASAN', 'pl'],['Prezent Życia', 'pl'],['COSMEDIX', 'pl'],['Lula Pink', 'pl'],['Jubiler Schubert', 'pl'],['Star Nail Cuccio', 'pl'],['Jubiler.pl', 'pl'],['50 Style', 'pl'],['Inteligentny Inwestor ', 'pl'],['June.pl', 'pl'],['Bezdroża', 'pl'],['MediaSklep24.pl', 'pl'],['Lamai.pl', 'pl'],['illuminations.pl', 'pl'],['Edukatorek', 'pl'],['Cosnet', 'pl'],['Videopoint', 'pl'],['Kubek Contigo', 'pl'],['2drink', 'pl'],['Fotako', 'pl'],['Districhem', 'pl'],['gentle-man.pl', 'pl'],['Sentiell Jewelry', 'pl'],['Supra3', 'pl'],['Sporti.pl', 'pl'],['Optiland', 'pl'],['Editio', 'pl'],['GoldenFoxNutrition', 'pl'],['EbookPoint.pl', 'pl'],['Solve24', 'pl'],['Isle Of Men', 'pl'],['Mandira', 'pl'],['ozoneo.pl', 'pl'],['Pro Motocykle ', 'pl'],['Magiczne Indie', 'pl'],['Centrum Akson', 'pl'],['Ingagi Coffee', 'pl'],['Kanu Nature', 'pl'],['omegasoft.pl', 'pl'],['Dekoratorium', 'pl'],['Rufcio', 'pl'],['Senelle', 'pl'],['Zolta', 'pl'],['BigRiver.pl', 'pl'],['MrCleaner', 'pl'],['forsomeone.pl', 'pl'],['Ulubiony Serwis', 'pl'],['Picarta', 'pl'],['Looktop', 'pl'],['ELEGANCKI PAN', 'pl'],['ecolore.pl', 'pl'],['Your Style.pl', 'pl'],['TRAMP4', 'pl'],['Aluramy ', 'pl'],['eplakaty.pl', 'pl'],['Tabby', 'pl'],['APTEKA ZDROWIE', 'pl'],['RAJAPACK', 'pl'],['Sorvella Perfume', 'pl'],['Romet Motors', 'pl'],['Torebki-skórzane.pl', 'pl'],['dobrezabawki.com', 'pl'],['Składzik Zdrowia', 'pl'],['Slovianca', 'pl'],['KupBilecik', 'pl'],['EMP', 'pl'],['tuszmarkt.pl', 'pl'],['ADECO', 'pl'],['TwojeMapy.com', 'pl'],['AnimatorCzasu.pl', 'pl'],['Fera', 'pl'],['Zabudowa AGD', 'pl'],['Świeżo Palona', 'pl'],['Vieri Divani', 'pl'],['Oceanic', 'pl'],['Joom', 'pl'],['Incore Sports', 'pl'],['Party u Marty', 'pl'],['Memorial Book', 'pl'],['Elfi Listy Mikołaja', 'pl'],['DARO NARZĘDZIA', 'pl'],['Jan Nowak', 'pl'],['Media-Display.pl', 'pl'],['MaMy Kalendarz', 'pl'],['1hundred', 'pl'],['Sigma Foto', 'pl'],['Myprotein PL', 'pl'],['kolorywnetrz.pl', 'pl'],['Diablo Chairs', 'pl'],['Mam Bon', 'pl'],['STAVIORI', 'pl'],['Fragment Natury', 'pl'],['Miya Cosmetics', 'pl'],['Arte Venti', 'pl'],['wkretarka.com.pl', 'pl'],['heyhoney.pl', 'pl'],['HP', 'ar'],['Kaspersky LATAM', 'ar'],['HP CO', 'co'],['Julian Charles', 'uk'],['Pimlico Prints', 'uk'],['Gatineau', 'uk'],['Theatre Tickets Direct', 'uk'],['Burton Snowboards', 'uk'],['Boostology', 'uk'],['1pMobile', 'uk'],['304 Clothing', 'uk'],['Vehicle Score', 'uk'],['Vape Resources', 'uk'],['Blazevideo', 'uk'],['Cancer Care Parcel', 'uk'],['Je Joue', 'uk'],['WebHosting UK Com Ltd.', 'uk'],['Grown Alchemist', 'uk'],['Raw Beauty Lab', 'uk'],['Padel Market', 'uk'],['Voghion Global', 'uk'],['The Ayurveda Experience', 'uk'],['Jaded London', 'uk'],['Step One', 'uk'],]