// Cuando el usuario haga click en el marcador, aparece una ventana de información
  var markers = [
      ['Cervelar Reconquista (Retiro)', 'Reconquista 958', {lat:-34.59667, lng: -58.37307}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['On Tap Retiro', 'Marcelo Torcuato de Alvear 834', {lat:-34.59639, lng: -58.37891}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['The Shelter Coffee', 'Arroyo 940', {lat:-34.5915351, lng:-58.3807118}, '<a href="http://www.facebook.com/thesheltercoffee" target="_blank">fb.com/thesheltercoffee</a>'],
      ['The Food Truck Store', 'Av. Callao 2092', {lat: -34.58674, lng:-58.3864}, '<a href="http://www.facebook.com/thefoodtruckstore" target="_blank">fb.com/thefoodtruckstore</a>'],
      ['Bedford Station', 'Arce 802', {lat: -34.56812, lng: -58.4357}, '<a href="http://www.bedfordstation.com.ar" target="_blank">bedfordstation.com.ar</a>'],
      ['El Federal', 'República de Eslovenia 1831', {lat: -34.56968, lng: -58.43387}, ''],
      ['Drafter\'s', 'Vicente López 2205', {lat: -34.58767, lng: -58.39523}, '<a href="http://wwww.draftersbar.com" target="_blank">www.draftersbar.com</a>'],
      ['12 Canillas', 'French 2350', {lat: -34.59117, lng: -58.3987}, '<a href="http://www.12canillas.com" target="_blank">www.12canillas.com</a>'],
      ['Lincoln', 'French 3131', {lat: -34.58608, lng: -58.40689}, '<a href="http://www.facebook.com/restaurante.lincoln" target="_blank">fb.com/restaurante.lincoln</a>'],
      ['La Bartola', 'Junín 1761', {lat: -34.58863, lng: -58.39249}, '<a href="http://www.bartolaba.com.ar" target="_blank">www.bartolaba.com.ar</a>'],
      ['Buller', 'Junín 1747', {lat: -34.58878, lng: -58.39263}, '<a href="http://www.bullerpub.com" target="_blank">www.bullerpub.com</a>'],
      ['El Club', 'Honduras 5028', {lat: -34.58843, lng: -58.43075}, '<a href="http://www.facebook.com/barelclubok" target="_blank">fb.com/barelclubok</a>'],
      ['Santo Lupulo', 'Soler 4788', {lat: -34.58624, lng: -58.42594}, '<a href="http://www.facebook.com/santolupulogrowlerstation" target="_blank">fb.com/santolupulogrowlerstation</a>'],
      ['7030 Bar', 'Thames 1514', {lat: -34.58855, lng: -58.43207}, '<a href="http://www.instagram.com/7030bar" target="_blank">instagram.com/7030bar</a>'],
      ['Cervelar Humboldt', 'Humboldt 1864', {lat: -34.58363, lng: -58.4341}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Grasshopper', 'Gorriti 5567', {lat: -34.58483, lng: -58.43669}, '<a href="http://www.facebook.com/grashopperba" target="_blank">fb.com/grashopperba</a>'],
      ['Portlander Tap Room', 'Honduras 5670', {lat: -34.58361, lng: -58.43704}, '<a href="http://www.portlander.com.ar" target="_blank">www.portlander.com.ar</a>'],
      ['Cova Craft Beer', 'Arévalo 1325', {lat: -34.58442, lng: -58.44426}, '<a href="http://www.facebook.com/covacraft" target="_blank">fb.com/covacraft</a>'],
      ['Growlers', 'Gurruchaga 1450', {lat: -34.5901, lng: -58.43078}, '<a href="http://growlerscomunidadcervecera.com.ar" target="_blank">growlerscomunidadcervecera.com.ar</a>'],
      ['Dylan', 'Gorriti 4788', {lat: -34.59091, lng: -58.42911}, '<a href="http://www.cerveceriadylan.com" target="_blank">www.cerveceriadylan.com</a>'],
      ['Yolo Bar', 'Charcas 4800', {lat: -34.58076, lng: -58.42707}, '<a href="http://www.yolobar.com.ar" target="_blank">www.yolobar.com.ar</a>'],
      ['On Tap Palermo', 'Costa Rica 5527', {lat: -34.58314, lng: -58.43393}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['Birmut', 'Av. Córdoba 4158', {lat: -34.59696, lng: -58.42565}, '<a href="http://www.facebook.com/birmutvillacrespoo" target="_blank">fb.com/birmutvillacrespoo</a>'],
      ['Desarmadero', 'Gorriti 4295', {lat: -34.5942, lng: -58.42419}, '<a href="http://www.facebook.com/desarmaderobar" target="_blank">fb.com/desarmaderobar</a>'],
      ['Cervelar Cabrera', 'José Antonio Cabrera 4399', {lat: -34.59417, lng: -58.42604}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Gaboto Bier Haus', 'Fitz Roy 1715', {lat: -34.58399, lng: -58.43601}, '<a href="http://www.facebook.com/gabotobierhaus" target="_blank">fb.com/gabotobierhaus</a>'],
      ['Santa Cebada', 'Av. Cnel. Díaz 1502', {lat: -34.59289, lng: -58.41357}, '<a href="http://www.facebook.com/estaciondecervezas" target="_blank">fb.com/estaciondecervezas</a>'],
      ['Gambler', 'Gorriti 3621', {lat: -34.59556, lng: -58.41543}, '<a href="http://wwww.gambler.com.ar" target="_blank">wwww.gambler.com.ar</a>'],
      ['Big Sur Cerviño', 'Av. Cerviño 3596', {lat: -34.57996, lng: -58.40976}, '<a href="http://www.facebook.com/bigsurba" target="_blank">fb.com/bigsurba</a>'],
      ['On Tap Belgrano', 'Cuba 2491', {lat: -34.55724, lng: -58.45767}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['Cervelar Obligado (Belgrano)', 'Vuelta de Obligado 2391', {lat: -34.55866, lng: -58.4578}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Kaiser', 'Av. Congreso 2195', {lat: -34.55416, lng: -58.46032}, '<a href="http://www.facebook.com/kaiserbeerlab" target="_blank">fb.com/kaiserbeerlab</a>'],
      ['Sör Cervecería', '11 de Septiembre 3673', {lat: -34.54491, lng: -58.46169}, '<a href="http://www.facebook.com/sorcraftbeer" target="_blank">fb.com/sorcraftbeer</a>'],
      ['Cervelar Elcano (Colegiales)', 'Av. Elcano 3385', {lat: -34.57503, lng: -58.46008}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['On Tap Colegiales', 'Cap. Gral. Ramón Freire 1101', {lat: -34.57443, lng: -58.4542}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['Cullen Henderson', 'Av. Álvarez Thomas 1106', {lat: -34.57855, lng: -58.45732}, '<a href="http://www.cullenhenderson.com.ar" target="_blank">www.cullenhenderson.com.ar</a>'],
      ['Gallo Negro', 'Donado 1851', {lat: -34.57509, lng: -58.47313}, '<a href="http://www.facebook.com/GallonegroOK" target="_blank">fb.com/gallonegrook</a>'],
      ['Cervelar Villa Urquiza', 'Av. Olazábal 4790', {lat: -34.57478, lng: -58.48265}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Butan', 'Bauness 2102', {lat: -34.57769, lng: -58.48505}, '<a href="http://www.facebook.com/butanbar" target="_blank">fb.com/butanbar</a>'],
      ['Mamma Birra', 'Plaza 2789', {lat: -34.56565, lng: -58.47865}, '<a href="http://www.facebook.com/mammabirraok" target="_blank">fb.com/mammabirraok</a>'],
      ['Cervelar Goyena', 'Av. Pedro Goyena 486', {lat: -34.62607, lng: -58.4339}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['El Club de la Birra', 'Av. Pedro Goyena 60', {lat: -34.62529, lng: -58.42807}, '<a href="http://www.clubdelabirra.com.ar" target="_blank">www.clubdelabirra.com.ar</a>'],
      ['On Tap Boedo', 'Muñiz 1002', {lat: -34.62598, lng: -58.42571}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['El Desembarco', 'Av. Castro Barros 785', {lat: -34.62089, lng: -58.41957}, '<a href="http://www.facebook.com/eldesembarcoboedo" target="_blank">fb.com/eldesembarcoboedo</a>'],
      ['Cervelar Devoto', 'Chivilcoy 3451', {lat: -34.6028391, lng: -58.5091896}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Hop Beer Devoto', 'Sanabria 4494', {lat: -34.59882, lng: -58.51824}, '<a href="http://www.hop-beer.com" target="_blank">www.hop-beer.com</a>'],
      ['Hendrix Devoto', 'Nueva York 4144', {lat: -34.601, lng: -58.5129}, '<a href="http://www.facebook.com/HendrixCerveceria" target="_blank">fb.com/hendrixcerveceria</a>'],
      ['On Tap San Telmo',	'Av. Caseros 482', {lat: -34.62674, lng: -58.37216}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['Bierlife', 'Humberto 1º 670', {lat: -34.62084, lng: -58.37525}, '<a href="http://www.bierlife.com" target="_blank">www.bierlife.com</a>'],
      ['Breoghan', 'Bolívar 862', {lat: -34.61785, lng: -58.37296}, '<a href="http://www.blogspot.com/breoghanbrewbar" target="_blank">www.blogspot.com/breoghanbrewbar</a>'],
      ['Cervelar Defensa (San Telmo)', 'Defensa 982', {lat: -34.61939, lng: -58.37131}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['On Tap Vicente López', 'Av. del Libertador 570', {lat: -34.52902, lng: -58.47066}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['Cervelar San Isidro', 'Dardo Rocha 2002', {lat: -34.49185, lng: -58.52841}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Holzen Hops', 'Av. Maipú 3886', {lat: -34.50027, lng: -58.49645}, '<a href="http://www.facebook.com/holzenhops" target="_blank">fb.com/holzenhops</a>'],
      ['Vasilly Zatec', 'Av. del Libertador 16012', {lat: -34.46951, lng: -58.50841}, '<a href="http://www.facebook.com/vasillyzatec" target="_blank">fb.com/vasillyzatec</a>'],
      ['Minta\s Pura Birra', 'Eduardo Costa 874', {lat: -34.47966, lng: -58.50389}, '<a href="http://www.facebook.com/mintaspurabirraclub" target="_blank">fb.com/mintaspurabirraclub</a>'],
      ['Lowell\s Biergarten', ' Primera Junta 1091', {lat: -34.46199, lng: -58.50806}, '<a href="http://www.lowells.com.ar" target="_blank">www.lowells.com.ar</a>'],
      ['Sauzalito', 'Primera Junta 1094', {lat: -34.46196, lng: -58.50805}, '<a href="http://www.sauzalito.com.ar" target="_blank">www.sauzalito.com.ar</a>'],
      ['Cumbres San Isidro', 'Int. Tomkinson 3025', {lat: -34.48128, lng: -58.5557}, '<a href="http://www.instagram.com/cumbres_bsas" target="_blank">instagram.com/cumbres_bsas</a>'],
      ['Galpon de Tacuara', 'Gral. Arias 710', {lat: -34.43772, lng: -58.55775}, '<a href="http://www.facebook.com/galpondetacuara" target="_blank">fb.com/galpondetacuara</a>'],
      ['Bestia', 'Primera Junta 702', {lat: -34.46488, lng: -58.51082}, '<a href="http://www.facebook.com/bestia.smk" target="_blank">fb.com/bestia.smk</a>'],
      ['Burton on Trent', 'Av. Juan Segundo Fernández 20', {lat: -34.49193, lng: -58.54728}, '<a href="http://www.facebook.com/burtonOT" target="_blank">fb.com/burtonot</a>'],
      ['Dom Ballester', 'Congreso 4100', {lat: -34.55748, lng: -58.55224}, '<a href="http://www.cerveceriadom.com" target="_blank">www.cerveceriadom.com</a>'],
      ['Pompeya Pub Social', 'Pompeya 2413', {lat: -34.65012, lng: -58.64271}, '<a href="http://www.facebook.com/pompeya.pubsocial" target="_blank">fb.com/pompeya.pubsocial</a>'],
      ['Prinston Castelar', 'Sta Rosa 1287', {lat: -34.645, lng: -58.65704}, '<a href="http://www.facebook.com/prinstoncastelar" target="_blank">fb.com/prinstoncastelar</a>'],
      ['Sarria', 'Mendoza 353', {lat: -34.64498, lng: -58.62256}, '<a href="http://www.facebook.com/sarriacerveceria" target="_blank">fb.com/sarriacerveceria</a>'],
      ['Pompeya Pub Social Ramos', 'Leandro N. Alem 325', {lat: -34.64074, lng: -58.56768}, '<a href="http://www.facebook.com/pompeya.pubsocial" target="_blank">fb.com/pompeya.pubsocial</a>'],
      ['Prinston Ramos', 'Mariano Moreno 272', {lat: -34.64278, lng: -58.56229}, '<a href="http://www.facebook.com/prinstonramos" target="_blank">fb.com/prinstonramos</a>'],
      ['Joaquina', 'Espora 320', {lat: -34.6448, lng: -58.56667}, '<a href="http://www.facebook.com/joaquina.craft" target="_blank">fb.com/joaquina.craft</a>'],
      ['Cervelar Ramos', 'Güemes 98', {lat: -34.63927, lng: -58.56619}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Cheka', 'Juncal 430', {lat: -34.66992, lng: -58.72648}, '<a href="http://www.instagram.com/cheka_beer" target="_blank">instagram.com/cheka_beer</a>'],
      ['Pompeya Pub Haedo', 'Marcos Sastre 21', {lat: -34.64535, lng: -58.59333}, '<a href="http://www.facebook.com/pompeya.pubsocial" target="_blank">fb.com/pompeya.pubsocial</a>'],
      ['On Tap Rosario', 'Salta 2303', {lat: -32.93661, lng: -60.65316}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['Growler Garage', 'Brown 3015', {lat: -32.93254, lng: -60.6621}, '<a href="http://www.growlergarage.com.ar" target="_blank">www.growlergarage.com.ar</a>'],
      ['On Tap MDQ', 'Alsina 2583', {lat: -38.01204, lng: -57.54162}, '<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['Brewhouse MDQ', 'Julio Argentino Roca 1343', {lat: -38.01848, lng: -57.54464}, '<a href="http://www.facebook.com/brewhousemdp" target="_blank">fb.com/brewhousemdp</a>'],
      ['La Paloma', 'Olavarría 3063', {lat: -38.01637, lng: -57.54383}, '<a href="http://www.lapalomabrewing.com" target="_blank">www.lapalomabrewing.com</a>'],
      ['Beer House Pinamar', 'Av. del Libertador 27', {lat: -37.11536, lng: -56.86103}, '<a href="http://www.facebook.com/beerhousepinamar" target="_blank">fb.com/beerhousepinamar</a>'],
      ['Brew House LP', 'Calle 48 1252-1300', {lat: -34.92594, lng: -57.96463}, '<a href="http://www.facebook.com/brewhouselaplata" target="_blank">fb.com/brewhouselaplata</a>'],
      ['Antares Parador LP', 'Calle 18 613, 1900', {lat: -34.9212, lng: -57.96637}, '<a href="http://www.antares.com.ar" target="_blank">www.antares.com.ar</a>'],
      ['Bye Henry', 'Av. 44 1114', {lat: -34.92036, lng: -57.96577}, '<a href="http://www.facebook.com/byehenry" target="_blank">fb.com/byehenry</a>'],
      ['1870 Avellaneda', 'Juan B. Palaá 592', {lat: -34.66437, lng: -58.36878}, '<a href="http://www.facebook.com/1870avellaneda" target="_blank">fb.com/1870avellaneda</a>'],
      ['Hoppy', 'Mariano Moreno 6176', {lat: -34.70279, lng: -58.31652}, '<a href="http://www.facebook.com/hoppycc" target="_blank">fb.com/hoppycc</a>'],
      ['1870 Banfield', 'Av. Adolfo Alsina 399', {lat: -34.74089, lng: -58.3929},'<a href="http://www.facebook.com/1870banfield" target="_blank">fb.com/1870banfield</a>'],
      ['Cervecería Brown Adrogué', 'Av. Tomás Espora 999', {lat: -34.80291, lng: -58.38871}, '<a href="http://www.facebook.com/cerveceriabrown" target="_blank">fb.com/cerveceriabrown</a>'],
      ['Guten Bier Lomas', 'Italia 496', {lat: -34.76641, lng: -58.4022}, '<a href="http://www.facebook.com/gutenbierlaslomitas" target="_blank">fb.com/gutenbierlaslomitas</a>'],
      ['Guten Bier Monte', 'Cnel. Dorrego 128-198', {lat: -34.81682, lng: -58.47146},'<a href="http://www.instagram.com/gutenbier" target="_blank">instagram.com/gutenbier</a>'],
      ['DAS Santa Cruz', 'Berutti 796', {lat: -49.30737, lng: -67.73229},''],
      ['Munich - Almacén Liniers', 'Av. Larrazábal 489', {lat: -34.64414, lng: -58.51137},'<a href="http://www.almacenmunich.com" target="_blank">www.almacenmunich.com</a>'],
      ['Munich - Almacén Lanús', '2 de Mayo 2751', {lat: -34.70309, lng: -58.39726},'<a href="http://www.almacenmunich.com" target="_blank">www.almacenmunich.com</a>'],
      ['Recarga La Pampa', 'Juan B. Justo 71', {lat: -36.62212, lng: -64.29219},'<a href="http://www.facebook.com/recargadebotellones" target="_blank">fb.com/recargadebotellones</a>'],
      ['Barone', 'Rincón 360', {lat: -38.71211, lng: -62.25167},''],
      ['Rabieta - Hipodromo', 'Av. del Libertador 4103', {lat: -34.56943, lng: -58.42639},'<a href="http://www.facebook.com/rabietacraft" target="_blank">fb.com/rabietacraft</a>'],
      ['Balder Beer', 'Arévalo 1392', {lat: -34.58373, lng: -58.44364},'<a href="http://www.balderbeer.com.ar" target="_blank">www.balderbeer.com.ar'],
      ['Bonita Brewing Co', 'Av. del Libertador 2699', {lat: -34.5057, lng: -58.48044},'<a href="http://www.instagram.com/bonitabrewco" target="_blank">instagram.com/bonitabrewco'],
      ['Saint Burguer', 'Av. de Mayo 852', {lat: -34.60899, lng: -58.37838},'<a href="http://www.instagram.com/saint.burger" target="_blank">instagram.com/saint.burger</a>'],
      ['Lobos - Estacion de Birras', 'Paraguay 2959', {lat: -34.59574, lng: -58.40919},'<a href="http://www.facebook.com/lobos.cerveceria" target="_blank">fb.com/lobos.cerveceria</a>'],
      ['Braus', 'Juncal 3626', {lat: -34.5833, lng: -58.41381},'<a href="http://www.braus.com.ar" target="_blank">www.braus.com.ar</a>'],
      ['Munich Villa del Parque', 'Nogoyá 2946', {lat: -34.60203, lng: -58.49018}, '<a href="http://www.almacenmunich.com" target="_blank">www.almacenmunich.com</a>'],
      ['On Tap Recoleta', 'Azcuénaga 1781', {lat: -34.58885, lng: -58.396},'<a href="http://www.ontap.com.ar" target="_blank">www.ontap.com.ar</a>'],
      ['The Laundry Castelar', 'Sta Rosa 1037', {lat: -34.64716, lng: -58.65761},'<a href="http://www.facebook.com/barthelaundry" target="_blank">fb.com/barthelaundry</a>'],
      ['Prego', '9 de Julio 402', {lat: -34.65304, lng: -58.61844},'<a href="http://www.facebook.com/prego.bistro" target="_blank">fb.com/prego.bistro</a>'],
      ['Osiris', 'Bv. Gral. San Martín 2281', {lat: -34.59452, lng: -58.58787},'<a href="http://www.osirisrestobar.com.ar" target="_blank">www.osirisrestobar.com.ar</a>'],
      ['Madigan', 'Honduras 5015', {lat: -34.5884, lng: -58.43054},'<a href="http://www.facebook.com/madiganbar" target="_blank">fb.com/madiganbar</a>'],
      ['The Capital Beer', 'Esmeralda 15', {lat: -34.60799, lng: -58.37765},'<a href="http://www.facebook.com/thecapitalbeerok" target="_blank">fb.com/thecapitalbeerok</a>'],
      ['Temple (Hollywood)', 'Honduras 5608', {lat: -34.58412, lng: -58.43632},'<a href="http://www.thetemplebar.com.ar" target="_blank">www.thetemplebar.com.ar</a>'],
      ['Brown Canning', 'Mariano Castex 639', {lat: -34.85169, lng: -58.50407},'<a href="http://www.facebook.com/cerveceriabrown" target="_blank">fb.com/cerveceriabrown</a>'],
      ['Temple (Soho)', 'Costa Rica 4677', {lat: -34.58802, lng: -58.4272},'<a href="http://www.thetemplebar.com.ar" target="_blank">www.thetemplebar.com.ar</a>'],
      ['Grow up', 'Av. Directorio 2354', {lat: -34.63339, lng: -58.45989},'<a href="http://www.facebook.com/growupcervezas" target="_blank">fb.com/growupcervezas</a>'],
      ['Crowlers', 'Av. 60 1356', {lat: -34.93507, lng: -57.95699},'<a href="http://www.facebook.com/crowlerslaplata" target="_blank">fb.com/crowlerslaplata</a>'],
      ['Paralelo', 'Julián Álvarez 2492', {lat: -34.58646, lng: -58.41427},'<a href="http://www.facebook.com/paralelobar" target="_blank">fb.com/paralelobar</a>'],
      ['La Recompensa', 'Av. Dr. Honorio Pueyrredón 1800', {lat: -34.60127, lng: -58.45129},'<a href="http://www.instagram.com/larecompensa.cervezaartesana" target="_blank">instagram.com/larecompensa.cervezaartesana</a>'],
      ['Temple - Pilar', 'Pilar 1086', {lat: -34.44379, lng: -58.87621},'<a href="http://www.thetemplebar.com.ar" target="_blank">www.thetemplebar.com.ar</a>'],
      ['Growlers - Caballito', 'Doblas 857', {lat: -34.62689, lng: -58.42997},'<a href="http://www.growlerscomunidadcervecera.com.ar" target="_blank">www.growlerscomunidadcervecera.com.ar</a>'],
      ['Porter Craft Beer', 'Av. Montes de Oca 276', {lat: -34.63175, lng: -58.37625},'<a href="http://www.facebook.com/porterscerveceria" target="_blank">fb.com/porterscerveceria</a>'],
      ['Tres Calaveras', 'Bolivia 196', {lat: -32.41894, lng: -63.25101},'<a href="http://www.facebook.com/trescalaverasbiergarten" target="_blank">fb.com/trescalaverasbiergarten</a>'],
      ['Guten Bier Lanus', 'Enrique de Valle Iberlucea 2617', {lat: -34.7015, lng: -58.39349},'<a href="http://www.facebook.com/gutenbierok" target="_blank">fb.com/gutenbierok</a>'],
      ['Holzen Hops (Nuñez)', 'Iberá 2432', {lat: -34.5539, lng: -58.46494}, '<a href="http://www.facebook.com/holzenhops" target="_blank">fb.com/holzenhops</a>'],
      ['1516', 'José Antonio Cabrera 5225', {lat: -34.58848, lng: -58.43424}, '<a href="http://www.1516cerveceria.com" target="_blank">www.1516cerveceria.com</a>'],
      ['Wild Hops', 'Diagonal 74 1512', {lat: -34.9165, lng: -57.95474}, '<a href="http://www.facebook.com/wildhopscerveceria" target="_blank">fb.com/wildhopscerveceria</a>'],
      ['Cerdos Voladores', 'Av. del Libertador 62', {lat: -34.4335, lng: -58.56302}, '<a href="http://www.facebook.com/cerdosvoladoresok" target="_blank">fb.com/cerdosvoladoresok</a>'],
      ['Cumbres Olivos', 'Av. Maipú 3495', {lat: -34.50356, lng: -58.49434}, '<a href="http://www.instagram.com/cumbres_bsas" target="_blank">instagram.com/cumbres_bsas</a>'],
      ['El Birradero', 'Av. San Martín 1083', {lat: -33.8078, lng: -59.50371}, '<a href="http://www.facebook.com/elbirradero" target="_blank">fb.com/elbirradero</a>'],
      ['Fly Taco', 'República Dominicana 3382', {lat: -34.59091, lng: -58.4139}, '<a href="http://www.instagram.com/fly_taco" target="_blank">instagram.com/fly_taco</a>'],
      ['Antares Villa del Parque', 'Baigorria 3241', {lat: -34.60492, lng: -58.49324}, '<a href="http://www.antares.com.ar" target="_blank">www.antares.com.ar</a>'],
      ['Bruder', 'Bartolomé Mitre 3188', {lat: -38.01039, lng: -57.55842}, '<a href="http://www.facebook.com/bruderbg" target="_blank">fb.com/bruderbg</a>'],
      ['Beer House Palermo', 'Serrano 1454', {lat: -34.5897, lng: -58.43166}, '<a href="http://www.facebook.com/beerhousepalermo" target="_blank">fb.com/beerhousepalermo</a>'],
      ['Doctor Mephisto', 'Juan Ramirez de Velazco 471', {lat: -34.59869, lng: -58.43622}, '<a href="http://www.facebook.com/DoctorMephistoBsAs" target="_blank">fb.com/DoctorMephistoBsAs</a>'],
      ['Temple Cerviño', 'Av. Cerviño 3901', {lat: -34.57855, lng: -58.41339}, '<a href="http://www.thetemplebar.com.ar" target="_blank">www.thetemplebar.com.ar</a>'],
      ['Vasilly Córdoba', 'Elpidio González 740', {lat: -32.41924, lng: -63.26631}, '<a href="http://www.facebook.com/vasillyzatecvillamaria" target="_blank">fb.com/vasillyzatecvillamaria</a>'],
      ['Cervelar Honorio', 'Av. Dr. Honorio Pueyrredón 1151', {lat: -34.60641, lng: -58.44611}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Code', 'Juncal 412', {lat: -34.67016, lng: -58.72652}, '<a href="http://www.facebook.com/code.merlo" target="_blank">fb.com/code.merlo</a>'],
      ['Cervelar Mataderos', 'Av. Emilio Castro 7432', {lat: -34.65496, lng: -58.52158}, '<a href="http://www.cervelar.com.ar" target="_blank">www.cervelar.com.ar</a>'],
      ['Baum San Telmo', 'Av. Belgrano 350', {lat: -34.61241, lng: -58.3712}, '<a href="http://www.facebook.com/baumsantelmo" target="_blank">fb.com/baumsantelmo</a>'],
      ['Casona Delle Arti', 'Lisboa 661', {lat: -34.86881, lng: -57.88599}, '<a href="http://www.facebook.com/casonadellearti" target="_blank">fb.com/casonadellearti</a>'],
      ['El Galpon de Atacama', 'Atacama 1610', {lat: -34.64133, lng: -58.65964}, '<a href="http://www.galponatacama.com.ar" target="_blank">www.galponatacama.com.ar</a>'],
      ['Brew Republic', 'Vicente López 2233', {lat: -34.58723, lng: -58.39543}, '<a href="http://www.facebook.com/brewrepublic" target="_blank">fb.com/brewrepublic</a>'],
      ['Radegast', 'Rioja 670', {lat: -32.94882, lng: -60.6325}, '<a href="http://www.facebook.com/radegast.beercoffee" target="_blank"> fb.com/radegast.beercoffee</a>'],
      ['Munich Adrogue', 'Diagonal Almte Brown 1235', {lat: -34.7974, lng: -58.38926}, '<a href="http://www.facebook.com/almacenmunichadrogue" target="_blank">fb.com/almacenmunichadrogue</a>'],
      ['Brew House Nuñez', 'O\'Higgins 3573', {lat: -34.54723, lng: -58.46417}, '<a href="http://www.facebook.com/brewhousenunez" target="_blank">fb.com/brewhousenunez</a>'],
      ['Ruka Garden', 'Blanco Encalada 2405', {lat: -34.47819, lng: -58.57227}, '<a href="http://www.facebook.com/rukagarden" target="_blank">fb.com/rukagarden</a>'],
      ['Old Hops', 'Av. Rivadavia 17504', {lat: -34.64859, lng: -58.61107}, '<a href="http://www.facebook.com/oldhops" target="_blank">fb.com/oldhops</a>'],
      ['Biergarten', '9 de Julio 17', {lat: -34.7101, lng: -58.28067 }, '<a href="http://www.facebook.com/biergartenbernal" target="_blank">fb.com/biergartenbernal</a>'],
      ['Bulliban', 'Av. de Mayo 320', {lat: -33.89408, lng: -60.56952}, ''],
      ['La Huerta de Barket', 'Necochea 1535', {lat: -45.87095, lng: -67.49792}, '<a href="http://www.facebook.com/barketcrd" target="_blank">fb.com/barketcrd</a>'],
      ['Minta\'s Pura Birra (Victoria)', 'Santamarina 1368', {lat: -34.45546, lng: -58.54051}, '<a href="http://www.facebook.com/mintaspurabirraclub" target="_blank">fb.com/mintaspurabirraclub</a>'],
      ['BlueDog', 'Bucarelli 2340', {lat: -34.57595, lng: -58.48811}, '<a href="http://www.facebook.com/bluedogbeerstation" target="_blank">fb.com/bluedogbeerstation</a>'],
      ['Rubia Mireya', 'República Arabe Siria 3090', {lat: -34.58007, lng: -58.4133}, ''],
      ['Mons', 'Av. Francia 59 bis', {lat: -32.93189, lng: -60.66284}, '<a href="http://www.facebook.com/monsbeergarden" target="_blank">fb.com/monsbeergarden</a>'],
      ['The Laundry Moron', 'Gral. Bartolomé Mitre 724', {lat: -34.65299, lng: -58.61892}, '<a href="http://www.facebook.com/barthelaundry" target="_blank">fb.com/barthelaundry</a>'],
      ['Big Sur Migueletes', 'Migueletes 887', {lat: -34.5658, lng: -58.43493}, '<a href="http://www.facebook.com/bigsurba" target="_blank">fb.com/bigsurba</a>'],
      ['Henry Craft Beer', 'José Pedro Varela 4999', {lat: -34.612, lng: -58.51922}, '<a href="http://www.facebook.com/HenryCraftBeerDevoto" target="_blank">fb.com/HenryCraftBeerDevoto</a>'],
      ['Estadio', 'Cuba 3300', {lat: -34.55038, lng: -58.46441}, ''],
      ['Temple Colegiales', 'Av. Elcano 3256', {lat: -34.57386, lng: -58.45966}, '<a href="http://www.thetemplebar.com.ar" target="_blank">www.thetemplebar.com.ar</a>'],
      ['Brown Adrogué', 'Av. Tomás Espora 999', {lat: -34.80293, lng: -58.38871}, '<a href="http://www.facebook.com/cerveceriabrown" target="_blank">fb.com/cerveceriabrown</a>']
  ];


  function initMap() {
    var uluru = {lat: -34.585255, lng: -58.423014};
    // var visita = {lat: -34.4981091, lng: -58.5289276};

    // mapa dónde comprar bierhaus
    var mapa = new google.maps.Map(document.getElementById('mapacervezas'), {
      zoom: 14,
      center: uluru,
      mapTypeControl: false,
      rotateControl: false,
      streetViewControl: false,
      fullscreenControl: false
    });

    markers.forEach(function(elem, index) {
        var imagen = 'favicons-new/android-icon-36x36.png';
        var marker = new google.maps.Marker({
          map: mapa,
          nombre: elem[0],
          direccion: elem[1],
          position: elem[2],
          url: elem[3],
          id: index,
          icon: imagen
        });

        marker.addListener('click', function() {
            mostrarDatos(index)
        });

        markers.push(marker);
    });

  }


  function mostrarDatos(id) {
      var contenedor = document.createElement('div');
      contenedor.className = "infowindow";


      var tituloseccion = document.createElement('h3');
      var spanseccion = document.createElement('span');
      spanseccion.className = 'spantitulo';
      var detallelinea = document.createElement('img');
      detallelinea.setAttribute("src", "images/nosotros/detalle-line-nosotros.png");
      detallelinea.className = 'imgdetalle';


      var nombre = document.createElement('h3');
      nombre.className = "nombrebar";
      var dire = document.createElement('img');
      dire.setAttribute("src", "http://fabisuarez.com/proyectos/bierhaus/images/reserva/map-icon.png");
      dire.className = "ubicacion";
      var direccion = document.createElement('p');
      var webx = document.createElement('img');
      webx.setAttribute("src", "images/dondecomprar/web.png");
      var url = document.createElement('p');
      direccion.className = "p-infowindow";
      url.className = "p-infowindow2";

      var lugar = markers[id];

      tituloseccion.innerHTML = '¿DÓNDE TOMAR UNA BIERHAUS?';
      spanseccion.innerHTML = 'Mirá en el mapa el lugar más cercano para tomar nuestra cerveza.'
      nombre.innerHTML = lugar[0];
      direccion.innerHTML = lugar[1];
      url.innerHTML = lugar[3];


      contenedor.append(tituloseccion);
      contenedor.append(spanseccion);
      contenedor.append(detallelinea);
      contenedor.append(nombre);
      contenedor.append(dire);
      contenedor.append(direccion);
      contenedor.append(webx);
      contenedor.append(url);

      document.querySelector('#info').innerHTML = null;
      document.querySelector('#info').append(contenedor);



  }
