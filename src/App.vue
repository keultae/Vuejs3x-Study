<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">Data Binding</router-link> |
    <router-link to="/dataBindingHtml">Data Binding HTML</router-link>|
    <router-link to="/dataBindingInputText">Input Text</router-link>|
    <router-link to="/dataBindingInputNumber">Input Number</router-link>|
    <router-link to="/dataBindingTextarea">Textarea</router-link>|
    <router-link to="/dataBindingSelect">Select</router-link>|
    <router-link to="/dataBindingCheckbox">Checkbox</router-link>|
    <router-link to="/dataBindingCheckbox2">Checkbox2</router-link>|
    <router-link to="/dataBindingRadio">Radio</router-link>|
    <router-link to="/dataBindingAttribute">Attribute</router-link>|
    <router-link to="/dataBindingButton">Button</router-link>|
    <router-link to="/dataBindingClass">Class</router-link>|
    <router-link to="/dataBindingClass2">Class2</router-link>|
    <router-link to="/dataBindingInlineStyle">Inline Style</router-link>|
    <router-link to="/dataBindingList">List</router-link>|
    <router-link to="/dataBindingList2">List2</router-link>|
    <router-link to="/dataBindingVif">v-if</router-link>|
    <router-link to="/eventClick">Event Click</router-link>|
    <router-link to="/eventChange">Event Change</router-link>|
    <router-link to="/eventKey">Event Key</router-link>|
    <router-link to="/computed">Computed</router-link>|
    <router-link to="/watch">Watch</router-link>|
    <router-link to="/nestedComponent">NestedComponent</router-link>|
    <router-link to="/parentComponent">ParentComponent</router-link>|
    <router-link to="/parentComponent2">ParentComponent2</router-link>|
    <router-link to="/parentComponent3">ParentComponent3</router-link>|
    <router-link to="/parentComponent4">ParentComponent4</router-link>|
    <router-link to="/parentComponent5">ParentComponent5</router-link>|
    <router-link to="/parentComponent6">ParentComponent6</router-link>|
    <router-link to="/storeAccess">StoreAccess</router-link>|
    <router-link to="/orgStore">OrgStore</router-link>|
    <router-link to="/orgStoreMap">OrgStoreMap</router-link>|
    <router-link to="/orgNormal">OrgNormal</router-link>|
    <router-link to="/html5Css">Html5Css</router-link>|
    <router-link to="/drapAndDrop">DrapAndDrop</router-link>|
    <router-link to="/useKeultaeTree">UseKeultaeTree</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
