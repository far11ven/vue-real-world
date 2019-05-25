<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light align-items-center">
    <a class="navbar-brand" href="#">
      <span class="header-text">SRC</span>
      <img class="icon" src="../../assets/logo.png">
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#intro">How It Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#merchants">Participating Merchants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#faqs">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-last" href="#contactus">Contact Support</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss">
@import "Header";
</style>
