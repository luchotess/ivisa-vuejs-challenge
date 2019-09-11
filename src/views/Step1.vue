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
                            <input id="email" type="email" placeholder="mail@mail.com">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="arrival-date">Arrival Date in Country</label>
                        <div class="input-container">
                            <input id="arrival-date" type="tel" placeholder="Month">
                            <input id="arrival-month" type="tel" placeholder="Day">
                            <input id="arrival-year" type="tel" placeholder="Year">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="departure-date">Departure Day for Country</label>
                        <div class="input-container">
                            <input id="departure-date" type="tel" placeholder="Month">
                            <input id="departure-month" type="tel" placeholder="Day">
                            <input id="departure-year" type="tel" placeholder="Year">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="phone">Phone</label>
                        <div class="input-container">
                            <input id="phone" type="tel" placeholder="Contact Number">
                        </div>
                    </fieldset>
                </div>

            </div>
        </section>

        <section class="card applicant-card"
                 v-for="(selectedApplicant, selectedApplicantsIndex) in selectedApplicants"
                 v-bind:key="'selected'+selectedApplicantsIndex">
            <div class="card-header">
                <h3>Applicant #{{selectedApplicantsIndex + 1}}</h3>
                <select v-model="selectedApplicants[selectedApplicantsIndex]" @change="applicantsChange($event)">
                    <optgroup label="Select from my account">
                        <option :value="applicantAccount" v-for="(applicantAccount, index) in applicantAccounts"
                                v-bind:key="index">
                            {{applicantAccount.name}} {{applicantAccount.lastname}}
                        </option>
                    </optgroup>
                    <optgroup label="New applicant">
                        <option value="new" v-on:click="newApplicant()">Add new applicant</option>
                    </optgroup>
                </select>

                <button class="primary" v-if="selectedApplicantsIndex !== 0" v-on:click="deleteApplicant(selectedApplicantsIndex)">Delete Applicant</button>
            </div>

            <div class="card-body darker">
                <div class="fieldset-row">
                    <fieldset>
                        <label for="email">First and Middle Name</label>
                        <div class="input-container">
                            <input id="email" type="email" :value="selectedApplicants[selectedApplicantsIndex].name"
                                   placeholder="">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="email">Last Name</label>
                        <div class="input-container">
                            <input id="email" type="email" placeholder=""
                                   :value="selectedApplicants[selectedApplicantsIndex].lastname">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="email">Nationality (as in Passport)</label>
                        <div class="input-container">
                            <select name="" id="" :value="selectedApplicants[selectedApplicantsIndex].country">
                                <option value="Country 1">Country 1</option>
                                <option value="Country 2">Country 2</option>
                                <option value="Country 3">Country 3</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="email">Birthday</label>
                        <div class="input-container">
                            <input id="email" type="text" placeholder="YYYY-DD-MM">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="email">Country of Birth</label>
                        <div class="input-container">
                            <select name="" id="">
                                <option value="">Country 1</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div class="fieldset-row">
                    <fieldset>
                        <label for="email">Gender</label>
                        <div class="input-container">
                            <input id="email" type="email" placeholder="">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="email">Passport Number</label>
                        <div class="input-container">
                            <input id="email" type="email" placeholder="">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="email">Passport Issued</label>
                        <div class="input-container">
                            <input id="email" type="text" placeholder="YYYY-DD-MM">
                        </div>
                    </fieldset>

                    <fieldset>
                        <label for="email">Passport Expiration</label>
                        <div class="input-container">
                            <input id="email" type="text" placeholder="YYYY-DD-MM">
                        </div>
                    </fieldset>

                    <fieldset></fieldset>
                </div>

                <div class="fieldset-row">
                    <fieldset class="double-input">
                        <label for="email">Visa Type</label>
                        <div class="input-container">
                            <select name="" id="">
                                <option value="">Business eVisa - 90 days, Multiple Entry</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset class="single-label-fieldset">
                        <span class="single-label">VISA COST<a href="">(USD XX.XX) IMPORTANT INFORMATION</a></span>
                    </fieldset>
                </div>
            </div>

            <div class="card-footer">
                <button class="primary" v-on:click="newApplicant()">Add new applicant</button>
            </div>
        </section>

        <section class="card">
            <div class="card-header">
                <h3>Processing Time and Fee</h3>
            </div>

            <div class="card-body">
                <div class="option-container-row">

                    <div class="option-container">
                        <input type="radio" name="processing" id="processing-1">
                        <label class="description" for="processing-1">
                            <span class="title">Standard Processing</span>
                            <span>USD 20/applicant</span>
                            <span>Est.Delivery: 24 Hours</span>
                        </label>
                    </div>

                    <div class="option-container">
                        <input type="radio" name="processing" id="processing-2">
                        <label class="description" for="processing-2">
                            <span class="title">Rush Processing</span>
                            <span>USD 50/applicant</span>
                            <span>Est.Delivery: 6 Hours</span>
                        </label>
                    </div>

                    <div class="option-container">
                        <input type="radio" name="processing" id="processing-3">
                        <label class="description" for="processing-3">
                            <span class="title">Standard Processing</span>
                            <span>USD 70/applicant</span>
                            <span>Est.Delivery: 30 Minutes</span>
                        </label>
                    </div>

                </div>

                <div class="additional-information-container">
                    <div class="title">Standard Processing</div>

                    <div class="checkbox-container">
                        <fieldset>
                            <input type="checkbox" id="checkbox-a">
                            <label for="checkbox-a"><b>Travel Safely</b> | Register all US travelers with the US Embassy
                                (Add USD 9.95 /person)</label>
                        </fieldset>

                        <fieldset>
                            <input type="checkbox" id="checkbox-b">
                            <label for="checkbox-b"><b>Travel Safely</b> | Register all AU travelers with the US Embassy
                                (Add USD 9.95 /person)</label>
                        </fieldset>
                    </div>
                </div>

                <div class="total-container">
                    <div class="total">
                        <span>Total</span>
                        <select name="" id="">
                            <option value="">Country 1</option>
                        </select>
                        <span class="value">
                            50.00
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="step-navigator">
            <button class="primary">Proceed to payment</button>
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
        name: 'step1',

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
                margin-bottom: 15px;
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
