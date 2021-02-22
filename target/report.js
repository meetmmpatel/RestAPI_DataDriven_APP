$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GET_ProductAPI.feature");
formatter.feature({
  "line": 2,
  "name": "Test Cases for Products API with GET http method only",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GET"
    },
    {
      "line": 1,
      "name": "@Product_API"
    }
  ]
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "# Basics Happy path such as Status code, Response validation and couple of other tests"
    }
  ],
  "line": 10,
  "name": "Test case for Product API returning status code 200.",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-returning-status-code-200.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "System call product API endpoint with valid request",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "System should verify HTTP code with assertion methods",
  "keyword": "And "
});
formatter.match({
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request()"
});
formatter.result({
  "duration": 3031725056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 25986024,
  "status": "passed"
});
formatter.match({
  "location": "GET_Products.system_should_verify_HTTP_code_with_assertion_methods()"
});
formatter.result({
  "duration": 759761,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Test case for Product API returning valid response",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-returning-valid-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "System call product API endpoint with valid request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "System should validate API response such as code and data",
  "keyword": "And "
});
formatter.match({
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request()"
});
formatter.result({
  "duration": 1342297232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 705438,
  "status": "passed"
});
formatter.match({
  "location": "GET_Products.system_should_validate_API_response_such_as_code_and_data()"
});
formatter.result({
  "duration": 475824613,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "Test case for Product API pages and other validation",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-pages-and-other-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "System call product API endpoint with valid request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "System should validate number of pages in product api response",
  "keyword": "And "
});
formatter.match({
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request()"
});
formatter.result({
  "duration": 1286635924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 528312,
  "status": "passed"
});
formatter.match({
  "location": "GET_Products.system_should_validate_number_of_pages_in_product_api_response()"
});
formatter.result({
  "duration": 23302173,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Test case for Product API with given specific ID and related Information",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "System call product API endpoint with valid request and given \u003cID\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "System should validate \u003cID\u003e, \"\u003cName\u003e\" for given api response",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;",
  "rows": [
    {
      "cells": [
        "ID",
        "Name"
      ],
      "line": 32,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;;1"
    },
    {
      "cells": [
        "6",
        "Rustic Rubber Gloves"
      ],
      "line": 33,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;;2"
    },
    {
      "cells": [
        "8",
        "Synergistic Granite Table"
      ],
      "line": 34,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;;3"
    },
    {
      "cells": [
        "12",
        "Awesome Marble Wallet"
      ],
      "line": 35,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "Test case for Product API with given specific ID and related Information",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Product_API"
    },
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "System call product API endpoint with valid request and given 6",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "System should validate 6, \"Rustic Rubber Gloves\" for given api response",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 62
    }
  ],
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request_and_given(int)"
});
formatter.result({
  "duration": 1363515925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 439445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 23
    },
    {
      "val": "Rustic Rubber Gloves",
      "offset": 27
    }
  ],
  "location": "GET_Products.system_should_validate_for_given_api_response(int,String)"
});
formatter.result({
  "duration": 38400254,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 34,
  "name": "Test case for Product API with given specific ID and related Information",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Product_API"
    },
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "System call product API endpoint with valid request and given 8",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "System should validate 8, \"Synergistic Granite Table\" for given api response",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 62
    }
  ],
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request_and_given(int)"
});
formatter.result({
  "duration": 1307919697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 441158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 23
    },
    {
      "val": "Synergistic Granite Table",
      "offset": 27
    }
  ],
  "location": "GET_Products.system_should_validate_for_given_api_response(int,String)"
});
formatter.result({
  "duration": 23304507,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "Test case for Product API with given specific ID and related Information",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-product-api-with-given-specific-id-and-related-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Product_API"
    },
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "System call product API endpoint with valid request and given 12",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "System should validate 12, \"Awesome Marble Wallet\" for given api response",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 62
    }
  ],
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request_and_given(int)"
});
formatter.result({
  "duration": 1315034436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 382848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 23
    },
    {
      "val": "Awesome Marble Wallet",
      "offset": 28
    }
  ],
  "location": "GET_Products.system_should_validate_for_given_api_response(int,String)"
});
formatter.result({
  "duration": 17374251,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 37,
      "value": "#      Possible Error cases"
    }
  ],
  "line": 38,
  "name": "Test case for passing wrong/Invalid Product API url",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-passing-wrong/invalid-product-api-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "System call product API endpoint with invalid URL",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "System should get back HTTP Status code 404 in response.",
  "keyword": "Then "
});
formatter.match({
  "location": "GET_Products.system_call_product_API_endpoint_with_invalid_URL()"
});
formatter.result({
  "duration": 1288122692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 1538674,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Test case for Invalid ID for Product API (should return 404)",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "System call product API endpoint with valid request and given \u003cID\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "System validate response with 404 code inside api response.",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);",
  "rows": [
    {
      "cells": [
        "ID"
      ],
      "line": 48,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;1"
    },
    {
      "cells": [
        "1005"
      ],
      "line": 49,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;2"
    },
    {
      "cells": [
        "2006"
      ],
      "line": 50,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;3"
    },
    {
      "cells": [
        "2021"
      ],
      "line": 51,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;4"
    },
    {
      "cells": [
        "1329"
      ],
      "line": 52,
      "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 49,
  "name": "Test case for Invalid ID for Product API (should return 404)",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Product_API"
    },
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "System call product API endpoint with valid request and given 1005",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "System validate response with 404 code inside api response.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1005",
      "offset": 62
    }
  ],
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request_and_given(int)"
});
formatter.result({
  "duration": 1278721196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 460666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 30
    }
  ],
  "location": "GET_Products.system_validate_response_with_code_inside_api_response(int)"
});
formatter.result({
  "duration": 9214905,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 50,
  "name": "Test case for Invalid ID for Product API (should return 404)",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Product_API"
    },
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "System call product API endpoint with valid request and given 2006",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "System validate response with 404 code inside api response.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2006",
      "offset": 62
    }
  ],
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request_and_given(int)"
});
formatter.result({
  "duration": 1333105933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 1098885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 30
    }
  ],
  "location": "GET_Products.system_validate_response_with_code_inside_api_response(int)"
});
formatter.result({
  "duration": 6583604,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 51,
  "name": "Test case for Invalid ID for Product API (should return 404)",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Product_API"
    },
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "System call product API endpoint with valid request and given 2021",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "System validate response with 404 code inside api response.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 62
    }
  ],
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request_and_given(int)"
});
formatter.result({
  "duration": 1306587066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 383968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 30
    }
  ],
  "location": "GET_Products.system_validate_response_with_code_inside_api_response(int)"
});
formatter.result({
  "duration": 8173099,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#  Will work line before each method... will always run before every scenario"
    }
  ],
  "line": 5,
  "name": "Product API GET Method is working as expected.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 52,
  "name": "Test case for Invalid ID for Product API (should return 404)",
  "description": "",
  "id": "test-cases-for-products-api-with-get-http-method-only;test-case-for-invalid-id-for-product-api-(should-return-404);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Product_API"
    },
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "System call product API endpoint with valid request and given 1329",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "System should get back HTTP Status code 200 in response.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "System validate response with 404 code inside api response.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1329",
      "offset": 62
    }
  ],
  "location": "GET_Products.system_call_product_API_endpoint_with_valid_request_and_given(int)"
});
formatter.result({
  "duration": 1325641218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "GET_Products.system_should_get_back_HTTP_Status_code_in_response(int)"
});
formatter.result({
  "duration": 337011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 30
    }
  ],
  "location": "GET_Products.system_validate_response_with_code_inside_api_response(int)"
});
formatter.result({
  "duration": 7226298,
  "status": "passed"
});
formatter.uri("User-API.feature");
formatter.feature({
  "line": 2,
  "name": "User API testing",
  "description": "",
  "id": "user-api-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GET"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "Assuming User API is working as expected",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify the User API GET request and response call",
  "description": "",
  "id": "user-api-testing;verify-the-user-api-get-request-and-response-call",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "We have valid User API url address",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "System call User API with GET request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "System should get 200 HTTP status code in  response",
  "keyword": "Then "
});
formatter.match({
  "location": "StepClass.we_have_valid_User_API_url_address()"
});
formatter.result({
  "duration": 1224392,
  "status": "passed"
});
formatter.match({
  "location": "StepClass.system_call_User_API_with_GET_request()"
});
formatter.result({
  "duration": 1299711861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "StepClass.system_should_get_HTTP_status_code_in_response(int)"
});
formatter.result({
  "duration": 84559,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Assuming User API is working as expected",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the number of pages in User API response",
  "description": "",
  "id": "user-api-testing;verify-the-number-of-pages-in-user-api-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "We have valid User API url address",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "We are  getting valid response with number of pages",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "System call User API with GET request with page number as parameter",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Response should contain page number requested with User api url.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepClass.we_have_valid_User_API_url_address()"
});
formatter.result({
  "duration": 22381,
  "status": "passed"
});
formatter.match({
  "location": "StepClass.we_are_getting_valid_response_with_number_of_pages()"
});
formatter.result({
  "duration": 1301799133,
  "status": "passed"
});
formatter.match({
  "location": "StepClass.system_call_User_API_with_GET_request_with_page_number_as_parameter()"
});
formatter.result({
  "duration": 1307377440,
  "status": "passed"
});
formatter.match({
  "location": "StepClass.response_should_contain_page_number_requested_with_User_api_url()"
});
formatter.result({
  "duration": 1301515852,
  "status": "passed"
});
});