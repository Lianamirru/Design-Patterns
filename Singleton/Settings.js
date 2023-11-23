class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }

    this.settings = {
      mode: "light",
      version: Math.floor(Math.random() * 1000),
    };

    Object.freeze(this.settings);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.settings[key];
  }
}
