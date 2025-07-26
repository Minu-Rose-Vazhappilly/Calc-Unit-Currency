
  function showSection(section) {
    // Hide all
    document.getElementById('calculator-section').style.display = 'none';
    document.getElementById('unit-section').style.display = 'none';
    document.getElementById('currency-section').style.display = 'none';

    // Show selected
    document.getElementById(section + '-section').style.display = 'block';
  }
  function applyDefaultTheme(){
    const allBtns = document.querySelectorAll('.btn-default');
    allBtns.forEach(el=>{
       el.classList.remove('dark-btn','animated-btn');
        el.classList.add('light-btn');
    })
    
    const body = document.getElementById('darkbody');
    body.classList.remove('animated-body','body-dark')
   body.classList.add('body-light')
   const theme = document.getElementById('themeid')
   theme.classList.remove('theme-dark','theme-animated')
   theme.classList.add('theme-light')
   const bod1 = document.getElementById('back')
    bod1.classList.remove('animated-body1','dark-body1')
    bod1.classList.add('light-body1')
  }
  function applyDarkTheme(){
    const allBtns = document.querySelectorAll('.btn-default');
    const body = document.getElementById('darkbody');
    body.classList.remove('body-light','animated-body')
    body.classList.add('body-dark')
    category.style.backgroundColor = 'white'
    fromUnit.style.backgroundColor = 'white'
    toUnit.style.backgroundColor = 'white'
    fromDollar.style.backgroundColor = 'white'
    toDollar.style.backgroundColor = 'white'
  
    allBtns.forEach(ele=>{
      ele.classList.remove('light-btn','animated-btn');
        ele.classList.add('dark-btn');
        
    })
    
    const bod1 = document.getElementById('back')
    bod1.classList.remove('animated-body1','light-body1')
    bod1.classList.add('dark-body1')
    darkh1.style.color = 'white'
    const theme = document.getElementById('themeid')
   theme.classList.remove('theme-light','theme-animated')
   theme.classList.add('theme-dark')
    theme.style.color = 'white'
  }
  function applyAnimatedTheme(){
    const body = document.getElementById('darkbody');
    body.classList.remove('body-light','body-dark')
    body.classList.add('animated-body')
    const theme = document.getElementById('themeid')
   theme.classList.remove('theme-dark','theme-light')
   theme.classList.add('theme-animated')
   const bod1 = document.getElementById('back')
    bod1.classList.remove('light-body1','dark-body1')
    bod1.classList.add('animated-body1')
   const allBtns = document.querySelectorAll('.btn-default');
   allBtns.forEach(ele=>{
      ele.classList.remove('light-btn','dark-btn');
        ele.classList.add('animated-btn');
        
    })
  }
  const units = {
      length: ['Meter', 'Kilometer', 'Centimeter','Millimeter', 'Inch', 'Foot','Yard','Mile'],
      temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
      weight: ['Milligram','Gram', 'Kilogram','Metric ton','Pound','Ounce','Stone']
    }; 
  function updateUnits(){
    const category = document.getElementById('category').value;
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML ='';
    toUnit.innerHTML='';
    if(category && units[category]){
      units[category].forEach(unit=>{
        let option1 = document.createElement("option")
        option1.text = unit;
        option1.value = unit;

        let option2 = document.createElement("option");
        option2.text = unit;
        option2.value = unit;
        fromUnit.add(option1);
        toUnit.add(option2)
      })
    }
      fromUnit.value = units[category][0];
      toUnit.value = units[category][0];
  }
  
    updateUnits(); // Call on load
 
  

  applyDefaultTheme()

