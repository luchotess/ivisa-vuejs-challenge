<template>
  <main class="step step-1">
    <section class="card">
      <div class="card-header">
        <h3>General Information</h3>
      </div>

      <div class="card-body">
        <div class="fieldset-row">
          <fieldset>
            <label for="email">Email Address</label>
            <div class="input-container">
              <span class="completed">test@test.com</span>
            </div>
          </fieldset>

          <fieldset>
            <label>Arrival Date in Country</label>
            <div class="input-container">
              <span class="completed">May-23-2019</span>
            </div>
          </fieldset>

          <fieldset>
            <label>Departure Day for Country</label>
            <div class="input-container">
              <span class="completed">May-23-2019</span>
            </div>
          </fieldset>

          <fieldset>
            <label for="phone">Phone</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>
        </div>

      </div>
    </section>

    <section class="card applicant-card">
      <div class="card-header">
        <h3>Applicant #1</h3>
      </div>

      <div class="card-body darker">
        <div class="fieldset-row">
          <fieldset>
            <label for="email">First and Middle Name</label>
            <div class="input-container">
              <span class="completed">Adrian</span>
            </div>
          </fieldset>

          <fieldset>
            <label for="email">Last Name</label>
            <div class="input-container">
              <span class="completed">Test value</span>

            </div>
          </fieldset>

          <fieldset>
            <label for="email">Nationality (as in Passport)</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>

          <fieldset>
            <label for="email">Birthday</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>

          <fieldset>
            <label for="email">Country of Birth</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>
        </div>

        <div class="fieldset-row">
          <fieldset>
            <label for="email">Gender</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>

          <fieldset>
            <label for="email">Passport Number</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>

          <fieldset>
            <label for="email">Passport Issued</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>

          <fieldset>
            <label for="email">Passport Expiration</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>

          <fieldset></fieldset>
        </div>

        <div class="fieldset-row">
          <fieldset class="double-input">
            <label for="email">Visa Type</label>
            <div class="input-container">
              <span class="completed">Test value</span>
            </div>
          </fieldset>
        </div>
      </div>
    </section>

    <section class="card">
      <div class="card-header">
        <h3>Order details</h3>
      </div>
    </section>
  </main>
</template>

<script>
  const accounts = [
    {
      name: 'Camilo',
      lastname: 'Rios',
      country: 'Country 1'
    },
    {
      name: 'Mauricio',
      lastname: 'Alvares',
      country: 'Country 2'
    },
  ];

  export default {
    name: 'step2',

    data: () => ({
      selectedApplicants: [
        {
          name: '',
          lastname: '',
          country: ''
        }
      ],
      applicantAccounts: [
        ...accounts
      ],
    }),

    methods: {
      applicantsChange () {
      },
      filterApplicants () {
        this.applicantAccounts = accounts.filter((accounts) =>  {
          return this.selectedApplicants.some((selected) => {
            return selected.name !== accounts.name;
          });
        });
      },
      newApplicant () {
        this.filterApplicants();

        this.selectedApplicants.push(
                {
                  name: '',
                  lastname: '',
                  country: ''
                }
        );
      },
      deleteApplicant (index) {
        this.filterApplicants();
        this.selectedApplicants.splice(index, 1);
      }
    }
  }
</script>

<style lang="scss">
  span {
    font-size: 13px;
    color: gray;
  }

  .card-shadow {
    box-shadow: 0 3px 6px #eaebea, 0 3px 12px #eaebea;
  }

  fieldset {
    border: none;
    box-sizing: border-box;
    padding: 0;
  }

  .step {
    max-width: 1140px;
    margin: auto;
  }

  .card {
    margin-top: 30px;
    text-align: left;
    @extend .card-shadow;
  }

  .card-header {
    padding: 30px;
    border-bottom: 1px solid #eaebea;
    display: flex;
    align-items: center;

    select {
      margin-left: 55px;
      max-width: 260px;
    }
  }

  .card-footer {
    padding: 20px 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  button.primary {
    padding: 0 25px;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #52d03e;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      opacity: .7;
    }
  }

  .card-body {
    padding: 30px;
  }

  label {
    font-size: 14px;
    color: #6a757e;
  }

  .fieldset-row {
    display: flex;
    margin-bottom: 20px;

    fieldset {
      flex-direction: column;
      margin-right: 20px;
      display: flex;
      flex: 1;

      label {
        margin-bottom: 5px;
        font-weight: bold;
      }
    }
  }

  select {
    height: 40px;
    font-size: 12px;
    color: #6a757e;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid #eaebea;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin-right: 3px;
    background-color: white;
    box-sizing: border-box;
  }

  input:not([type=checkbox]):not([type=radio]) {
    height: 40px;
    font-size: 12px;
    color: #6a757e;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid #eaebea;
    width: 100%;
    margin-right: 3px;
    box-sizing: border-box;
  }

  .darker {
    background-color: #f8f8f8;
  }

  fieldset:last-child {
    margin-right: 0;
  }

  .input-container {
    display: flex;
  }

  .single-label {
    height: 40px;
    line-height: 40px;
    display: flex;
    position: absolute;
    bottom: 0;
    font-size: 14px;
    font-weight: bold;
    color: #6a757e;
  }

  a {
    color: #5b73c1;
    text-decoration: none;
    padding: 0 5px;
  }

  .single-label-fieldset {
    display: flex;
    position: relative;
  }

  .double-input {
    max-width: calc(40% - 15px);
  }

  h3 {
    color: #5b73c1;
    font-size: 24px;
    margin: 0;
    font-weight: normal;
  }

  .option-container-row {
    display: flex;
    justify-content: space-between;
  }

  .option-container {
    display: flex;
    padding: 15px;
    border: 1px solid #eaebea;
    border-radius: 5px;
    flex: 1;
    margin-right: 25px;
    cursor: pointer;
    transition: all .3s;

    label {
      cursor: pointer;
    }
  }

  .option-container:hover, .option-container.active {
    background-color: #5b73c1;
    border: 1px solid transparent;

    @extend .card-shadow;

    h4, span {
      color: white;
    }
  }

  .option-container:last-child {
    margin-right: 0;
  }

  .option-container input {
    width: 30px;
    height: 20px;
  }

  .option-container span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    color: #878892;
  }

  span.title, .title {
    margin: 0;
    color: #5b73c1;
    font-weight: bold;
    font-size: 18px;
  }

  .additional-information-container {
    padding: 10px 40px;
    margin-top: 30px;
    background-color: #f8f8f8;
  }

  .checkbox-container {
    display: block;
    padding-top: 25px;

    fieldset {
      margin-bottom: 15px;
      height: 25px;
    }

    input {
      float: left;
      height: 20px;
      width: 25px;
      margin: 0;
      text-align: center;
    }

    label {
      float: left;
      color: #999999;
    }
  }

  .total-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;

    .total {
      max-width: 285px;
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      color: #5b73c1;
      align-items: center;

      span {
        margin-right: 20px;
      }

      .value {
        text-align: right;
        margin-right: 0;
        margin-left: 20px;
        font-size: 33px;
        font-weight: bold;
      }

      select {
        height: 50px;
      }
    }
  }

  .step-navigator {
    display: flex;
    justify-content: flex-end;
    margin-top: 35px;
    padding: 0 30px;
  }
</style>
