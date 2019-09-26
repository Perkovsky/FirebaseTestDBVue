<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <div class="mt-9 ml-9">
        <v-badge color="red" overlap>
          <template v-slot:badge>
            <span v-if="messages > 0">{{ messages }}</span>
          </template>
          <v-btn color="primary">Some button</v-btn>
        </v-badge>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import * as fb from 'firebase'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    messages: -1
  }),
  methods: {
    sendTestMessage () {
      fb.database().ref('events')
        .child('111-222-333')
        .push({Id:'11111', Messages: 'some text'})
    }
  },
  mounted () {
    const self = this
    // see: firebase -> access (rules)
    fb.database().ref('events').on('value', function (snapshot) {
      self.messages++
    })
  }
}
</script>
