export class App {
  content = '<p>Start writing your essay</p>';

  airMode = false;

  options = {
    airMode: this.airMode,
    height: 100
  };

  changeMode() {
    console.log('change aire mode', this.airMode);
    this.options.airMode = this.airMode;
    this.options = JSON.parse(JSON.stringify(this.options));
  }
}
