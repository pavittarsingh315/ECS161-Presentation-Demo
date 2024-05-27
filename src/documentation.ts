import swaggerJSDoc, { Options } from "swagger-jsdoc";

const options: Options = {
   swaggerDefinition: {
      info: {
         title: "ECS161 Presentation Demo",
         description: "Demo for ECS161 Presentation",
         version: "1.0.0",
      },
      basePath: "/",
      securityDefinitions: {
         "Access Token": {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "Access token of requesting user",
         },
      },
   },
   apis: ["src/routes/*.ts"],
};

export default swaggerJSDoc(options);
