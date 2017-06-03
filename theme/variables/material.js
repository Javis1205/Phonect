import color from 'color';
import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = 'material';

export default {
  platformStyle,
  platform,
    // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

    // Badge
  badgeBg: '#ED1727',
  get badgeColor(){
    return this.whiteColor
  },
    // New Variable
  badgePadding: (platform === 'ios') ? 3 : 0,

    // Button
  btnFontFamily: (platform === 'ios') ? 'Roboto' : 'Roboto_medium',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

    // CheckBox
  get CheckboxRadius(){
    return this.checkboxSize / 2
  },
  CheckboxBorderWidth: 1,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: (platform === 'ios') ? 0 : 5,
  CheckboxIconSize: (platform === 'ios') ? 18 : 14,
  CheckboxIconMarginTop: (platform === 'ios') ? undefined : 1,
  CheckboxFontSize: (platform === 'ios') ? 21 : 18,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: 'transparent',
  get checkboxSizeLarge(){
    return this.checkboxSize * 1.5
  },

  // Segment
  segmentBackgroundColor: '#3F51B5',
  get segmentActiveBackgroundColor(){
    return this.whiteColor
  },
  get segmentTextColor(){
    return this.whiteColor
  },
  segmentActiveTextColor: '#3F51B5',
  get segmentBorderColor(){
    return this.whiteColor
  },
  segmentBorderColorMain: '#3F51B5',

    // New Variable
  get defaultTextColor() {
    return this.textColor;
  },


  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (platform === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  get cardDefaultBg(){
    return this.whiteColor
  },


      // Color
  brandPrimary: '#0082e7',
  brandInfo: '#5ec9ff',
  brandSuccess: '#00a651',
  brandDanger: '#ed1c24',
  brandWarning: '#f26522',
  brandSidebar: '#252932',


    // Font
  fontFamily: 'Roboto',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


    // Footer
  footerHeight: 55,
  get footerDefaultBg(){
    return this.whiteColor
  },


    // FooterTab
  get tabBarTextColor(){
    return this.blackColor
  },
  tabBarTextSize: (platform === 'ios') ? 14 : 13,
  get activeTab(){
    return this.whiteColor
  },
  sTabBarActiveTextColor: '#007aff',
  get tabBarActiveTextColor(){
    return this.blueColor
  },

  tabActiveBgColor: undefined,

    // Tab
  topTabBarTextSize: 16,
  tabDefaultBg: '#3F51B5',
  get topTabBarTextColor(){
    return this.whiteColor
  },
  get topTabBarActiveTextColor(){
    return this.yellowColor
  },
  get topTabDefaultBg(){
    return this.blueColor
  },
  topTabActiveBgColor: undefined,
  topTabBarBorderColor: 'transparent',
  get topTabBarActiveBorderColor(){
    return this.yellowColor
  },


    // Header
  get toolbarBtnColor(){
    return this.whiteColor
  },
  get toolbarDefaultBg(){
    return this.blueColor
  },

  toolbarHeight: (platform === 'ios') ? 70 : 50,
  toolbarIconSize: (platform === 'ios') ? 20 : 22,
  toolbarSearchIconSize: (platform === 'ios') ? 20 : 23,
  get toolbarInputColor(){
    return this.whiteColor
  },
  searchBarHeight: (platform === 'ios') ? 30 : 40,
  toolbarInverseBg: '#222',
  get toolbarTextColor(){
    return this.whiteColor
  },
  toolbarDefaultBorder: '#3F51B5',
  iosStatusbar: 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hexString();
  },


    // Icon
  iconFamily: 'MaterialIcons',
  iconFontSize: (platform === 'ios') ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: (platform === 'ios') ? 29 : 24,


    // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#c2c2c2';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


    // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: (platform === 'ios') ? 37 : 30,
  lineHeight: (platform === 'ios') ? 20 : 24,


    // List
  listBorderColor: '#464646',
  listDividerBg: '#f4f4f4',
  listItemHeight: 45,
  listItemActiveColor: '#c7eafb',
  listBtnUnderlayColor: 'transparent',

    // Card
  cardBorderColor: '#ccc',

    // Changed Variable
  listItemPadding: (platform === 'ios') ? 10 : 12,

  listNoteColor: '#808080',
  listNoteSize: 13,


    // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


    // Radio Button
  radioBtnSize: (platform === 'ios') ? 25 : 23,
  radioSelectedColorAndroid: '#5067FF',

    // New Variable
  radioBtnLineHeight: (platform === 'ios') ? 29 : 24,

  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hexString();
  },


    // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


    // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  get textColor(){
    return this.blackColor
  },
  textMuteColor: '#9B9B9B',
  get inverseTextColor(){
    return this.whiteColor
  },
  noteFontSize: 14,
  noteTextColor: '#a7a7a7',
  linkTextColor: '#448ccb',

    // Title
  titleFontfamily: (platform === 'ios') ? 'Roboto' : 'Roboto_medium',
  titleFontSize: 19,
  subTitleFontSize: 14,
  get subtitleColor(){
    return this.whiteColor
  },

    // New Variable
  get titleFontColor(){
    return this.whiteColor
  },


    // Other
  borderRadiusBase: 2,
  borderWidth: (1/PixelRatio.getPixelSizeForLayoutSize(1)),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

    // New Variable
  inputGroupRoundedBorderRadius: 30,

  // color theme
  whiteColor: '#FFFFFF',
  grayColor: '#959595',  
  redColor: '#F55123',
  greenColor: '#2FA15C',
  violetColor: '#875BD6',
  blackColor: '#4A4A4A',
  yellowColor: '#FCBA4D',
  blueColor: '#4990E2',
  backgroundColor: '#fff',
};
