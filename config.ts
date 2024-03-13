import { extendDeploymentConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_ph", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-kids-app-ph-content.git",
  content_tag_latest: "1.1.1",
};


config.google_drive.sheets_folder_ids = [];
config.google_drive.assets_folder_ids = [];

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// Exclude picture books assets to reduce app size for formative workshop
config.app_data.assets_filter_function = (fileEntry) => !fileEntry.relativePath.includes("books")

config.api.db_name = "plh_kids_ph";

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ParentApp for Kids PH";
config.app_config.APP_HEADER_DEFAULTS.title = "ParentApp for Kids PH";
config.app_config.APP_HEADER_DEFAULTS.collapse = true;
config.app_config.APP_HEADER_DEFAULTS.variant ="compact";
config.app_config.APP_HEADER_DEFAULTS.colour = "none";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from ParentApp for Kids PH";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from ParentApp for Kids PH";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.error_logging = { dsn: "https://ca84802206d44c49b553c7dfc68b5e0e@app.glitchtip.com/6093"};


export default config;
