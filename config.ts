import { extendDeploymentConfig, loadEncryptedConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_kw", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-app-kw-content",
  content_tag_latest: "1.4.11",
};

config.android = {
  app_id:'international.idems.plh_kids_kw',
  app_name:'تطبيق دايم',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
  zoom_enabled: true
};

config.ios = {
  app_id:'international.idems.plh_kids_kw',
  app_name:'تطبيق دايم',
  zoom_enabled: true
};

config.google_drive.sheets_folder_ids = [
  "19wSspWYMbRc75een-kS0q0aq24--75u8", // library_app_menu
  "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", // library_field_values
  "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", // kids_global
  "1pzgmUypvXYJS_ZcC1WmiHM5f4y2QYKsx" // kids_kw
];

config.google_drive.assets_folder_ids = [
  "1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9", // kids_global
  "1d7Xf_k-kCiQsTGlpSAJnVLTTX5zTVvnp" // kids_kw
];

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// To reduce app size, exclude png images in comics folder
config.app_data.assets_filter_function = (fileEntry) =>
  !(fileEntry.relativePath.startsWith("images/comics") && fileEntry.relativePath.endsWith(".png")) && !fileEntry.relativePath.includes("video")

config.web.favicon_asset = "images/logos/favicon.png";

config.api.db_name = "plh_kids_kw";

config.app_data.output_path = "./app_data";

config.firebase = {
  config: loadEncryptedConfig('firebase.json'),
  crashlytics: { enabled: false },
}

config.auth = {
  provider: 'firebase',
}

config.app_config.APP_LANGUAGES.default = "kw_ar";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "تطبيق دايم";
config.app_config.APP_HEADER_DEFAULTS.title = "تطبيق دايم";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.app_config.APP_FOOTER_DEFAULTS.background = "none";
config.app_config.APP_LANGUAGES_META = { kw_ar: { rtl: true } };
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from Dayem App";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Dayem App";
config.app_config.APP_THEMES.available = ["plh_kids_kw"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_kw";

export default config;
