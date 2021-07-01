import { defineStore } from 'pinia';

export abstract class Skin {
  //主题模式 黑暗 默认 亮色
  public mode: Mode = Mode.default;
  abstract getThemeStyle(): String;
  constructor(mode: Mode) {
    this.mode = mode;
  }
}

export enum Mode {
  dark,
  default,
  light
}

export class ThemeSkin extends Skin {

  private name: String | null;
  // header 颜色
  private headerColor: String;
  // footer 颜色
  private footerColor: String;
  // 主色  按钮背景 播放进度背景色等
  private mainColor: String;
  // header 背景图
  private headerBgImage: String | null;

  constructor(mode: Mode, name: String | null, headerColor: String, footerColor: String, headerBgImage: String | null) {
    super(mode);
    this.name = name;
    this.headerColor = headerColor;
    //黑暗、亮色模式取官方红
    this.mainColor = mode == Mode.default ? headerColor : '#EC4141';
    this.footerColor = footerColor;
    this.headerBgImage = headerBgImage;
  }
  getThemeStyle(): String {
    return `--theme-header-color: ${this.headerColor};
    --theme-header-text-color: ${this.mode == Mode.light ? '#000000' : '#FFFFFF'};
    --theme-footer-color: ${this.mode == Mode.dark ? this.headerColor : '#FFFFFF'};
    --theme-main-color: ${this.mainColor};
    --theme-bg-color: ${this.mode == Mode.dark ? '#2B2B2B' : '#FFFFFF'};
    --theme-text-color: ${this.mode == Mode.dark ? '#d6d6d6' : '#000000'};`
  }
}

export class ColorSkin extends ThemeSkin {
  constructor(mode: Mode, headerColor: String) {
    super(mode, null, headerColor, "#FFFFFF", null,);
  }
}


interface ThemeState {
  themes: Array<ThemeSkin>,
  colors: Array<ColorSkin>
  // 当前使用皮肤
  currentSkin: Skin | null,
  // customColor: '',
}

export const useThemeStore = defineStore({
  id: 'theme',
  state: (): ThemeState => ({
    themes: [
      new ThemeSkin(Mode.dark, "酷炫黑", "#212124", "#212124", null),
      new ThemeSkin(Mode.default, "官方红", "#EC4141", "#EC4141", null),
      new ThemeSkin(Mode.default, "可爱粉", "#F995BE", "#F995BE", null),
      new ThemeSkin(Mode.default, "天际蓝", "#66B7FF", "#66B7FF", null),
      new ThemeSkin(Mode.default, "清新绿", "#5DC78A", "#5DC78A", null),
      new ThemeSkin(Mode.default, "土豪金", "#FAAC62", "#FAAC62", null)
    ],
    colors: [
      new ColorSkin(Mode.light, "#F5F5F5",),
      new ColorSkin(Mode.default, "#FF5C8A",),
      new ColorSkin(Mode.default, "#FF7A9E",),
      new ColorSkin(Mode.default, "#717FF9",)
    ],
    currentSkin: null
  }),
  getters: {
    themeClass() {
      this.currentSkin ? this.currentSkin.getThemeStyle() : ""
    }
  },
  actions: {
    setSkin(skin: Skin) {
      if (skin) {
        this.currentSkin = skin
        document.body.style.cssText = skin.getThemeStyle().toString();
        if (skin.mode == Mode.dark) {
          document.body.classList.add('dark')
        } else {
          document.body.classList.remove('dark')
        }
      }
    }
  }
})