

<template>
  <div>
    <h2>Card</h2>
    <ifx-card href="http://google.com" target="_blank" direction="vertical">
      <ifx-card-image position="right" :src="img" alt="" slot="img"></ifx-card-image>

      <ifx-card-overline>Overline</ifx-card-overline>
      <ifx-card-headline>Headline</ifx-card-headline>
      <ifx-card-text>This is a long description in order to test if the text will overflow its container or not. So I am
        typing even more text. And more and more. This is a long description in order to test if the text will overflow
        its container or not. So I am typing even more text. And more and more. This is a long description in order to
        test if the text will overflow its container or not. So I am typing even more text. And more and more. This is a
        long description in order to test if the text will overflow its container or not. So I am typing even more text.
        And more and more.This is a long description in order to test if the text will overflow its container or not. So I
        am typing even more text. And more and more. This is a long description in order to test if the text will overflow
        its container or not. So I am typing even more text. And more and more.This is a long description in order to test
        if the text will overflow its container or not. So I am typing even more text. And more and more. This is a long
        description in order to test if the text will overflow its container or not. So I am typing even more text. And
        more and more.</ifx-card-text>

      <ifx-card-links slot="buttons">
        <ifx-button theme="default">Button</ifx-button>
        <ifx-button theme="danger">Button</ifx-button>
      </ifx-card-links>
    </ifx-card>
    <br />
    <br />

    <ifx-card href="http://google.com" target="_blank" direction="horizontal">
      <ifx-card-image position="right" :src="img" alt="" slot="img"></ifx-card-image>

      <ifx-card-overline>Overline</ifx-card-overline>
      <ifx-card-headline>Headline</ifx-card-headline>
      <ifx-card-text>This is a long description in order to test if the text will overflow its container or not. So I am
        typing even more text. And more and more. This is a long description in order to test if the text will overflow
        its container or not. So I am typing even more text. And more and more. This is a long description in order to
        test if the text will overflow its container or not. So I am typing even more text. And more and more. This is a
        long description in order to test if the text will overflow its container or not. So I am typing even more text.
        And more and more.This is a long description in order to test if the text will overflow its container or not. So I
        am typing even more text. And more and more. This is a long description in order to test if the text will overflow
        its container or not. So I am typing even more text. And more and more.This is a long description in order to test
        if the text will overflow its container or not. So I am typing even more text. And more and more. This is a long
        description in order to test if the text will overflow its container or not. So I am typing even more text. And
        more and more.</ifx-card-text>

      <ifx-card-links slot="buttons">
        <ifx-button theme="default">Button</ifx-button>
        <ifx-button theme="danger">Button</ifx-button>
      </ifx-card-links>
    </ifx-card>
    <br />
    <br />
  </div>
</template>

<script setup>
import img from '../assets/coffee_unsplash1.jpg'

</script>

 
 