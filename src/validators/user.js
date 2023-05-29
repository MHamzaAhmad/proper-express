const userSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
    },
    password: {
      type: "string",
      minLength: 8,
    },
    role: {
      type: "string",
      enum: ["user", "admin"],
    },
  },
  if: {
    properties: { __httpMethod: { enum: ["PATCH"] } },
  },
  then: {
    required: [],
  },
  else: {
    required: ["email", "password"],
  },
};

export default userSchema;
