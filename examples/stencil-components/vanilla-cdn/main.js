  let disabled = false;
  let checked = false;
  let error = false;
  let textInputValue = "";
  let radioChecked = false;
  let number = 1;
  let switchChecked = false;
  const form = document.querySelector("#form");
  const anotherForm = document.querySelector("#another-form");

  const checkbox = document.querySelector("#checkbox");
  const progressBar = document.querySelector('#progress-bar');
  const textInput = document.querySelector('#text-field');
  const radioBtn = document.querySelector('#radio-btn');
  const numberIndicator = document.querySelector('#number-indicator');
  const switchToggle = document.querySelector('#switch');
  const singleSelect = document.querySelector('#single-select');
  const singleSelectDisabledBtn = document.querySelector('#single-select-disabled-btn');
  const singleSelectErrorBtn = document.querySelector('#single-select-error-btn');
  const openModalBtn = document.querySelector("#open-modal-btn");
  const modal = document.querySelector("#modal");

  const searchField = document.querySelector('#search-field');
  const searchBar = document.querySelector('#search-bar');

  const cardBtn = document.querySelector('#cardBtn');

  const toggleDisabledButton = document.querySelector("#toggleDisabled");
  const toggleErrorButton = document.querySelector("#toggleError");
  const toggleValueButton = document.querySelector("#toggleValue");
  const disabledSpan = document.querySelector("#disabledSpan");
  const errorSpan = document.querySelector("#errorSpan");
  const valueSpan = document.querySelector("#valueSpan");
  const textInputSpan = document.querySelector("#textInputSpan");
  const sidebarItem = document.querySelector('#sidebarItemClickable');

  const basicTable = document.querySelector('#basic-table');
  const advancedTable = document.querySelector('#adv-table');
  const tableWithBtn = document.querySelector('#table-with-btn');


  function updateValues() {
    checkbox.setAttribute('disabled', disabled);
    checkbox.setAttribute('value', checked);
    checkbox.setAttribute('error', error);
    disabledSpan.textContent = `Disabled: ${disabled}`;
    errorSpan.textContent = `Error: ${error}`;
    valueSpan.textContent = `Value: ${checked}`;
    textInputSpan.textContent = `Text field: ${textInputValue}`;
    switchToggle.setAttribute('value', switchChecked);
  }

  function increaseNumber() {
    numberIndicator.textContent = Number(numberIndicator.textContent) + 1;

  }

  function decreaseNumber() {
    numberIndicator.textContent = Number(numberIndicator.textContent) - 1;
  }

  function updateProgress() {
    const newValue = Math.floor(Math.random() * 101);
    progressBar.setAttribute('value', newValue);
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    form.addEventListener('submit', () => {
      event.preventDefault();
      console.log('Form submitted. \nCheckbox value:', checked, '\nSwitchToggle value', switchChecked);
    });

    anotherForm.addEventListener('submit', () => {
      event.preventDefault();
      console.log('Form submitted. Text field value: ', textInputValue);
    });
    anotherForm.addEventListener('reset', () => {
      event.preventDefault();
      console.log('Form reset. Text field value: ', textInputValue);
    });


    checkbox.addEventListener('ifxChange', (event) => {
      console.log("checked value change", event.detail);
      checked = !checked;
      updateValues();
    });

    switchToggle.addEventListener('ifxChange', (event) => {
      console.log("switchToggle value change", event.detail);
      switchChecked = !switchChecked;
      updateValues();
    });

    toggleDisabledButton.addEventListener('click', () => {
      disabled = !disabled;
      updateValues();
    });

    toggleErrorButton.addEventListener('click', () => {
      error = !error;
      updateValues();
    });

    toggleValueButton.addEventListener('click', () => {
      checked = !checked;
      updateValues();
    });


    textInput.addEventListener('ifxInput', (event) => {
      console.log("Text field: ", event.detail);
      textInputValue = event.detail;
      updateValues();
    });

    document.getElementById('radio-form').addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
    });

    openModalBtn.addEventListener('click', (event) => {
      modal.opened = true;
    });

    singleSelect.addEventListener('ifxChange', (event) => {
      console.log("single select value change", event.detail);
    });

    //set single select values using a json array
    const singleSelectOptions = '[{ "value": "a", "label": "option a", "selected": true }, { "value": "b", "label": "option b", "selected": false }, { "value": "c", "label": "option c", "selected": false }]';
    singleSelect.setAttribute('options', singleSelectOptions);


    //set advanced table row values using a json array
    const tableRows = `[
  { "make": "Toyota", "model": "Celica", "price": 35000, "age": 10 },
  { "make": "Ford", "model": "Mondeo", "price": 32000, "age": 12 },
  { "make": "Porsche", "model": "Boxster", "price": 72000 },
  { "make": "Bmw", "model": "x", "price": 72000 },
  { "make": "Mercedes", "model": "y", "price": 72000 },
  { "make": "Ferrari", "model": "z", "price": 72000 },
  { "make": "Chrysler", "model": "a", "price": 72000 },
  { "make": "Range rover", "model": "b", "price": 72000 },
  { "make": "Tesla", "model": "x", "price": 72000 },
  { "make": "Audi", "model": "3", "price": 72000 },
  { "make": "Landrover", "model": "x", "price": 72000 }
]`;

    const tableRowsWithBtn = `[
    {
      "make": "Toyota",
      "model": "Celica",
      "price": 35000,
      "age": 10,
      "button": {
        "disabled": false,
        "variant": "secondary",
        "size": "s",
        "target": "_blank",
        "href": "https://www.example.com",
        "theme": "default",
        "type": "button",
        "fullWidth": false,
        "text": "Click Me"
      }
    }
  ]`;

    basicTable.setAttribute('rows', tableRows);
    advancedTable.setAttribute('rows', tableRows);
    tableWithBtn.setAttribute('rows', tableRowsWithBtn);


    //set advanced table row values using a json array
    const tableColumns = `[
  { "headerName": "Make", "field": "make", "sortable": true, "sort": "desc", "unSortIcon": true },
  { "headerName": "Model", "field": "model", "sortable": true, "unSortIcon": true },
  { "headerName": "Price", "field": "price" },
  { "headerName": "Age", "field": "age" }
]`;

    const tableColumnsWithBtn = `[
  { "headerName": "Make", "field": "make", "sortable": true, "sort": "desc", "unSortIcon": true },
  { "headerName": "Model", "field": "model", "sortable": true, "unSortIcon": true },
  { "headerName": "Price", "field": "price" },
  { "headerName": "Age", "field": "age" },
  { "": "Age", "field": "button" }
]`;
    basicTable.setAttribute('cols', tableColumns);
    advancedTable.setAttribute('cols', tableColumns);
    tableWithBtn.setAttribute('cols', tableColumnsWithBtn);

    tableWithBtn.buttonRendererOptions = {
      onButtonClick: (params, event) => {
        console.log("button clicked", params.data);
      }
    };

    cardBtn.addEventListener('click', () => {
      console.log("card button click event");
    });

    searchField.addEventListener('ifxInput', (event) => {
      console.log("search field value", event.detail);
    });

    searchBar.addEventListener('ifxInput', (event) => {
      console.log("search bar value", event.detail);
    });

    sidebarItem.addEventListener('ifxSidebarNavigationItem', function (event) {
      console.log('Sidebar item clicked', event.detail);
    });


    advancedTable.addEventListener('ifxFilterTypeGroupChange', (event) => {
      console.log("table filter value", event.detail);
    });

  });



  function handleModalButton2Click() {
    console.log("Modal Button 2 clicked")
    modal.opened = false;
  }

  const stepper = document.querySelector('#stepper');
  function nextStep() {
    stepper.activeStep += 1;
    stepper.activeStep = Math.min(stepper.activeStep, 6);
  }

  function prevStep() {
    stepper.activeStep -= 1;
    stepper.activeStep = Math.max(0, stepper.activeStep);
  }

  function toggleShowNumber() {
    stepper.showNumber = !stepper.showNumber;
  }

  function toggleVariant() {
    if (!stepper.variant || stepper.variant === 'default') {
      stepper.variant = 'compact';
    } else {
      stepper.variant = 'default';
    }
  }
  stepper.addEventListener('ifxActiveStepChange', (event) => {
    console.log('Stepper active step changed ', event.detail)
  })

  updateValues();

  function toggleButtonWidth() {
    const btn = document.getElementById('btn-in-div');
    btn.fullWidth = !btn.fullWidth;
    console.log(btn.fullWidth);
  }

  // Slider
  const singleSlider = document.querySelector('#single-slider');
  const doubleSlider = document.querySelector('#double-slider');

  const singleSliderSpan = document.querySelector('#single-slider-value');
  const doubleSliderSpanMin = document.querySelector('#double-slider-value-min');
  const doubleSliderSpanMax = document.querySelector('#double-slider-value-max');

  function singleSliderChange(event) {
    singleSliderSpan.innerHTML = event.detail;
  }

  function doubleSliderChange(event) {
    doubleSliderSpanMin.innerHTML = `Min Value: ${event.detail.minVal}`;
    doubleSliderSpanMax.innerHTML = `Max Value: ${event.detail.maxVal}`;
  }

  singleSlider.addEventListener('ifxChange', singleSliderChange);
  doubleSlider.addEventListener('ifxChange', doubleSliderChange);
