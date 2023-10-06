// content.js

// Function to perform the desired actions
function performActions() {
    console.log('Performing actions...');

    // Function to click a button with specific text content
    function clickButtonByText(buttonText) {
        const buttons = [...document.querySelectorAll('button')];
        for (const button of buttons) {
            if (button.textContent.includes(buttonText)) {
                button.click();
                console.log(`Clicked "${buttonText}" button`);
                return true;
            }
        }
        return false;
    }

    // Click "Delete from profile" button
    if (clickButtonByText("Delete from profile")) {
        // Click "Delete" button
        setTimeout(() => {
            if (clickButtonByText("Delete")) {
                // Delay before replacing content
                setTimeout(() => {
                    const customHTML = `

    <div data-test-modal="" role="dialog" tabindex="-1" class="artdeco-modal artdeco-modal--layer-default po-route-modal po-route-form__modal po-route-form__modal--large" size="medium" aria-labelledby="po-route-modal-header-onboarding">
        <span class="a11y-text">Dialog content start.</span>
            <button data-test-modal-close-btn="" aria-label="Dismiss" id="ember68" class="artdeco-modal__dismiss artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view">  <li-icon aria-hidden="true" type="cancel-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
        
      <div id="ember69" class="artdeco-modal__header relative  ember-view">
        
  
  
    <h2 id="po-route-modal-header-onboarding">
        Tell us what kind of work you’re open to
    </h2>
  


  <!---->
  <!---->

      
<!----></div>

      <div id="ember70" class="artdeco-modal__content relative  ember-view">
        
  <!---->

  
  
        <p class="t-12 t-black--light pt3 ph5">
          * Indicates required
        </p>
      
  <div class="mt5">
      <section class="pb5 ph5">
            <div data-test-form-section="">

<!----><!----><!---->
        <!----><!---->  <div class="fb-dash-form-element-group" data-test-form-element-group="">
      <div class="fb-dash-form-element-group-elements
          fb-dash-form-element-group-elements--horizontal" data-test-form-element-group-elements="">
            <div class="fb-dash-form-element" style="width:100%" tabindex="-1" aria-invalid="false" data-test-form-element="">
<!---->        <fieldset data-test-form-builder-pill-form-component="" class="relative" id="pill-form-component-openToWorkPreferencesFormElement-JOB-TITLES" aria-describedby="pill-form-component-openToWorkPreferencesFormElement-JOB-TITLES-error">
    <legend class="full-width" data-test-pill-form-component__legend="">
        <span class="fb-dash-form-element__label
             fb-dash-form-element__label-title--is-required" data-test-pill-form-component__label="">
          <!---->Job titles<!---->
        </span>
          <span class="visually-hidden" data-test-form-element-required="">
            Required
          </span>
<!---->    </legend>

  <!---->      <button aria-label="Remove Full-stack Developer" id="ember230" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="1" type="button"><span class="artdeco-pill__text">
    Full-stack Developer
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>
      <button aria-label="Remove Java Developer" id="ember233" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="2" type="button"><span class="artdeco-pill__text">
    Java Developer
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>
      <button aria-label="Remove Software Developer" id="ember236" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="3" type="button"><span class="artdeco-pill__text">
    Software Developer
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>
      <button aria-label="Remove Application Developer" id="ember239" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="4" type="button"><span class="artdeco-pill__text">
    Application Developer
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>
      <button aria-label="Remove Software Engineer" id="ember242" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="5" type="button"><span class="artdeco-pill__text">
    Software Engineer
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>

      



      <div class="mt1">
        <button disabled="" id="form-component__typeahead-cta-ember72-button" class="artdeco-button artdeco-button--2 artdeco-button--secondary artdeco-button--disabled ember-view typeahead-cta__button" data-test-typeahead-cta__button="">  <li-icon aria-hidden="true" type="add" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Add title
</span></button>
      </div>


<!---->  

<!---->

</fieldset>

  <div id="ember244" class="artdeco-inline-feedback artdeco-inline-feedback--note ember-view pt2 pb3" role="status" data-test-pill-form-component__info-text="">    <li-icon aria-hidden="true" type="notify-pebble-icon" class="artdeco-inline-feedback__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
    </svg></li-icon>

  <span class="artdeco-inline-feedback__message">
      You’ve reached the maximum
<!---->  </span>
</div>

<!---->  </div>

      </div>
<!----><!---->  </div>

<!---->        <!----><!---->  <div class="fb-dash-form-element-group" data-test-form-element-group="">
      <div class="fb-dash-form-element-group-elements
          fb-dash-form-element-group-elements--horizontal" data-test-form-element-group-elements="">
            <div class="fb-dash-form-element" style="width:100%" tabindex="-1" aria-invalid="false" data-test-form-element="">
<!---->        <fieldset data-test-form-builder-pill-form-component="" class="relative" id="pill-form-component-openToWorkPreferencesFormElement-WORKPLACES" aria-describedby="pill-form-component-openToWorkPreferencesFormElement-WORKPLACES-error">
    <legend class="full-width" data-test-pill-form-component__legend="">
        <span class="fb-dash-form-element__label
             fb-dash-form-element__label-title--is-required" data-test-pill-form-component__label="">
          <!---->Location types<!---->
        </span>
          <span class="visually-hidden" data-test-form-element-required="">
            Required
          </span>
<!---->    </legend>

      <button role="checkbox" aria-checked="true" aria-label="On-site" id="ember74" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" data-test-form-element-pill-button="0" type="button"><span class="artdeco-pill__text">
    On-site
</span>

<li-icon aria-hidden="true" type="check-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon></button>
    <button role="checkbox" aria-checked="true" aria-label="Hybrid" id="ember75" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" data-test-form-element-pill-button="1" type="button"><span class="artdeco-pill__text">
    Hybrid
</span>

<li-icon aria-hidden="true" type="check-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon></button>
    <button role="checkbox" aria-checked="true" aria-label="Remote" id="ember76" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" data-test-form-element-pill-button="2" type="button"><span class="artdeco-pill__text">
    Remote
</span>

<li-icon aria-hidden="true" type="check-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon></button>

<!---->
<!---->  

<!---->

</fieldset>

<!---->
<!---->  </div>

      </div>
<!----><!---->  </div>

<!---->        <!----><!---->  <div class="fb-dash-form-element-group" data-test-form-element-group="">
      <div class="fb-dash-form-element-group-elements
          fb-dash-form-element-group-elements--horizontal" data-test-form-element-group-elements="">
            <div class="fb-dash-form-element" style="width:100%" tabindex="-1" aria-invalid="false" data-test-form-element="">
<!---->        <fieldset data-test-form-builder-pill-form-component="" class="relative" id="pill-form-component-openToWorkPreferencesFormElement-JOB-LOCATIONS" aria-describedby="pill-form-component-openToWorkPreferencesFormElement-JOB-LOCATIONS-error">
    <legend class="full-width" data-test-pill-form-component__legend="">
        <span class="fb-dash-form-element__label
             fb-dash-form-element__label-title--is-required" data-test-pill-form-component__label="">
          <!---->Locations (on-site)<!---->
        </span>
          <span class="visually-hidden" data-test-form-element-required="">
            Required
          </span>
<!---->    </legend>

        <button aria-label="Remove Middletown, Delaware, United States" id="ember77" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="0" type="button"><span class="artdeco-pill__text">
    Middletown, Delaware, United States
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>
      <button aria-label="Remove Wilmington, Delaware, United States" id="ember246" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="1" type="button"><span class="artdeco-pill__text">
    Wilmington, Delaware, United States
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>
      <button aria-label="Remove Philadelphia, Pennsylvania, United States" id="ember249" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="2" type="button"><span class="artdeco-pill__text">
    Philadelphia, Pennsylvania, United States
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>

      



      <div class="mt1">
        <button id="form-component__typeahead-cta-ember78-button" class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view typeahead-cta__button" data-test-typeahead-cta__button="">  <li-icon aria-hidden="true" type="add" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Add location
</span></button>
      </div>


<!---->  

<!---->

</fieldset>

<!---->
<!---->  </div>

      </div>
<!----><!---->  </div>

<!---->        <!----><!---->  <div class="fb-dash-form-element-group" data-test-form-element-group="">
      <div class="fb-dash-form-element-group-elements
          fb-dash-form-element-group-elements--horizontal" data-test-form-element-group-elements="">
            <div class="fb-dash-form-element" style="width:100%" tabindex="-1" aria-invalid="false" data-test-form-element="">
<!---->        <fieldset data-test-form-builder-pill-form-component="" class="relative" id="pill-form-component-openToWorkPreferencesFormElement-REMOTE-JOB-LOCATIONS" aria-describedby="pill-form-component-openToWorkPreferencesFormElement-REMOTE-JOB-LOCATIONS-error">
    <legend class="full-width" data-test-pill-form-component__legend="">
        <span class="fb-dash-form-element__label
             fb-dash-form-element__label-title--is-required" data-test-pill-form-component__label="">
          <!---->Locations (remote)<!---->
        </span>
          <span class="visually-hidden" data-test-form-element-required="">
            Required
          </span>
<!---->    </legend>

        <button aria-label="Remove Middletown, Delaware, United States" id="ember251" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--dismiss artdeco-pill--selected ember-view" data-test-form-element-pill-button="0" type="button"><span class="artdeco-pill__text">
    Middletown, Delaware, United States
</span>

<li-icon aria-hidden="true" type="cancel-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
</button>

      



      <div class="mt1">
        <button id="form-component__typeahead-cta-ember252-button" class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view typeahead-cta__button" data-test-typeahead-cta__button="">  <li-icon aria-hidden="true" type="add" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Add location
</span></button>
      </div>


<!---->  

<!---->

</fieldset>

<!---->
<!---->  </div>

      </div>
<!----><!---->  </div>

<!---->        <!----><!---->  <div class="fb-dash-form-element-group" data-test-form-element-group="">
      <div class="fb-dash-form-element-group-elements
          fb-dash-form-element-group-elements--horizontal" data-test-form-element-group-elements="">
            <div class="fb-dash-form-element" style="width:100%" tabindex="-1" aria-invalid="false" data-test-form-element="">
<!---->        <fieldset data-test-form-builder-radio-button-form-component="true" id="radio-button-form-component-openToWorkPreferencesFormElement-START-DATE" aria-describedby="radio-button-form-component-openToWorkPreferencesFormElement-START-DATE-error">
    <legend>
      <span data-test-form-builder-radio-button-form-component__title="" class="fb-dash-form-element__label
          ">
        <!---->Start date<!---->
      </span>

<!---->    </legend>

      <div data-test-text-selectable-option="0" class="fb-text-selectable__option display-flex">
  <input data-test-text-selectable-option__input="Immediately, I am actively applying" id="urn:li:fsd_openToWorkPreferencesFormElement:START_DATE-0" class="fb-form-element__checkbox" name="urn:li:fsd_openToWorkPreferencesFormElement:START_DATE" aria-required="false" type="radio" value="ACTIVELY_SEEKING">
  <label data-test-text-selectable-option__label="Immediately, I am actively applying" for="urn:li:fsd_openToWorkPreferencesFormElement:START_DATE-0" class="t-14">
    <!---->Immediately, I am actively applying<!---->
  </label>
</div>
      <div data-test-text-selectable-option="1" class="fb-text-selectable__option display-flex">
  <input data-test-text-selectable-option__input="Flexible, I am casually looking" id="urn:li:fsd_openToWorkPreferencesFormElement:START_DATE-1" class="fb-form-element__checkbox" name="urn:li:fsd_openToWorkPreferencesFormElement:START_DATE" aria-required="false" type="radio" value="CASUALLY_BROWSING">
  <label data-test-text-selectable-option__label="Flexible, I am casually looking" for="urn:li:fsd_openToWorkPreferencesFormElement:START_DATE-1" class="t-14">
    <!---->Flexible, I am casually looking<!---->
  </label>
</div>
</fieldset>

  <div id="radio-button-form-component-openToWorkPreferencesFormElement-START-DATE-error">
<!----></div>

<!---->  </div>

      </div>
<!----><!---->  </div>

<!---->        <!----><!---->  <div class="fb-dash-form-element-group" data-test-form-element-group="">
      <div class="fb-dash-form-element-group-elements
          fb-dash-form-element-group-elements--horizontal" data-test-form-element-group-elements="">
            <div class="fb-dash-form-element" style="width:100%" tabindex="-1" aria-invalid="false" data-test-form-element="">
<!---->        <fieldset data-test-form-builder-pill-form-component="" class="relative" id="pill-form-component-openToWorkPreferencesFormElement-JOB-TYPES" aria-describedby="pill-form-component-openToWorkPreferencesFormElement-JOB-TYPES-error">
    <legend class="full-width" data-test-pill-form-component__legend="">
        <span class="fb-dash-form-element__label
            " data-test-pill-form-component__label="">
          <!---->Employment types<!---->
        </span>
<!----><!---->    </legend>

      <button role="checkbox" aria-checked="true" aria-label="Full-time" id="ember80" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" data-test-form-element-pill-button="0" type="button"><span class="artdeco-pill__text">
    Full-time
</span>

<li-icon aria-hidden="true" type="check-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon></button>
    <button role="checkbox" aria-checked="true" aria-label="Part-time" id="ember81" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" data-test-form-element-pill-button="1" type="button"><span class="artdeco-pill__text">
    Part-time
</span>

<li-icon aria-hidden="true" type="check-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon></button>
    <button role="checkbox" aria-checked="true" aria-label="Contract" id="ember82" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" data-test-form-element-pill-button="2" type="button"><span class="artdeco-pill__text">
    Contract
</span>

<li-icon aria-hidden="true" type="check-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon></button>
    <button role="checkbox" aria-checked="false" aria-label="Internship" id="ember83" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle ember-view" data-test-form-element-pill-button="3" type="button"><span class="artdeco-pill__text">
    Internship
</span>

<li-icon aria-hidden="true" type="plus-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
    </svg></li-icon></button>
    <button role="checkbox" aria-checked="true" aria-label="Temporary" id="ember84" class="mr2 mt1 mb2  artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" data-test-form-element-pill-button="4" type="button"><span class="artdeco-pill__text">
    Temporary
</span>

<li-icon aria-hidden="true" type="check-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon></button>

<!---->
<!---->  

<!---->

</fieldset>

<!---->
<!---->  </div>

      </div>
<!----><!---->  </div>

<!---->        <!----><!---->  <div class="fb-dash-form-element-group" data-test-form-element-group="">
      <div class="fb-dash-form-element-group-elements
          fb-dash-form-element-group-elements--horizontal" data-test-form-element-group-elements="">
            <div class="fb-dash-form-element" style="width:100%" tabindex="-1" aria-invalid="false" data-test-form-element="">
<!---->        <fieldset data-test-form-builder-radio-button-form-component="true" id="radio-button-form-component-openToWorkPreferencesFormElement-VISIBILITY" aria-describedby="radio-button-form-component-openToWorkPreferencesFormElement-VISIBILITY-error">
    <legend>
      <span data-test-form-builder-radio-button-form-component__title="" class="fb-dash-form-element__label
          fb-dash-form-element__label-title--is-required">
        <!---->Visibility (who can view you’re open to work)<!---->
      </span>

        <span class="visually-hidden" data-test-form-builder-radio-button-form-component__required="">
          Required
        </span>
    </legend>

      <div data-test-entity-selectable-option="0">
  <input data-test-entity-selectable-option__input="0" class="fb-entity-selectable-option__input" id="urn:li:fsd_openToWorkPreferencesFormElement:VISIBILITY-0" name="urn:li:fsd_openToWorkPreferencesFormElement:VISIBILITY" type="radio" value="RECRUITERS">
  <label data-test-entity-selectable-option__label="0" class="fb-entity-selectable-option__label" for="urn:li:fsd_openToWorkPreferencesFormElement:VISIBILITY-0">
      <div class="display-flex justify-space-between">
        <div class="pl2 mt1" data-test-entity-selectable-option__entity-text="0">
            <h9 class="fb-entity-selectable-option__label-title text-body-small-bold t-black--light" data-test-entity-selectable-option__title="0">
              <strong><!---->Recruiters only<!----></strong><p><!---->Limited to people using LinkedIn Recruiter<!----></p>
            </h9>
            <p class="text-body-xsmall t-black--light mt2" data-test-entity-selectable-option__subtitle="0">
              <!---->While we take steps not to show recruiters at your current company, we can’t guarantee complete privacy.<!---->
            </p>
        </div>
          <div data-test-entity-selectable-option__entity-image="0">
            
    <div class="ivm-image-view-model   ">
        
    <div class="ivm-view-attr__img-wrapper display-flex">
<!---->          <img width="48" src="https://media.licdn.com/dms/image/D4E03AQGxjICoUR3Ukg/profile-displayphoto-shrink_100_100/0/1682708220083?e=1701907200&amp;v=beta&amp;t=HIQVDefx7ekwabXNUiTMo93onGZYbcH8k_fV0Wr79Tg" loading="lazy" height="48" alt="" id="ember254" class="ivm-view-attr__img--centered EntityPhoto-circle-3   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
          </div>
      </div>
  </label>
</div>
      <div data-test-entity-selectable-option="1">
  <input data-test-entity-selectable-option__input="1" class="fb-entity-selectable-option__input" id="urn:li:fsd_openToWorkPreferencesFormElement:VISIBILITY-1" name="urn:li:fsd_openToWorkPreferencesFormElement:VISIBILITY" type="radio" value="LOGGED_IN_MEMBERS">
  <label data-test-entity-selectable-option__label="1" class="fb-entity-selectable-option__label" for="urn:li:fsd_openToWorkPreferencesFormElement:VISIBILITY-1">
      <div class="display-flex justify-space-between">
        <div class="pl2 mt1" data-test-entity-selectable-option__entity-text="1">
            <h9 class="fb-entity-selectable-option__label-title text-body-small-bold t-black--light" data-test-entity-selectable-option__title="1">
              <strong><!---->All LinkedIn members<!----></strong><p><!---->Includes recruiters and people at your current company<!----></p>
            </h9>
            <p class="text-body-xsmall t-black--light mt2" data-test-entity-selectable-option__subtitle="1">
              <!---->This selection adds the #OpenToWork photo frame.<!---->
            </p>
        </div>
          <div data-test-entity-selectable-option__entity-image="1">
            
    <div class="ivm-image-view-model ivm-image-view-model--grid-2  ">
        <ul class="ivm-image-view-model__img-list ivm-image-view-model__img-list--size-4">
            <li class="ivm-image-view-model__img-list-item
                
                ">
              
    <div class="ivm-view-attr__img-wrapper display-flex">
<!---->          <img width="48" src="https://media.licdn.com/dms/image/D4E03AQGxjICoUR3Ukg/profile-displayphoto-shrink_100_100/0/1682708220083?e=1701907200&amp;v=beta&amp;t=HIQVDefx7ekwabXNUiTMo93onGZYbcH8k_fV0Wr79Tg" loading="lazy" height="48" alt="" id="ember255" class="ivm-view-attr__img--centered ivm-image-view-model__circle-img   evi-image lazy-image ember-view">
    </div>
  
            </li>
            <li class="ivm-image-view-model__img-list-item
                
                ">
              
    <div class="ivm-view-attr__img-wrapper display-flex">
<!---->          <img width="48" src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png" loading="lazy" height="48" alt="" id="ember256" class="ivm-view-attr__img--centered ivm-view-attr__img   evi-image lazy-image ember-view">
    </div>
  
            </li>
        </ul>

<!---->    </div>
  
          </div>
      </div>
  </label>
</div>
</fieldset>

  <div id="radio-button-form-component-openToWorkPreferencesFormElement-VISIBILITY-error">
<!----></div>

      <div class="fb-dash-form-element-helper-link t-16 t-black--light mt2" data-test-form-element-helper-link="">
        <strong><a class="app-aware-link " target="_blank" href="https://www.linkedin.com/help/linkedin/answer/67405?lang=en" data-test-app-aware-link=""><!---->Learn more about your privacy<!----></a></strong>
      </div>
  </div>

      </div>
<!----><!---->  </div>

<!---->
<!---->
<!---->
<!---->
<!---->  </div>

      </section>
  </div>

  

  <!---->

      </div>

        <div id="ember88" class="artdeco-modal__actionbar ph0 ember-view">
          
  <!---->

  <!---->
  
  
    <div class="ph5">
<!---->      <button id="ember89" class="fr artdeco-button artdeco-button--2 artdeco-button--primary ember-view"><!---->
<span class="artdeco-button__text">
    Save
</span></button>
<!---->    </div>
  


        </div>
    
        <span class="a11y-text">Dialog content end.</span>
      </div>
      `;
      const contentToReplace = document.querySelector('#ember598 > div');
      if (contentToReplace) {
          contentToReplace.innerHTML = customHTML;
          console.log('Replaced content with custom HTML');

          // Click "Save" button
          setTimeout(() => {
              clickButtonByText("Save");
          }, 1000); // Adjust this delay as needed
      } else {
          console.log('Content element not found for replacing');
      }
  }, 3000); // Adjust this delay as needed
} else {
  console.log('No "Delete" button found');
}
}, 3000); // Adjust this delay as needed
} else {
console.log('No "Delete from profile" button found');
}
}

// Execute the actions when the extension is clicked
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
if (message.action === 'performActions') {
console.log('Received message from background script');
performActions();
}
});