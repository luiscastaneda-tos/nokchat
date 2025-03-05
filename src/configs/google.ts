import { google } from "googleapis";

export const spreadHoteles = "1fy9Y54B5yFkY7cDwuR7YgQqngl1F5s5fMcztmyVsu9s";
// const spreadsheetReservas = '1NbCSS7QRoCO2yHEvG9wx8kcHIx4h6ygCfQ-OUrgUbS4'; //Este es para otro

export function connectGoogleApi() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.google_type,
      project_id: process.env.google_project_id,
      private_key_id: process.env.google_private_key_id,
      private_key: process.env.google_private_key
        ? process.env.google_private_key.replace(/\\n/g, "\n")
        : undefined,
      client_email: process.env.google_client_email,
      client_id: process.env.google_client_id,
      universe_domain: process.env.google_universe_domain,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  return { sheets };
}

module.exports = {
  connectGoogleApi,
  spreadHoteles,
};
