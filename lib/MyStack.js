import * as sst from "@serverless-stack/resources";
import { StaticSiteErrorOptions } from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /": "api/test/src/lambda.handler",
      },
    });

    const reactApp = new sst.StaticSite(this, "ReactApp", {
      path: "web/react-app",
      buildOutput: "dist",
      buildCommand: "yarn build",
      errorPage: StaticSiteErrorOptions.REDIRECT_TO_INDEX_PAGE,
    });

    const uiStorybook = new sst.StaticSite(this, "UIStorybook", {
      path: "modules/ui",
      buildOutput: "storybook-static",
      buildCommand: "yarn build-storybook",
      errorPage: StaticSiteErrorOptions.REDIRECT_TO_INDEX_PAGE,
    });

    // Show the endpoint in the output
    this.addOutputs({
      "ApiEndpoint": api.url,
      "ReactEndpoint": reactApp.url,
      "StorybookEndpoint": uiStorybook.url
    });
  }
}
