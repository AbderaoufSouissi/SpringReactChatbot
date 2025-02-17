import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
async function getResponse_1(userInput: string | undefined, init?: EndpointRequestInit_1): Promise<string | undefined> { return client_1.call("ChatbotService", "getResponse", { userInput }, init); }
export { getResponse_1 as getResponse };
