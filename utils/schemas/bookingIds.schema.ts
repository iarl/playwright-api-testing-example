export const bookingIdsSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "array",
    "items": [
      {
        "type": "object",
        "properties": {
          "bookingid": {
            "type": "integer"
          }
        }
      }
    ]
  }