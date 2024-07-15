let authToken;

describe('api Authu Token', function () {
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
        .put("/blk/v1/hotels/GRVZA/blocks/26865/allocation")
        .set('Content-Type', 'application/json')
        .set('x-hotelid', 'GRVZA')
        .set('x-app-key', '69594b78-9894-4914-a894-860ca6d056db')
        .set('bypass-routing', 'N')
        .set('Authorization', 'Bearer ' + authToken)
        .send(
            {
                "criteria": {
                  "hotelId": "GRVZA",
                  "blockId": {
                    "type": "BLOCK",
                    "idContext": "OPERA",
                    "id": "26865"
                  },
                  "allocationRoomTypes": [
                    {
                      "allocationGridDates": [
                        {
                          "roomAllocationInfo": [
                            {
                              "inventory": {
                                "onePerson": 5,
                                "forceOverbook": false
                              },
                              "start": "2024-09-20",
                              "end": "2024-09-20"
                            },
                            {
                              "inventory": {
                                "onePerson": 13,
                                "forceOverbook": false
                              },
                              "start": "2024-09-21",
                              "end": "2024-09-21"
                            },
                            {
                              "inventory": {
                                "onePerson": 18,
                                "forceOverbook": false
                              },
                              "start": "2024-09-22",
                              "end": "2024-09-22"
                            },
                            {
                              "inventory": {
                                "onePerson": 23,
                                "forceOverbook": false
                              },
                              "start": "2024-09-23",
                              "end": "2024-09-23"
                            }
                          ],
                          "allocation": "INITIAL"
                        },
                        {
                          "roomAllocationInfo": [
                            {
                              "inventory": {
                                "forceOverbook": false
                              },
                              "rate": {
                                "onePerson": 200,
                                "twoPerson": 200
                              },
                              "start": "2024-09-20",
                              "end": "2024-09-20"
                            },
                            {
                              "inventory": {
                                "forceOverbook": false
                              },
                              "rate": {
                                "onePerson": 200,
                                "twoPerson": 200
                              },
                              "start": "2024-09-21",
                              "end": "2024-09-21"
                            },
                            {
                              "inventory": {
                                "forceOverbook": false
                              },
                              "rate": {
                                "onePerson": 200,
                                "twoPerson": 200
                              },
                              "start": "2024-09-22",
                              "end": "2024-09-22"
                            },
                            {
                              "inventory": {
                                "forceOverbook": false
                              },
                              "rate": {
                                "onePerson": 200,
                                "twoPerson": 200
                              },
                              "start": "2024-09-23",
                              "end": "2024-09-23"
                            }
                          ],
                          "allocation": "RATES"
                        }
                      ],
                      "sellLimitGridDates": [
                        {
                          "start": "2024-09-20",
                          "end": "2024-09-20",
                          "sellLimit": 60
                        },
                        {
                          "start": "2024-09-21",
                          "end": "2024-09-21",
                          "sellLimit": 60
                        },
                        {
                          "start": "2024-09-22",
                          "end": "2024-09-22",
                          "sellLimit": 60
                        },
                        {
                          "start": "2024-09-23",
                          "end": "2024-09-23",
                          "sellLimit": 60
                        }
                      ],
                      "roomType": "OWRN"
                    }
                ],
                "genericRoomType": false
              },
              "links": [],
              "warnings": []
            }
        )
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function (response) {
            console.log(response)
        });
});
