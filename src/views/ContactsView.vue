<template>
  <div class="contacts-page">
    <section id="contact-info">
      <h2>Контактна інформація</h2>
      <address>
        <p><strong>Email:</strong> <a href="mailto:s.tibenkova.zk41.fbmi28@lll.kpi">s.tibenkova.zk41.fbmi28@lll.kpi</a></p>
        <p><strong>Телефон:</strong> <a href="tel:+380508735205">+38 (050) 873-52-05</a></p>
      </address>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contacts-page {
  padding: 20px 0;
}

#contact-info {
  background-color: var(--card-bg);
  padding: clamp(15px, 5vw, 30px); 
  border: 2px solid var(--primary);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  max-width: 600px;
  margin: 0 auto;
}

address {
  font-style: normal;
  margin-top: 15px;
}

address p {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

address a {
  color: var(--primary);
  text-decoration: none;
  word-break: break-all;
}

address a:hover {
  text-decoration: underline;
}
</style>