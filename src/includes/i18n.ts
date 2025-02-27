// i18n.ts
import { createI18n, I18nOptions } from 'vue-i18n';


const options: I18nOptions = {
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh: {
      main:{
        notice: "LunarCore及其他任何衍生工具都是免费软件，如果你是付费购买的，那你就被骗了，请及时退款并举报。",
        copy: "复制",
        success: "已复制",
        text1: "请输入物品",
        text2: "请输入数量",
        execute: "执行",
        tips: "如果指令未刷新，请重新勾选属性词条",
        version:"工具版本v0.1.2 游戏版本2.0.0"
      },
      menu:{
        main:"控制台代码生成",
        frequently:"常用",
        customrelics:"自定义遗器",
        graduationrelics:"毕业遗器",
        monsterspawning:"怪物生成",
        presetshortcuts:"预设快捷指令",
        lightcones:"光锥",
        item:"物品",
        character:"角色",
        food:"食物",
        avatar:"头像",
        scene:"场景",
        remotecontrol:"远程"


      },
      
      
      ct: {
        title: "LunarCoreWebTools",
        introduce: "适用于LunarCore的web命令生成器",
        start: "开始",
        languageSwitchSuccess:"语言切换成功"
      },
      commuse: {
        item: "物品",
        number: "数量",
      },
      relic:{
        relic:"遗器",
        basestats:"基础属性",
        advancedstats:"进阶属性",
        enhancementlevel:"强化等级",

      }
    },
    en: {
      ct:{
        title: "LunarCoreWebTools-EN",
        introduce: "Web command generator for LunarCore",
        start: "start",
        languageSwitchSuccess:"The language switch is successful"
      },
      main:{
        notice: "LunarCore and any other derivatives are free software, and if you paid for it, you've been scammed, so get your money back and report it in time.",
        copy: "copy",
        success: "copied",
        text1: "Please enter the item",
        test2: "please enter the number",
        execute: "execute",
        tips: "If the command is not refreshed, please check the attribute entry again",
        version:"ToolsVersion:0.1.2 GameVersion:2.0.0"
      },
      menu:{
        main:"Console code generation",
        frequently:"frequently used",
        customrelics:"Custom_relics",
        graduationrelics:"Graduation_relics",
        monsterspawning:"Monster_spawning",
        presetshortcuts:"Preset_shortcuts",
        lightcones:"Light_Cones",
        item:"item",
        character:"character",
        food:"food",
        avatar:"avatar",
        scene:"scene",
        remotecontrol:"Remote_control"


      },
      commuse: {
        item: "item",
        number: "number",
      },
      relic:{
        relic:"relic",
        basestats:"Base Stats",
        advancedstats:"Advanced Stats",
        enhancementlevel:"Enhancement level",

      }

    },
    
  },
};
const i18n = createI18n(options);

export default i18n;

