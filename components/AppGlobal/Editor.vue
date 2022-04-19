<template>
  <div class="w-full">
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
export default {
  components: {
    EditorContent,
  },
  data: () => ({
    editor: null,
  }),
  mounted() {
    this.editor = new Editor({
      content: '<p>Vamos a escribir algo increíble</p>',
      extensions: [
        StarterKit
      ]
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  }
};
</script>
