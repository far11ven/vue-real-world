<template>
  <div class="container">
    <div class="box-container">
      <div id="welcome-msg" class="welcome-container">
        <div class="welcome-top">Welcome To FUT</div>

        <div class="bottom">
          <hr>
          <p>{{ text }}</p>
          <button
            class="btn btn-trial"
            type="button"
            data-toggle="modal"
            data-target="#cookieConfirmationModal"
          >Start Trial</button>
          <div class="bottom-footer">{{ text }}</div>
        </div>
      </div>
      <div id="intro" class="collapsible-container" @click="traceToggle(1,'section1')">
        <div class="top">
          <div class="top-left-element">How It Works</div>
          <div
            class="top-right-element"
            :class="[ section1Flag === 'opn' ? 'open-panel' : 'close-panel' ]"
          ></div>
        </div>

        <div v-show="requestItems1.includes(1)" class="bottom">
          <hr>
          <p>{{ text }}</p>
        </div>
      </div>
      <div id="merchants" class="collapsible-container" @click="traceToggle(2,'section2')">
        <div class="top">
          <div class="top-left-element">Participating Merchants</div>
          <div
            class="top-right-element"
            :class="[ section2Flag === 'opn' ? 'open-panel' : 'close-panel' ]"
          ></div>
        </div>

        <div v-show="requestItems2.includes(2)" class="bottom">
          <hr>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </div>
      </div>
      <div id="faqs" class="collapsible-container" @click="traceToggle(3,'section3')">
        <div class="top">
          <div class="top-left-element">FAQs</div>
          <div
            class="top-right-element"
            :class="[ section3Flag === 'opn' ? 'open-panel' : 'close-panel' ]"
          ></div>
        </div>

        <div v-show="requestItems3.includes(3)" class="bottom">
          <hr>
          <p>{{ text }}</p>
        </div>
      </div>
      <div id="contactus" class="collapsible-container" @click="traceToggle(4,'section4')">
        <div class="top">
          <div class="top-left-element">Contact Support</div>
          <div
            class="top-right-element"
            :class="[ section4Flag === 'opn' ? 'open-panel' : 'close-panel' ]"
          ></div>
        </div>

        <div v-show="requestItems4.includes(4)" class="bottom">
          <hr>
          <p>{{ text }}</p>
        </div>
      </div>

      <!--StartUp Modal Window-->
      <!--StartUp Modal Window-->
      <div
        id="cookieConfirmationModal"
        class="modal fade in"
        tabindex="-1"
        role="dialog"
        aria-labelledby="confirmationModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content center-component">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmationModal">
                Downgram is also available on Google
                playstore!
              </h5>
            </div>
            <div class="modal-body" style="display:block;">
              <button type="button" class="btn btn-trial">Add Cookie</button>
            </div>
            <div class="modal-body">
              <a href="#" data-dismiss="modal">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      requestItems1: [0],
      requestItems2: [0],
      requestItems3: [0],
      requestItems4: [0],
      section1Flag: "cls",
      section2Flag: "cls",
      section3Flag: "cls",
      section4Flag: "cls",
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    };
  },

  methods: {
    startTrialConfirmation() {},
    traceToggle(index, requestor) {
      if (requestor === "text") {
        if (this.requestItems.includes(index)) {
          this.requestItems.splice(this.requestItems.indexOf(index), 1);
          this.open = "opn";
        } else {
          this.requestItems.push(index);
          this.open = "cls";
        }
      } else if (requestor === "section1") {
        if (this.requestItems1.includes(index)) {
          this.requestItems1.splice(this.requestItems1.indexOf(index), 1);
          this.section1Flag = "cls";
        } else {
          this.requestItems1.push(index);
          this.section1Flag = "opn";
        }
      } else if (requestor === "section2") {
        if (this.requestItems2.includes(index)) {
          this.requestItems2.splice(this.requestItems2.indexOf(index), 1);
          this.section2Flag = "cls";
        } else {
          this.requestItems2.push(index);
          this.section2Flag = "opn";
        }
      } else if (requestor === "section3") {
        if (this.requestItems3.includes(index)) {
          this.requestItems3.splice(this.requestItems3.indexOf(index), 1);
          this.section3Flag = "cls";
        } else {
          this.requestItems3.push(index);
          this.section3Flag = "opn";
        }
      } else if (requestor === "section4") {
        if (this.requestItems4.includes(index)) {
          this.requestItems4.splice(this.requestItems4.indexOf(index), 1);
          this.section4Flag = "cls";
        } else {
          this.requestItems4.push(index);
          this.section4Flag = "opn";
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "Home";
</style>
