/** @type {import ("drizzle-kit").Config} */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_vS7RfmBuxe2F@ep-delicate-resonance-a8h5tkss-pooler.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require&channel_binding=require",
  },
};
