let authToken;

describe('api Auth Token', function () {
  it('GET api test', async function ({ supertest }) {
    await supertest
      .request("https://ihgcu2ua.hospitality-api.us-ashburn-1.ocs.oc-test.com")
      .post("/oauth/v1/tokens")
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('x-app-key', '69594b78-9894-4914-a894-860ca6d056db')
      .set('Authorization', 'Basic Og==')
      .send({
        username: 'IHGSIT_COGNIZANT',
        password: 'UoHkm74M58C1#f16F3wys3U4',
        grant_type: 'password'
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
        authToken = response._body.access_token;
      });
  });
});

it('Put api test after login', async function ({ supertest }) {
  await supertest
    .request("https://ihgcu2ua.hospitality-api.us-ashburn-1.ocs.oc-test.com")
    .put("/blk/v1/hotels/GRVZA/blocks/29311")
    .set('Content-Type', 'application/json')
    .set('x-hotelid', 'GRVZA')
    .set('x-app-key', '69594b78-9894-4914-a894-860ca6d056db')
    .set('bypass-routing', 'N')
    .set('Authorization', 'Bearer ' + authToken)
    .send({
      "blocks": {
        "responseInstructions": {
          "confirmationOnly": true
        },
        "blockIdList": {
          "type": "Block",
          "idContext": "OPERA",
          "id": "29311"
        },
        "blockDetails": {
          "blockCode": "Z43",
          "blockName": "Demo block 3",
          "timeSpan": {
            "startDate": "2024-10-20",
            "endDate": "2024-10-25"
          },
          "blockDates": {
            "startDate": "2024-10-20",
            "endDate": "2024-10-25"
          },
          "shoulderDates": "",
          "blockStatus": {
            "bookingStatus": {
              "status": {
                "code": "TEN"
              }
            }
          },
          "reservationType": {
            "reservationType": "INN"
          },
          "marketCode": {
            "marketCode": "Z"
          },
          "sourceOfSale": {
            "sourceCode": {
              "sourceCode": "CRS"
            }
          },
          "reservationMethod": "",
          "status": "O",
          "paymentMethod": "",
          "currencyCode": "USD",
          "blockClassification": "RegularBooking",
          "synchronized": false,
          "cateringOnlyBlock": false,
          "flexibleDates": false,
          "autoloadContractGrid": true,
          "allowRateOverride": false,
          "manualCutOff": false,
          "wholesaleBlock": false,
          "controlBlockLocally": true
        },
        "blockOwners": {
          "owner": [
            {
              "ownership": "Block",
              "hotel": {
                "code": "GRVZA"
              },
              "ownerCode": "ALL",
              "profileId": {
                "type": "Profile",
                "idContext": "OPERA",
                "id": 35220
              },
              "name": {
                "givenName": "Default Owner",
                "surname": "IHGSIT"
              },
              "email": {
                "email": ""
              },
              "primary": true
            },
            {
              "ownership": "Rooms",
              "hotel": {
                "code": "GRVZA"
              },
              "ownerCode": "ALL",
              "profileId": {
                "type": "Profile",
                "idContext": "OPERA",
                "id": 35220
              },
              "name": {
                "givenName": "Default Owner",
                "surname": "IHGSIT"
              },
              "email": {
                "email": ""
              },
              "primary": true
            },
            {
              "ownership": "Catering",
              "hotel": {
                "code": "GRVZA"
              },
              "ownerCode": "ALL",
              "profileId": {
                "type": "Profile",
                "idContext": "OPERA",
                "id": 35220
              },
              "name": {
                "givenName": "Default Owner",
                "surname": "IHGSIT"
              },
              "email": {
                "email": ""
              },
              "primary": true
            }
          ],
          "lockBlockOwners": false,
          "lockRoomsOwners": false,
          "lockCateringOwners": false
        },
        "reservationDetails": {
          "breakfast": {
            "breakfastIncluded": false,
            "price": ""
          },
          "porterage": {
            "porterageIncluded": false,
            "price": ""
          },
          "cutOffDays": 0,
          "updateGridOnCutoffChange": false,
          "elastic": 2,
          "suppressRate": false,
          "printRate": true,
          "rateGuarantee": false,
          "housing": true,
          "guaranteeRequired": false,
          "controlBlockLocally": true
        },
        "catering": {
          "cateringStatus": {
            "bookingStatus": {
              "status": ""
            }
          },
          "eventAttendees": {
            "attendeesGuaranteed": false
          },
          "trackChanges": false,
          "eventOrder": {
            "distributed": false
          },
          "pkgsTmplt": false,
          "overrideEventsProcessingWarnings": false
        },
        "blockSecurity": {
          "securedFromDIDisplayYn": false,
          "securedFromDIDisplay": false,
          "securedFromDIdisplayYn": false,
          "allDescriptionDDSecured": false,
          "allDescriptionDDSecuredYn": false,
          "ratesSecuredfromGNRYn": false,
          "ratesSecuredfromGNR": false,
          "ratesSecuredfromAllDisplays": false,
          "ratesSecuredfromAllDisplaysYn": false,
          "housingInformationSecured": false,
          "housingInformationSecuredYn": false,
          "returnOneDayAtTimeYn": false,
          "commissionableYn": false
        },
        "externalAttributes": {
          "eventType": "Convention",
          "rollEndDate": false
        },
        "hotelId": "GRVZA",
        "markAsRecentlyAccessed": true
      }
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .then(function (response) {
    // console.log(response);
    });
});

it('Get api test after login', async function ({ supertest }) {
  await supertest
    .request("https://ihgcu2ua.hospitality-api.us-ashburn-1.ocs.oc-test.com")
    .get("/blk/v1/hotels/GRVZA/blocks/29311")
    .set('Content-Type', 'application/json')
    .set('x-hotelid', 'GRVZA')
    .set('x-app-key', '69594b78-9894-4914-a894-860ca6d056db')
    .set('bypass-routing', 'N')
    .set('Authorization', 'Bearer ' + authToken)
    .expect(200)
    .expect('Content-Type', /json/)
    .then(function (response) {
      console.log(response.text);
      console.log("Status : The Block was Updated Sucessfully.")
    });
});


