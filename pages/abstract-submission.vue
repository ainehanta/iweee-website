<template>
  <PageArticle>
    <h4 slot="title">Abstract Submission</h4>
    <div slot="content">
      <p>Write a brief introduction of the research that is understandable to the reader who is completely unknown about the field and the state of the art. Please keep in mind that the perspective readers or listeners of the presentation may be from the social
        science or non-engineering background. Also prepare a representative figure of your presentation.</p>

      <div class="mdl-typography--text-center buttons">
        <div><a href="template.docx" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Download Template (Microsoft Word)</a></div>
        <div><a href="https://easychair.org/conferences/?conf=iweee2017" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Submit Abstract</a></div>
      </div>
    </div>
  </PageArticle>
</template>

<style scoped>
.buttons a {
  margin: 10px;
}
</style>

<script>
export default {
  head: {
    title: 'Abstract Submission'
  }
}
</script>
