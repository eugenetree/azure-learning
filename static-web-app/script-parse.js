const inputsValues = [
    "Aberdeen",
    "Ayr",
    "Ballymena",
    "Banbury",
    "Barnsley",
    "Barnstaple",
    "Basildon",
    "Basingstoke",
    "Bath",
    "Bedford",
    "Belfast",
    "Bexleyheath",
    "Birkenhead",
    "Birmingham",
    "Blackburn",
    "Blackpool",
    "Bolton",
    "Bournemouth",
    "Bracknell",
    "Bradford",
    "Brighton",
    "Bristol",
    "Bromley",
    "Burnley",
    "Burton-on-Trent",
    "Bury",
    "Bury St Edmunds",
    "Camberley",
    "Cambridge",
    "Canterbury",
    "Cardiff",
    "Carlisle",
    "Chatham",
    "Chelmsford",
    "Cheltenham",
    "Chester",
    "Chesterfield",
    "Clydebank",
    "Colchester",
    "Corby",
    "Coventry",
    "Craigavon",
    "Crawley",
    "Croydon",
    "Cwmbran",
    "Darlington",
    "Dartford",
    "Derby",
    "Doncaster",
    "Dudley",
    "Dundee",
    "Dunfermline",
    "Ealing",
    "East Ham",
    "East Kilbride",
    "Eastbourne",
    "Edinburgh",
    "Exeter",
    "Folkestone",
    "Gateshead",
    "Glasgow",
    "Gloucester",
    "Gravesend",
    "Greenhithe",
    "Greenock",
    "Grimsby",
    "Guildford",
    "Hamilton",
    "Hammersmith",
    "Harlow",
    "Harrogate",
    "Harrow",
    "Hartlepool",
    "Hastings",
    "Hemel Hempstead",
    "Hereford",
    "High Wycombe",
    "Hounslow",
    "Huddersfield",
    "Hull",
    "Ilford",
    "Inverness",
    "Ipswich",
    "Irvine",
    "Kent",
    "Kings Lynn",
    "Kingston Upon Thames",
    "Lancaster",
    "Leeds",
    "Leicester",
    "Lincoln",
    "Lisburn",
    "Liverpool",
    "Livingston",
    "Llandudno",
    "Llanelli",
    "London",
    "Londonderry",
    "Loughborough",
    "Luton",
    "Maidstone",
    "Manchester",
    "Mansfield",
    "Middlesbrough",
    "Milton Keynes",
    "Motherwell",
    "Newcastle-Upon-Tyne",
    "Newport",
    "Newry",
    "Newtownabbey",
    "Newtownards",
    "Northampton",
    "Norwich",
    "Nottingham",
    "Oldham",
    "Omagh",
    "Oxford",
    "Peckham",
    "Perth",
    "Peterborough",
    "Plymouth",
    "Poole",
    "Portsmouth",
    "Preston",
    "Reading",
    "Redditch",
    "Romford",
    "Rotherham",
    "Rushden",
    "Salisbury",
    "Scunthorpe",
    "Sheffield",
    "Shrewsbury",
    "Slough",
    "Southampton",
    "Southend-on-Sea",
    "Southport",
    "Stafford",
    "Staines-upon-Thames",
    "Stevenage",
    "Stirling",
    "Stockport",
    "Stoke-On-Trent",
    "Stratford",
    "Sunderland",
    "Sutton",
    "Swansea",
    "Swindon",
    "Tamworth",
    "Taunton",
    "Telford",
    "Torquay",
    "Truro",
    "Uxbridge",
    "Wakefield",
    "Wallasey",
    "Walsall",
    "Warrington",
    "Watford",
    "Wembley",
    "West Bromwich",
    "West Thurrock",
    "Wigan",
    "Winchester",
    "Woking",
    "Wolverhampton",
    "Worcester",
    "Wrexham",
    "Yeovil",
    "York"
  ]
  
  const waitForDropdownInDom = async () => {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        const element = document.querySelector('[data-testautomation-id="control"]').parentNode.firstChild.nextSibling
        if (element) {
          clearInterval(intervalId);
          resolve(element);
        }
  
        setTimeout(() => {
          clearInterval();
          resolve(null);
        }, 20000);
      }, 100);
    });
  };
  
  const func = async () => {
    const result = {};
  
    const input = document.querySelector('[aria-labelledby="store-search-description"]');
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value').set;
  
    for (const inputValue of inputsValues) {
      nativeInputValueSetter.call(input, inputValue);
      const event = new Event('input', {bubbles: true});
      input.dispatchEvent(event);
  
      const dropdown = await waitForDropdownInDom();
  
      if (!dropdown) {
        console.error('Dropdown not found');
        console.log('Results at the moment of error: ', result);
        result[inputValue] = [];
        continue;
      }
  
      const response = [...dropdown.querySelectorAll('button')].map((element) => element.textContent);
  
      result[inputValue] = response;
      console.log('current result: ', result);
    }
  
    console.log('final result', result);
    return result;
  };
  
  func(inputsValues);
  