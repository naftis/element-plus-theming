<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1" @click="defaultTheme">Default theme</el-menu-item>
    <el-menu-item index="2" @click="darkTheme">Dark theme</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js';

const defaultTheme = () => { console.log('using default theme'); toggleTheme({ scopeName: 'default' }) };
const darkTheme = () => { console.log('using dark theme'); toggleTheme({ scopeName: 'dark' }) };
</script>