const locateOld = {
    "Aberdeen": [
    "Aberdeenshire ",
    "Aberdeen Aberdeenshire",
    "Aberdeen Airport Aberdeen, Aberdeenshire"
    ],
    "Ayr": [
    "Ayrshire ",
    "Ayr Ayrshire",
    "Ayr St. Ives, Cornwall",
    "Ayr Central Ayr, Ayrshire",
    "Aylesford Kent"
    ],
    "Ballymena": [
    "Ballymena County Antrim"
    ],
    "Banbury": [
    "Banbury Oxfordshire",
    "Hanbury Burton-On-Trent, Staffordshire",
    "Bunbury Tarporley, Cheshire",
    "Hanbury Bromsgrove, Worcestershire",
    "Badbury Swindon, Wiltshire"
    ],
    "Barnsley": [
    "Barnsley South Yorkshire",
    "Barnsley Cirencester, Gloucestershire",
    "Barnsley Bridgnorth, Shropshire",
    "Barnsley Wimborne, Dorset",
    "Bardsley Oldham, Greater Manchester"
    ],
    "Barnstaple": [
    "Barnstaple Devon",
    "Barnstaple Cross Crediton, Devon"
    ],
    "Basildon": [
    "Basildon Essex",
    "Baildon Shipley, West Yorkshire"
    ],
    "Basingstoke": [
    "Basingstoke Hampshire"
    ],
    "Bath": [
    "Bath Avon",
    "Bathford Bath, Avon",
    "Bathwick Bath, Avon",
    "Batheaston Bath, Avon",
    "Bathampton Bath, Avon"
    ],
    "Bedford": [
    "Bedfordshire ",
    "Bedford Bedfordshire",
    "Edford Radstock, Avon",
    "Belford Northumberland",
    "Bidford-On-Avon Alcester, Warwickshire"
    ],
    "Belfast": [
    "Belfast County Antrim"
    ],
    "Bexleyheath": [
    "Bexleyheath Kent"
    ],
    "Birkenhead": [
    "Birkenhead Merseyside"
    ],
    "Birmingham": [
    "Birmingham West Midlands",
    "Birmingham Business Park Birmingham, West Midlands",
    "Birmingham Airport Birmingham, West Midlands",
    "Birlingham Pershore, Worcestershire"
    ],
    "Blackburn": [
    "Blackburn Lancashire",
    "Blackburn Bathgate, West Lothian",
    "Blackburn Aberdeen, Aberdeenshire",
    "Blackburn Road Industrial Estate Coventry, West Midlands"
    ],
    "Blackpool": [
    "Blackpool Lancashire",
    "Blackpool Dartmouth, Devon",
    "Blackpool Bridge Narberth, Dyfed",
    "Blackpool Corner Axminster, Devon",
    "Blackpool & Fylde Industrial Estate Blackpool, Lancashire"
    ],
    "Bolton": [
    "Bolton Greater Manchester",
    "Boltongate Wigton, Cumbria",
    "Bolton Percy York, North Yorkshire",
    "Bolton Alnwick, Northumberland",
    "Bolton By Bowland Clitheroe, Lancashire"
    ],
    "Bournemouth": [
    "Bournemouth Dorset",
    "Bournemouth International Airport Christchurch, Dorset"
    ],
    "Bracknell": [
    "Bracknell Berkshire"
    ],
    "Bradford": [
    "Bradford-On-Avon Wiltshire",
    "Bradford West Yorkshire",
    "Bradford Leigh Bradford-On-Avon, Wiltshire",
    "Bradford On Tone Taunton, Somerset",
    "Bradford Holsworthy, Devon"
    ],
    "Brighton": [
    "Brighton East Sussex",
    "Brighton-Le-Sands Liverpool, Merseyside",
    "Brighton Marina Village Brighton, East Sussex",
    "Brighton Street Industrial Estate Hull, North Humberside",
    "Brightons Falkirk, Stirlingshire"
    ],
    "Bristol": [
    "Bristol Avon",
    "Bristol International Airport Bristol, Avon",
    "Briston Melton Constable, Norfolk"
    ],
    "Bromley": [
    "Bromley Kent",
    "Bromley Bridgnorth, Shropshire",
    "Bromley Cross Bolton, Greater Manchester",
    "Bromley Hayes Lichfield, Staffordshire",
    "Bromley Sheffield, South Yorkshire"
    ],
    "Burnley": [
    "Burnley Lancashire",
    "Burley Oakham, Rutland",
    "Burley Craven Arms, Shropshire",
    "Burley Woodhead Ilkley, West Yorkshire",
    "Burley Leeds, West Yorkshire"
    ],
    "Burton-on-Trent": [
    "Trentham Stoke-On-Trent, Staffordshire",
    "Trent Vale Stoke-On-Trent, Staffordshire",
    "Trent Sherborne, Dorset",
    "Trent Lane Industrial Estate Derby, Derbyshire",
    "Burton-On-Trent Staffordshire"
    ],
    "Bury": [
    "Burry Port Dyfed",
    "Bury Greater Manchester",
    "Bury St. Edmunds Suffolk",
    "Bury Pulborough, West Sussex",
    "Buryas Bridge Penzance, Cornwall"
    ],
    "Bury St Edmunds": [
    "Bury St. Edmunds Suffolk"
    ],
    "Camberley": [
    "Camberley Surrey",
    "Amberley Arundel, West Sussex",
    "Amberley Stroud, Gloucestershire"
    ],
    "Cambridge": [
    "Cambridgeshire ",
    "Cambridge Cambridgeshire",
    "Cambridge Biomedical Campus Cambridge, Cambridgeshire",
    "Cambridge Gloucester, Gloucestershire",
    "Combridge Uttoxeter, Staffordshire"
    ],
    "Canterbury": [
    "Canterbury Kent"
    ],
    "Cardiff": [
    "Cardiff South Glamorgan",
    "Cardiff Gate Business Park Cardiff, South Glamorgan"
    ],
    "Carlisle": [
    "Carlisle Cumbria",
    "Carlisle Lake District Airport Carlisle, Cumbria",
    "Carlisle Airport Carlisle, Cumbria"
    ],
    "Chatham": [
    "Chatham Kent",
    "Coatham Mundeville Darlington, County Durham",
    "Chartham Hatch Canterbury, Kent",
    "Chartham Canterbury, Kent"
    ],
    "Chelmsford": [
    "Chelmsford Essex"
    ],
    "Cheltenham": [
    "Cheltenham Gloucestershire",
    "Cheltenham Trade Park Cheltenham, Gloucestershire"
    ],
    "Chester": [
    "Chester Cheshire",
    "Chester Le Street County Durham",
    "Chesterfield Derbyshire",
    "Chester Business Park Chester, Cheshire",
    "Chesters Hawick, Roxburghshire"
    ],
    "Chesterfield": [
    "Chesterfield Derbyshire"
    ],
    "Clydebank": [
    "Clydebank Dunbartonshire",
    "Clydebank Business Park Clydebank, Dunbartonshire"
    ],
    "Colchester": [
    "Colchester Essex",
    "Colchester Business Park Colchester, Essex"
    ],
    "Corby": [
    "Corby Northamptonshire",
    "Corby Hill Carlisle, Cumbria",
    "Corby Glen Grantham, Lincolnshire",
    "Corbridge Northumberland",
    "Corbet Banbridge, County Down"
    ],
    "Coventry": [
    "Coventry West Midlands",
    "Coventry Walsgrave Triangle Coventry, West Midlands"
    ],
    "Craigavon": [
    "Craigavon County Armagh"
    ],
    "Crawley": [
    "Crawley West Sussex",
    "Crawley Down Crawley, West Sussex",
    "Crawley Winchester, Hampshire",
    "Crawley Witney, Oxfordshire",
    "Cradley Heath West Midlands"
    ],
    "Croydon": [
    "Croydon Surrey",
    "Croydon Royston, Hertfordshire",
    "Roydon Diss, Norfolk",
    "Roydon Harlow, Essex",
    "Roydon Mill Harlow, Essex"
    ],
    "Cwmbran": [
    "Cwmbran Gwent"
    ],
    "Darlington": [
    "Darlington County Durham",
    "Harlington Hayes, Middlesex",
    "Darrington Pontefract, West Yorkshire",
    "Harlington Dunstable, Bedfordshire",
    "Dartington Totnes, Devon"
    ],
    "Dartford": [
    "Dartford Kent",
    "Hartford Huntingdon, Cambridgeshire",
    "Hartford Cramlington, Northumberland",
    "Hartford Bridge Bedlington, Northumberland",
    "Hartford Bridge Hook, Hampshire"
    ],
    "Derby": [
    "Derbyshire ",
    "Derby Derbyshire",
    "Derryheeny Enniskillen, County Fermanagh",
    "Derrylin Enniskillen, County Fermanagh",
    "Derrygiff Enniskillen, County Fermanagh"
    ],
    "Doncaster": [
    "Doncaster South Yorkshire",
    "Doncaster Finningley Airport Doncaster, South Yorkshire"
    ],
    "Dudley": [
    "Dudley West Midlands",
    "Dudley Cramlington, Northumberland",
    "Dudley Port Tipton, West Midlands",
    "Dudleston Heath Ellesmere, Shropshire",
    "Dudleston Ellesmere, Shropshire"
    ],
    "Dundee": [
    "Dundee Angus",
    "Dundee Technology Park Dundee, Angus",
    "Dundrennan Kirkcudbright, Kirkcudbrightshire"
    ],
    "Dunfermline": [
    "Dunfermline Fife",
    "Dunfermline East Business Parks Dunfermline, Fife"
    ],
    "Ealing": [
    "Tealing Dundee, Angus",
    "Ellingham Bungay, Suffolk",
    "Ellington Huntingdon, Cambridgeshire",
    "Edlingham Alnwick, Northumberland",
    "Eglingham Alnwick, Northumberland"
    ],
    "East Ham": [
    "Easthampnett Chichester, West Sussex",
    "Eastham Tenbury Wells, Worcestershire",
    "Eastham Wirral, Merseyside",
    "Easthampton Leominster, Herefordshire",
    "East Harting Petersfield, Hampshire"
    ],
    "East Kilbride": [
    "East Kilbride Isle of South Uist, Inverness-Shire",
    "East Kilbride Glasgow, Lanarkshire"
    ],
    "Eastbourne": [
    "Eastbourne East Sussex",
    "Easebourne Midhurst, West Sussex"
    ],
    "Edinburgh": [
    "Edinburgh Midlothian",
    "Edinburgh Bioquarter Edinburgh, Midlothian",
    "Edinburgh Airport Edinburgh, Midlothian",
    "Edinburgh Technopole Penicuik, Midlothian"
    ],
    "Exeter": [
    "Exeter Devon",
    "Exeter Business Park Exeter, Devon",
    "Exeter Road Industrial Estate Okehampton, Devon",
    "Exeter Airport Exeter, Devon"
    ],
    "Folkestone": [
    "Folkestone Kent"
    ],
    "Gateshead": [
    "Gateshead Tyne and Wear",
    "Gatesheath Chester, Cheshire",
    "Gatehead Kilmarnock, Ayrshire"
    ],
    "Glasgow": [
    "Glasgow Lanarkshire",
    "Glasgow Dunbartonshire",
    "Glasgow Prestwick Intnl Airport Prestwick, Ayrshire",
    "Glasgow East Investment Park Glasgow, Lanarkshire",
    "Glasgow Business Park Glasgow, Lanarkshire"
    ],
    "Gloucester": [
    "Gloucestershire ",
    "Gloucester Gloucestershire",
    "Gloucester Business Park Gloucester, Gloucestershire",
    "Gloucestershire Airport Cheltenham, Gloucestershire"
    ],
    "Gravesend": [
    "Gravesend Kent",
    "Grovesend Swansea, West Glamorgan",
    "Grovesend Bristol, Avon"
    ],
    "Greenhithe": [
    "Greenhithe Kent"
    ],
    "Greenock": [
    "Greenock Renfrewshire",
    "Greenoak Goole, North Humberside",
    "Green Rocks Penzance, Cornwall"
    ],
    "Grimsby": [
    "Grimsby South Humberside",
    "Grimsay Island Isle of Benbecula",
    "Grimsay Isle of North Uist, Inverness-Shire"
    ],
    "Guildford": [
    "Guildford Surrey"
    ],
    "Hamilton": [
    "Hamilton Lanarkshire",
    "Hamiltonsbawn Armagh, County Armagh",
    "Hamilton Leicester, Leicestershire",
    "Hamilton Intnl Technology Park Glasgow, Lanarkshire"
    ],
    "Hammersmith": [
    "Hammersmith Ripley, Derbyshire"
    ],
    "Harlow": [
    "Harlow Essex",
    "Harlow Hill Newcastle Upon Tyne, Tyne and Wear",
    "Harlow Innovation Park Harlow, Essex",
    "Harlow Green Gateshead, Tyne and Wear",
    "Harlow Wood Mansfield, Nottinghamshire"
    ],
    "Harrogate": [
    "Harrogate North Yorkshire"
    ],
    "Harrow": [
    "Harrow Middlesex",
    "Harrow Hill Drybrook, Gloucestershire",
    "Harrowby Grantham, Lincolnshire",
    "Harrow Weald Harrow, Middlesex",
    "Harrowden Bedford, Bedfordshire"
    ],
    "Hartlepool": [
    "Hartlepool Cleveland"
    ],
    "Hastings": [
    "Hastings East Sussex",
    "Hastings Ilminster, Somerset",
    "Hastingwood Harlow, Essex",
    "Hastingleigh Ashford, Kent"
    ],
    "Hemel Hempstead": [
    "Hemel Hempstead Hertfordshire",
    "Hemel Hempstead Industrial Estate Hemel Hempstead, Hertfordshire"
    ],
    "Hereford": [
    "Herefordshire ",
    "Hereford Herefordshire",
    "Hertfordshire ",
    "Hertford Hertfordshire",
    "Shereford Fakenham, Norfolk"
    ],
    "High Wycombe": [
    "High Wycombe Buckinghamshire"
    ],
    "Hounslow": [
    "Hounslow Middlesex"
    ],
    "Huddersfield": [
    "Huddersfield West Yorkshire"
    ],
    "Hull": [
    "Hull North Humberside",
    "Hullbridge Hockley, Essex",
    "Hulland Ward Ashbourne, Derbyshire",
    "Hulland Village Ashbourne, Derbyshire",
    "Hullavington Chippenham, Wiltshire"
    ],
    "Ilford": [
    "Ilford Essex",
    "Ilford Ilminster, Somerset",
    "Milford Haven Dyfed",
    "Alford Lincolnshire",
    "Alford Aberdeenshire"
    ],
    "Inverness": [
    "Inverness-Shire ",
    "Inverness Inverness-Shire",
    "Inverness Business & Retail Park Inverness, Inverness-Shire",
    "Inverness Airport Inverness, Inverness-Shire"
    ],
    "Ipswich": [
    "Ipswich Suffolk"
    ],
    "Irvine": [
    "Irvine Ayrshire",
    "Irvine Industrial Estate Irvine, Ayrshire",
    "Irvinestown Enniskillen, County Fermanagh"
    ],
    "Kent": [
    "Kenton Exeter, Devon",
    "Kent ",
    "Kentmere Kendal, Cumbria",
    "Kents Hill Milton Keynes, Buckinghamshire",
    "Kentra Acharacle, Argyll"
    ],
    "Kings Lynn": [
    "King'S Lynn Norfolk"
    ],
    "Kingston Upon Thames": [
    "Kingston Upon Thames Surrey"
    ],
    "Lancaster": [
    "Lancaster Lancashire",
    "Ancaster Grantham, Lincolnshire"
    ],
    "Leeds": [
    "Leeds West Yorkshire",
    "Leeds Maidstone, Kent",
    "Leedstown Hayle, Cornwall",
    "Leeds Bradford Airport Leeds, West Yorkshire",
    "Leedon Leighton Buzzard, Bedfordshire"
    ],
    "Leicester": [
    "Leicestershire ",
    "Leicester Leicestershire",
    "Leicester Forest West Leicester, Leicestershire",
    "Leicester Forest East Leicester, Leicestershire"
    ],
    "Lincoln": [
    "Lincolnshire ",
    "Lincoln Lincolnshire",
    "Lincoln Hill Ross-On-Wye, Herefordshire"
    ],
    "Lisburn": [
    "Lisburn County Antrim",
    "Gisburn Clitheroe, Lancashire"
    ],
    "Liverpool": [
    "Liverpool Merseyside",
    "Liverpool Airport Liverpool, Merseyside",
    "Liverpool Shopping Park Liverpool, Merseyside"
    ],
    "Livingston": [
    "Livingston West Lothian",
    "Livingston Village Livingston, West Lothian"
    ],
    "Llandudno": [
    "Llandudno Gwynedd",
    "Llandudno Junction Gwynedd"
    ],
    "Llanelli": [
    "Llanelli Dyfed",
    "Llanellen Abergavenny, Gwent",
    "Llanelltyd Dolgellau, Gwynedd",
    "Llanelly Hill Abergavenny, Gwent",
    "Llaneilian Amlwch, Gwynedd"
    ],
    "London": [
    "Londonderry County Londonderry",
    "London Stansted Airport Stansted, Essex",
    "Londonthorpe Grantham, Lincolnshire",
    "London Colney St. Albans, Hertfordshire",
    "London Gatwick Airport Gatwick, West Sussex"
    ],
    "Londonderry": [
    "Londonderry County Londonderry",
    "Londonderry Northallerton, North Yorkshire"
    ],
    "Loughborough": [
    "Loughborough Leicestershire"
    ],
    "Luton": [
    "Luton Bedfordshire",
    "Luton Newton Abbot, Devon",
    "Lupton Brixham, Devon",
    "Luson Plymouth, Devon",
    "Uton Crediton, Devon"
    ],
    "Maidstone": [
    "Maidstone Kent",
    "Mainstone Bishops Castle, Shropshire"
    ],
    "Manchester": [
    "Manchester Greater Manchester",
    "Manchester Science Park Manchester, Greater Manchester",
    "Manchester Airport Manchester, Greater Manchester",
    "Lanchester Durham, County Durham"
    ],
    "Mansfield": [
    "Mansfield Nottinghamshire",
    "Mansfield Woodhouse Mansfield, Nottinghamshire",
    "Manfield Darlington, County Durham"
    ],
    "Middlesbrough": [
    "Middlesbrough Cleveland"
    ],
    "Milton Keynes": [
    "Milton Keynes Buckinghamshire",
    "Milton Keynes Village Milton Keynes, Buckinghamshire"
    ],
    "Motherwell": [
    "Motherwell Lanarkshire"
    ],
    "Newcastle-Upon-Tyne": [
    "Tyne and Wear ",
    "Newcastle Emlyn Dyfed",
    "Newcastle County Down",
    "Newcastleton Roxburghshire",
    "Newcastle Staffordshire"
    ],
    "Newport": [
    "Newport Gwent",
    "Newport Dyfed",
    "Newport Shropshire",
    "Newport-On-Tay Fife",
    "Newport Isle of Wight"
    ],
    "Newry": [
    "Newry County Down",
    "New Romney Kent",
    "New Ridley Stocksfield, Northumberland",
    "New Radnor Presteigne, Powys",
    "New Rossington Doncaster, South Yorkshire"
    ],
    "Newtownabbey": [
    "Newtownabbey County Antrim"
    ],
    "Newtownards": [
    "Newtownards County Down"
    ],
    "Northampton": [
    "Northamptonshire ",
    "Northampton Northamptonshire",
    "Forthampton Gloucester, Gloucestershire"
    ],
    "Norwich": [
    "Norwich Norfolk",
    "Horwich Bolton, Greater Manchester"
    ],
    "Nottingham": [
    "Nottinghamshire ",
    "Nottingham Nottinghamshire",
    "Cottingham North Humberside",
    "Cottingham Market Harborough, Leicestershire"
    ],
    "Oldham": [
    "Oldham Greater Manchester",
    "Oldhamstocks Cockburnspath, Berwickshire",
    "Oldhall West Industrial Estate Irvine, Ayrshire",
    "Old Hartley Whitley Bay, Tyne and Wear",
    "Old Hawkinge Folkestone, Kent"
    ],
    "Omagh": [
    "Omagh County Tyrone",
    "Magherafelt County Londonderry",
    "Maghera County Londonderry",
    "Maghercashel Ballycastle, County Antrim",
    "Maghernahar Ballycastle, County Antrim"
    ],
    "Oxford": [
    "Oxfordshire ",
    "Oxford Oxfordshire",
    "Oxford Airport Kidlington, Oxfordshire",
    "Oxford Business Park North Oxford, Oxfordshire",
    "Oxford Business Park South Oxford, Oxfordshire"
    ],
    "Peckham": [
    "Leckhampton Cheltenham, Gloucestershire",
    "Beckhampton Marlborough, Wiltshire",
    "Deckham Gateshead, Tyne and Wear",
    "Leckhampstead Newbury, Berkshire",
    "Leckhampton Hill Cheltenham, Gloucestershire"
    ],
    "Perth": [
    "Perthshire ",
    "Perth Perthshire",
    "Pertenhall Bedford, Bedfordshire",
    "Perton Wolverhampton, West Midlands",
    "Perton Hereford, Herefordshire"
    ],
    "Peterborough": [
    "Peterborough Cambridgeshire"
    ],
    "Plymouth": [
    "Plymouth Devon"
    ],
    "Poole": [
    "Poole Dorset",
    "Pooley Bridge Penrith, Cumbria",
    "Poole Keynes Cirencester, Gloucestershire",
    "Poole Nantwich, Cheshire",
    "Poolewe Achnasheen, Ross-Shire"
    ],
    "Portsmouth": [
    "Portsmouth Hampshire"
    ],
    "Preston": [
    "Preston Lancashire",
    "Prestonpans East Lothian",
    "Preston Bagot Henley-In-Arden, West Midlands",
    "Preston Patrick Milnthorpe, Cumbria",
    "Preston On The Hill Warrington, Cheshire"
    ],
    "Reading": [
    "Reading Berkshire",
    "Reddingmuirhead Falkirk, Stirlingshire",
    "Redding Falkirk, Stirlingshire",
    "Headingley Leeds, West Yorkshire",
    "Headington Oxford, Oxfordshire"
    ],
    "Redditch": [
    "Redditch Worcestershire"
    ],
    "Romford": [
    "Romford Essex",
    "Rumford Wadebridge, Cornwall",
    "Rumford Falkirk, Stirlingshire",
    "Cromford Matlock, Derbyshire",
    "Comford Redruth, Cornwall"
    ],
    "Rotherham": [
    "Rotherham South Yorkshire"
    ],
    "Rushden": [
    "Rushden Northamptonshire",
    "Rushden Buntingford, Hertfordshire",
    "Rushenden Queenborough, Kent",
    "Rushen Abbey Isle of Man"
    ],
    "Salisbury": [
    "Salisbury Wiltshire",
    "Salesbury Blackburn, Lancashire",
    "Sarisbury Green Southampton, Hampshire"
    ],
    "Scunthorpe": [
    "Scunthorpe South Humberside",
    "Sculthorpe Fakenham, Norfolk"
    ],
    "Sheffield": [
    "Sheffield South Yorkshire",
    "Sheffield Park Uckfield, East Sussex",
    "Shelfield Alcester, Warwickshire",
    "Shedfield Southampton, Hampshire",
    "Sherfield English Romsey, Hampshire"
    ],
    "Shrewsbury": [
    "Shrewsbury Shropshire"
    ],
    "Slough": [
    "Slough Berkshire",
    "Slough Green Taunton, Somerset",
    "Loughton Essex",
    "Slaughtergate Gillingham, Dorset",
    "Cloughfold Rossendale, Lancashire"
    ],
    "Southampton": [
    "Southampton Hampshire",
    "Southampton International Airport Southampton, Hampshire",
    "Southampton Science Park Southampton, Hampshire"
    ],
    "Southend-on-Sea": [
    "Southend-On-Sea Essex",
    "Southend Henley-On-Thames, Oxfordshire",
    "Southend Campbeltown, Argyll",
    "Southend Wotton-Under-Edge, Gloucestershire",
    "Southend Airport Southend-On-Sea, Essex"
    ],
    "Southport": [
    "Southport Merseyside",
    "South Poorton Bridport, Dorset"
    ],
    "Stafford": [
    "Staffordshire ",
    "Stafford Staffordshire",
    "Staffordshire Technology Park Stafford, Staffordshire",
    "Stafford Cross Colyton, Devon",
    "Stanford Ashford, Kent"
    ],
    "Staines-upon-Thames": [
    "Staines-Upon-Thames Middlesex",
    "Staines Green Hertford, Hertfordshire",
    "Thames Ditton Surrey",
    "Thames View Industrial Park Abingdon, Oxfordshire",
    "Thame Oxfordshire"
    ],
    "Stevenage": [
    "Stevenage Hertfordshire"
    ],
    "Stirling": [
    "Stirlingshire ",
    "Stirling Stirlingshire",
    "Stillington Stockton-On-Tees, Cleveland",
    "Stillington York, North Yorkshire",
    "Skirling Biggar, Lanarkshire"
    ],
    "Stockport": [
    "Stockport Greater Manchester"
    ],
    "Stoke-On-Trent": [
    "Trentham Stoke-On-Trent, Staffordshire",
    "Trent Vale Stoke-On-Trent, Staffordshire",
    "Trent Sherborne, Dorset",
    "Trent Lane Industrial Estate Derby, Derbyshire",
    "Stoke Plymouth, Devon"
    ],
    "Stratford": [
    "Stratford-Upon-Avon Warwickshire",
    "Stratford Sub Castle Salisbury, Wiltshire",
    "Stratford Enterprise Park Stratford-Upon-Avon, Warwickshire",
    "Stratford St. Andrew Saxmundham, Suffolk",
    "Stratford Tony Salisbury, Wiltshire"
    ],
    "Sunderland": [
    "Sunderland Tyne and Wear",
    "Sunderland Point Morecambe, Lancashire",
    "Sunderland Bridge Durham, County Durham",
    "Sunderlandwick Driffield, North Humberside",
    "Sunderland Cockermouth, Cumbria"
    ],
    "Sutton": [
    "Sutton Surrey",
    "Sutton Dover, Kent",
    "Sutton-In-Ashfield Nottinghamshire",
    "Sutton Coldfield West Midlands",
    "Sutton Hill Telford, Shropshire"
    ],
    "Swansea": [
    "Swansea West Glamorgan",
    "Swansea Vale Swansea, West Glamorgan",
    "Swansea Enterprise Park Swansea, West Glamorgan",
    "Swansea Airport Swansea, West Glamorgan"
    ],
    "Swindon": [
    "Swindon Wiltshire",
    "Swindon Village Cheltenham, Gloucestershire",
    "Swindon Dudley, West Midlands",
    "Swinton Manchester, Greater Manchester",
    "Slindon Stafford, Staffordshire"
    ],
    "Tamworth": [
    "Tamworth Staffordshire",
    "Tadworth Surrey",
    "Timworth Bury St. Edmunds, Suffolk",
    "Tatworth Chard, Somerset",
    "Tanworth-In-Arden Solihull, West Midlands"
    ],
    "Taunton": [
    "Taunton Somerset",
    "Staunton-On-Arrow Leominster, Herefordshire",
    "Staunton Gloucester, Gloucestershire",
    "Taynton Gloucester, Gloucestershire",
    "Staunton-On-Wye Hereford, Herefordshire"
    ],
    "Telford": [
    "Telford Shropshire",
    "Telford Way Industrial Estate Kettering, Northamptonshire",
    "Belford Northumberland",
    "Tetford Horncastle, Lincolnshire",
    "Welford Newbury, Berkshire"
    ],
    "Torquay": [
    "Torquay Devon"
    ],
    "Truro": [
    "Truro Cornwall",
    "Trudoxhill Frome, Somerset"
    ],
    "Uxbridge": [
    "Uxbridge Middlesex",
    "Axbridge Avon",
    "Axbridge Somerset",
    "Oxbridge Bridport, Dorset"
    ],
    "Wakefield": [
    "Wakefield West Yorkshire",
    "Wakefield 41 Business Park Wakefield, West Yorkshire",
    "Wakefield 41 Industrial Estate Wakefield, West Yorkshire",
    "Pakefield Lowestoft, Suffolk",
    "Wokefield Green Reading, Berkshire"
    ],
    "Wallasey": [
    "Wallasey Merseyside",
    "Wallasea Island Rochford, Essex"
    ],
    "Walsall": [
    "Walsall West Midlands",
    "Walsall Wood Walsall, West Midlands",
    "Halsall Ormskirk, Lancashire",
    "Balsall Heath Birmingham, West Midlands",
    "Balsall Common Coventry, West Midlands"
    ],
    "Warrington": [
    "Warrington Cheshire",
    "Warrington Merseyside",
    "Warrington Olney, Buckinghamshire",
    "Barrington Cambridge, Cambridgeshire",
    "Harrington Shifnal, Shropshire"
    ],
    "Watford": [
    "Watford Hertfordshire",
    "Watford Northampton, Northamptonshire",
    "Matford Exeter, Devon",
    "Wayford Norwich, Norfolk",
    "Walford Cross Taunton, Somerset"
    ],
    "Wembley": [
    "Wembley Middlesex",
    "Weobley Hereford, Herefordshire"
    ],
    "West Bromwich": [
    "West Bromwich West Midlands"
    ],
    "West Thurrock": [
    "West Thurrock Grays, Essex"
    ],
    "Wigan": [
    "Wigan Greater Manchester",
    "Wigland Malpas, Cheshire"
    ],
    "Winchester": [
    "Winchester Hampshire",
    "Binchester Moor Spennymoor, County Durham",
    "Binchester Bishop Auckland, County Durham"
    ],
    "Woking": [
    "Woking Surrey",
    "Wokingham Berkshire",
    "Workington Cumbria"
    ],
    "Wolverhampton": [
    "Wolverhampton West Midlands"
    ],
    "Worcester": [
    "Worcestershire ",
    "Worcester Park Surrey",
    "Worcester Worcestershire"
    ],
    "Wrexham": [
    "Wrexham Clwyd",
    "Wrexham Industrial Estate Wrexham, Clwyd",
    "Wrexham Technology Park Wrexham, Clwyd",
    "Wroxham Norwich, Norfolk",
    "Wretham Thetford, Norfolk"
    ],
    "Yeovil": [
    "Yeovil Somerset",
    "Yeovilton Yeovil, Somerset",
    "Yeovil Marsh Yeovil, Somerset",
    "Yeo Vale Bideford, Devon"
    ],
    "York": [
    "York North Yorkshire",
    "Yorkletts Whitstable, Kent",
    "Yorkley Lydney, Gloucestershire",
    "York Road Business Park Malton, North Yorkshire",
    "York Business Park York, North Yorkshire"
    ]
    }

const locateNew = {
    "Aberdeen": [
    "Aberdeen",
    "Aberdeen Airport",
    "Aberdeenshire"
    ],
    "Ayr": [
    "Ayr",
    "Ayr",
    "Ayr Central",
    "Ayrshire",
    "Aylesford"
    ],
    "Ballymena": [
    "Ballymena"
    ],
    "Banbury": [
    "Banbury",
    "Badbury",
    "Hanbury",
    "Hanbury",
    "Bunbury"
    ],
    "Barnsley": [
    "Barnsley",
    "Barnsley",
    "Barnsley",
    "Barnsley",
    "Bardsley"
    ],
    "Barnstaple": [
    "Barnstaple",
    "Barnstaple Cross"
    ],
    "Basildon": [
    "Basildon",
    "Baildon"
    ],
    "Basingstoke": [
    "Basingstoke"
    ],
    "Bath": [
    "Bath",
    "Bath Business Park",
    "Bathford",
    "Bathwick",
    "Bathgate"
    ],
    "Bedford": [
    "Bedford",
    "Bedfordshire",
    "Belford",
    "Redford",
    "Redford"
    ],
    "Belfast": [
    "Belfast"
    ],
    "Bexleyheath": [
    "Bexleyheath"
    ],
    "Birkenhead": [
    "Birkenhead"
    ],
    "Birmingham": [
    "Birmingham",
    "Birmingham Airport",
    "Birmingham Business Park",
    "Birlingham"
    ],
    "Blackburn": [
    "Blackburn",
    "Blackburn",
    "Blackburn",
    "Blackburn Road Industrial Estate"
    ],
    "Blackpool": [
    "Blackpool",
    "Blackpool",
    "Blackpool",
    "Blackpool Bridge",
    "Blackpool Airport"
    ],
    "Bolton": [
    "Bolton",
    "Bolton",
    "Bolton",
    "Bolton Percy",
    "Bolton"
    ],
    "Bournemouth": [
    "Bournemouth",
    "Bournemouth International Airport"
    ],
    "Bracknell": [
    "Bracknell"
    ],
    "Bradford": [
    "Bradford",
    "Bradford",
    "Bradford-On-Avon",
    "Bradford Leigh",
    "Bradford Abbas"
    ],
    "Brighton": [
    "Brighton",
    "Brighton-Le-Sands",
    "Brighton Marina Village",
    "Brighton Street Industrial Estate",
    "Brightons"
    ],
    "Bristol": [
    "Bristol",
    "Bristol International Airport",
    "Briston"
    ],
    "Bromley": [
    "Bromley",
    "Bromley",
    "Bromley",
    "Bromley",
    "Bromley Cross"
    ],
    "Burnley": [
    "Burnley",
    "Burley",
    "Burley",
    "Burley",
    "Burley"
    ],
    "Burton-on-Trent": [
    "Burton-On-Trent",
    "Trent",
    "Burton",
    "Burton",
    "Burton"
    ],
    "Bury": [
    "Bury",
    "Bury",
    "Bury",
    "Bury",
    "Bury St. Edmunds"
    ],
    "Bury St Edmunds": [
    "Bury St. Edmunds"
    ],
    "Camberley": [
    "Camberley",
    "Amberley",
    "Amberley"
    ],
    "Cambridge": [
    "Cambridge",
    "Cambridge",
    "Cambridge Biomedical Campus",
    "Cambridgeshire",
    "Hambridge"
    ],
    "Canterbury": [
    "Canterbury"
    ],
    "Cardiff": [
    "Cardiff",
    "Cardiff International Airport",
    "Cardiff Gate Business Park"
    ],
    "Carlisle": [
    "Carlisle",
    "Carlisle Airport",
    "Carlisle Lake District Airport"
    ],
    "Chatham": [
    "Chatham",
    "Chartham",
    "Coatham Mundeville",
    "Chartham Hatch"
    ],
    "Chelmsford": [
    "Chelmsford"
    ],
    "Cheltenham": [
    "Cheltenham",
    "Cheltenham Trade Park"
    ],
    "Chester": [
    "Chester",
    "Chester Le Street",
    "Chester Moor",
    "Chester Business Park",
    "Chester West Employment Park"
    ],
    "Chesterfield": [
    "Chesterfield"
    ],
    "Clydebank": [
    "Clydebank",
    "Clydebank Business Park"
    ],
    "Colchester": [
    "Colchester",
    "Colchester Business Park"
    ],
    "Corby": [
    "Corby",
    "Corby Hill",
    "Corby Glen",
    "Corbridge",
    "Corbane"
    ],
    "Coventry": [
    "Coventry",
    "Coventry Walsgrave Triangle"
    ],
    "Craigavon": [
    "Craigavon"
    ],
    "Crawley": [
    "Crawley",
    "Crawley",
    "Crawley",
    "Crawley Down",
    "Cradley Heath"
    ],
    "Croydon": [
    "Croydon",
    "Croydon",
    "Croydon",
    "Roydon",
    "Roydon"
    ],
    "Cwmbran": [
    "Cwmbran"
    ],
    "Darlington": [
    "Darlington",
    "Farlington",
    "Harlington",
    "Arlington",
    "Dartington"
    ],
    "Dartford": [
    "Dartford",
    "Hartford",
    "Hartford",
    "Hartford Bridge",
    "Hartford"
    ],
    "Derby": [
    "Derby",
    "Derbyshire",
    "Denby",
    "Derry",
    "Derry More"
    ],
    "Doncaster": [
    "Doncaster",
    "Doncaster Finningley Airport"
    ],
    "Dudley": [
    "Dudley",
    "Dudley",
    "Dudley Port",
    "Dudleston",
    "Dudleston Heath"
    ],
    "Dundee": [
    "Dundee",
    "Dundee Technology Park",
    "Dundrennan"
    ],
    "Dunfermline": [
    "Dunfermline",
    "Dunfermline East Business Parks"
    ],
    "Ealing": [
    "Ealing",
    "Tealing",
    "Easington",
    "Healing",
    "Easingwold"
    ],
    "East Ham": [
    "Eastham",
    "Eastham",
    "Easthampton",
    "Easthampnett",
    "East Hatley"
    ],
    "East Kilbride": [
    "East Kilbride",
    "East Kilbride"
    ],
    "Eastbourne": [
    "Eastbourne",
    "Easebourne"
    ],
    "Edinburgh": [
    "Edinburgh",
    "Edinburgh Technopole",
    "Edinburgh Bioquarter",
    "Edinburgh Airport"
    ],
    "Exeter": [
    "Exeter",
    "Exeter Airport",
    "Exeter Business Park",
    "Exeter Road Industrial Estate"
    ],
    "Folkestone": [
    "Folkestone"
    ],
    "Gateshead": [
    "Gateshead",
    "Gatesheath",
    "Gatehead"
    ],
    "Glasgow": [
    "Glasgow",
    "Glasgow",
    "Glasgow Airport",
    "Glasgow Business Park",
    "Glasgow Prestwick Intnl Airport"
    ],
    "Gloucester": [
    "Gloucester",
    "Gloucester Business Park",
    "Gloucestershire",
    "Gloucestershire Airport"
    ],
    "Gravesend": [
    "Gravesend",
    "Grovesend",
    "Grovesend"
    ],
    "Greenhithe": [
    "Greenhithe"
    ],
    "Greenock": [
    "Greenock",
    "Greenoak",
    "Green Rocks"
    ],
    "Grimsby": [
    "Grimsby",
    "Grimsay",
    "Grimsay Island"
    ],
    "Guildford": [
    "Guildford"
    ],
    "Hamilton": [
    "Hamilton",
    "Hamilton",
    "Hamilton Intnl Technology Park",
    "Hamiltonsbawn"
    ],
    "Hammersmith": [
    "Hammersmith",
    "Hammersmith and Fulham"
    ],
    "Harlow": [
    "Harlow",
    "Harlow Wood",
    "Harlow Green",
    "Harlow Hill",
    "Harlow Innovation Park"
    ],
    "Harrogate": [
    "Harrogate"
    ],
    "Harrow": [
    "Harrow",
    "Harrow",
    "Harrow Weald",
    "Harrow Hill",
    "Harrowden"
    ],
    "Hartlepool": [
    "Hartlepool"
    ],
    "Hastings": [
    "Hastings",
    "Hastings",
    "Hastingwood",
    "Hastingleigh"
    ],
    "Hemel Hempstead": [
    "Hemel Hempstead",
    "Hemel Hempstead Industrial Estate"
    ],
    "Hereford": [
    "Hereford",
    "Herefordshire",
    "Hertford",
    "Hertfordshire",
    "Shereford"
    ],
    "High Wycombe": [
    "High Wycombe"
    ],
    "Hounslow": [
    "Hounslow",
    "Hounslow"
    ],
    "Huddersfield": [
    "Huddersfield"
    ],
    "Hull": [
    "Hull",
    "Hullbridge",
    "Hulland Ward",
    "Hulland Village",
    "Hullavington"
    ],
    "Ilford": [
    "Ilford",
    "Ilford",
    "Milford Haven",
    "Alford",
    "Alford"
    ],
    "Inverness": [
    "Inverness",
    "Inverness-Shire",
    "Inverness Airport",
    "Inverness Business & Retail Park"
    ],
    "Ipswich": [
    "Ipswich"
    ],
    "Irvine": [
    "Irvine",
    "Irvine Industrial Estate",
    "Irvinestown"
    ],
    "Kent": [
    "Kent",
    "Kent International Airport",
    "Kenton",
    "Kenton",
    "Kentallen"
    ],
    "Kings Lynn": [
    "King'S Lynn"
    ],
    "Kingston Upon Thames": [
    "Kingston Upon Thames",
    "Kingston upon Thames"
    ],
    "Lancaster": [
    "Lancaster",
    "Ancaster"
    ],
    "Leeds": [
    "Leeds",
    "Leeds",
    "Leeds Bradford Airport",
    "Leedstown",
    "Leedon"
    ],
    "Leicester": [
    "Leicester",
    "Leicester Forest West",
    "Leicester Forest East",
    "Leicestershire"
    ],
    "Lincoln": [
    "Lincoln",
    "Lincoln Hill",
    "Lincolnshire"
    ],
    "Lisburn": [
    "Lisburn",
    "Gisburn"
    ],
    "Liverpool": [
    "Liverpool",
    "Liverpool Airport",
    "Liverpool Shopping Park",
    "Liverpool Shopping Park"
    ],
    "Livingston": [
    "Livingston",
    "Livingston Village"
    ],
    "Llandudno": [
    "Llandudno",
    "Llandudno Junction"
    ],
    "Llanelli": [
    "Llanelli",
    "Llanelltyd",
    "Llanellen",
    "Llanelly Hill",
    "Llaneilian"
    ],
    "London": [
    "London",
    "London Colney",
    "London Apprentice",
    "London Heathrow Airport",
    "London Stansted Airport"
    ],
    "Londonderry": [
    "Londonderry",
    "Londonderry"
    ],
    "Loughborough": [
    "Loughborough"
    ],
    "Luton": [
    "Luton",
    "Luton",
    "Lufton",
    "Lupton",
    "Suton"
    ],
    "Maidstone": [
    "Maidstone",
    "Mainstone"
    ],
    "Manchester": [
    "Manchester",
    "Manchester Airport",
    "Manchester Science Park",
    "Lanchester"
    ],
    "Mansfield": [
    "Mansfield",
    "Mansfield Woodhouse",
    "Manfield"
    ],
    "Middlesbrough": [
    "Middlesbrough"
    ],
    "Milton Keynes": [
    "Milton Keynes",
    "Milton Keynes Village"
    ],
    "Motherwell": [
    "Motherwell"
    ],
    "Newcastle-Upon-Tyne": [
    "Newcastle Upon Tyne",
    "Newcastle",
    "Newcastle",
    "Newcastle Emlyn",
    "Newcastle"
    ],
    "Newport": [
    "Newport",
    "Newport",
    "Newport",
    "Newport",
    "Newport"
    ],
    "Newry": [
    "Newry",
    "New Romney",
    "New Radnor",
    "New Rossington",
    "New Ridley"
    ],
    "Newtownabbey": [
    "Newtownabbey"
    ],
    "Newtownards": [
    "Newtownards"
    ],
    "Northampton": [
    "Northampton",
    "Northamptonshire",
    "Forthampton"
    ],
    "Norwich": [
    "Norwich",
    "Horwich"
    ],
    "Nottingham": [
    "Nottingham",
    "Nottinghamshire",
    "Cottingham",
    "Cottingham"
    ],
    "Oldham": [
    "Oldham",
    "Oldhamstocks",
    "Old Hall Green",
    "Old Hall",
    "Old Hall"
    ],
    "Omagh": [
    "Omagh",
    "Magherafelt",
    "Maghera",
    "Maghull",
    "Magheramorne"
    ],
    "Oxford": [
    "Oxford",
    "Oxford Airport",
    "Oxfordshire",
    "Oxford Business Park North",
    "Oxford Business Park South"
    ],
    "Peckham": [
    "Deckham",
    "Leckhampstead",
    "Leckhampton",
    "Leckhampton Hill",
    "Beckhampton"
    ],
    "Perth": [
    "Perth",
    "Perthshire",
    "Perton",
    "Pertenhall",
    "Perton"
    ],
    "Peterborough": [
    "Peterborough"
    ],
    "Plymouth": [
    "Plymouth"
    ],
    "Poole": [
    "Poole",
    "Poole",
    "Poole",
    "Poole Keynes",
    "Poolewe"
    ],
    "Portsmouth": [
    "Portsmouth"
    ],
    "Preston": [
    "Preston",
    "Preston",
    "Preston",
    "Preston",
    "Preston"
    ],
    "Reading": [
    "Reading",
    "Redding",
    "Headingley",
    "Headington",
    "Reddingmuirhead"
    ],
    "Redditch": [
    "Redditch"
    ],
    "Romford": [
    "Romford",
    "Comford",
    "Rumford",
    "Cromford",
    "Rumford"
    ],
    "Rotherham": [
    "Rotherham"
    ],
    "Rushden": [
    "Rushden",
    "Rushden",
    "Rushen Abbey",
    "Rushenden"
    ],
    "Salisbury": [
    "Salisbury",
    "Salesbury",
    "Sarisbury Green"
    ],
    "Scunthorpe": [
    "Scunthorpe",
    "Sculthorpe"
    ],
    "Sheffield": [
    "Sheffield",
    "Sheffield Park",
    "Shelfield",
    "Shelfield",
    "Shenfield"
    ],
    "Shrewsbury": [
    "Shrewsbury"
    ],
    "Slough": [
    "Slough",
    "Slough Green",
    "Loughton",
    "Loughborough",
    "Cloughoge"
    ],
    "Southampton": [
    "Southampton",
    "Southampton International Airport",
    "Southampton Science Park"
    ],
    "Southend-on-Sea": [
    "Southend-On-Sea",
    "Southend",
    "Southend",
    "Southend",
    "Southend"
    ],
    "Southport": [
    "Southport",
    "South Poorton"
    ],
    "Stafford": [
    "Stafford",
    "Stafford Cross",
    "Staffordshire",
    "Staffordshire Technology Park",
    "Stanford-Le-Hope"
    ],
    "Staines-upon-Thames": [
    "Staines-Upon-Thames",
    "Thames Ditton",
    "Staines Green",
    "Thames View Industrial Park",
    "Thame"
    ],
    "Stevenage": [
    "Stevenage"
    ],
    "Stirling": [
    "Stirling",
    "Stirlingshire",
    "Skirling",
    "Stillington",
    "Stillingfleet"
    ],
    "Stockport": [
    "Stockport"
    ],
    "Stoke-On-Trent": [
    "Stoke-On-Trent",
    "Trent",
    "Stoke",
    "Stoke",
    "Stoke"
    ],
    "Stratford": [
    "Stratford-Upon-Avon",
    "Stratford Tony",
    "Stratford Enterprise Park",
    "Stratford St. Mary",
    "Stratford Sub Castle"
    ],
    "Sunderland": [
    "Sunderland",
    "Sunderland",
    "Sunderland Bridge",
    "Sunderland Point",
    "Sunderland Enterprise Park"
    ],
    "Sutton": [
    "Sutton",
    "Sutton",
    "Sutton",
    "Sutton",
    "Sutton"
    ],
    "Swansea": [
    "Swansea",
    "Swansea Vale",
    "Swansea Airport",
    "Swansea Enterprise Park"
    ],
    "Swindon": [
    "Swindon",
    "Swindon",
    "Swindon Village",
    "Swinton",
    "Swinton"
    ],
    "Tamworth": [
    "Tamworth",
    "Tadworth",
    "Tatworth",
    "Hamworthy",
    "Tanworth-In-Arden"
    ],
    "Taunton": [
    "Taunton",
    "Caunton",
    "Taynton",
    "Launton",
    "Haunton"
    ],
    "Telford": [
    "Telford",
    "Telford Way Industrial Estate",
    "Belford",
    "Yelford",
    "Welford"
    ],
    "Torquay": [
    "Torquay"
    ],
    "Truro": [
    "Truro",
    "Trudoxhill"
    ],
    "Uxbridge": [
    "Uxbridge",
    "Axbridge",
    "Axbridge",
    "Oxbridge"
    ],
    "Wakefield": [
    "Wakefield",
    "Wakefield 41 Business Park",
    "Wakefield 41 Industrial Estate",
    "Pakefield",
    "Wokefield Green"
    ],
    "Wallasey": [
    "Wallasey",
    "Wallasea Island"
    ],
    "Walsall": [
    "Walsall",
    "Walsall Wood",
    "Halsall",
    "Balsall Common",
    "Balsall Heath"
    ],
    "Warrington": [
    "Warrington",
    "Warrington",
    "Warrington",
    "Harrington",
    "Carrington"
    ],
    "Watford": [
    "Watford",
    "Watford",
    "Ratford",
    "Matford",
    "Wayford"
    ],
    "Wembley": [
    "Wembley",
    "Weobley"
    ],
    "West Bromwich": [
    "West Bromwich"
    ],
    "West Thurrock": [
    "West Thurrock"
    ],
    "Wigan": [
    "Wigan",
    "Wigland"
    ],
    "Winchester": [
    "Winchester",
    "Binchester",
    "Binchester Moor"
    ],
    "Woking": [
    "Woking",
    "Wokingham",
    "Workington"
    ],
    "Wolverhampton": [
    "Wolverhampton"
    ],
    "Worcester": [
    "Worcester",
    "Worcester Park",
    "Worcestershire"
    ],
    "Wrexham": [
    "Wrexham",
    "Wrexham Industrial Estate",
    "Wrexham Technology Park",
    "Wexham",
    "Wroxham"
    ],
    "Yeovil": [
    "Yeovil",
    "Yeovil Marsh",
    "Yeovilton",
    "Yeo Vale"
    ],
    "York": [
    "York",
    "York Business Park",
    "York Road Business Park",
    "Yorkley",
    "Yorkley Slade"
    ]
    }

const func = () => {
    const result = {};

    for (let key of Object.keys(locateOld)) {
        result[key] = {
            loqateOld: locateOld[key],
            loqateNew: locateNew[key]
        }
    }

    console.log(result);
    return result;
}

func();