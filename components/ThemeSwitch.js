/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-03-08 16:21:39
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-12 15:08:29
 * @FilePath: /NotionNext/components/ThemeSwitch.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useGlobal } from '@/lib/global'
// import { useState } from 'react'
import { Draggable } from './Draggable'
// import { THEMES } from '@/themes/theme'
// import { useRouter } from 'next/router'
import DarkModeButton from './DarkModeButton'
// import { getQueryParam } from '@/lib/utils'
// import LANGS from '@/lib/lang'
/**
 *
 * @returns 主题切换
 */
const ThemeSwitch = () => {
  const { locale, isDarkMode, toggleDarkMode } = useGlobal()

  //   const currentLang = getQueryParam(router.asPath, 'lang') || lang

  // 修改当前路径url中的 theme 参数
  // 例如 http://localhost?theme=hexo 跳转到 http://localhost?theme=newTheme
  // const onThemeSelectChange = (e) => {
  //   document.ontouchmove = document.ontouchend = document.onmousemove = document.onmouseup = null
  //   setIsLoading(true)
  //   const newTheme = e.target.value
  //   const query = router.query
  //   query.theme = newTheme
  //   router.push({ pathname: router.pathname, query }).then(() => {
  //     setTimeout(() => {
  //       setIsLoading(false)
  //     }, 500);
  //   })
  // }

  // const onLangSelectChange = (e) => {
  //   document.ontouchmove = document.ontouchend = document.onmousemove = document.onmouseup = null
  //   const newLang = e.target.value
  //   changeLang(newLang)
  // }

  return (
    <>
      <Draggable>
        <div
          id="draggableBox"
          style={{ left: '0px', top: '80vh' }}
          className="fixed group space-y-2 overflow-hidden z-50 p-3 flex flex-col items-start dark:text-white bg-white dark:bg-black rounded-xl shadow-lg "
        >
          {/* 深色按钮 */}
          <div className="text-sm flex items-center w-0 group-hover:w-32 transition-all duration-200">
            <DarkModeButton />
            <div
              onClick={toggleDarkMode}
              className="cursor-pointer w-0 group-hover:w-24 transition-all duration-200 overflow-hidden whitespace-nowrap pl-1 h-auto"
            >
              {isDarkMode ? locale.MENU.DARK_MODE : locale.MENU.LIGHT_MODE}
            </div>
          </div>

          {/* 翻译按钮 */}
          {/* <div className="text-sm flex items-center group-hover:w-32 transition-all duration-200">
                    <i className="fa-solid fa-language w-5" />
                    <div className='w-0 group-hover:w-24 transition-all duration-200 overflow-hidden'>
                        <label htmlFor="langSelect" className="sr-only">选择语言：</label>
                        <select id="langSelect" value={lang} onChange={onLangSelectChange} name="themes" className='pl-1 bg-gray-50 dark:bg-black appearance-none outline-none dark:text-white uppercase cursor-pointer'>
                            {Object.keys(LANGS)?.map(t => {
                              return <option key={t} value={t}>{LANGS[t].LOCALE}</option>
                            })}
                        </select>
                    </div>
                </div> */}

          {/* 主题切换按钮 */}
          {/* <div className="text-sm flex items-center group-hover:w-32 transition-all duration-200">
                    <i className="fa-solid fa-palette w-5" />
                    <div className='w-0 group-hover:w-24 transition-all duration-200 overflow-hidden'>
                        <label htmlFor="themeSelect" className="sr-only">选择主题：</label>
                        <select id="themeSelect" value={currentTheme} onChange={onThemeSelectChange} name="themes" className='pl-1 bg-gray-50 dark:bg-black appearance-none outline-none dark:text-white uppercase cursor-pointer'>
                            {THEMES?.map(t => {
                              return <option key={t} value={t}>{t}</option>
                            })}
                        </select>
                    </div>
                </div> */}
        </div>
      </Draggable>
    </>
  )
}

export default ThemeSwitch
